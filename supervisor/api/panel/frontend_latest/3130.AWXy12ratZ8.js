export const id=3130;export const ids=[3130];export const modules={22177:(e,t,s)=>{s.d(t,{H:()=>i});const i=(e,t,s,i,r)=>e.connection.subscribeMessage(r,{type:"template/start_preview",flow_id:t,flow_type:s,user_input:i})},73130:(e,t,s)=>{s.a(e,(async(e,i)=>{try{s.r(t);var r=s(62659),l=s(76504),a=s(80792),o=(s(21950),s(14460),s(55888),s(98168),s(8339),s(98597)),n=s(196),d=s(47394),h=s(22177),u=s(30165),_=s(77664),p=e([u]);u=(p.then?(await p)():p)[0];(0,r.A)([(0,n.EM)("flow-preview-template")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"flowType",value:void 0},{kind:"field",key:"handler",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"stepId",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"flowId",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"stepData",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_preview",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_listeners",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_error",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,l.A)((0,a.A)(s.prototype),"disconnectedCallback",this).call(this),this._unsub&&(this._unsub.then((e=>e())),this._unsub=void 0)}},{kind:"method",key:"willUpdate",value:function(e){e.has("stepData")&&this._debouncedSubscribePreview()}},{kind:"method",key:"render",value:function(){var e;return this._error?o.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:o.qy`<entity-preview-row .hass="${this.hass}" .stateObj="${this._preview}"></entity-preview-row> ${null!==(e=this._listeners)&&void 0!==e&&e.time?o.qy` <p> ${this.hass.localize("ui.dialogs.helper_settings.template.time")} </p> `:o.s6} ${this._listeners?this._listeners.all?o.qy` <p class="all_listeners"> ${this.hass.localize("ui.dialogs.helper_settings.template.all_listeners")} </p> `:this._listeners.domains.length||this._listeners.entities.length?o.qy` <p> ${this.hass.localize("ui.dialogs.helper_settings.template.listeners")} </p> <ul> ${this._listeners.domains.sort().map((e=>o.qy` <li> <b>${this.hass.localize("ui.dialogs.helper_settings.template.domain")}</b>: ${e} </li> `))} ${this._listeners.entities.sort().map((e=>o.qy` <li> <b>${this.hass.localize("ui.dialogs.helper_settings.template.entity")}</b>: ${e} </li> `))} </ul> `:this._listeners.time?o.s6:o.qy`<p class="all_listeners"> ${this.hass.localize("ui.dialogs.helper_settings.template.no_listeners")} </p>`:o.s6} `}},{kind:"field",key:"_setPreview",value(){return e=>{if("error"in e)return this._error=e.error,void(this._preview=void 0);this._error=void 0,this._listeners=e.listeners;const t=(new Date).toISOString();this._preview={entity_id:`${this.stepId}.___flow_preview___`,last_changed:t,last_updated:t,context:{id:"",parent_id:null,user_id:null},attributes:e.attributes,state:e.state}}}},{kind:"field",key:"_debouncedSubscribePreview",value(){return(0,d.s)((()=>{this._subscribePreview()}),250)}},{kind:"method",key:"_subscribePreview",value:async function(){if(this._unsub&&((await this._unsub)(),this._unsub=void 0),"repair_flow"!==this.flowType)try{this._unsub=(0,h.H)(this.hass,this.flowId,this.flowType,this.stepData,this._setPreview),await this._unsub,(0,_.r)(this,"set-flow-errors",{errors:{}})}catch(e){"string"==typeof e.message?this._error=e.message:(this._error=void 0,(0,_.r)(this,"set-flow-errors",e.message)),this._unsub=void 0,this._preview=void 0}}}]}}),o.WF);i()}catch(e){i(e)}}))}};
//# sourceMappingURL=3130.AWXy12ratZ8.js.map