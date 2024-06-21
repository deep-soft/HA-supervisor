/*! For license information please see 1550.NURUr0GMBh8.js.LICENSE.txt */
export const id=1550;export const ids=[1550];export const modules={59704:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},11597:(e,t,r)=>{var a=r(87568),o=r(58953),i=r(21901),n=r(36494),s=r(10343).f,l=r(93519),c=r(78033),d=r(41993),u=r(41389),m=r(59704),h=r(48739),f=r(40970),p=r(89385),g="DOMException",v=i("Error"),E=i(g),w=function(){c(this,b);var e=arguments.length,t=u(e<1?void 0:arguments[0]),r=u(e<2?void 0:arguments[1],"Error"),a=new E(t,r),o=new v(t);return o.name=g,s(a,"stack",n(1,h(o.stack,1))),d(a,this,w),a},b=w.prototype=E.prototype,y="stack"in new v(g),A="stack"in new E(1,2),R=E&&f&&Object.getOwnPropertyDescriptor(o,g),M=!(!R||R.writable&&R.configurable),T=y&&!M&&!A;a({global:!0,constructor:!0,forced:p||T},{DOMException:T?w:E});var x=i(g),I=x.prototype;if(I.constructor!==x)for(var C in p||s(I,"constructor",n(1,x)),m)if(l(m,C)){var N=m[C],O=N.s;l(x,O)||s(x,O,n(6,N.c))}},74431:(e,t,r)=>{var a=r(76513),o=r(196),i=(r(98809),r(21950),r(8339),r(98597)),n=r(22431);const s=["focusin","focusout","pointerdown"];class l extends i.WF{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new n.i(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var t,r;if(!e[c]){switch(e.type){default:return;case"focusin":this.visible=null!==(t=null===(r=this.control)||void 0===r?void 0:r.matches(":focus-visible"))&&void 0!==t&&t;break;case"focusout":case"pointerdown":this.visible=!1}e[c]=!0}}onControlChange(e,t){if(!i.S$)for(const r of s)null==e||e.removeEventListener(r,this),null==t||t.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}(0,a.__decorate)([(0,o.MZ)({type:Boolean,reflect:!0})],l.prototype,"visible",void 0),(0,a.__decorate)([(0,o.MZ)({type:Boolean,reflect:!0})],l.prototype,"inward",void 0);const c=Symbol("handledByFocusRing"),d=i.AH`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2,0,0,1);box-sizing:border-box;color:var(--md-focus-ring-color,var(--md-sys-color-secondary,#625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) + var(--md-focus-ring-outward-offset,2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) + var(--md-focus-ring-outward-offset,2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) + var(--md-focus-ring-outward-offset,2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) + var(--md-focus-ring-outward-offset,2px));inset:calc(-1*var(--md-focus-ring-outward-offset,2px));outline:var(--md-focus-ring-width,3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) - var(--md-focus-ring-inward-offset,0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) - var(--md-focus-ring-inward-offset,0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) - var(--md-focus-ring-inward-offset,0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start,var(--md-focus-ring-shape,var(--md-sys-shape-corner-full,9999px))) - var(--md-focus-ring-inward-offset,0px));border:var(--md-focus-ring-width,3px) solid currentColor;inset:var(--md-focus-ring-inward-offset,0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width,8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width,8px)}}@media(prefers-reduced-motion){:host{animation:none}}`;let u=class extends l{};u.styles=[d],u=(0,a.__decorate)([(0,o.EM)("md-focus-ring")],u)},8600:(e,t,r)=>{r(27934),r(53501),r(21950),r(71936),r(14460),r(26777),r(73842),r(66274),r(85038),r(84531),r(98168),r(15445),r(24483),r(13478),r(46355),r(14612),r(53691),r(48455),r(8339),r(11597);!function(e){const t=new WeakMap,r=new WeakMap,a=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,m=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,g={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColIndexText:"aria-colindextext",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDescription:"aria-description",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaInvalid:"aria-invalid",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowIndexText:"aria-rowindextext",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSetSize:"aria-setsize",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext",role:"role"};function v(e){const t=o.get(e),{form:r}=t;S(e,r,t),I(e,t.labels)}const E=(e,t=!1)=>{const r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>o.has(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});let a=r.nextNode();const i=!t||e.disabled;for(;a;)a.formDisabledCallback&&i&&M(a,e.disabled),a=r.nextNode()},w={attributes:!0,attributeFilter:["disabled","name"]},b=V()?new MutationObserver((e=>{for(const t of e){const e=t.target;if("disabled"===t.attributeName&&(e.constructor.formAssociated?M(e,e.hasAttribute("disabled")):"fieldset"===e.localName&&E(e)),"name"===t.attributeName&&e.constructor.formAssociated){const t=o.get(e),r=c.get(e);t.setFormValue(r)}}})):{};function y(e){e.forEach((e=>{const{addedNodes:t,removedNodes:r}=e,i=Array.from(t),n=Array.from(r);i.forEach((e=>{var t;if(o.has(e)&&e.constructor.formAssociated&&v(e),d.has(e)){const t=d.get(e);Object.keys(g).filter((e=>null!==t[e])).forEach((r=>{e.setAttribute(g[r],t[r])})),d.delete(e)}if(p.has(e)){const t=p.get(e);e.setAttribute("internals-valid",t.validity.valid.toString()),e.setAttribute("internals-invalid",(!t.validity.valid).toString()),e.setAttribute("aria-invalid",(!t.validity.valid).toString()),p.delete(e)}if("form"===e.localName){const t=l.get(e),r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>!o.has(e)||!e.constructor.formAssociated||t&&t.has(e)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT});let a=r.nextNode();for(;a;)v(a),a=r.nextNode()}"fieldset"===e.localName&&(null===(t=b.observe)||void 0===t||t.call(b,e,w),E(e,!0))})),n.forEach((e=>{const t=o.get(e);if(t&&a.get(t)&&T(t),s.has(e)){s.get(e).disconnect()}}))}))}function A(e){e.forEach((e=>{const{removedNodes:t}=e;t.forEach((t=>{const r=h.get(e.target);o.has(t)&&D(t),r.disconnect()}))}))}!V()||new MutationObserver(y);const R={childList:!0,subtree:!0},M=(e,t)=>{e.toggleAttribute("internals-disabled",t),t?e.setAttribute("aria-disabled","true"):e.removeAttribute("aria-disabled"),e.formDisabledCallback&&e.formDisabledCallback.apply(e,[t])},T=e=>{a.get(e).forEach((e=>{e.remove()})),a.set(e,[])},x=(e,t)=>{const r=document.createElement("input");return r.type="hidden",r.name=e.getAttribute("name"),e.after(r),a.get(t).push(r),r},I=(e,t)=>{if(t.length){Array.from(t).forEach((t=>t.addEventListener("click",e.click.bind(e))));let r=t[0].id;t[0].id||(r=`${t[0].htmlFor}_Label`,t[0].id=r),e.setAttribute("aria-labelledby",r)}},C=e=>{const t=Array.from(e.elements).filter((e=>!e.tagName.includes("-")&&e.validity)).map((e=>e.validity.valid)),r=l.get(e)||[],a=[...t,...Array.from(r).filter((e=>e.isConnected)).map((e=>o.get(e).validity.valid))].includes(!1);e.toggleAttribute("internals-invalid",a),e.toggleAttribute("internals-valid",!a)},N=e=>{C(_(e.target))},O=e=>{C(_(e.target))},k=e=>{const t=l.get(e.target);t&&t.size&&t.forEach((e=>{e.constructor.formAssociated&&e.formResetCallback&&e.formResetCallback.apply(e)}))},S=(e,t,r)=>{if(t){const a=l.get(t);if(a)a.add(e);else{const r=new Set;r.add(e),l.set(t,r),(e=>{const t=["button[type=submit]","input[type=submit]","button:not([type])"].map((e=>`${e}:not([disabled])`)).map((t=>`${t}:not([form])${e.id?`,${t}[form='${e.id}']`:""}`)).join(",");e.addEventListener("click",(r=>{if(r.target.closest(t)){const t=l.get(e);if(e.noValidate)return;t.size&&Array.from(t).reverse().map((e=>o.get(e).reportValidity())).includes(!1)&&r.preventDefault()}}))})(t),t.addEventListener("reset",k),t.addEventListener("input",N),t.addEventListener("change",O)}n.set(t,{ref:e,internals:r}),e.constructor.formAssociated&&e.formAssociatedCallback&&setTimeout((()=>{e.formAssociatedCallback.apply(e,[t])}),0),C(t)}},_=e=>{let t=e.parentNode;return t&&"FORM"!==t.tagName&&(t=_(t)),t},F=(e,t,r=DOMException)=>{if(!e.constructor.formAssociated)throw new r(t)},L=(e,t,r)=>{const a=l.get(e);return a&&a.size&&a.forEach((e=>{o.get(e)[r]()||(t=!1)})),t},D=e=>{if(e.constructor.formAssociated){const t=o.get(e),{labels:r,form:a}=t;I(e,r),S(e,a,t)}};function V(){return"undefined"!=typeof MutationObserver}class W{constructor(){this.badInput=!1,this.customError=!1,this.patternMismatch=!1,this.rangeOverflow=!1,this.rangeUnderflow=!1,this.stepMismatch=!1,this.tooLong=!1,this.tooShort=!1,this.typeMismatch=!1,this.valid=!0,this.valueMissing=!1,Object.seal(this)}}const P=e=>{let t=!0;for(let r in e)"valid"!==r&&!1!==e[r]&&(t=!1);return t},H=new WeakMap;function j(e,t){e.toggleAttribute(t,!0),e.part&&e.part.add(t)}class U extends Set{static get isPolyfilled(){return!0}constructor(e){if(super(),!e||!e.tagName||-1===e.tagName.indexOf("-"))throw new TypeError("Illegal constructor");H.set(this,e)}add(e){if(!/^--/.test(e)||"string"!=typeof e)throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${e} must start with '--'.`);const t=super.add(e),r=H.get(this),a=`state${e}`;return r.isConnected?j(r,a):setTimeout((()=>{j(r,a)})),t}clear(){for(let[e]of this.entries())this.delete(e);super.clear()}delete(e){const t=super.delete(e),r=H.get(this);return r.isConnected?(r.toggleAttribute(`state${e}`,!1),r.part&&r.part.remove(`state${e}`)):setTimeout((()=>{r.toggleAttribute(`state${e}`,!1),r.part&&r.part.remove(`state${e}`)})),t}}function $(e,t,r,a){if("a"===r&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?a:"a"===r?a.call(e):a?a.value:t.get(e)}var z;class B{constructor(e){z.set(this,void 0),function(e,t,r,a,o){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===a?o.call(e,r):o?o.value=r:t.set(e,r)}(this,z,e,"f");for(let t=0;t<e.length;t++){let r=e[t];this[t]=r,r.hasAttribute("name")&&(this[r.getAttribute("name")]=r)}Object.freeze(this)}get length(){return $(this,z,"f").length}[(z=new WeakMap,Symbol.iterator)](){return $(this,z,"f")[Symbol.iterator]()}item(e){return null==this[e]?null:this[e]}namedItem(e){return null==this[e]?null:this[e]}}class q{static get isPolyfilled(){return!0}constructor(e){if(!e||!e.tagName||-1===e.tagName.indexOf("-"))throw new TypeError("Illegal constructor");const i=e.getRootNode(),n=new W;this.states=new U(e),t.set(this,e),r.set(this,n),o.set(e,this),((e,t)=>{for(let r in g){t[r]=null;let a=null;const o=g[r];Object.defineProperty(t,r,{get:()=>a,set(r){a=r,e.isConnected?e.setAttribute(o,r):d.set(e,t)}})}})(e,this),((e,t)=>{var r;a.set(t,[]),null===(r=b.observe)||void 0===r||r.call(b,e,w)})(e,this),Object.seal(this),i instanceof DocumentFragment&&(e=>{var t,r;const a=new MutationObserver(A);(null===(t=null===window||void 0===window?void 0:window.ShadyDOM)||void 0===t?void 0:t.inUse)&&e.mode&&e.host&&(e=e.host),null===(r=a.observe)||void 0===r||r.call(a,e,{childList:!0}),h.set(e,a)})(i)}checkValidity(){const e=t.get(this);if(F(e,"Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;const a=r.get(this);if(!a.valid){const t=new Event("invalid",{bubbles:!1,cancelable:!0,composed:!1});e.dispatchEvent(t)}return a.valid}get form(){const e=t.get(this);let r;return F(e,"Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element."),!0===e.constructor.formAssociated&&(r=_(e)),r}get labels(){const e=t.get(this);F(e,"Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");const r=e.getAttribute("id"),a=e.getRootNode();return a&&r?a.querySelectorAll(`[for="${r}"]`):[]}reportValidity(){const e=t.get(this);if(F(e,"Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;const r=this.checkValidity(),a=m.get(this);if(a&&!e.constructor.formAssociated)throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");return!r&&a&&(e.focus(),a.focus()),r}setFormValue(e){const r=t.get(this);if(F(r,"Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."),T(this),null==e||e instanceof FormData)null!=e&&e instanceof FormData&&Array.from(e).reverse().forEach((([e,t])=>{if("string"==typeof t){const a=x(r,this);a.name=e,a.value=t}}));else if(r.getAttribute("name")){x(r,this).value=e}c.set(r,e)}setValidity(e,a,o){const n=t.get(this);if(F(n,"Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!e)throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");m.set(this,o);const s=r.get(this),l={};for(const t in e)l[t]=e[t];var c;0===Object.keys(l).length&&((c=s).badInput=!1,c.customError=!1,c.patternMismatch=!1,c.rangeOverflow=!1,c.rangeUnderflow=!1,c.stepMismatch=!1,c.tooLong=!1,c.tooShort=!1,c.typeMismatch=!1,c.valid=!0,c.valueMissing=!1);const d=Object.assign(Object.assign({},s),l);delete d.valid;const{valid:u}=((e,t,r)=>(e.valid=P(t),Object.keys(t).forEach((r=>e[r]=t[r])),r&&C(r),e))(s,d,this.form);if(!u&&!a)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");i.set(this,u?"":a),n.isConnected?(n.toggleAttribute("internals-invalid",!u),n.toggleAttribute("internals-valid",u),n.setAttribute("aria-invalid",`${!u}`)):p.set(n,this)}get shadowRoot(){const e=t.get(this),r=u.get(e);return r||null}get validationMessage(){const e=t.get(this);return F(e,"Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."),i.get(this)}get validity(){const e=t.get(this);F(e,"Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element.");return r.get(this)}get willValidate(){const e=t.get(this);return F(e,"Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."),!(e.disabled||e.hasAttribute("disabled")||e.hasAttribute("readonly"))}}let Y=!1,K=!1;function Z(e){K||(K=!0,window.CustomStateSet=U,e&&(HTMLElement.prototype.attachInternals=function(...t){const r=e.call(this,t);return r.states=new U(this),r}))}function Q(e=!0){if(!Y){if(Y=!0,"undefined"!=typeof window&&(window.ElementInternals=q),"undefined"!=typeof CustomElementRegistry){const t=CustomElementRegistry.prototype.define;CustomElementRegistry.prototype.define=function(e,r,a){if(r.formAssociated){const e=r.prototype.connectedCallback;r.prototype.connectedCallback=function(){f.has(this)||(f.set(this,!0),this.hasAttribute("disabled")&&M(this,!0)),null!=e&&e.apply(this),D(this)}}t.call(this,e,r,a)}}if("undefined"!=typeof HTMLElement&&(HTMLElement.prototype.attachInternals=function(){if(!this.tagName)return{};if(-1===this.tagName.indexOf("-"))throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");if(o.has(this))throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");return new q(this)}),"undefined"!=typeof Element){function r(...e){const t=a.apply(this,e);if(u.set(this,t),V()){const e=new MutationObserver(y);window.ShadyDOM?e.observe(this,R):e.observe(t,R),s.set(this,e)}return t}const a=Element.prototype.attachShadow;Element.prototype.attachShadow=r}if(V()&&"undefined"!=typeof document){new MutationObserver(y).observe(document.documentElement,R)}"undefined"!=typeof HTMLFormElement&&function(){const e=HTMLFormElement.prototype.checkValidity;HTMLFormElement.prototype.checkValidity=function(...t){let r=e.apply(this,t);return L(this,r,"checkValidity")};const t=HTMLFormElement.prototype.reportValidity;HTMLFormElement.prototype.reportValidity=function(...e){let r=t.apply(this,e);return L(this,r,"reportValidity")};const{get:r}=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"elements");Object.defineProperty(HTMLFormElement.prototype,"elements",{get(...e){const t=r.call(this,...e),a=Array.from(l.get(this)||[]);if(0===a.length)return t;const o=Array.from(t).concat(a).sort(((e,t)=>e.compareDocumentPosition?2&e.compareDocumentPosition(t)?1:-1:0));return new B(o)}})}(),(e||"undefined"!=typeof window&&!window.CustomStateSet)&&Z()}}!!customElements.polyfillWrapFlushCallback||(!function(){if("undefined"==typeof window||!window.ElementInternals||!HTMLElement.prototype.attachInternals)return!1;class e extends HTMLElement{constructor(){super(),this.internals=this.attachInternals()}}const t=`element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g,"")}`;customElements.define(t,e);const r=new e;return["shadowRoot","form","willValidate","validity","validationMessage","labels","setFormValue","setValidity","checkValidity","reportValidity"].every((e=>e in r.internals))}()?Q(!1):"undefined"==typeof window||window.CustomStateSet||Z(HTMLElement.prototype.attachInternals)),e.forceCustomStateSetPolyfill=Z,e.forceElementInternalsPolyfill=Q,Object.defineProperty(e,"__esModule",{value:!0})}({})}};
//# sourceMappingURL=1550.NURUr0GMBh8.js.map