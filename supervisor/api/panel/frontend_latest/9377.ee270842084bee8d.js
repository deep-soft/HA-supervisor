/*! For license information please see 9377.ee270842084bee8d.js.LICENSE.txt */
export const ids=["9377"];export const modules={24756:function(t,i,e){e.r(i),e.d(i,{HassioAddonStore:()=>b});var o=e("44249"),a=e("72621"),s=(e("39527"),e("99790"),e("13334"),e("87319"),e("57243")),n=e("50778"),r=e("27486"),l=e("17803"),d=e("36522"),c=e("83523"),h=e("58776"),u=(e("34273"),e("23043"),e("71489"),e("66899")),p=e("56785"),m=e("76131");e("75375"),e("87979"),e("76286");e("54466");var g=e("1416"),v=(e("54977"),e("55194"),e("41298")),y=e("79419"),f=e("50566");var k=e("84915");(0,o.Z)([(0,n.Mo)("hassio-addon-repository")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"repo",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"addons",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"filter",value:void 0},{kind:"field",key:"_getAddons",value(){return(0,r.Z)(((t,i)=>i?function(t,i){const e={keys:["name","description","slug"],isCaseSensitive:!1,minMatchCharLength:Math.min(i.length,2),threshold:.2,getFn:f.z};return new v.Z(t,e).search((0,y._)(i)).map((t=>t.item))}(t,i):t.sort(((t,i)=>(0,g.f)(t.name,i.name,this.hass.locale.language)))))}},{kind:"method",key:"render",value:function(){const t=this.repo;let i=this.addons;this.hass.userData?.showAdvanced||(i=i.filter((t=>!t.advanced&&"stable"===t.stage)));const e=this._getAddons(i,this.filter);return this.filter&&e.length<1?s.dy` <div class="content"> <p class="description"> ${this.supervisor.localize("store.no_results_found",{repository:t.name})} </p> </div> `:s.dy` <div class="content"> <h1>${t.name}</h1> <div class="card-group"> ${e.map((t=>s.dy` <ha-card outlined .addon="${t}" class="${t.available?"":"not_available"}" @click="${this._addonTapped}"> <div class="card-content"> <hassio-card-content .hass="${this.hass}" .title="${t.name}" .description="${t.description}" .available="${t.available}" .icon="${t.installed&&t.update_available?"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z":"M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z"}" .iconTitle="${t.installed?t.update_available?this.supervisor.localize("common.new_version_available"):this.supervisor.localize("addon.state.installed"):t.available?this.supervisor.localize("addon.state.not_installed"):this.supervisor.localize("addon.state.not_available")}" .iconClass="${t.installed?t.update_available?"update":"installed":t.available?"":"not_available"}" .iconImage="${(0,l.I)(this.hass.config.version,0,105)&&t.icon?`/api/hassio/addons/${t.slug}/icon`:void 0}" .showTopbar="${t.installed||!t.available}" .topbarClass="${t.installed?t.update_available?"update":"installed":t.available?"":"unavailable"}"></hassio-card-content> </div> </ha-card> `))} </div> </div> `}},{kind:"method",key:"_addonTapped",value:function(t){(0,c.c)(`/hassio/addon/${t.currentTarget.addon.slug}?store=true`)}},{kind:"get",static:!0,key:"styles",value:function(){return[k.l,s.iv`ha-card{cursor:pointer;overflow:hidden}.not_available{opacity:.6}a.repo{color:var(--primary-text-color)}`]}}]}}),s.oi);const _=(t,i)=>"local"===t.slug?-1:"local"===i.slug?1:"core"===t.slug?-1:"core"===i.slug?1:t.name.toUpperCase()<i.name.toUpperCase()?-1:1;let b=(0,o.Z)([(0,n.Mo)("hassio-addon-store")],(function(t,i){class o extends i{constructor(...i){super(...i),t(this)}}return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_filter",value:void 0},{kind:"method",key:"refreshData",value:async function(){try{await(0,u.a_)(this.hass)}catch(t){(0,m.Ys)(this,{text:(0,p.js)(t)})}finally{this._loadData()}}},{kind:"method",key:"render",value:function(){let t=[];return this.supervisor.store.repositories&&(t=this.addonRepositories(this.supervisor.store.repositories,this.supervisor.store.addons,this._filter)),s.dy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" .header="${this.supervisor.localize("panel.store")}"> <ha-button-menu slot="toolbar-icon" @action="${this._handleAction}"> <ha-icon-button .label="${this.supervisor.localize("common.menu")}" .path="${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}" slot="trigger"></ha-icon-button> <mwc-list-item> ${this.supervisor.localize("store.check_updates")} </mwc-list-item> <mwc-list-item> ${this.supervisor.localize("store.repositories")} </mwc-list-item> ${this.hass.userData?.showAdvanced&&(0,l.I)(this.hass.config.version,0,117)?s.dy`<mwc-list-item> ${this.supervisor.localize("store.registries")} </mwc-list-item>`:""} </ha-button-menu> ${0===t.length?s.dy`<hass-loading-screen no-toolbar></hass-loading-screen>`:s.dy` <div class="search"> <search-input .hass="${this.hass}" .filter="${this._filter}" @value-changed="${this._filterChanged}"></search-input> </div> ${t} `} ${this.hass.userData?.showAdvanced?"":s.dy` <div class="advanced"> <a href="/profile" target="_top"> ${this.supervisor.localize("store.missing_addons")} </a> </div> `} </hass-subpage> `}},{kind:"method",key:"firstUpdated",value:function(t){(0,a.Z)(o,"firstUpdated",this,3)([t]);const i=(0,h.io)("repository_url");(0,c.c)("/hassio/store",{replace:!0}),i&&this._manageRepositories(i),this.addEventListener("hass-api-called",(t=>this._apiCalled(t))),this._loadData()}},{kind:"field",key:"addonRepositories",value(){return(0,r.Z)(((t,i,e)=>t.sort(_).map((t=>{const o=i.filter((i=>i.repository===t.slug));return 0!==o.length?s.dy` <hassio-addon-repository .hass="${this.hass}" .repo="${t}" .addons="${o}" .filter="${e}" .supervisor="${this.supervisor}"></hassio-addon-repository> `:s.Ld}))))}},{kind:"method",key:"_handleAction",value:function(t){switch(t.detail.index){case 0:this.refreshData();break;case 1:this._manageRepositoriesClicked();break;case 2:this._manageRegistries()}}},{kind:"method",key:"_apiCalled",value:function(t){t.detail.success&&this._loadData()}},{kind:"method",key:"_manageRepositoriesClicked",value:function(){this._manageRepositories()}},{kind:"method",key:"_manageRepositories",value:function(t){var i,o;i=this,o={supervisor:this.supervisor,url:t},(0,d.B)(i,"show-dialog",{dialogTag:"dialog-hassio-repositories",dialogImport:()=>Promise.resolve().then(e.bind(e,54466)),dialogParams:o})}},{kind:"method",key:"_manageRegistries",value:function(){var t,i;t=this,i={supervisor:this.supervisor},(0,d.B)(t,"show-dialog",{dialogTag:"dialog-hassio-registries",dialogImport:()=>Promise.resolve().then(e.bind(e,76286)),dialogParams:i})}},{kind:"method",key:"_loadData",value:function(){(0,d.B)(this,"supervisor-collection-refresh",{collection:"addon"}),(0,d.B)(this,"supervisor-collection-refresh",{collection:"supervisor"})}},{kind:"method",key:"_filterChanged",value:function(t){this._filter=t.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`hassio-addon-repository{margin-top:24px}.search{position:sticky;top:0;z-index:2}search-input{display:block;--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color)}.advanced{padding:12px;display:flex;flex-wrap:wrap;color:var(--primary-text-color)}.advanced a{margin-left:.5em;margin-inline-start:.5em;margin-inline-end:initial;color:var(--primary-color)}`}}]}}),s.oi)},76286:function(t,i,e){var o=e("44249"),a=(e("13334"),e("31622"),e("57243")),s=e("50778"),n=e("73729"),r=(e("29073"),e("23043"),e("30509"),e("56785")),l=e("17803");var d=e("76131"),c=e("28008");const h=[{name:"registry",required:!0,selector:{text:{}}},{name:"username",required:!0,selector:{text:{}}},{name:"password",required:!0,selector:{text:{type:"password"}}}];(0,o.Z)([(0,s.Mo)("dialog-hassio-registries")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_registries",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_input",value:()=>({})},{kind:"field",decorators:[(0,s.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_addingRegistry",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <ha-dialog .open="${this._opened}" @closed="${this.closeDialog}" scrimClickAction escapeKeyAction hideActions .heading="${(0,n.i)(this.hass,this._addingRegistry?this.supervisor.localize("dialog.registries.title_add"):this.supervisor.localize("dialog.registries.title_manage"))}"> ${this._addingRegistry?a.dy` <ha-form .data="${this._input}" .schema="${h}" @value-changed="${this._valueChanged}" .computeLabel="${this._computeLabel}" dialogInitialFocus></ha-form> <div class="action"> <mwc-button ?disabled="${Boolean(!this._input.registry||!this._input.username||!this._input.password)}" @click="${this._addNewRegistry}"> ${this.supervisor.localize("dialog.registries.add_registry")} </mwc-button> </div> `:a.dy`${this._registries?.length?this._registries.map((t=>a.dy` <ha-settings-row class="registry"> <span slot="heading"> ${t.registry} </span> <span slot="description"> ${this.supervisor.localize("dialog.registries.username")}: ${t.username} </span> <ha-icon-button .entry="${t}" .label="${this.supervisor.localize("dialog.registries.remove")}" .path="${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}" @click="${this._removeRegistry}"></ha-icon-button> </ha-settings-row> `)):a.dy` <ha-alert> ${this.supervisor.localize("dialog.registries.no_registries")} </ha-alert> `} <div class="action"> <mwc-button @click="${this._addRegistry}" dialogInitialFocus> ${this.supervisor.localize("dialog.registries.add_new_registry")} </mwc-button> </div> `} </ha-dialog> `}},{kind:"field",key:"_computeLabel",value(){return t=>this.supervisor.localize(`dialog.registries.${t.name}`)}},{kind:"method",key:"_valueChanged",value:function(t){this._input=t.detail.value}},{kind:"method",key:"showDialog",value:async function(t){this._opened=!0,this._input={},this.supervisor=t.supervisor,await this._loadRegistries(),await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._addingRegistry=!1,this._opened=!1,this._input={}}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>this.shadowRoot?.querySelector("[dialogInitialFocus]")?.focus()))}},{kind:"method",key:"_loadRegistries",value:async function(){const t=await(async t=>(0,l.I)(t.config.version,2021,2,4)?t.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"get"}):(0,r.rY)(await t.callApi("GET","hassio/docker/registries")))(this.hass);this._registries=Object.keys(t.registries).map((i=>({registry:i,username:t.registries[i].username})))}},{kind:"method",key:"_addRegistry",value:function(){this._addingRegistry=!0}},{kind:"method",key:"_addNewRegistry",value:async function(){const t={};t[this._input.registry]={username:this._input.username,password:this._input.password};try{await(async(t,i)=>{(0,l.I)(t.config.version,2021,2,4)?await t.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"post",data:i}):await t.callApi("POST","hassio/docker/registries",i)})(this.hass,t),await this._loadRegistries(),this._addingRegistry=!1,this._input={}}catch(t){(0,d.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_add"),text:(0,r.js)(t)})}}},{kind:"method",key:"_removeRegistry",value:async function(t){const i=t.currentTarget.entry;try{await(async(t,i)=>{(0,l.I)(t.config.version,2021,2,4)?await t.callWS({type:"supervisor/api",endpoint:`/docker/registries/${i}`,method:"delete"}):await t.callApi("DELETE",`hassio/docker/registries/${i}`)})(this.hass,i.registry),await this._loadRegistries()}catch(t){(0,d.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_remove"),text:(0,r.js)(t)})}}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,c.yu,a.iv`.registry{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}.action{margin-top:24px;width:100%;display:flex;justify-content:flex-end}ha-icon-button{color:var(--error-color);margin-right:-10px;margin-inline-end:-10px;margin-inline-start:initial}`]}}]}}),a.oi)},54466:function(t,i,e){e.r(i);var o=e(44249),a=(e(39527),e(99790),e(13334),e(36993),e(31622),e(14394),e(57243)),s=e(50778),n=e(27486),r=e(36522),l=e(1416),d=(e(99426),e(82104),e(73729)),c=(e(23043),e(56785)),h=e(69888),u=e(28008);e(83166),e(19993),e(74633);(0,o.Z)([(0,s.Mo)("dialog-hassio-repositories")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.IO)("#repository_input",!0)],key:"_optionInput",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_repositories",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_processing",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._dialogParams=t,this._opened=!0,await this._loadData(),await this.updateComplete}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._opened=!1,this._error=""}},{kind:"field",key:"_filteredRepositories",value(){return(0,n.Z)((t=>t.filter((t=>"core"!==t.slug&&"local"!==t.slug&&"a0d7b954"!==t.slug&&"5c53de3b"!==t.slug&&"d5369777"!==t.slug)).sort(((t,i)=>(0,l.f)(t.name,i.name,this.hass.locale.language)))))}},{kind:"field",key:"_filteredUsedRepositories",value:()=>(0,n.Z)(((t,i)=>t.filter((t=>i.some((i=>i.repository===t.slug)))).map((t=>t.slug))))},{kind:"method",key:"render",value:function(){if(!this._dialogParams?.supervisor||void 0===this._repositories)return a.Ld;const t=this._filteredRepositories(this._repositories),i=this._filteredUsedRepositories(t,this._dialogParams.supervisor.addon.addons);return a.dy` <ha-dialog .open="${this._opened}" @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .heading="${(0,d.i)(this.hass,this._dialogParams.supervisor.localize("dialog.repositories.title"))}"> ${this._error?a.dy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} <div class="form"> <ha-md-list> ${t.length?t.map((t=>a.dy` <ha-md-list-item class="option"> ${t.name} <div slot="supporting-text"> <div>${t.maintainer}</div> <div>${t.url}</div> </div> <div class="delete" slot="end"> <ha-icon-button .disabled="${i.includes(t.slug)}" .slug="${t.slug}" .path="${i.includes(t.slug)?"M2 5.27L3.28 4L5 5.72L5.28 6L6.28 7L18 18.72L20 20.72L18.73 22L17.27 20.54C16.93 20.83 16.5 21 16 21H8C6.9 21 6 20.1 6 19V9.27L2 5.27M19 4V6H7.82L5.82 4H8.5L9.5 3H14.5L15.5 4H19M18 7V16.18L8.82 7H18Z":"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}" @click="${this._removeRepository}"> </ha-icon-button> <simple-tooltip animation-delay="0" position="bottom" offset="1"> ${this._dialogParams.supervisor.localize(i.includes(t.slug)?"dialog.repositories.used":"dialog.repositories.remove")} </simple-tooltip> </div> </ha-md-list-item> `)):a.dy`<ha-md-list-item>${this._dialogParams.supervisor.localize("dialog.repositories.no_repositories")}</ha-md-list-item>`} </ha-md-list> <div class="layout horizontal bottom"> <ha-textfield class="flex-auto" id="repository_input" .value="${this._dialogParams.url||""}" .label="${this._dialogParams.supervisor.localize("dialog.repositories.add")}" @keydown="${this._handleKeyAdd}" dialogInitialFocus></ha-textfield> <mwc-button @click="${this._addRepository}"> ${this._processing?a.dy`<ha-circular-progress indeterminate size="small"></ha-circular-progress>`:this._dialogParams.supervisor.localize("dialog.repositories.add")} </mwc-button> </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this._dialogParams?.supervisor.localize("common.close")} </mwc-button> </ha-dialog> `}},{kind:"get",static:!0,key:"styles",value:function(){return[u.Qx,u.yu,a.iv`ha-dialog.button-left{--justify-action-buttons:flex-start}paper-icon-item{cursor:pointer}.form{color:var(--primary-text-color)}.option{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}ha-circular-progress{display:block;margin:32px;text-align:center}div.delete ha-icon-button{color:var(--error-color)}ha-md-list-item{position:relative;--md-item-overflow:visible}`]}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>this.shadowRoot?.querySelector("[dialogInitialFocus]")?.focus()))}},{kind:"method",key:"_handleKeyAdd",value:function(t){t.stopPropagation(),"Enter"===t.key&&this._addRepository()}},{kind:"method",key:"_loadData",value:async function(){try{this._repositories=await(0,h.iV)(this.hass),(0,r.B)(this,"supervisor-collection-refresh",{collection:"addon"})}catch(t){this._error=(0,c.js)(t)}}},{kind:"method",key:"_addRepository",value:async function(){const t=this._optionInput;if(t&&t.value){this._processing=!0;try{await(0,h.FV)(this.hass,t.value),await this._loadData(),t.value=""}catch(t){this._error=(0,c.js)(t)}this._processing=!1}}},{kind:"method",key:"_removeRepository",value:async function(t){const i=t.currentTarget.slug;try{await(0,h.Cw)(this.hass,i),await this._loadData()}catch(t){this._error=(0,c.js)(t)}}}]}}),a.oi)},79419:function(t,i,e){e.d(i,{_:function(){return o}});const o=t=>t.normalize("NFD").replace(/[\u0300-\u036F]/g,"")},58776:function(t,i,e){e.d(i,{Q2:function(){return a},io:function(){return s},ou:function(){return n}});e(39527),e(41360),e(75656),e(50100),e(18084);var o=e(14463);const a=()=>{const t={},i=new URLSearchParams(o.E.location.search);for(const[e,o]of i.entries())t[e]=o;return t},s=t=>new URLSearchParams(o.E.location.search).get(t),n=t=>{const i=new URLSearchParams;return Object.entries(t).forEach((([t,e])=>{i.append(t,e)})),i.toString()}},34273:function(t,i,e){var o=e(44249),a=e(72621),s=(e(39527),e(41360),e(22997),e(57243)),n=e(50778),r=e(14463),l=e(8338);(0,o.Z)([(0,n.Mo)("ha-button-menu")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",key:l.gA,value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"corner",value:()=>"BOTTOM_START"},{kind:"field",decorators:[(0,n.Cb)({attribute:"menu-corner"})],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[(0,n.Cb)({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[(0,n.Cb)({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:()=>!1},{kind:"field",decorators:[(0,n.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){return this._menu?.items}},{kind:"get",key:"selected",value:function(){return this._menu?.selected}},{kind:"method",key:"focus",value:function(){this._menu?.open?this._menu.focusItemAtIndex(0):this._triggerButton?.focus()}},{kind:"method",key:"render",value:function(){return s.dy` <div @click="${this._handleClick}"> <slot name="trigger" @slotchange="${this._setTriggerAria}"></slot> </div> <mwc-menu .corner="${this.corner}" .menuCorner="${this.menuCorner}" .fixed="${this.fixed}" .multi="${this.multi}" .activatable="${this.activatable}" .y="${this.y}" .x="${this.x}"> <slot></slot> </mwc-menu> `}},{kind:"method",key:"firstUpdated",value:function(t){(0,a.Z)(e,"firstUpdated",this,3)([t]),"rtl"===r.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((t=>{const i=document.createElement("style");i.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",t.shadowRoot.appendChild(i)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`}}]}}),s.oi)},73729:function(t,i,e){e.d(i,{i:function(){return h}});var o=e(44249),a=e(72621),s=e(74966),n=e(51408),r=e(57243),l=e(50778),d=e(8338);e(23043);const c=["button","ha-list-item"],h=(t,i)=>r.dy` <div class="header_title"> <ha-icon-button .label="${t?.localize("ui.dialogs.generic.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> <span>${i}</span> </div> `;(0,o.Z)([(0,l.Mo)("ha-dialog")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",key:d.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,i){this.contentElement?.scrollTo(t,i)}},{kind:"method",key:"renderHeading",value:function(){return r.dy`<slot name="heading"> ${(0,a.Z)(e,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,a.Z)(e,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(e,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,r.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__title:has(span){padding:12px 12px 0}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{display:flex;align-items:center;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;padding-left:4px}.header_button{text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),s.M)},74633:function(t,i,e){var o=e(44249),a=e(72621),s=e(78755),n=e(57243),r=e(50778);(0,o.Z)([(0,r.Mo)("ha-md-list-item")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(e,"styles",this),n.iv`:host{--ha-icon-display:block;--md-sys-color-primary:var(--primary-text-color);--md-sys-color-secondary:var(--secondary-text-color);--md-sys-color-surface:var(--card-background-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--secondary-text-color)}md-item{overflow:var(--md-item-overflow,hidden)}`]}}]}}),s.g)},19993:function(t,i,e){var o=e(44249),a=e(72621),s=e(623),n=e(57243),r=e(50778);(0,o.Z)([(0,r.Mo)("ha-md-list")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",static:!0,key:"styles",value(){return[...(0,a.Z)(e,"styles",this),n.iv`:host{--md-sys-color-surface:var(--card-background-color)}`]}}]}}),s.j)},30509:function(t,i,e){var o=e(44249),a=e(57243),s=e(50778);(0,o.Z)([(0,s.Mo)("ha-settings-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"slim",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${!this.threeLine}" ?three-line="${this.threeLine}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
          --mdc-typography-body2-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}`}}]}}),a.oi)},50566:function(t,i,e){e.d(i,{z:function(){return s}});e(13334);var o=e(41298),a=e(79419);const s=(t,i)=>{const e=o.Z.config.getFn(t,i);return Array.isArray(e)?e.map((t=>(0,a._)(t??""))):(0,a._)(e??"")}},30338:function(t,i,e){var o=e(97934),a=e(71998),s=e(4576),n=e(36760);t.exports=function(t,i){i&&"string"==typeof t||a(t);var e=n(t);return s(a(void 0!==e?o(e,t):t))}},25677:function(t,i,e){var o=e(40810),a=e(97934),s=e(63983),n=e(71998),r=e(4576),l=e(30338),d=e(79995),c=e(14181),h=e(92288),u=d((function(){for(var t,i,e=this.iterator,o=this.mapper;;){if(i=this.inner)try{if(!(t=n(a(i.next,i.iterator))).done)return t.value;this.inner=null}catch(t){c(e,"throw",t)}if(t=n(a(this.next,e)),this.done=!!t.done)return;try{this.inner=l(o(t.value,this.counter++),!1)}catch(t){c(e,"throw",t)}}}));o({target:"Iterator",proto:!0,real:!0,forced:h},{flatMap:function(t){return n(this),s(t),new u(r(this),{mapper:t,inner:null})}})},34810:function(t,i,e){e(25677)},14394:function(t,i,e){e(39527),e(41360);var o=e(57243);class a extends o.oi{static get styles(){return[o.iv`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size, 10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity, .9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,0.2,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;inset-inline-start:-10000px;inset-inline-end:initial;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return o.dy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var t=this.parentNode,i=this.getRootNode();return this.for?i.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){"entry"===t?this.show():"exit"===t&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,i=this.children,e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,o=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),s=this.getBoundingClientRect(),n=(a.width-s.width)/2,r=(a.height-s.height)/2,l=a.left-o.left,d=a.top-o.top;switch(this.position){case"top":i=l+n,e=d-s.height-t;break;case"bottom":i=l+n,e=d+a.height+t;break;case"left":i=l-s.width-t,e=d+r;break;case"right":i=l+a.width+t,e=d+r}this.fitToVisibleBounds?(o.left+i+s.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),o.top+e+s.height>window.innerHeight?(this.style.bottom=o.height-d+t+"px",this.style.top="auto"):(this.style.top=Math.max(-o.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",i+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",i+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach(((t,i)=>{"for"==i&&this._findTarget(this[i],t),"manualMode"==i&&this._manualModeChanged(this[i],t),"animationDelay"==i&&this._delayChange(this[i],t)}))}_delayChange(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(a.tag,a)}};
//# sourceMappingURL=9377.ee270842084bee8d.js.map