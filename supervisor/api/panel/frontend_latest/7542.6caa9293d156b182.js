/*! For license information please see 7542.6caa9293d156b182.js.LICENSE.txt */
export const ids=["7542"];export const modules={54835:function(e,t,i){var o=i("9065"),n=i("50778"),s=i("57243");class a extends s.oi{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return s.dy`<span class="shadow"></span>`}}const r=s.iv`.shadow,.shadow::after,.shadow::before,:host{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::after,.shadow::before{content:"";transition-property:box-shadow,opacity;--_level:var(--md-elevation-level, 0);--_shadow-color:var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}`;let l=class extends a{};l.styles=[r],l=(0,o.__decorate)([(0,n.Mo)("md-elevation")],l)},43895:function(e,t,i){i.d(t,{_:function(){return n}});i(92745),i(39527),i(41360);var o=i(7162);class n{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent((0,o.d7)(this.host,{kind:o.GB.CLICK_SELECTION}))},this.onKeydown=e=>{if(this.host.href&&"Enter"===e.code){const e=this.getInteractiveElement();e instanceof HTMLAnchorElement&&e.click()}if(e.defaultPrevented)return;const t=e.code;this.host.keepOpen&&"Escape"!==t||(0,o.kE)(t)&&(e.preventDefault(),this.host.dispatchEvent((0,o.d7)(this.host,{kind:o.GB.KEYDOWN,key:t})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(null!==this.internalTypeaheadText)return this.internalTypeaheadText;const e=this.getHeadlineElements(),t=[];return e.forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getDefaultElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),0===t.length&&this.getSupportingTextElements().forEach((e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())})),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:return"li"}}get role(){return"option"===this.host.type?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}}},7162:function(e,t,i){i.d(t,{$4:function(){return d},Ch:function(){return c},Cs:function(){return l},GB:function(){return s},KC:function(){return a},d7:function(){return o},kE:function(){return r}});i(39527),i(36993);const o=function(e,t){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:e,reason:t,itemPath:[e]}})};const n={SPACE:"Space",ENTER:"Enter"},s={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},a={ESCAPE:"Escape",SPACE:n.SPACE,ENTER:n.ENTER};function r(e){return Object.values(a).some((t=>t===e))}function l(e){return Object.values(n).some((t=>t===e))}function d(e,t){const i=new Event("md-contains",{bubbles:!0,composed:!0});let o=[];const n=e=>{o=e.composedPath()};t.addEventListener("md-contains",n),e.dispatchEvent(i),t.removeEventListener("md-contains",n);return o.length>0}const c={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"}},12572:function(e,t,i){i.d(t,{D:function(){return o},p:function(){return n}});i(39527),i(99790),i(67670),i(13334);const o={INDEX:0,ITEM:1,TEXT:2};class n{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&("Space"===e.code||"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map(((e,t)=>[t,e,e.typeaheadText.trim().toLowerCase()])),this.lastActiveRecord=this.typeaheadRecords.find((e=>0===e[o.ITEM].tabIndex))??null,this.lastActiveRecord&&(this.lastActiveRecord[o.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),"Enter"===e.code||e.code.startsWith("Arrow")||"Escape"===e.code)return this.endTypeahead(),void(this.lastActiveRecord&&(this.lastActiveRecord[o.ITEM].tabIndex=-1));"Space"===e.code&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();const t=this.lastActiveRecord?this.lastActiveRecord[o.INDEX]:-1,i=this.typeaheadRecords.length,n=e=>(e[o.INDEX]+i-t)%i,s=this.typeaheadRecords.filter((e=>!e[o.ITEM].disabled&&e[o.TEXT].startsWith(this.typaheadBuffer))).sort(((e,t)=>n(e)-n(t)));if(0===s.length)return clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[o.ITEM].tabIndex=-1),void this.endTypeahead();const a=1===this.typaheadBuffer.length;let r;r=this.lastActiveRecord===s[0]&&a?s[1]??s[0]:s[0],this.lastActiveRecord&&(this.lastActiveRecord[o.ITEM].tabIndex=-1),this.lastActiveRecord=r,r[o.ITEM].tabIndex=0,r[o.ITEM].focus()}}},9235:function(e,t,i){i.d(t,{pS:()=>f,v2:()=>b});i("85601"),i("92745"),i("92519"),i("42179"),i("89256"),i("24931"),i("88463"),i("57449"),i("19814"),i("39527"),i("41360");var o=i("9065"),n=(i("54835"),i("57618"),i("57243")),s=i("50778"),a=i("35359"),r=i("46799"),l=i("43921"),d=i("7750"),c=i("64840"),h=i("7162");const p="end-start",u="start-start";class m{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:e,anchorEl:t,anchorCorner:i,surfaceCorner:o,positioning:n,xOffset:s,yOffset:a,disableBlockFlip:r,disableInlineFlip:l,repositionStrategy:d}=this.getProperties(),c=i.toLowerCase().trim(),h=o.toLowerCase().trim();if(!e||!t)return;const p=window.innerWidth,u=window.innerHeight,m=document.createElement("div");m.style.opacity="0",m.style.position="fixed",m.style.display="block",m.style.inset="0",document.body.appendChild(m);const v=m.getBoundingClientRect();m.remove();const f=window.innerHeight-v.bottom,y=window.innerWidth-v.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();const g=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),b=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[E,w]=h.split("-"),[C,x]=c.split("-"),I="ltr"===getComputedStyle(e).direction;let{blockInset:_,blockOutOfBoundsCorrection:k,surfaceBlockProperty:O}=this.calculateBlock({surfaceRect:g,anchorRect:b,anchorBlock:C,surfaceBlock:E,yOffset:a,positioning:n,windowInnerHeight:u,blockScrollbarHeight:f});if(k&&!r){const e="start"===E?"end":"start",t="start"===C?"end":"start",i=this.calculateBlock({surfaceRect:g,anchorRect:b,anchorBlock:t,surfaceBlock:e,yOffset:a,positioning:n,windowInnerHeight:u,blockScrollbarHeight:f});k>i.blockOutOfBoundsCorrection&&(_=i.blockInset,k=i.blockOutOfBoundsCorrection,O=i.surfaceBlockProperty)}let{inlineInset:R,inlineOutOfBoundsCorrection:T,surfaceInlineProperty:L}=this.calculateInline({surfaceRect:g,anchorRect:b,anchorInline:x,surfaceInline:w,xOffset:s,positioning:n,isLTR:I,windowInnerWidth:p,inlineScrollbarWidth:y});if(T&&!l){const e="start"===w?"end":"start",t="start"===x?"end":"start",i=this.calculateInline({surfaceRect:g,anchorRect:b,anchorInline:t,surfaceInline:e,xOffset:s,positioning:n,isLTR:I,windowInnerWidth:p,inlineScrollbarWidth:y});Math.abs(T)>Math.abs(i.inlineOutOfBoundsCorrection)&&(R=i.inlineInset,T=i.inlineOutOfBoundsCorrection,L=i.surfaceInlineProperty)}"move"===d&&(_-=k,R-=T),this.surfaceStylesInternal={display:"block",opacity:"1",[O]:`${_}px`,[L]:`${R}px`},"resize"===d&&(k&&(this.surfaceStylesInternal.height=g.height-k+"px"),T&&(this.surfaceStylesInternal.width=g.width-T+"px")),this.host.requestUpdate()}calculateBlock(e){const{surfaceRect:t,anchorRect:i,anchorBlock:o,surfaceBlock:n,yOffset:s,positioning:a,windowInnerHeight:r,blockScrollbarHeight:l}=e,d="fixed"===a||"document"===a?1:0,c="document"===a?1:0,h="start"===n?1:0,p="end"===n?1:0,u=(o!==n?1:0)*i.height+s,m=h*i.top+p*(r-i.bottom-l);return{blockInset:d*m+c*(h*window.scrollY-p*window.scrollY)+u,blockOutOfBoundsCorrection:Math.abs(Math.min(0,r-m-u-t.height)),surfaceBlockProperty:"start"===n?"inset-block-start":"inset-block-end"}}calculateInline(e){const{isLTR:t,surfaceInline:i,anchorInline:o,anchorRect:n,surfaceRect:s,xOffset:a,positioning:r,windowInnerWidth:l,inlineScrollbarWidth:d}=e,c="fixed"===r||"document"===r?1:0,h="document"===r?1:0,p=t?1:0,u=t?0:1,m="start"===i?1:0,v="end"===i?1:0,f=(o!==i?1:0)*n.width+a,y=p*(m*n.left+v*(l-n.right-d))+u*(m*(l-n.right-d)+v*n.left);let g="start"===i?"inset-inline-start":"inset-inline-end";return"document"!==r&&"fixed"!==r||(g="start"===i&&t||"end"===i&&!t?"left":"right"),{inlineInset:c*y+f+h*(p*(m*window.scrollX-v*window.scrollX)+u*(v*window.scrollX-m*window.scrollX)),inlineOutOfBoundsCorrection:Math.abs(Math.min(0,l-y-f-s.width)),surfaceInlineProperty:g}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const e=this.getProperties();let t=!1;for(const[i,o]of Object.entries(e))if(t=t||o!==this.lastValues[i],t)break;const i=this.lastValues.isOpen!==e.isOpen,o=!!e.anchorEl,n=!!e.surfaceEl;t&&o&&n&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):i&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}}var v=i("12572");const f=200,y=new Set([d.E.ArrowDown,d.E.ArrowUp,d.E.Home,d.E.End]),g=new Set([d.E.ArrowLeft,d.E.ArrowRight,...y]);class b extends n.oi{get openDirection(){return"start"===this.menuCorner.split("-")[0]?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=f,this.anchorCorner=p,this.menuCorner=u,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=h.Ch.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=(0,l.L7)(),this.listController=new d.g({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return g.has(e);return e===("rtl"===getComputedStyle(this).direction?d.E.ArrowLeft:d.E.ArrowRight)||y.has(e)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new v.p((()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive}))),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new m(this,(()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:"popover"===this.positioning?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&"popover"!==this.positioning?"move":"resize"}))),this.onWindowResize=()=>{this.isRepositioning||"document"!==this.positioning&&"fixed"!==this.positioning&&"popover"!==this.positioning||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{const t=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(t))return;if(e.relatedTarget){if((0,h.$4)(e.relatedTarget,this)||0!==this.pointerPath.length&&(0,h.$4)(e.relatedTarget,t))return}else if(this.pointerPath.includes(this))return;const i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=function(e=document){let t=e.activeElement;for(;t&&t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}();const e=this.items,t=(0,c.CL)(e);t&&this.defaultFocus!==h.Ch.NONE&&(t.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case h.Ch.FIRST_ITEM:const t=(0,c.B3)(e);t&&(t.tabIndex=0,t.focus(),await t.updateComplete);break;case h.Ch.LAST_ITEM:const i=(0,c.AW)(e);i&&(i.tabIndex=0,i.focus(),await i.updateComplete);break;case h.Ch.LIST_ROOT:this.focus();default:case h.Ch.NONE:}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;const t=e.composedPath();this.stayOpenOnOutsideClick||t.includes(this)||t.includes(this.anchorElement)||(this.open=!1)},n.sk||(this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout))}get items(){return this.listController.items}willUpdate(e){e.has("open")&&(this.open?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"))}update(e){e.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return n.dy` <div class="menu ${(0,a.$)(this.getSurfaceClasses())}" style="${(0,r.V)(this.menuPositionController.surfaceStyles)}" popover="${"popover"===this.positioning?"manual":n.Ld}"> ${this.renderElevation()} <div class="items"> <div class="item-padding"> ${this.renderMenuItems()} </div> </div> </div> `}renderMenuItems(){return n.dy`<slot @close-menu="${this.onCloseMenu}" @deactivate-items="${this.onDeactivateItems}" @request-activation="${this.onRequestActivation}" @deactivate-typeahead="${this.handleDeactivateTypeahead}" @activate-typeahead="${this.handleActivateTypeahead}" @stay-open-on-focusout="${this.handleStayOpenOnFocusout}" @close-on-focusout="${this.handleCloseOnFocusout}" @slotchange="${this.listController.onSlotchange}"></slot>`}renderElevation(){return n.dy`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:"fixed"===this.positioning,"has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&(0,h.kE)(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){const e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;const i=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);const o=this.openCloseAnimationSignal.start(),n=e.offsetHeight,s="UP"===i,a=this.items,r=250/a.length,d=e.animate([{height:"0px"},{height:`${n}px`}],{duration:500,easing:l.Xt.EMPHASIZED}),c=t.animate([{transform:s?`translateY(-${n}px)`:""},{transform:""}],{duration:500,easing:l.Xt.EMPHASIZED}),h=e.animate([{opacity:0},{opacity:1}],50),p=[];for(let e=0;e<a.length;e++){const t=a[s?a.length-1-e:e],i=t.animate([{opacity:0},{opacity:1}],{duration:250,delay:r*e});t.classList.toggle("md-menu-hidden",!0),i.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!1)})),p.push([t,i])}let u=e=>{};const m=new Promise((e=>{u=e}));return o.addEventListener("abort",(()=>{d.cancel(),c.cancel(),h.cancel(),p.forEach((([e,t])=>{e.classList.toggle("md-menu-hidden",!1),t.cancel()})),u(!0)})),d.addEventListener("finish",(()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),u(!1)})),await m}animateClose(){let e;const t=new Promise((t=>{e=t})),i=this.surfaceEl,o=this.slotEl;if(!i||!o)return e(!1),t;const n="UP"===this.openDirection;this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);const s=this.openCloseAnimationSignal.start(),a=i.offsetHeight,r=this.items,d=150,c=50/r.length,h=i.animate([{height:`${a}px`},{height:.35*a+"px"}],{duration:d,easing:l.Xt.EMPHASIZED_ACCELERATE}),p=o.animate([{transform:""},{transform:n?`translateY(-${.65*a}px)`:""}],{duration:d,easing:l.Xt.EMPHASIZED_ACCELERATE}),u=i.animate([{opacity:1},{opacity:0}],{duration:50,delay:100}),m=[];for(let e=0;e<r.length;e++){const t=r[n?e:r.length-1-e],i=t.animate([{opacity:1},{opacity:0}],{duration:50,delay:50+c*e});i.addEventListener("finish",(()=>{t.classList.toggle("md-menu-hidden",!0)})),m.push([t,i])}return s.addEventListener("abort",(()=>{h.cancel(),p.cancel(),u.cancel(),m.forEach((([e,t])=>{t.cancel(),e.classList.toggle("md-menu-hidden",!1)})),e(!1)})),h.addEventListener("finish",(()=>{i.classList.toggle("animating",!1),m.forEach((([e])=>{e.classList.toggle("md-menu-hidden",!1)})),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)})),t}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1;this.slotItems.forEach((e=>{e.close?.()}))}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}(0,o.__decorate)([(0,s.IO)(".menu")],b.prototype,"surfaceEl",void 0),(0,o.__decorate)([(0,s.IO)("slot")],b.prototype,"slotEl",void 0),(0,o.__decorate)([(0,s.Cb)()],b.prototype,"anchor",void 0),(0,o.__decorate)([(0,s.Cb)()],b.prototype,"positioning",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean})],b.prototype,"quick",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"has-overflow"})],b.prototype,"hasOverflow",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],b.prototype,"open",void 0),(0,o.__decorate)([(0,s.Cb)({type:Number,attribute:"x-offset"})],b.prototype,"xOffset",void 0),(0,o.__decorate)([(0,s.Cb)({type:Number,attribute:"y-offset"})],b.prototype,"yOffset",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"no-horizontal-flip"})],b.prototype,"noHorizontalFlip",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"no-vertical-flip"})],b.prototype,"noVerticalFlip",void 0),(0,o.__decorate)([(0,s.Cb)({type:Number,attribute:"typeahead-delay"})],b.prototype,"typeaheadDelay",void 0),(0,o.__decorate)([(0,s.Cb)({attribute:"anchor-corner"})],b.prototype,"anchorCorner",void 0),(0,o.__decorate)([(0,s.Cb)({attribute:"menu-corner"})],b.prototype,"menuCorner",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"stay-open-on-outside-click"})],b.prototype,"stayOpenOnOutsideClick",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"stay-open-on-focusout"})],b.prototype,"stayOpenOnFocusout",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"skip-restore-focus"})],b.prototype,"skipRestoreFocus",void 0),(0,o.__decorate)([(0,s.Cb)({attribute:"default-focus"})],b.prototype,"defaultFocus",void 0),(0,o.__decorate)([(0,s.Cb)({type:Boolean,attribute:"no-navigation-wrap"})],b.prototype,"noNavigationWrap",void 0),(0,o.__decorate)([(0,s.NH)({flatten:!0})],b.prototype,"slotItems",void 0),(0,o.__decorate)([(0,s.SB)()],b.prototype,"typeaheadActive",void 0)},99072:function(e,t,i){i.d(t,{W:function(){return o}});const o=i(57243).iv`:host{display:flex;--md-ripple-hover-color:var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity:var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color:var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity:var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, .3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape:8px}a,button,li{background:0 0;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:0;-webkit-tap-highlight-color:transparent}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color,var(--md-sys-color-on-surface,#1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight,var(--md-sys-typescale-body-large-weight,var(--md-ref-typeface-weight-regular,400)));min-height:var(--md-menu-item-one-line-container-height,56px);padding-top:var(--md-menu-item-top-space,12px);padding-bottom:var(--md-menu-item-bottom-space,12px);padding-inline-start:var(--md-menu-item-leading-space,16px);padding-inline-end:var(--md-menu-item-trailing-space,16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height,72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, .875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, .6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight,var(--md-sys-typescale-label-small-weight,var(--md-ref-typeface-weight-medium,500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}.list-item{background-color:var(--md-menu-item-container-color,transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color,var(--md-sys-color-secondary-container,#e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color,var(--md-sys-color-on-secondary-container,#1d192b))}@media(forced-colors:active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}`},28674:function(e,t,i){i.d(t,{i:()=>u});var o=i("9065"),n=i("50778"),s=(i("57618"),i("26499"),i("23111"),i("57243")),a=i("35359"),r=i("79840"),l=i("13823"),d=i("43895");const c=(0,l.T)(s.oi);class h extends c{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new d._(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(s.dy` <md-item> <div slot="container"> ${this.renderRipple()} ${this.renderFocusRing()} </div> <slot name="start" slot="start"></slot> <slot name="end" slot="end"></slot> ${this.renderBody()} </md-item> `)}renderListItem(e){const t="link"===this.type;let i;switch(this.menuItemController.tagName){case"a":i=r.i0`a`;break;case"button":i=r.i0`button`;break;default:i=r.i0`li`}const o=t&&this.target?this.target:s.Ld;return r.dy`
      <${i}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||s.Ld}
        aria-selected=${this.ariaSelected||s.Ld}
        aria-checked=${this.ariaChecked||s.Ld}
        aria-expanded=${this.ariaExpanded||s.Ld}
        aria-haspopup=${this.ariaHasPopup||s.Ld}
        class="list-item ${(0,a.$)(this.getRenderClasses())}"
        href=${this.href||s.Ld}
        target=${o}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${i}>
    `}renderRipple(){return s.dy` <md-ripple part="ripple" for="item" ?disabled="${this.disabled}"></md-ripple>`}renderFocusRing(){return s.dy` <md-focus-ring part="focus-ring" for="item" inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return s.dy` <slot></slot> <slot name="overline" slot="overline"></slot> <slot name="headline" slot="headline"></slot> <slot name="supporting-text" slot="supporting-text"></slot> <slot name="trailing-supporting-text" slot="trailing-supporting-text"></slot> `}focus(){this.listItemRoot?.focus()}}h.shadowRootOptions={...s.oi.shadowRootOptions,delegatesFocus:!0},(0,o.__decorate)([(0,n.Cb)({type:Boolean,reflect:!0})],h.prototype,"disabled",void 0),(0,o.__decorate)([(0,n.Cb)()],h.prototype,"type",void 0),(0,o.__decorate)([(0,n.Cb)()],h.prototype,"href",void 0),(0,o.__decorate)([(0,n.Cb)()],h.prototype,"target",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean,attribute:"keep-open"})],h.prototype,"keepOpen",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],h.prototype,"selected",void 0),(0,o.__decorate)([(0,n.IO)(".list-item")],h.prototype,"listItemRoot",void 0),(0,o.__decorate)([(0,n.NH)({slot:"headline"})],h.prototype,"headlineElements",void 0),(0,o.__decorate)([(0,n.NH)({slot:"supporting-text"})],h.prototype,"supportingTextElements",void 0),(0,o.__decorate)([(0,n.vZ)({slot:""})],h.prototype,"defaultElements",void 0),(0,o.__decorate)([(0,n.Cb)({attribute:"typeahead-text"})],h.prototype,"typeaheadText",null);var p=i("99072");let u=class extends h{};u.styles=[p.W],u=(0,o.__decorate)([(0,n.Mo)("md-menu-item")],u)},53336:function(e,t,i){i.d(t,{xX:()=>r});var o=i("9065"),n=i("50778"),s=i("9235");const a=i("57243").iv`:host{--md-elevation-level:var(--md-menu-container-elevation, 2);--md-elevation-shadow-color:var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape,var(--md-sys-shape-corner-extra-small,4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:0;box-sizing:border-box;background-color:var(--md-menu-container-color,var(--md-sys-color-surface-container,#f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.animating .items,.has-overflow.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors:active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}`;i("7162");let r=class extends s.v2{};r.styles=[a],r=(0,o.__decorate)([(0,n.Mo)("md-menu")],r)}};
//# sourceMappingURL=7542.6caa9293d156b182.js.map