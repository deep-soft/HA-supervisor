"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["5027"],{49976:function(e,t,i){i.d(t,{U:function(){return n}});const n=e=>e.stopPropagation()},94369:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{u:function(){return d}});var a=i(16485),s=i(27486),l=e([a]);a=(l.then?(await l)():l)[0];const d=(e,t)=>{try{var i,n;return null!==(i=null===(n=r(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(a){return e}},r=(0,s.Z)((e=>new Intl.DisplayNames(e.language,{type:"language",fallback:"code"})));n()}catch(d){n(d)}}))},21293:function(e,t,i){i.a(e,(async function(e,t){try{var n=i(73577),a=i(72621),s=(i(71695),i(39527),i(67670),i(13334),i(47021),i(57243)),l=i(50778),d=i(36522),r=i(49976),o=i(94369),c=i(38495),u=(i(7285),i(92824),e([o]));o=(u.then?(await u)():u)[0];let p,h,v,m,f=e=>e;const g="preferred",y="last_used";(0,n.Z)([(0,l.Mo)("ha-assist-pipeline-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"includeLastUsed",value(){return!1}},{kind:"field",decorators:[(0,l.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_preferredPipeline",value(){return null}},{kind:"get",key:"_default",value:function(){return this.includeLastUsed?y:g}},{kind:"method",key:"render",value:function(){var e,t;if(!this._pipelines)return s.Ld;const i=null!==(e=this.value)&&void 0!==e?e:this._default;return(0,s.dy)(p||(p=f` <ha-select .label="${0}" .value="${0}" .required="${0}" .disabled="${0}" @selected="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidth> ${0} <ha-list-item .value="${0}"> ${0} </ha-list-item> ${0} </ha-select> `),this.label||this.hass.localize("ui.components.pipeline-picker.pipeline"),i,this.required,this.disabled,this._changed,r.U,this.includeLastUsed?(0,s.dy)(h||(h=f` <ha-list-item .value="${0}"> ${0} </ha-list-item> `),y,this.hass.localize("ui.components.pipeline-picker.last_used")):null,g,this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((e=>e.id===this._preferredPipeline)))||void 0===t?void 0:t.name}),this._pipelines.map((e=>(0,s.dy)(v||(v=f`<ha-list-item .value="${0}"> ${0} (${0}) </ha-list-item>`),e.id,e.name,(0,o.u)(e.language,this.hass.locale)))))}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)(i,"firstUpdated",this,3)([e]),(0,c.SC)(this.hass).then((e=>{this._pipelines=e.pipelines,this._preferredPipeline=e.preferred_pipeline}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(m||(m=f`ha-select{width:100%}`))}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===this._default||(this.value=t.value===this._default?void 0:t.value,(0,d.B)(this,"value-changed",{value:this.value}))}}]}}),s.oi);t()}catch(p){t(p)}}))},7285:function(e,t,i){var n=i(73577),a=i(72621),s=(i(71695),i(47021),i(65703)),l=i(46289),d=i(57243),r=i(50778);let o,c,u,p=e=>e;(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,(0,d.iv)(o||(o=p`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,d.iv)(c||(c=p`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,d.iv)(u||(u=p``))]}}]}}),s.K)},92824:function(e,t,i){var n=i(73577),a=i(72621),s=(i(71695),i(40251),i(47021),i(60930)),l=i(9714),d=i(57243),r=i(50778),o=i(22381),c=i(76320);i(23043);let u,p,h,v,m=e=>e;(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"clearable",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,d.dy)(u||(u=m` ${0} ${0} `),(0,a.Z)(i,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,d.dy)(p||(p=m`<ha-icon-button label="clear" @click="${0}" .path="${0}"></ha-icon-button>`),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):d.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,d.dy)(h||(h=m`<span class="mdc-select__icon"><slot name="icon"></slot></span>`)):d.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){var e;((0,a.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow)&&(null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".mdc-select__selected-text-container"))||void 0===e||e.classList.add("inline-arrow"))}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".mdc-select__selected-text-container");this.inlineArrow?null==e||e.classList.add("inline-arrow"):null==e||e.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,o.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,d.iv)(v||(v=m`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`))]}}]}}),s.K)},30363:function(e,t,i){i.a(e,(async function(e,n){try{i.r(t),i.d(t,{HaAssistPipelineSelector:function(){return p}});var a=i(73577),s=(i(71695),i(47021),i(57243)),l=i(50778),d=i(21293),r=e([d]);d=(r.then?(await r)():r)[0];let o,c,u=e=>e,p=(0,a.Z)([(0,l.Mo)("ha-selector-assist_pipeline")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"method",key:"render",value:function(){var e;return(0,s.dy)(o||(o=u` <ha-assist-pipeline-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .disabled="${0}" .required="${0}" .includeLastUsed="${0}"></ha-assist-pipeline-picker> `),this.hass,this.value,this.label,this.helper,this.disabled,this.required,Boolean(null===(e=this.selector.assist_pipeline)||void 0===e?void 0:e.include_last_used))}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(c||(c=u`ha-conversation-agent-picker{width:100%}`))}}]}}),s.oi);n()}catch(o){n(o)}}))},38495:function(e,t,i){i.d(t,{Dy:function(){return o},PA:function(){return l},SC:function(){return s},Xp:function(){return a},af:function(){return r},eP:function(){return n},jZ:function(){return d}});i(71695),i(19423),i(47021);const n=(e,t,i)=>"run-start"===t.type?e={init_options:i,stage:"ready",run:t.data,events:[t]}:e?((e="wake_word-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"wake_word",wake_word:Object.assign(Object.assign({},t.data),{},{done:!1})}):"wake_word-end"===t.type?Object.assign(Object.assign({},e),{},{wake_word:Object.assign(Object.assign(Object.assign({},e.wake_word),t.data),{},{done:!0})}):"stt-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"stt",stt:Object.assign(Object.assign({},t.data),{},{done:!1})}):"stt-end"===t.type?Object.assign(Object.assign({},e),{},{stt:Object.assign(Object.assign(Object.assign({},e.stt),t.data),{},{done:!0})}):"intent-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"intent",intent:Object.assign(Object.assign({},t.data),{},{done:!1})}):"intent-end"===t.type?Object.assign(Object.assign({},e),{},{intent:Object.assign(Object.assign(Object.assign({},e.intent),t.data),{},{done:!0})}):"tts-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"tts",tts:Object.assign(Object.assign({},t.data),{},{done:!1})}):"tts-end"===t.type?Object.assign(Object.assign({},e),{},{tts:Object.assign(Object.assign(Object.assign({},e.tts),t.data),{},{done:!0})}):"run-end"===t.type?Object.assign(Object.assign({},e),{},{stage:"done"}):"error"===t.type?Object.assign(Object.assign({},e),{},{stage:"error",error:t.data}):Object.assign({},e)).events=[...e.events,t],e):void console.warn("Received unexpected event before receiving session",t),a=(e,t,i)=>e.connection.subscribeMessage(t,Object.assign(Object.assign({},i),{},{type:"assist_pipeline/run"})),s=e=>e.callWS({type:"assist_pipeline/pipeline/list"}),l=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t}),d=(e,t)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/create"},t)),r=(e,t,i)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/update",pipeline_id:t},i)),o=e=>e.callWS({type:"assist_pipeline/language/list"})},16485:function(e,t,i){i.a(e,(async function(e,t){try{i(71695),i(92745),i(40251),i(47021);var n=i(61449),a=i(40574),s=i(30532),l=i(41674),d=i(49722),r=i(76632),o=i(7884),c=i(35185),u=i(65401),p=i(44180),h=i(49447);const e=async()=>{const e=(0,p.sS)(),t=[];(0,s.shouldPolyfill)()&&await Promise.all([i.e("210"),i.e("4055")]).then(i.bind(i,98133)),(0,d.shouldPolyfill)()&&await Promise.all([i.e("9525"),i.e("3793"),i.e("210"),i.e("251")]).then(i.bind(i,59095)),(0,n.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("8250")]).then(i.bind(i,80561)).then((()=>(0,h.H)()))),(0,u.shouldPolyfill)()&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("5578")]).then(i.bind(i,97995))),(0,a.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("9826")]).then(i.bind(i,31514))),(0,l.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("3649")]).then(i.bind(i,93840))),(0,r.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("2831")]).then(i.bind(i,29559))),(0,o.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("7377")]).then(i.bind(i,63848)).then((()=>i.e("1236").then(i.t.bind(i,4121,23))))),(0,c.shouldPolyfill)(e)&&t.push(Promise.all([i.e("9525"),i.e("3793"),i.e("3870")]).then(i.bind(i,74546))),0!==t.length&&await Promise.all(t).then((()=>(0,h.n)(e)))};await e(),t()}catch(v){t(v)}}),1)}}]);
//# sourceMappingURL=5027.36057943ab25db95.js.map