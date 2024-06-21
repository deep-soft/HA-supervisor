export const id=7344;export const ids=[7344,9316];export const modules={39316:(e,r,t)=>{t.r(r),t.d(r,{HaQrCode:()=>c});var a=t(62659),o=t(76504),i=t(80792),s=(t(21950),t(98168),t(8339),t(98597)),d=t(196),l=t(28345),n=(t(12261),t(45094));let c=(0,a.A)([(0,d.EM)("ha-qr-code")],(function(e,r){class t extends r{constructor(...r){super(...r),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.MZ)()],key:"data",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:"error-correction-level"})],key:"errorCorrectionLevel",value:()=>"medium"},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"width",value:()=>4},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"scale",value:()=>4},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"margin",value:()=>4},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"maskPattern",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:"center-image"})],key:"centerImage",value:void 0},{kind:"field",decorators:[(0,d.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,d.P)("canvas")],key:"_canvas",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(0,o.A)((0,i.A)(t.prototype),"willUpdate",this).call(this,e),(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel"))&&this._error&&(this._error=void 0)}},{kind:"method",key:"updated",value:function(e){const r=this._canvas;if(r&&this.data&&(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel")||e.has("centerImage"))){const e=getComputedStyle(this),t=e.getPropertyValue("--rgb-primary-text-color"),a=e.getPropertyValue("--rgb-card-background-color"),o=(0,n.v2)(t.split(",").map((e=>parseInt(e,10)))),i=(0,n.v2)(a.split(",").map((e=>parseInt(e,10))));if(l.toCanvas(r,this.data,{errorCorrectionLevel:this.errorCorrectionLevel||(this.centerImage?"Q":"M"),width:this.width,scale:this.scale,margin:this.margin,maskPattern:this.maskPattern,color:{light:i,dark:o}}).catch((e=>{this._error=e.message})),this.centerImage){const e=this._canvas.getContext("2d"),t=new Image;t.src=this.centerImage,t.onload=()=>{null==e||e.drawImage(t,.375*r.width,.375*r.height,r.width/4,r.height/4)}}}}},{kind:"method",key:"render",value:function(){return this.data?this._error?s.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:s.qy`<canvas></canvas>`:s.s6}},{kind:"field",static:!0,key:"styles",value:()=>s.AH`:host{display:block}`}]}}),s.WF)},17344:(e,r,t)=>{t.r(r),t.d(r,{HaSelectorQRCode:()=>s});var a=t(62659),o=(t(21950),t(8339),t(98597)),i=t(196);t(39316);let s=(0,a.A)([(0,i.EM)("ha-selector-qr_code")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,i.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"method",key:"render",value:function(){var e,r,t,a;return o.qy`<ha-qr-code .data="${null===(e=this.selector.qr_code)||void 0===e?void 0:e.data}" .scale="${null===(r=this.selector.qr_code)||void 0===r?void 0:r.scale}" .errorCorrectionLevel="${null===(t=this.selector.qr_code)||void 0===t?void 0:t.error_correction_level}" .centerImage="${null===(a=this.selector.qr_code)||void 0===a?void 0:a.center_image}"></ha-qr-code>`}},{kind:"field",static:!0,key:"styles",value:()=>o.AH`ha-qr-code{text-align:center}`}]}}),o.WF)}};
//# sourceMappingURL=7344.fTCSfp7qmIU.js.map