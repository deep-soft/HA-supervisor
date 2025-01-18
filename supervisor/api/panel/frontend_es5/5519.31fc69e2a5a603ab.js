/*! For license information please see 5519.31fc69e2a5a603ab.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["5519"],{574:function(t,e,r){r.d(e,{g:function(){return v}});r(71695),r(47021);var o=r(9065),i=r(57243),n=r(50778),a=r(35359),s=r(43921);let l,d,c,p,h,u,b=t=>t;class v extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){var t,e;const r=null!==(t=this.count)&&void 0!==t?t:-1,o=null!==(e=this.max)&&void 0!==e?e:-1;return r<0||o<=0?"":`${r} / ${o}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){var t,e,r,o;const n=this.renderLabel(!0),s=this.renderLabel(!1),d=null===(t=this.renderOutline)||void 0===t?void 0:t.call(this,n),c={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return(0,i.dy)(l||(l=b` <div class="field ${0}"> <div class="container-overflow"> ${0} <slot name="container"></slot> ${0} ${0} ${0} <div class="container"> <div class="start"> <slot name="start"></slot> </div> <div class="middle"> <div class="label-wrapper"> ${0} ${0} </div> <div class="content"> <slot></slot> </div> </div> <div class="end"> <slot name="end"></slot> </div> </div> </div> ${0} </div> `),(0,a.$)(c),null===(e=this.renderBackground)||void 0===e?void 0:e.call(this),null===(r=this.renderStateLayer)||void 0===r?void 0:r.call(this),null===(o=this.renderIndicator)||void 0===o?void 0:o.call(this),d,s,d?i.Ld:n,this.renderSupportingText())}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return i.Ld;const r=(0,i.dy)(d||(d=b`<span>${0}</span>`),t),o=e?(0,i.dy)(c||(c=b`<span class="counter">${0}</span>`),e):i.Ld,n=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":i.Ld;return(0,i.dy)(p||(p=b` <div class="supporting-text" role="${0}">${0}${0}</div> <slot name="aria-describedby" @slotchange="${0}"></slot> `),n,r,o,this.updateSlottedAriaDescribedBy)}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)(0,i.sY)((0,i.dy)(h||(h=b`${0} ${0}`),this.supportingOrErrorText,this.counterText),t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return i.Ld;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!e,floating:t,resting:!t},o=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return(0,i.dy)(u||(u=b` <span class="label ${0}" aria-hidden="${0}">${0}</span> `),(0,a.$)(r),!e,o)}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){var r,o,i,n,a;if(!this.label)return;null!==(r=t)&&void 0!==r||(t=this.focused),null!==(o=e)&&void 0!==o||(e=this.populated);(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,null===(i=this.labelAnimation)||void 0===i||i.cancel(),this.labelAnimation=null===(n=this.floatingLabelEl)||void 0===n?void 0:n.animate(this.getLabelKeyframes(),{duration:150,easing:s.Xt.STANDARD}),null===(a=this.labelAnimation)||void 0===a||a.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:r,y:o,height:i}=t.getBoundingClientRect(),{x:n,y:a,height:s}=e.getBoundingClientRect(),l=t.scrollWidth,d=e.scrollWidth,c=d/l,p=`translateX(${n-r}px) translateY(${a-o+Math.round((s-i*c)/2)}px) scale(${c})`,h="translateX(0) translateY(0) scale(1)",u=e.clientWidth,b=d>u?u/c+"px":"";return this.focused||this.populated?[{transform:p,width:b},{transform:h,width:b}]:[{transform:h,width:b},{transform:p,width:b}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"disabled",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"error",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"focused",void 0),(0,o.__decorate)([(0,n.Cb)()],v.prototype,"label",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean,attribute:"no-asterisk"})],v.prototype,"noAsterisk",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"populated",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"required",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],v.prototype,"resizable",void 0),(0,o.__decorate)([(0,n.Cb)({attribute:"supporting-text"})],v.prototype,"supportingText",void 0),(0,o.__decorate)([(0,n.Cb)({attribute:"error-text"})],v.prototype,"errorText",void 0),(0,o.__decorate)([(0,n.Cb)({type:Number})],v.prototype,"count",void 0),(0,o.__decorate)([(0,n.Cb)({type:Number})],v.prototype,"max",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean,attribute:"has-start"})],v.prototype,"hasStart",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean,attribute:"has-end"})],v.prototype,"hasEnd",void 0),(0,o.__decorate)([(0,n.NH)({slot:"aria-describedby"})],v.prototype,"slottedAriaDescribedBy",void 0),(0,o.__decorate)([(0,n.SB)()],v.prototype,"isAnimating",void 0),(0,o.__decorate)([(0,n.SB)()],v.prototype,"refreshErrorAlert",void 0),(0,o.__decorate)([(0,n.SB)()],v.prototype,"disableTransitions",void 0),(0,o.__decorate)([(0,n.IO)(".label.floating")],v.prototype,"floatingLabelEl",void 0),(0,o.__decorate)([(0,n.IO)(".label.resting")],v.prototype,"restingLabelEl",void 0),(0,o.__decorate)([(0,n.IO)(".container")],v.prototype,"containerEl",void 0)},16858:function(t,e,r){r.d(e,{W:function(){return i}});let o;const i=(0,r(57243).iv)(o||(o=(t=>t)`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.container-overflow,.field{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.end,.middle,.start{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.end,.start{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(.2, 0, 0, 1)}.focused .content,.no-label .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.focused .content,.disabled.no-label .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors:active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors:active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors:active){.disabled .supporting-text{color:GrayText;opacity:1}}}`))},79679:function(t,e,r){function o(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),o=t.dispatchEvent(r);return o||e.preventDefault(),o}r.d(e,{e:function(){return o}})},80635:function(t,e,r){r.d(e,{gZ:function(){return a},jd:function(){return n},xF:function(){return c}});r(63721),r(52247),r(71695),r(19423),r(47021);var o=r(57243),i=r(61073);const n=Symbol("createValidator"),a=Symbol("getValidityAnchor"),s=Symbol("privateValidator"),l=Symbol("privateSyncValidity"),d=Symbol("privateCustomValidationMessage");function c(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[l](),this[i.b].validity}get validationMessage(){return this[l](),this[i.b].validationMessage}get willValidate(){return this[l](),this[i.b].willValidate}checkValidity(){return this[l](),this[i.b].checkValidity()}reportValidity(){return this[l](),this[i.b].reportValidity()}setCustomValidity(t){this[d]=t,this[l]()}requestUpdate(t,e,r){super.requestUpdate(t,e,r),this[l]()}firstUpdated(t){super.firstUpdated(t),this[l]()}[(e=d,l)](){var t;if(o.sk)return;this[s]||(this[s]=this[n]());const{validity:e,validationMessage:r}=this[s].getValidity(),l=!!this[d],c=this[d]||r;this[i.b].setValidity(Object.assign(Object.assign({},e),{},{customError:l}),c,null!==(t=this[a]())&&void 0!==t?t:void 0)}[n](){throw new Error("Implement [createValidator]")}[a](){throw new Error("Implement [getValidityAnchor]")}}return r}},61073:function(t,e,r){r.d(e,{N:function(){return n},b:function(){return o}});r(85601),r(63721);const o=Symbol("internals"),i=Symbol("privateInternals");function n(t){return class extends t{get[o](){return this[i]||(this[i]=this.attachInternals()),this[i]}}}},19484:function(t,e,r){r.d(e,{$u:function(){return a},hz:function(){return l}});r(22152),r(63721),r(52247);var o=r(9065),i=r(50778),n=r(61073);const a=Symbol("getFormValue"),s=Symbol("getFormState");function l(t){class e extends t{get form(){return this[n.b].form}get labels(){return this[n.b].labels}get name(){var t;return null!==(t=this.getAttribute("name"))&&void 0!==t?t:""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,r){if("name"!==t&&"disabled"!==t)super.attributeChangedCallback(t,e,r);else{const r="disabled"===t?null!==e:e;this.requestUpdate(t,r)}}requestUpdate(t,e,r){super.requestUpdate(t,e,r),this[n.b].setFormValue(this[a](),this[s]())}[a](){throw new Error("Implement [getFormValue]")}[s](){return this[a]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,(0,o.__decorate)([(0,i.Cb)({noAccessor:!0})],e.prototype,"name",null),(0,o.__decorate)([(0,i.Cb)({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}},19462:function(t,e,r){r.d(e,{d:function(){return n},o:function(){return c}});r(63721),r(52247),r(71695),r(46692),r(47021);var o=r(57243),i=r(61073);const n=Symbol("onReportValidity"),a=Symbol("privateCleanupFormListeners"),s=Symbol("privateDoNotReportInvalid"),l=Symbol("privateIsSelfReportingValidity"),d=Symbol("privateCallOnReportValidity");function c(t){var e,r,c;class h extends t{constructor(...t){super(...t),this[e]=new AbortController,this[r]=!1,this[c]=!1,o.sk||this.addEventListener("invalid",(t=>{!this[s]&&t.isTrusted&&this.addEventListener("invalid",(()=>{this[d](t)}),{once:!0})}),{capture:!0})}checkValidity(){this[s]=!0;const t=super.checkValidity();return this[s]=!1,t}reportValidity(){this[l]=!0;const t=super.reportValidity();return t&&this[d](null),this[l]=!1,t}[(e=a,r=s,c=l,d)](t){const e=null==t?void 0:t.defaultPrevented;if(e)return;this[n](t);!e&&(null==t?void 0:t.defaultPrevented)&&(this[l]||function(t,e){if(!t)return!0;let r;for(const o of t.elements)if(o.matches(":invalid")){r=o;break}return r===e}(this[i.b].form,this))&&this.focus()}[n](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[a].abort(),t&&(this[a]=new AbortController,function(t,e,r,o){const i=function(t){if(!p.has(t)){const e=new EventTarget;p.set(t,e);for(const r of["reportValidity","requestSubmit"]){const o=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(o,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return p.get(t)}(e);let n,a=!1,s=!1;i.addEventListener("before",(()=>{s=!0,n=new AbortController,a=!1,t.addEventListener("invalid",(()=>{a=!0}),{signal:n.signal})}),{signal:o}),i.addEventListener("after",(()=>{var t;s=!1,null===(t=n)||void 0===t||t.abort(),a||r()}),{signal:o}),e.addEventListener("submit",(()=>{s||r()}),{signal:o})}(this,t,(()=>{this[d](null)}),this[a].signal))}}return h}const p=new WeakMap},14952:function(t,e,r){r.d(e,{c:function(){return o}});class o{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:r}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:r,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}}}]);
//# sourceMappingURL=5519.31fc69e2a5a603ab.js.map