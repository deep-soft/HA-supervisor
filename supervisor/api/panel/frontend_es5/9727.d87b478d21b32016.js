/*! For license information please see 9727.d87b478d21b32016.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["9727"],{10445:function(e,t,a){a.d(t,{X:()=>m});var r=a("9065"),i=a("50778"),s=(a("71695"),a("19423"),a("47021"),a("54835"),a("57243")),o=a("4077");let n,l,d,c=e=>e;class p extends o.A{constructor(){super(...arguments),this.elevated=!1,this.href="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return Object.assign(Object.assign({},super.getContainerClasses()),{},{disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href})}renderPrimaryAction(e){const{ariaLabel:t}=this;return this.href?(0,s.dy)(n||(n=c` <a class="primary action" id="link" aria-label="${0}" href="${0}" target="${0}">${0}</a> `),t||s.Ld,this.href,this.target||s.Ld,e):(0,s.dy)(l||(l=c` <button class="primary action" id="button" aria-label="${0}" aria-disabled="${0}" ?disabled="${0}" type="button">${0}</button> `),t||s.Ld,this.softDisabled||s.Ld,this.disabled&&!this.alwaysFocusable,e)}renderOutline(){return this.elevated?(0,s.dy)(d||(d=c`<md-elevation part="elevation"></md-elevation>`)):super.renderOutline()}}(0,r.__decorate)([(0,i.Cb)({type:Boolean})],p.prototype,"elevated",void 0),(0,r.__decorate)([(0,i.Cb)()],p.prototype,"href",void 0),(0,r.__decorate)([(0,i.Cb)()],p.prototype,"target",void 0);let h;const v=(0,s.iv)(h||(h=(e=>e)`:host{--_container-height:var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color:var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color:var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation:var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color:var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color:var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation:var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity:var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation:var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation:var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation:var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color:var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color:var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color:var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity:var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font:var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height:var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size:var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight:var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color:var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color:var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity:var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color:var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color:var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color:var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color:var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity:var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color:var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color:var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color:var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size:var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color:var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start:var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end:var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end:var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start:var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space:var(--md-assist-chip-leading-space, 16px);--_trailing-space:var(--md-assist-chip-trailing-space, 16px);--_icon-label-space:var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space:var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors:active){.link .outline{border-color:ActiveText}}`));var u=a("29126"),b=a("21016");let m=class extends p{};m.styles=[b.W,u.W,v],m=(0,r.__decorate)([(0,i.Mo)("md-assist-chip")],m)},4077:function(e,t,a){a.d(t,{A:function(){return m}});a(19423);var r=a(9065),i=(a(57618),a(23111),a(57243)),s=a(50778),o=a(35359),n=a(13823);let l,d,c,p,h,v,u=e=>e;const b=(0,n.T)(i.oi);class m extends b{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,i.sk||this.addEventListener("click",this.handleClick.bind(this))}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return(0,i.dy)(l||(l=u` <div class="container ${0}"> ${0} </div> `),(0,o.$)(this.getContainerClasses()),this.renderContainerContent())}updated(e){e.has("disabled")&&void 0!==e.get("disabled")&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return(0,i.dy)(d||(d=u` ${0} <md-focus-ring part="focus-ring" for="${0}"></md-focus-ring> <md-ripple for="${0}" ?disabled="${0}"></md-ripple> ${0} `),this.renderOutline(),this.primaryId,this.primaryId,this.rippleDisabled,this.renderPrimaryAction(this.renderPrimaryContent()))}renderOutline(){return(0,i.dy)(c||(c=u`<span class="outline"></span>`))}renderLeadingIcon(){return(0,i.dy)(p||(p=u`<slot name="icon" @slotchange="${0}"></slot>`),this.handleIconChange)}renderPrimaryContent(){return(0,i.dy)(h||(h=u` <span class="leading icon" aria-hidden="true"> ${0} </span> <span class="label"> <span class="label-text" id="label"> ${0} </span> </span> <span class="touch"></span> `),this.renderLeadingIcon(),this.label?this.label:(0,i.dy)(v||(v=u`<slot></slot>`)))}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements({flatten:!0}).length>0}handleClick(e){if(this.softDisabled||this.disabled&&this.alwaysFocusable)return e.stopImmediatePropagation(),void e.preventDefault()}}m.shadowRootOptions=Object.assign(Object.assign({},i.oi.shadowRootOptions),{},{delegatesFocus:!0}),(0,r.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),(0,r.__decorate)([(0,s.Cb)({type:Boolean,attribute:"soft-disabled",reflect:!0})],m.prototype,"softDisabled",void 0),(0,r.__decorate)([(0,s.Cb)({type:Boolean,attribute:"always-focusable"})],m.prototype,"alwaysFocusable",void 0),(0,r.__decorate)([(0,s.Cb)()],m.prototype,"label",void 0),(0,r.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0,attribute:"has-icon"})],m.prototype,"hasIcon",void 0)},29126:function(e,t,a){a.d(t,{W:function(){return i}});let r;const i=(0,a(57243).iv)(r||(r=(e=>e)`.elevated{--md-elevation-level:var(--_elevated-container-elevation);--md-elevation-shadow-color:var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level:var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level:var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level:var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level:var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors:active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}`))},21016:function(e,t,a){a.d(t,{W:function(){return i}});let r;const i=(0,a(57243).iv)(r||(r=(e=>e)`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:transparent;--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-color:var(--_pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:0 0;border:none;border-radius:inherit;display:flex;outline:0;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.icon,.label,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors:active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}`))},1231:function(e,t,a){a.d(t,{B:()=>d});var r=a("9065"),i=a("50778"),s=(a("71695"),a("47021"),a("57243"));class o extends s.oi{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0})],o.prototype,"inset",void 0),(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"inset-start"})],o.prototype,"insetStart",void 0),(0,r.__decorate)([(0,i.Cb)({type:Boolean,reflect:!0,attribute:"inset-end"})],o.prototype,"insetEnd",void 0);let n;const l=(0,s.iv)(n||(n=(e=>e)`:host{box-sizing:border-box;color:var(--md-divider-color,var(--md-sys-color-outline-variant,#cac4d0));display:flex;height:var(--md-divider-thickness,1px);width:100%}:host([inset-start]),:host([inset]){padding-inline-start:16px}:host([inset-end]),:host([inset]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors:active){:host::before{background:CanvasText}}`));let d=class extends o{};d.styles=[l],d=(0,r.__decorate)([(0,i.Mo)("md-divider")],d)},75351:function(e,t,a){a.d(t,{Ud:function(){return h}});a(63721),a(52247),a(71695),a(52805),a(43451),a(19423),a(40251),a(69235),a(12385),a(19134),a(5740),a(11740),a(46692),a(39527),a(13334),a(34595),a(47021);const r=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),n=Symbol("Comlink.thrown"),l=e=>"object"==typeof e&&null!==e||"function"==typeof e,d=new Map([["proxy",{canHandle:e=>l(e)&&e[r],serialize(e){const{port1:t,port2:a}=new MessageChannel;return c(e,t),[a,[a]]},deserialize(e){return e.start(),h(e)}}],["throw",{canHandle:e=>l(e)&&n in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e,t=globalThis,a=["*"]){t.addEventListener("message",(function i(s){if(!s||!s.data)return;if(!function(e,t){for(const a of e){if(t===a||"*"===a)return!0;if(a instanceof RegExp&&a.test(t))return!0}return!1}(a,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:l,type:d,path:h}=Object.assign({path:[]},s.data),v=(s.data.argumentList||[]).map(x);let u;try{const t=h.slice(0,-1).reduce(((e,t)=>e[t]),e),a=h.reduce(((e,t)=>e[t]),e);switch(d){case"GET":u=a;break;case"SET":t[h.slice(-1)[0]]=x(s.data.value),u=!0;break;case"APPLY":u=a.apply(t,v);break;case"CONSTRUCT":u=function(e){return Object.assign(e,{[r]:!0})}(new a(...v));break;case"ENDPOINT":{const{port1:t,port2:a}=new MessageChannel;c(e,a),u=function(e,t){return g.set(e,t),e}(t,[t])}break;case"RELEASE":u=void 0;break;default:return}}catch(b){u={value:b,[n]:0}}Promise.resolve(u).catch((e=>({value:e,[n]:0}))).then((a=>{const[r,s]=_(a);t.postMessage(Object.assign(Object.assign({},r),{id:l}),s),"RELEASE"===d&&(t.removeEventListener("message",i),p(t),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[a,r]=_({value:new TypeError("Unserializable return value"),[n]:0});t.postMessage(Object.assign(Object.assign({},a),{id:l}),r)}))})),t.start&&t.start()}function p(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){const a=new Map;return e.addEventListener("message",(function(e){const{data:t}=e;if(!t||!t.id)return;const r=a.get(t.id);if(r)try{r(t)}finally{a.delete(t.id)}})),f(e,a,[],t)}function v(e){if(e)throw new Error("Proxy has been released and is not useable")}function u(e){return w(e,new Map,{type:"RELEASE"}).then((()=>{p(e)}))}const b=new WeakMap,m="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(b.get(e)||0)-1;b.set(e,t),0===t&&u(e)}));function f(e,t,a=[],r=function(){}){let o=!1;const n=new Proxy(r,{get(r,i){if(v(o),i===s)return()=>{!function(e){m&&m.unregister(e)}(n),u(e),t.clear(),o=!0};if("then"===i){if(0===a.length)return{then:()=>n};const r=w(e,t,{type:"GET",path:a.map((e=>e.toString()))}).then(x);return r.then.bind(r)}return f(e,t,[...a,i])},set(r,i,s){v(o);const[n,l]=_(s);return w(e,t,{type:"SET",path:[...a,i].map((e=>e.toString())),value:n},l).then(x)},apply(r,s,n){v(o);const l=a[a.length-1];if(l===i)return w(e,t,{type:"ENDPOINT"}).then(x);if("bind"===l)return f(e,t,a.slice(0,-1));const[d,c]=y(n);return w(e,t,{type:"APPLY",path:a.map((e=>e.toString())),argumentList:d},c).then(x)},construct(r,i){v(o);const[s,n]=y(i);return w(e,t,{type:"CONSTRUCT",path:a.map((e=>e.toString())),argumentList:s},n).then(x)}});return function(e,t){const a=(b.get(t)||0)+1;b.set(t,a),m&&m.register(e,t,e)}(n,e),n}function y(e){const t=e.map(_);return[t.map((e=>e[0])),(a=t.map((e=>e[1])),Array.prototype.concat.apply([],a))];var a}const g=new WeakMap;function _(e){for(const[t,a]of d)if(a.canHandle(e)){const[r,i]=a.serialize(e);return[{type:"HANDLER",name:t,value:r},i]}return[{type:"RAW",value:e},g.get(e)||[]]}function x(e){switch(e.type){case"HANDLER":return d.get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,a,r){return new Promise((i=>{const s=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.set(s,i),e.start&&e.start(),e.postMessage(Object.assign({id:s},a),r)}))}}}]);
//# sourceMappingURL=9727.d87b478d21b32016.js.map