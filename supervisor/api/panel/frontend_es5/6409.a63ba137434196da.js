"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["6409"],{43537:function(t,e,n){n.d(e,{Z:function(){return a}});const i=t=>t<10?`0${t}`:t;function a(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=Math.floor(t%3600%60);return e>0?`${e}:${i(n)}:${i(a)}`:n>0?`${n}:${i(a)}`:a>0?""+a:null}},84428:function(t,e,n){n.d(e,{rv:()=>r,eF:()=>a,mK:()=>s});n("19423"),n("13334");var i=n("43537");const a=(t,e)=>t.callWS(Object.assign({type:"timer/create"},e)),s=t=>{if(!t.attributes.remaining)return;let e=function(t){const e=t.split(":").map(Number);return 3600*e[0]+60*e[1]+e[2]}(t.attributes.remaining);if("active"===t.state){const n=(new Date).getTime(),i=new Date(t.attributes.finishes_at).getTime();e=Math.max((i-n)/1e3,0)}return e},r=(t,e,n)=>{if(!e)return null;if("idle"===e.state||0===n)return t.formatEntityState(e);let a=(0,i.Z)(n||0)||"0";return"paused"===e.state&&(a=`${a} (${t.formatEntityState(e)})`),a}},52478:function(t,e,n){n.r(e);var i=n(73577),a=n(72621),s=(n(71695),n(47021),n(57243)),r=n(50778),l=n(84428);(0,i.Z)([(0,r.Mo)("ha-timer-remaining-time")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"timeRemaining",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(t){var e;(0,a.Z)(n,"update",this,3)([t]),this.innerHTML=null!==(e=(0,l.rv)(this.hass,this.stateObj,this.timeRemaining))&&void 0!==e?e:"-"}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(n,"connectedCallback",this,3)([]),this.stateObj&&this._startInterval(this.stateObj)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(n,"disconnectedCallback",this,3)([]),this._clearInterval()}},{kind:"method",key:"willUpdate",value:function(t){(0,a.Z)(n,"willUpdate",this,3)([t]),t.has("stateObj")&&this._startInterval(this.stateObj)}},{kind:"method",key:"_clearInterval",value:function(){this._updateRemaining&&(clearInterval(this._updateRemaining),this._updateRemaining=null)}},{kind:"method",key:"_startInterval",value:function(t){this._clearInterval(),this._calculateRemaining(t),"active"===t.state&&(this._updateRemaining=setInterval((()=>this._calculateRemaining(this.stateObj)),1e3))}},{kind:"method",key:"_calculateRemaining",value:function(t){this.timeRemaining=(0,l.mK)(t)}}]}}),s.fl)}}]);
//# sourceMappingURL=6409.a63ba137434196da.js.map