export const id=419;export const ids=[419];export const modules={95439:(e,i,t)=>{t.d(i,{l:()=>h});var o=t(62659),a=t(76504),r=t(80792),n=(t(86176),t(21950),t(8339),t(12387)),d=t(52280),l=t(98597),s=t(196),c=t(24791);t(72214);const p=["button","ha-list-item"],h=(e,i)=>{var t;return l.qy` <div class="header_title"> <span>${i}</span> <ha-icon-button .label="${null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `};(0,o.A)([(0,s.EM)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:c.Xr,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return l.qy`<slot name="heading"> ${(0,a.A)((0,r.A)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,a.A)((0,r.A)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,p].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.A)((0,r.A)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.R,l.AH`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-12px;top:-12px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.u)},50419:(e,i,t)=>{t.r(i),t.d(i,{HaImagecropperDialog:()=>p});var o=t(62659),a=(t(21950),t(26777),t(73842),t(8339),t(29734),t(72134),t(7146),t(97157),t(56648),t(72435),t(58068),t(56889)),r=t.n(a),n=t(32609),d=t(98597),l=t(196),s=t(69760),c=(t(95439),t(14126));let p=(0,o.A)([(0,l.EM)("image-cropper-dialog")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,l.wk)()],key:"_open",value:()=>!1},{kind:"field",decorators:[(0,l.P)("img",!0)],key:"_image",value:void 0},{kind:"field",key:"_cropper",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._open=!0}},{kind:"method",key:"closeDialog",value:function(){var e;this._open=!1,this._params=void 0,null===(e=this._cropper)||void 0===e||e.destroy(),this._cropper=void 0}},{kind:"method",key:"updated",value:function(e){e.has("_params")&&this._params&&(this._cropper?this._cropper.replace(URL.createObjectURL(this._params.file)):(this._image.src=URL.createObjectURL(this._params.file),this._cropper=new(r())(this._image,{aspectRatio:this._params.options.aspectRatio,viewMode:1,dragMode:"move",minCropBoxWidth:50,ready:()=>{URL.revokeObjectURL(this._image.src)}})))}},{kind:"method",key:"render",value:function(){var e;return d.qy`<ha-dialog @closed="${this.closeDialog}" scrimClickAction escapeKeyAction .open="${this._open}"> <div class="container ${(0,s.H)({round:Boolean(null===(e=this._params)||void 0===e?void 0:e.options.round)})}"> <img alt="${this.hass.localize("ui.dialogs.image_cropper.crop_image")}"> </div> <mwc-button slot="secondaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button slot="primaryAction" @click="${this._cropImage}"> ${this.hass.localize("ui.dialogs.image_cropper.crop")} </mwc-button> </ha-dialog>`}},{kind:"method",key:"_cropImage",value:function(){this._cropper.getCroppedCanvas().toBlob((e=>{if(!e)return;const i=new File([e],this._params.file.name,{type:this._params.options.type||this._params.file.type});this._params.croppedCallback(i),this.closeDialog()}),this._params.options.type||this._params.file.type,this._params.options.quality)}},{kind:"get",static:!0,key:"styles",value:function(){return[c.nA,d.AH`${(0,d.iz)(n)} .container{max-width:640px}img{max-width:100%}.container.round .cropper-face,.container.round .cropper-view-box{border-radius:50%}.cropper-line,.cropper-point,.cropper-point.point-se::before{background-color:var(--primary-color)}`]}}]}}),d.WF)},86176:()=>{Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,i){return void 0!==i&&(i=!!i),this.hasAttribute(e)?!!i||(this.removeAttribute(e),!1):!1!==i&&(this.setAttribute(e,""),!0)})}};
//# sourceMappingURL=419.AfyGibY_SyM.js.map