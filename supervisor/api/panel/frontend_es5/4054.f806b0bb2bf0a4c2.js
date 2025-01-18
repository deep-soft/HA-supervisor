/*! For license information please see 4054.f806b0bb2bf0a4c2.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["4054"],{78755:function(t,e,i){i.d(e,{g:()=>_});var s=i("9065"),r=i("50778"),n=(i("71695"),i("19423"),i("47021"),i("57618"),i("26499"),i("23111"),i("57243")),o=i("35359"),a=i("79840"),c=i("13823"),l=i("64840");let h,d,u,g,p,m,f,y,v=t=>t;const x=(0,c.T)(n.oi);class b extends x{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&"link"!==this.type}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem((0,n.dy)(h||(h=v` <md-item> <div slot="container"> ${0} ${0} </div> <slot name="start" slot="start"></slot> <slot name="end" slot="end"></slot> ${0} </md-item> `),this.renderRipple(),this.renderFocusRing(),this.renderBody()))}renderListItem(t){const e="link"===this.type;let i;switch(this.type){case"link":i=(0,a.i0)(d||(d=v`a`));break;case"button":i=(0,a.i0)(u||(u=v`button`));break;default:i=(0,a.i0)(g||(g=v`li`))}const s="text"!==this.type,r=e&&this.target?this.target:n.Ld;return(0,a.dy)(p||(p=v`
      <${0}
        id="item"
        tabindex="${0}"
        ?disabled=${0}
        role="listitem"
        aria-selected=${0}
        aria-checked=${0}
        aria-expanded=${0}
        aria-haspopup=${0}
        class="list-item ${0}"
        href=${0}
        target=${0}
        @focus=${0}
      >${0}</${0}>
    `),i,this.isDisabled||!s?-1:0,this.isDisabled,this.ariaSelected||n.Ld,this.ariaChecked||n.Ld,this.ariaExpanded||n.Ld,this.ariaHasPopup||n.Ld,(0,o.$)(this.getRenderClasses()),this.href||n.Ld,r,this.onFocus,t,i)}renderRipple(){return"text"===this.type?n.Ld:(0,n.dy)(m||(m=v` <md-ripple part="ripple" for="item" ?disabled="${0}"></md-ripple>`),this.isDisabled)}renderFocusRing(){return"text"===this.type?n.Ld:(0,n.dy)(f||(f=v` <md-focus-ring @visibility-changed="${0}" part="focus-ring" for="item" inward></md-focus-ring>`),this.onFocusRingVisibilityChanged)}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return(0,n.dy)(y||(y=v` <slot></slot> <slot name="overline" slot="overline"></slot> <slot name="headline" slot="headline"></slot> <slot name="supporting-text" slot="supporting-text"></slot> <slot name="trailing-supporting-text" slot="trailing-supporting-text"></slot> `))}onFocus(){-1===this.tabIndex&&this.dispatchEvent((0,l.oh)())}focus(){var t;null===(t=this.listItemRoot)||void 0===t||t.focus()}}b.shadowRootOptions=Object.assign(Object.assign({},n.oi.shadowRootOptions),{},{delegatesFocus:!0}),(0,s.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0),(0,s.__decorate)([(0,r.Cb)({reflect:!0})],b.prototype,"type",void 0),(0,s.__decorate)([(0,r.Cb)({type:Boolean,attribute:"md-list-item",reflect:!0})],b.prototype,"isListItem",void 0),(0,s.__decorate)([(0,r.Cb)()],b.prototype,"href",void 0),(0,s.__decorate)([(0,r.Cb)()],b.prototype,"target",void 0),(0,s.__decorate)([(0,r.IO)(".list-item")],b.prototype,"listItemRoot",void 0);let M;const L=(0,n.iv)(M||(M=(t=>t)`:host{display:flex;-webkit-tap-highlight-color:transparent;--md-ripple-hover-color:var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity:var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color:var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity:var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape:8px}a,button,li{background:0 0;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:0;-webkit-tap-highlight-color:transparent;width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, .3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color,var(--md-sys-color-on-surface,#1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight,var(--md-sys-typescale-body-large-weight,var(--md-ref-typeface-weight-regular,400)));min-height:var(--md-list-item-one-line-container-height,56px);padding-top:var(--md-list-item-top-space,12px);padding-bottom:var(--md-list-item-bottom-space,12px);padding-inline-start:var(--md-list-item-leading-space,16px);padding-inline-end:var(--md-list-item-trailing-space,16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height,72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, .875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, .6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight,var(--md-sys-typescale-label-small-weight,var(--md-ref-typeface-weight-medium,500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color,var(--md-sys-color-on-surface-variant,#49454f))}@media(forced-colors:active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}`));let _=class extends b{};_.styles=[L],_=(0,s.__decorate)([(0,r.Mo)("md-list-item")],_)},623:function(t,e,i){i.d(e,{j:()=>g});var s=i("9065"),r=i("50778"),n=(i("85601"),i("71695"),i("92519"),i("42179"),i("89256"),i("24931"),i("88463"),i("57449"),i("19814"),i("47021"),i("57243")),o=i("7750");let a,c=t=>t;const l=new Set(Object.values(o.E));class h extends n.oi{get items(){return this.listController.items}constructor(){super(),this.listController=new o.g({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>"rtl"===getComputedStyle(this).direction,deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>l.has(t),isActivatable:t=>!t.disabled&&"text"!==t.type}),this.internals=this.attachInternals(),n.sk||(this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown))}render(){return(0,n.dy)(a||(a=c` <slot @deactivate-items="${0}" @request-activation="${0}" @slotchange="${0}"> </slot> `),this.listController.onDeactivateItems,this.listController.onRequestActivation,this.listController.onSlotchange)}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}(0,s.__decorate)([(0,r.NH)({flatten:!0})],h.prototype,"slotItems",void 0);let d;const u=(0,n.iv)(d||(d=(t=>t)`:host{background:var(--md-list-container-color,var(--md-sys-color-surface,#fef7ff));color:unset;display:flex;flex-direction:column;outline:0;padding:8px 0;position:relative}`));let g=class extends h{};g.styles=[u],g=(0,s.__decorate)([(0,r.Mo)("md-list")],g)},41298:function(t,e,i){i.d(e,{Z:function(){return T}});i(52247),i(71695),i(92745),i(61893),i(77439),i(19423),i(95078),i(19134),i(11740),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814),i(97499),i(44495),i(47706),i(32114),i(88044),i(81804),i(39527),i(99790),i(41360),i(13334),i(47021);function s(t){return Array.isArray?Array.isArray(t):"[object Array]"===h(t)}function r(t){return"string"==typeof t}function n(t){return"number"==typeof t}function o(t){return!0===t||!1===t||function(t){return a(t)&&null!==t}(t)&&"[object Boolean]"==h(t)}function a(t){return"object"==typeof t}function c(t){return null!=t}function l(t){return!t.trim().length}function h(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const d=Object.prototype.hasOwnProperty;class u{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let i=g(t);this._keys.push(i),this._keyMap[i.id]=i,e+=i.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function g(t){let e=null,i=null,n=null,o=1,a=null;if(r(t)||s(t))n=t,e=p(t),i=m(t);else{if(!d.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const s=t.name;if(n=s,d.call(t,"weight")&&(o=t.weight,o<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(s));e=p(s),i=m(s),a=t.getFn}return{path:e,id:i,weight:o,src:n,getFn:a}}function p(t){return s(t)?t:t.split(".")}function m(t){return s(t)?t.join("."):t}const f={useExtendedSearch:!1,getFn:function(t,e){let i=[],a=!1;const l=(t,e,h)=>{if(c(t))if(e[h]){const d=t[e[h]];if(!c(d))return;if(h===e.length-1&&(r(d)||n(d)||o(d)))i.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(d));else if(s(d)){a=!0;for(let t=0,i=d.length;t<i;t+=1)l(d[t],e,h+1)}else e.length&&l(d,e,h+1)}else i.push(t)};return l(t,r(e)?e.split("."):e,0),a?i:i[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var y=Object.assign(Object.assign(Object.assign(Object.assign({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),f);const v=/[^ ]+/g;class x{constructor({getFn:t=y.getFn,fieldNormWeight:e=y.fieldNormWeight}={}){this.norm=function(t=1,e=3){const i=new Map,s=Math.pow(10,e);return{get(e){const r=e.match(v).length;if(i.has(r))return i.get(r);const n=1/Math.pow(r,.5*t),o=parseFloat(Math.round(n*s)/s);return i.set(r,o),o},clear(){i.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,r(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();r(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,i=this.size();e<i;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!c(t)||l(t))return;let i={v:t,i:e,n:this.norm.get(t)};this.records.push(i)}_addObject(t,e){let i={i:e,$:{}};this.keys.forEach(((e,n)=>{let o=e.getFn?e.getFn(t):this.getFn(t,e.path);if(c(o))if(s(o)){let t=[];const e=[{nestedArrIndex:-1,value:o}];for(;e.length;){const{nestedArrIndex:i,value:n}=e.pop();if(c(n))if(r(n)&&!l(n)){let e={v:n,i:i,n:this.norm.get(n)};t.push(e)}else s(n)&&n.forEach(((t,i)=>{e.push({nestedArrIndex:i,value:t})}))}i.$[n]=t}else if(r(o)&&!l(o)){let t={v:o,n:this.norm.get(o)};i.$[n]=t}})),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function b(t,e,{getFn:i=y.getFn,fieldNormWeight:s=y.fieldNormWeight}={}){const r=new x({getFn:i,fieldNormWeight:s});return r.setKeys(t.map(g)),r.setSources(e),r.create(),r}function M(t,{errors:e=0,currentLocation:i=0,expectedLocation:s=0,distance:r=y.distance,ignoreLocation:n=y.ignoreLocation}={}){const o=e/t.length;if(n)return o;const a=Math.abs(s-i);return r?o+a/r:a?1:o}const L=32;function _(t,e,i,{location:s=y.location,distance:r=y.distance,threshold:n=y.threshold,findAllMatches:o=y.findAllMatches,minMatchCharLength:a=y.minMatchCharLength,includeMatches:c=y.includeMatches,ignoreLocation:l=y.ignoreLocation}={}){if(e.length>L)throw new Error(`Pattern length exceeds max of ${L}.`);const h=e.length,d=t.length,u=Math.max(0,Math.min(s,d));let g=n,p=u;const m=a>1||c,f=m?Array(d):[];let v;for(;(v=t.indexOf(e,p))>-1;){let t=M(e,{currentLocation:v,expectedLocation:u,distance:r,ignoreLocation:l});if(g=Math.min(t,g),p=v+h,m){let t=0;for(;t<h;)f[v+t]=1,t+=1}}p=-1;let x=[],b=1,_=h+d;const k=1<<h-1;for(let y=0;y<h;y+=1){let s=0,n=_;for(;s<n;){M(e,{errors:y,currentLocation:u+n,expectedLocation:u,distance:r,ignoreLocation:l})<=g?s=n:_=n,n=Math.floor((_-s)/2+s)}_=n;let a=Math.max(1,u-n+1),c=o?d:Math.min(u+n,d)+h,v=Array(c+2);v[c+1]=(1<<y)-1;for(let o=c;o>=a;o-=1){let s=o-1,n=i[t.charAt(s)];if(m&&(f[s]=+!!n),v[o]=(v[o+1]<<1|1)&n,y&&(v[o]|=(x[o+1]|x[o])<<1|1|x[o+1]),v[o]&k&&(b=M(e,{errors:y,currentLocation:s,expectedLocation:u,distance:r,ignoreLocation:l}),b<=g)){if(g=b,p=s,p<=u)break;a=Math.max(1,2*u-p)}}if(M(e,{errors:y+1,currentLocation:u,expectedLocation:u,distance:r,ignoreLocation:l})>g)break;x=v}const w={isMatch:p>=0,score:Math.max(.001,b)};if(m){const t=function(t=[],e=y.minMatchCharLength){let i=[],s=-1,r=-1,n=0;for(let o=t.length;n<o;n+=1){let o=t[n];o&&-1===s?s=n:o||-1===s||(r=n-1,r-s+1>=e&&i.push([s,r]),s=-1)}return t[n-1]&&n-s>=e&&i.push([s,n-1]),i}(f,a);t.length?c&&(w.indices=t):w.isMatch=!1}return w}function k(t){let e={};for(let i=0,s=t.length;i<s;i+=1){const r=t.charAt(i);e[r]=(e[r]||0)|1<<s-i-1}return e}class w{constructor(t,{location:e=y.location,threshold:i=y.threshold,distance:s=y.distance,includeMatches:r=y.includeMatches,findAllMatches:n=y.findAllMatches,minMatchCharLength:o=y.minMatchCharLength,isCaseSensitive:a=y.isCaseSensitive,ignoreLocation:c=y.ignoreLocation}={}){if(this.options={location:e,threshold:i,distance:s,includeMatches:r,findAllMatches:n,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(t,e)=>{this.chunks.push({pattern:t,alphabet:k(t),startIndex:e})},h=this.pattern.length;if(h>L){let t=0;const e=h%L,i=h-e;for(;t<i;)l(this.pattern.substr(t,L),t),t+=L;if(e){const t=h-L;l(this.pattern.substr(t),t)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:i}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return i&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:r,threshold:n,findAllMatches:o,minMatchCharLength:a,ignoreLocation:c}=this.options;let l=[],h=0,d=!1;this.chunks.forEach((({pattern:e,alphabet:u,startIndex:g})=>{const{isMatch:p,score:m,indices:f}=_(t,e,u,{location:s+g,distance:r,threshold:n,findAllMatches:o,minMatchCharLength:a,includeMatches:i,ignoreLocation:c});p&&(d=!0),h+=m,p&&f&&(l=[...l,...f])}));let u={isMatch:d,score:d?h/this.chunks.length:1};return d&&i&&(u.indices=l),u}}class C{constructor(t){this.pattern=t}static isMultiMatch(t){return I(t,this.multiRegex)}static isSingleMatch(t){return I(t,this.singleRegex)}search(){}}function I(t,e){const i=t.match(e);return i?i[1]:null}class $ extends C{constructor(t,{location:e=y.location,threshold:i=y.threshold,distance:s=y.distance,includeMatches:r=y.includeMatches,findAllMatches:n=y.findAllMatches,minMatchCharLength:o=y.minMatchCharLength,isCaseSensitive:a=y.isCaseSensitive,ignoreLocation:c=y.ignoreLocation}={}){super(t),this._bitapSearch=new w(t,{location:e,threshold:i,distance:s,includeMatches:r,findAllMatches:n,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class S extends C{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,i=0;const s=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,i))>-1;)i=e+r,s.push([e,i-1]);const n=!!s.length;return{isMatch:n,score:n?0:1,indices:s}}}const R=[class extends C{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},S,class extends C{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends C{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends C{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends C{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends C{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},$],A=R.length,F=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const E=new Set([$.type,S.type]);class O{constructor(t,{isCaseSensitive:e=y.isCaseSensitive,includeMatches:i=y.includeMatches,minMatchCharLength:s=y.minMatchCharLength,ignoreLocation:r=y.ignoreLocation,findAllMatches:n=y.findAllMatches,location:o=y.location,threshold:a=y.threshold,distance:c=y.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:i,minMatchCharLength:s,findAllMatches:n,ignoreLocation:r,location:o,threshold:a,distance:c},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let i=t.trim().split(F).filter((t=>t&&!!t.trim())),s=[];for(let r=0,n=i.length;r<n;r+=1){const t=i[r];let n=!1,o=-1;for(;!n&&++o<A;){const i=R[o];let r=i.isMultiMatch(t);r&&(s.push(new i(r,e)),n=!0)}if(!n)for(o=-1;++o<A;){const i=R[o];let r=i.isSingleMatch(t);if(r){s.push(new i(r,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let r=0,n=[],o=0;for(let a=0,c=e.length;a<c;a+=1){const s=e[a];n.length=0,r=0;for(let e=0,a=s.length;e<a;e+=1){const a=s[e],{isMatch:c,indices:l,score:h}=a.search(t);if(!c){o=0,r=0,n.length=0;break}if(r+=1,o+=h,i){const t=a.constructor.type;E.has(t)?n=[...n,...l]:n.push(l)}}if(r){let t={isMatch:!0,score:o/r};return i&&(t.indices=n),t}}return{isMatch:!1,score:1}}}const N=[];function j(t,e){for(let i=0,s=N.length;i<s;i+=1){let s=N[i];if(s.condition(t,e))return new s(t,e)}return new w(t,e)}const z="$and",W="$or",P="$path",K="$val",D=t=>!(!t[z]&&!t[W]),q=t=>({[z]:Object.keys(t).map((e=>({[e]:t[e]})))});function B(t,e,{auto:i=!0}={}){const n=t=>{let o=Object.keys(t);const c=(t=>!!t[P])(t);if(!c&&o.length>1&&!D(t))return n(q(t));if((t=>!s(t)&&a(t)&&!D(t))(t)){const s=c?t[P]:o[0],n=c?t[K]:t[s];if(!r(n))throw new Error((t=>`Invalid value for key ${t}`)(s));const a={keyId:m(s),pattern:n};return i&&(a.searcher=j(n,e)),a}let l={children:[],operator:o[0]};return o.forEach((e=>{const i=t[e];s(i)&&i.forEach((t=>{l.children.push(n(t))}))})),l};return D(t)||(t=q(t)),n(t)}function V(t,e){const i=t.matches;e.matches=[],c(i)&&i.forEach((t=>{if(!c(t.indices)||!t.indices.length)return;const{indices:i,value:s}=t;let r={indices:i,value:s};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)}))}function J(t,e){e.score=t.score}class T{constructor(t,e={},i){this.options=Object.assign(Object.assign({},y),e),this.options.useExtendedSearch,this._keyStore=new u(this.options.keys),this.setCollection(t,i)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof x))throw new Error("Incorrect 'index' type");this._myIndex=e||b(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){c(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let i=0,s=this._docs.length;i<s;i+=1){const r=this._docs[i];t(r,i)&&(this.removeAt(i),i-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let l=r(t)?r(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=y.ignoreFieldNorm}){t.forEach((t=>{let i=1;t.matches.forEach((({key:t,norm:s,score:r})=>{const n=t?t.weight:null;i*=Math.pow(0===r&&n?Number.EPSILON:r,(n||1)*(e?1:s))})),t.score=i}))}(l,{ignoreFieldNorm:c}),o&&l.sort(a),n(e)&&e>-1&&(l=l.slice(0,e)),function(t,e,{includeMatches:i=y.includeMatches,includeScore:s=y.includeScore}={}){const r=[];return i&&r.push(V),s&&r.push(J),t.map((t=>{const{idx:i}=t,s={item:e[i],refIndex:i};return r.length&&r.forEach((e=>{e(t,s)})),s}))}(l,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const e=j(t,this.options),{records:i}=this._myIndex,s=[];return i.forEach((({v:t,i:i,n:r})=>{if(!c(t))return;const{isMatch:n,score:o,indices:a}=e.searchIn(t);n&&s.push({item:t,idx:i,matches:[{score:o,value:t,norm:r,indices:a}]})})),s}_searchLogical(t){const e=B(t,this.options),i=(t,e,s)=>{if(!t.children){const{keyId:i,searcher:r}=t,n=this._findMatches({key:this._keyStore.get(i),value:this._myIndex.getValueForItemAtKeyId(e,i),searcher:r});return n&&n.length?[{idx:s,item:e,matches:n}]:[]}const r=[];for(let n=0,o=t.children.length;n<o;n+=1){const o=t.children[n],a=i(o,e,s);if(a.length)r.push(...a);else if(t.operator===z)return[]}return r},s=this._myIndex.records,r={},n=[];return s.forEach((({$:t,i:s})=>{if(c(t)){let o=i(e,t,s);o.length&&(r[s]||(r[s]={idx:s,item:t,matches:[]},n.push(r[s])),o.forEach((({matches:t})=>{r[s].matches.push(...t)})))}})),n}_searchObjectList(t){const e=j(t,this.options),{keys:i,records:s}=this._myIndex,r=[];return s.forEach((({$:t,i:s})=>{if(!c(t))return;let n=[];i.forEach(((i,s)=>{n.push(...this._findMatches({key:i,value:t[s],searcher:e}))})),n.length&&r.push({idx:s,item:t,matches:n})})),r}_findMatches({key:t,value:e,searcher:i}){if(!c(e))return[];let r=[];if(s(e))e.forEach((({v:e,i:s,n:n})=>{if(!c(e))return;const{isMatch:o,score:a,indices:l}=i.searchIn(e);o&&r.push({score:a,key:t,value:e,idx:s,norm:n,indices:l})}));else{const{v:s,n:n}=e,{isMatch:o,score:a,indices:c}=i.searchIn(s);o&&r.push({score:a,key:t,value:s,norm:n,indices:c})}return r}}T.version="7.0.0",T.createIndex=b,T.parseIndex=function(t,{getFn:e=y.getFn,fieldNormWeight:i=y.fieldNormWeight}={}){const{keys:s,records:r}=t,n=new x({getFn:e,fieldNormWeight:i});return n.setKeys(s),n.setIndexRecords(r),n},T.config=y,T.parseQuery=B,function(...t){N.push(...t)}(O)}}]);
//# sourceMappingURL=4054.f806b0bb2bf0a4c2.js.map