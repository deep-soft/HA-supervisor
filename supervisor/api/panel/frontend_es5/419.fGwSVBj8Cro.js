(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[419],{95439:function(i,t,e){"use strict";e.d(t,{l:function(){return b}});var o,a,n,r=e(36683),d=e(89231),l=e(29864),c=e(83647),s=e(8364),p=e(76504),u=e(80792),h=e(6238),m=(e(86176),e(77052),e(53156),e(12387)),g=e(52280),v=e(98597),f=e(196),_=e(24791),k=(e(72214),["button","ha-list-item"]),b=function(i,t){var e;return(0,v.qy)(o||(o=(0,h.A)([' <div class="header_title"> <span>','</span> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> </div> '])),t,null!==(e=null==i?void 0:i.localize("ui.dialogs.generic.close"))&&void 0!==e?e:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,s.A)([(0,f.EM)("ha-dialog")],(function(i,t){var e=function(t){function e(){var t;(0,d.A)(this,e);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return t=(0,l.A)(this,e,[].concat(a)),i(t),t}return(0,c.A)(e,t),(0,r.A)(e)}(t);return{F:e,d:[{kind:"field",key:_.Xr,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,t){var e;null===(e=this.contentElement)||void 0===e||e.scrollTo(i,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,v.qy)(a||(a=(0,h.A)(['<slot name="heading"> '," </slot>"])),(0,p.A)((0,u.A)(e.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,p.A)((0,u.A)(e.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.A)((0,u.A)(e.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var i=this;return function(){i._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.R,(0,v.AH)(n||(n=(0,h.A)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-12px;top:-12px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),m.u)},50419:function(i,t,e){"use strict";e.r(t),e.d(t,{HaImagecropperDialog:function(){return _}});var o,a,n=e(6238),r=e(36683),d=e(89231),l=e(29864),c=e(83647),s=e(8364),p=(e(77052),e(21950),e(848),e(68113),e(26777),e(56262),e(73842),e(8339),e(29734),e(72134),e(7146),e(97157),e(56648),e(72435),e(58068),e(56889)),u=e.n(p),h=e(32609),m=e(98597),g=e(196),v=e(69760),f=(e(95439),e(14126)),_=(0,s.A)([(0,g.EM)("image-cropper-dialog")],(function(i,t){var e=function(t){function e(){var t;(0,d.A)(this,e);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return t=(0,l.A)(this,e,[].concat(a)),i(t),t}return(0,c.A)(e,t),(0,r.A)(e)}(t);return{F:e,d:[{kind:"field",decorators:[(0,g.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,g.wk)()],key:"_open",value:function(){return!1}},{kind:"field",decorators:[(0,g.P)("img",!0)],key:"_image",value:void 0},{kind:"field",key:"_cropper",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._open=!0}},{kind:"method",key:"closeDialog",value:function(){var i;this._open=!1,this._params=void 0,null===(i=this._cropper)||void 0===i||i.destroy(),this._cropper=void 0}},{kind:"method",key:"updated",value:function(i){var t=this;i.has("_params")&&this._params&&(this._cropper?this._cropper.replace(URL.createObjectURL(this._params.file)):(this._image.src=URL.createObjectURL(this._params.file),this._cropper=new(u())(this._image,{aspectRatio:this._params.options.aspectRatio,viewMode:1,dragMode:"move",minCropBoxWidth:50,ready:function(){URL.revokeObjectURL(t._image.src)}})))}},{kind:"method",key:"render",value:function(){var i;return(0,m.qy)(o||(o=(0,n.A)(['<ha-dialog @closed="','" scrimClickAction escapeKeyAction .open="','"> <div class="container ','"> <img alt="','"> </div> <mwc-button slot="secondaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> </ha-dialog>"])),this.closeDialog,this._open,(0,v.H)({round:Boolean(null===(i=this._params)||void 0===i?void 0:i.options.round)}),this.hass.localize("ui.dialogs.image_cropper.crop_image"),this.closeDialog,this.hass.localize("ui.common.cancel"),this._cropImage,this.hass.localize("ui.dialogs.image_cropper.crop"))}},{kind:"method",key:"_cropImage",value:function(){var i=this;this._cropper.getCroppedCanvas().toBlob((function(t){if(t){var e=new File([t],i._params.file.name,{type:i._params.options.type||i._params.file.type});i._params.croppedCallback(e),i.closeDialog()}}),this._params.options.type||this._params.file.type,this._params.options.quality)}},{kind:"get",static:!0,key:"styles",value:function(){return[f.nA,(0,m.AH)(a||(a=(0,n.A)([""," .container{max-width:640px}img{max-width:100%}.container.round .cropper-face,.container.round .cropper-view-box{border-radius:50%}.cropper-line,.cropper-point,.cropper-point.point-se::before{background-color:var(--primary-color)}"])),(0,m.iz)(h))]}}]}}),m.WF)},86176:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(i,t){return void 0!==t&&(t=!!t),this.hasAttribute(i)?!!t||(this.removeAttribute(i),!1):!1!==t&&(this.setAttribute(i,""),!0)})}}]);
//# sourceMappingURL=419.fGwSVBj8Cro.js.map