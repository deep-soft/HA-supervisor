"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["1173"],{49976:function(e,t,i){i.d(t,{U:function(){return n}});const n=e=>e.stopPropagation()},94369:function(e,t,i){i.a(e,(async function(e,n){try{i.d(t,{u:function(){return l}});var a=i(16485),s=i(27486),o=e([a]);a=(o.then?(await o)():o)[0];const l=(e,t)=>{try{var i,n;return null!==(i=null===(n=d(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(a){return e}},d=(0,s.Z)((e=>new Intl.DisplayNames(e.language,{type:"language",fallback:"code"})));n()}catch(l){n(l)}}))},21293:function(e,t,i){i.a(e,(async function(e,t){try{var n=i(73577),a=i(72621),s=(i(71695),i(39527),i(67670),i(13334),i(47021),i(57243)),o=i(50778),l=i(36522),d=i(49976),c=i(94369),r=i(38495),u=(i(7285),i(92824),e([c]));c=(u.then?(await u)():u)[0];let h,v,p,f,g=e=>e;const b="preferred",k="last_used";(0,n.Z)([(0,o.Mo)("ha-assist-pipeline-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"includeLastUsed",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_preferredPipeline",value(){return null}},{kind:"get",key:"_default",value:function(){return this.includeLastUsed?k:b}},{kind:"method",key:"render",value:function(){var e,t;if(!this._pipelines)return s.Ld;const i=null!==(e=this.value)&&void 0!==e?e:this._default;return(0,s.dy)(h||(h=g` <ha-select .label="${0}" .value="${0}" .required="${0}" .disabled="${0}" @selected="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidth> ${0} <ha-list-item .value="${0}"> ${0} </ha-list-item> ${0} </ha-select> `),this.label||this.hass.localize("ui.components.pipeline-picker.pipeline"),i,this.required,this.disabled,this._changed,d.U,this.includeLastUsed?(0,s.dy)(v||(v=g` <ha-list-item .value="${0}"> ${0} </ha-list-item> `),k,this.hass.localize("ui.components.pipeline-picker.last_used")):null,b,this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((e=>e.id===this._preferredPipeline)))||void 0===t?void 0:t.name}),this._pipelines.map((e=>(0,s.dy)(p||(p=g`<ha-list-item .value="${0}"> ${0} (${0}) </ha-list-item>`),e.id,e.name,(0,c.u)(e.language,this.hass.locale)))))}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)(i,"firstUpdated",this,3)([e]),(0,r.SC)(this.hass).then((e=>{this._pipelines=e.pipelines,this._preferredPipeline=e.preferred_pipeline}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(f||(f=g`ha-select{width:100%}`))}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===this._default||(this.value=t.value===this._default?void 0:t.value,(0,l.B)(this,"value-changed",{value:this.value}))}}]}}),s.oi);t()}catch(h){t(h)}}))},59826:function(e,t,i){var n=i(73577),a=(i(71695),i(47021),i(31622)),s=i(57243),o=i(50778),l=i(22344);let d,c=e=>e;(0,n.Z)([(0,o.Mo)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value(){return[l.W,(0,s.iv)(d||(d=c`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`))]}}]}}),a.z)},65368:function(e,t,i){var n=i(73577),a=(i(71695),i(47021),i(14394),i(57243)),s=i(50778);i(37583);let o,l,d=e=>e;(0,n.Z)([(0,s.Mo)("ha-help-tooltip")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"position",value(){return"top"}},{kind:"method",key:"render",value:function(){return(0,a.dy)(o||(o=d` <ha-svg-icon .path="${0}"></ha-svg-icon> <simple-tooltip offset="4" .position="${0}" .fitToVisibleBounds="${0}">${0}</simple-tooltip> `),"M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",this.position,!0,this.label)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,a.iv)(l||(l=d`ha-svg-icon{--mdc-icon-size:var(--ha-help-tooltip-size, 14px);color:var(--ha-help-tooltip-color,var(--disabled-text-color))}`))}}]}}),a.oi)},92824:function(e,t,i){var n=i(73577),a=i(72621),s=(i(71695),i(40251),i(47021),i(60930)),o=i(9714),l=i(57243),d=i(50778),c=i(22381),r=i(76320);i(23043);let u,h,v,p,f=e=>e;(0,n.Z)([(0,d.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"icon",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"clearable",value(){return!1}},{kind:"field",decorators:[(0,d.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value(){return!1}},{kind:"method",key:"render",value:function(){return(0,l.dy)(u||(u=f` ${0} ${0} `),(0,a.Z)(i,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,l.dy)(h||(h=f`<ha-icon-button label="clear" @click="${0}" .path="${0}"></ha-icon-button>`),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):l.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,l.dy)(v||(v=f`<span class="mdc-select__icon"><slot name="icon"></slot></span>`)):l.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){var e;((0,a.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow)&&(null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".mdc-select__selected-text-container"))||void 0===e||e.classList.add("inline-arrow"))}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".mdc-select__selected-text-container");this.inlineArrow?null==e||e.classList.add("inline-arrow"):null==e||e.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,r.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value(){return[o.W,(0,l.iv)(p||(p=f`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`))]}}]}}),s.K)},86772:function(e,t,i){i.a(e,(async function(e,n){try{i.r(t),i.d(t,{HaSelectorUiAction:function(){return h}});var a=i(73577),s=(i(71695),i(47021),i(57243)),o=i(50778),l=i(36522),d=i(49459),c=e([d]);d=(c.then?(await c)():c)[0];let r,u=e=>e,h=(0,a.Z)([(0,o.Mo)("ha-selector-ui_action")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return(0,s.dy)(r||(r=u` <hui-action-editor .label="${0}" .hass="${0}" .config="${0}" .actions="${0}" .defaultAction="${0}" .tooltipText="${0}" @value-changed="${0}"></hui-action-editor> `),this.label,this.hass,this.value,null===(e=this.selector.ui_action)||void 0===e?void 0:e.actions,null===(t=this.selector.ui_action)||void 0===t?void 0:t.default_action,this.helper,this._valueChanged)}},{kind:"method",key:"_valueChanged",value:function(e){(0,l.B)(this,"value-changed",{value:e.detail.value})}}]}}),s.oi);n()}catch(r){n(r)}}))},38495:function(e,t,i){i.d(t,{Dy:function(){return c},PA:function(){return o},SC:function(){return s},Xp:function(){return a},af:function(){return d},eP:function(){return n},jZ:function(){return l}});i(71695),i(19423),i(47021);const n=(e,t,i)=>"run-start"===t.type?e={init_options:i,stage:"ready",run:t.data,events:[t]}:e?((e="wake_word-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"wake_word",wake_word:Object.assign(Object.assign({},t.data),{},{done:!1})}):"wake_word-end"===t.type?Object.assign(Object.assign({},e),{},{wake_word:Object.assign(Object.assign(Object.assign({},e.wake_word),t.data),{},{done:!0})}):"stt-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"stt",stt:Object.assign(Object.assign({},t.data),{},{done:!1})}):"stt-end"===t.type?Object.assign(Object.assign({},e),{},{stt:Object.assign(Object.assign(Object.assign({},e.stt),t.data),{},{done:!0})}):"intent-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"intent",intent:Object.assign(Object.assign({},t.data),{},{done:!1})}):"intent-end"===t.type?Object.assign(Object.assign({},e),{},{intent:Object.assign(Object.assign(Object.assign({},e.intent),t.data),{},{done:!0})}):"tts-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"tts",tts:Object.assign(Object.assign({},t.data),{},{done:!1})}):"tts-end"===t.type?Object.assign(Object.assign({},e),{},{tts:Object.assign(Object.assign(Object.assign({},e.tts),t.data),{},{done:!0})}):"run-end"===t.type?Object.assign(Object.assign({},e),{},{stage:"done"}):"error"===t.type?Object.assign(Object.assign({},e),{},{stage:"error",error:t.data}):Object.assign({},e)).events=[...e.events,t],e):void console.warn("Received unexpected event before receiving session",t),a=(e,t,i)=>e.connection.subscribeMessage(t,Object.assign(Object.assign({},i),{},{type:"assist_pipeline/run"})),s=e=>e.callWS({type:"assist_pipeline/pipeline/list"}),o=(e,t)=>e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t}),l=(e,t)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/create"},t)),d=(e,t,i)=>e.callWS(Object.assign({type:"assist_pipeline/pipeline/update",pipeline_id:t},i)),c=e=>e.callWS({type:"assist_pipeline/language/list"})},57816:function(e,t,i){i.d(t,{F3:function(){return a},Lh:function(){return n},t4:function(){return s}});i(22381);const n=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,a=(e,t)=>{const i={type:"manifest/list"};return t&&(i.integrations=t),e.callWS(i)},s=(e,t)=>e.callWS({type:"manifest/get",integration:t})},49459:function(e,t,i){i.a(e,(async function(e,t){try{var n=i(73577),a=i(72621),s=(i(71695),i(19423),i(13334),i(47021),i(57243)),o=i(50778),l=i(27486),d=i(36522),c=i(49976),r=i(21293),u=(i(65368),i(63297)),h=i(27192),v=e([r,u,h]);[r,u,h]=v.then?(await v)():v;let p,f,g,b,k,y,m,_,$=e=>e;const w=["more-info","toggle","navigate","url","perform-action","assist","none"],O=[{name:"navigation_path",selector:{navigation:{}}}],j=[{type:"grid",name:"",schema:[{name:"pipeline_id",selector:{assist_pipeline:{include_last_used:!0}}},{name:"start_listening",selector:{boolean:{}}}]}];(0,n.Z)([(0,o.Mo)("hui-action-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"actions",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"defaultAction",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"tooltipText",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.IO)("ha-select")],key:"_select",value:void 0},{kind:"get",key:"_navigation_path",value:function(){const e=this.config;return(null==e?void 0:e.navigation_path)||""}},{kind:"get",key:"_url_path",value:function(){const e=this.config;return(null==e?void 0:e.url_path)||""}},{kind:"get",key:"_service",value:function(){const e=this.config;return(null==e?void 0:e.perform_action)||(null==e?void 0:e.service)||""}},{kind:"field",key:"_serviceAction",value(){return(0,l.Z)((e=>{var t;return Object.assign(Object.assign({action:this._service},e.data||e.service_data?{data:null!==(t=e.data)&&void 0!==t?t:e.service_data}:null),{},{target:e.target})}))}},{kind:"method",key:"updated",value:function(e){(0,a.Z)(i,"updated",this,3)([e]),e.has("defaultAction")&&e.get("defaultAction")!==this.defaultAction&&this._select.layoutOptions()}},{kind:"method",key:"render",value:function(){var e,t,i,n,a,o,l,d;if(!this.hass)return s.Ld;const r=null!==(e=this.actions)&&void 0!==e?e:w;let u=(null===(t=this.config)||void 0===t?void 0:t.action)||"default";return"call-service"===u&&(u="perform-action"),(0,s.dy)(p||(p=$` <div class="dropdown"> <ha-select .label="${0}" .configValue="${0}" @selected="${0}" .value="${0}" @closed="${0}" fixedMenuPosition naturalMenuWidt> <mwc-list-item value="default"> ${0} ${0} </mwc-list-item> ${0} </ha-select> ${0} </div> ${0} ${0} ${0} ${0} `),this.label,"action",this._actionPicked,u,c.U,this.hass.localize("ui.panel.lovelace.editor.action-editor.actions.default_action"),this.defaultAction?` (${this.hass.localize(`ui.panel.lovelace.editor.action-editor.actions.${this.defaultAction}`).toLowerCase()})`:s.Ld,r.map((e=>(0,s.dy)(f||(f=$` <mwc-list-item .value="${0}"> ${0} </mwc-list-item> `),e,this.hass.localize(`ui.panel.lovelace.editor.action-editor.actions.${e}`)))),this.tooltipText?(0,s.dy)(g||(g=$` <ha-help-tooltip .label="${0}"></ha-help-tooltip> `),this.tooltipText):s.Ld,"navigate"===(null===(i=this.config)||void 0===i?void 0:i.action)?(0,s.dy)(b||(b=$` <ha-form .hass="${0}" .schema="${0}" .data="${0}" .computeLabel="${0}" @value-changed="${0}"> </ha-form> `),this.hass,O,this.config,this._computeFormLabel,this._formValueChanged):s.Ld,"url"===(null===(n=this.config)||void 0===n?void 0:n.action)?(0,s.dy)(k||(k=$` <ha-textfield .label="${0}" .value="${0}" .configValue="${0}" @input="${0}"></ha-textfield> `),this.hass.localize("ui.panel.lovelace.editor.action-editor.url_path"),this._url_path,"url_path",this._valueChanged):s.Ld,"call-service"===(null===(a=this.config)||void 0===a?void 0:a.action)||"perform-action"===(null===(o=this.config)||void 0===o?void 0:o.action)?(0,s.dy)(y||(y=$` <ha-service-control .hass="${0}" .value="${0}" .showAdvanced="${0}" narrow @value-changed="${0}"></ha-service-control> `),this.hass,this._serviceAction(this.config),null===(l=this.hass.userData)||void 0===l?void 0:l.showAdvanced,this._serviceValueChanged):s.Ld,"assist"===(null===(d=this.config)||void 0===d?void 0:d.action)?(0,s.dy)(m||(m=$` <ha-form .hass="${0}" .schema="${0}" .data="${0}" .computeLabel="${0}" @value-changed="${0}"> </ha-form> `),this.hass,j,this.config,this._computeFormLabel,this._formValueChanged):s.Ld)}},{kind:"method",key:"_actionPicked",value:function(e){var t;if(e.stopPropagation(),!this.hass)return;let i=null===(t=this.config)||void 0===t?void 0:t.action;"call-service"===i&&(i="perform-action");const n=e.target.value;if(i===n)return;if("default"===n)return void(0,d.B)(this,"value-changed",{value:void 0});let a;switch(n){case"url":a={url_path:this._url_path};break;case"perform-action":a={perform_action:this._service};break;case"navigate":a={navigation_path:this._navigation_path}}(0,d.B)(this,"value-changed",{value:Object.assign({action:n},a)})}},{kind:"method",key:"_valueChanged",value:function(e){var t;if(e.stopPropagation(),!this.hass)return;const i=e.target,n=null!==(t=e.target.value)&&void 0!==t?t:e.target.checked;this[`_${i.configValue}`]!==n&&i.configValue&&(0,d.B)(this,"value-changed",{value:Object.assign(Object.assign({},this.config),{},{[i.configValue]:n})})}},{kind:"method",key:"_formValueChanged",value:function(e){e.stopPropagation();const t=e.detail.value;(0,d.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_computeFormLabel",value:function(e){var t;return null===(t=this.hass)||void 0===t?void 0:t.localize(`ui.panel.lovelace.editor.action-editor.${e.name}`)}},{kind:"method",key:"_serviceValueChanged",value:function(e){e.stopPropagation();const t=Object.assign(Object.assign({},this.config),{},{action:"perform-action",perform_action:e.detail.value.action||"",data:e.detail.value.data,target:e.detail.value.target||{}});e.detail.value.data||delete t.data,"service_data"in t&&delete t.service_data,"service"in t&&delete t.service,(0,d.B)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,s.iv)(_||(_=$`.dropdown{position:relative}ha-help-tooltip{position:absolute;right:40px;top:16px;inset-inline-start:initial;inset-inline-end:40px;direction:var(--direction)}ha-select,ha-textfield{width:100%}ha-form,ha-navigation-picker,ha-service-control{display:block}ha-form,ha-navigation-picker,ha-service-control,ha-textfield{margin-top:8px}ha-service-control{--service-control-padding:0}ha-formfield{display:flex;height:56px;align-items:center;--mdc-typography-body2-font-size:1em}`))}}]}}),s.oi);t()}catch(p){t(p)}}))},72473:function(e,t,i){i.d(t,{C:function(){return a}});var n=i(36522);const a=(e,t)=>(0,n.B)(e,"hass-notification",t)}}]);
//# sourceMappingURL=1173.fc200845431b6518.js.map