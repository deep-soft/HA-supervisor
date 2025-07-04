"""Init file for Supervisor add-on Git."""

import asyncio
import functools as ft
import logging
from pathlib import Path

import git

from ..const import ATTR_BRANCH, ATTR_URL, URL_HASSIO_ADDONS
from ..coresys import CoreSys, CoreSysAttributes
from ..exceptions import StoreGitCloneError, StoreGitError, StoreJobError
from ..jobs.decorator import Job, JobCondition
from ..resolution.const import ContextType, IssueType, SuggestionType
from ..utils import remove_folder
from .utils import get_hash_from_repository
from .validate import RE_REPOSITORY

_LOGGER: logging.Logger = logging.getLogger(__name__)


class GitRepo(CoreSysAttributes):
    """Manage Add-on Git repository."""

    builtin: bool

    def __init__(self, coresys: CoreSys, path: Path, url: str):
        """Initialize Git base wrapper."""
        self.coresys: CoreSys = coresys
        self.repo: git.Repo | None = None
        self.path: Path = path
        self.lock: asyncio.Lock = asyncio.Lock()

        if not (repository := RE_REPOSITORY.match(url)):
            raise ValueError(f"Invalid url provided for repository GitRepo: {url}")
        self.data: dict[str, str] = repository.groupdict()

    def __repr__(self) -> str:
        """Return internal representation."""
        return f"<Git: {self.path!s}>"

    @property
    def url(self) -> str:
        """Return repository URL."""
        return self.data[ATTR_URL]

    @property
    def branch(self) -> str:
        """Return repository branch."""
        return self.data[ATTR_BRANCH]

    async def load(self) -> None:
        """Init Git add-on repository."""
        if not await self.sys_run_in_executor((self.path / ".git").is_dir):
            await self.clone()
            return

        # Load repository
        async with self.lock:
            try:
                _LOGGER.info("Loading add-on %s repository", self.path)
                self.repo = await self.sys_run_in_executor(git.Repo, str(self.path))

            except (
                git.InvalidGitRepositoryError,
                git.NoSuchPathError,
                git.CommandError,
                UnicodeDecodeError,
            ) as err:
                _LOGGER.error("Can't load %s", self.path)
                raise StoreGitError() from err

        # Fix possible corruption
        async with self.lock:
            try:
                _LOGGER.debug("Integrity check add-on %s repository", self.path)
                await self.sys_run_in_executor(self.repo.git.execute, ["git", "fsck"])
            except git.CommandError as err:
                _LOGGER.error("Integrity check on %s failed: %s.", self.path, err)
                raise StoreGitError() from err

    @Job(
        name="git_repo_clone",
        conditions=[JobCondition.FREE_SPACE, JobCondition.INTERNET_SYSTEM],
        on_condition=StoreJobError,
    )
    async def clone(self) -> None:
        """Clone git add-on repository."""
        async with self.lock:
            git_args = {
                attribute: value
                for attribute, value in (
                    ("recursive", True),
                    ("branch", self.branch),
                    ("depth", 1),
                    ("shallow-submodules", True),
                )
                if value is not None
            }

            try:
                _LOGGER.info(
                    "Cloning add-on %s repository from %s", self.path, self.url
                )
                self.repo = await self.sys_run_in_executor(
                    ft.partial(
                        git.Repo.clone_from,
                        self.url,
                        str(self.path),
                        **git_args,  # type: ignore
                    )
                )

            except (
                git.InvalidGitRepositoryError,
                git.NoSuchPathError,
                git.CommandError,
                UnicodeDecodeError,
            ) as err:
                _LOGGER.error("Can't clone %s repository: %s.", self.url, err)
                raise StoreGitCloneError() from err

    @Job(
        name="git_repo_pull",
        conditions=[JobCondition.FREE_SPACE, JobCondition.INTERNET_SYSTEM],
        on_condition=StoreJobError,
    )
    async def pull(self) -> bool:
        """Pull Git add-on repo."""
        if self.lock.locked():
            _LOGGER.warning("There is already a task in progress")
            return False
        if self.repo is None:
            _LOGGER.warning("No valid repository for %s", self.url)
            return False

        async with self.lock:
            _LOGGER.info("Update add-on %s repository from %s", self.path, self.url)

            try:
                git_cmd = git.Git()
                await self.sys_run_in_executor(git_cmd.ls_remote, "--heads", self.url)
            except git.CommandError as err:
                _LOGGER.warning("Wasn't able to update %s repo: %s.", self.url, err)
                raise StoreGitError() from err

            try:
                branch = self.repo.active_branch.name

                # Download data
                await self.sys_run_in_executor(
                    ft.partial(
                        self.repo.remotes.origin.fetch,
                        **{"update-shallow": True, "depth": 1},  # type: ignore
                    )
                )

                if changed := self.repo.commit(branch) != self.repo.commit(
                    f"origin/{branch}"
                ):
                    # Jump on top of that
                    await self.sys_run_in_executor(
                        ft.partial(self.repo.git.reset, f"origin/{branch}", hard=True)
                    )

                # Update submodules
                await self.sys_run_in_executor(
                    ft.partial(
                        self.repo.git.submodule,
                        "update",
                        "--init",
                        "--recursive",
                        "--depth",
                        "1",
                    )
                )

                # Cleanup old data
                await self.sys_run_in_executor(ft.partial(self.repo.git.clean, "-xdf"))

                return changed

            except (
                git.InvalidGitRepositoryError,
                git.NoSuchPathError,
                git.CommandError,
                ValueError,
                AssertionError,
                UnicodeDecodeError,
            ) as err:
                _LOGGER.error("Can't update %s repo: %s.", self.url, err)
                self.sys_resolution.create_issue(
                    IssueType.CORRUPT_REPOSITORY,
                    ContextType.STORE,
                    reference=self.path.stem,
                    suggestions=[SuggestionType.EXECUTE_RESET],
                )
                raise StoreGitError() from err

    async def _remove(self):
        """Remove a repository."""
        if self.lock.locked():
            _LOGGER.warning("There is already a task in progress")
            return

        def _remove_git_dir(path: Path) -> None:
            if not path.is_dir():
                return
            remove_folder(path)

        async with self.lock:
            await self.sys_run_in_executor(_remove_git_dir, self.path)


class GitRepoHassIO(GitRepo):
    """Supervisor add-ons repository."""

    builtin: bool = False

    def __init__(self, coresys):
        """Initialize Git Supervisor add-on repository."""
        super().__init__(coresys, coresys.config.path_addons_core, URL_HASSIO_ADDONS)


class GitRepoCustom(GitRepo):
    """Custom add-ons repository."""

    builtin: bool = False

    def __init__(self, coresys, url):
        """Initialize custom Git Supervisor addo-n repository."""
        path = Path(coresys.config.path_addons_git, get_hash_from_repository(url))

        super().__init__(coresys, path, url)

    async def remove(self):
        """Remove a custom repository."""
        _LOGGER.info("Removing custom add-on repository %s", self.url)
        await self._remove()
