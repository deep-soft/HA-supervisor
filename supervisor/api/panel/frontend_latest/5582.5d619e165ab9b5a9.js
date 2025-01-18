/*! For license information please see 5582.5d619e165ab9b5a9.js.LICENSE.txt */
export const ids=["5582"];export const modules={31064:function(e,t,i){i.d(t,{T:function(){return n}});const s=/^(\w+)\.(\w+)$/,n=e=>s.test(e)},32587:function(e,t,i){i.a(e,(async function(e,t){try{var s=i(44249),n=(i(39527),i(99790),i(13334),i(57243)),a=i(50778),r=i(27486),l=i(36522),d=i(31064),o=i(58725),c=e([o]);o=(c.then?(await c)():c)[0];(0,s.Z)([(0,a.Mo)("ha-entities-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1,type:Array})],key:"createDomains",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return n.Ld;const e=this._currentEntities;return n.dy` ${e.map((e=>n.dy` <div> <ha-entity-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this.entityFilter}" .value="${e}" .label="${this.pickedEntityLabel}" .disabled="${this.disabled}" .createDomains="${this.createDomains}" @value-changed="${this._entityChanged}"></ha-entity-picker> </div> `))} <div> <ha-entity-picker allow-custom-entity .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this._excludeEntities(this.value,this.excludeEntities)}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this.entityFilter}" .label="${this.pickEntityLabel}" .helper="${this.helper}" .disabled="${this.disabled}" .createDomains="${this.createDomains}" .required="${this.required&&!e.length}" @value-changed="${this._addEntity}"></ha-entity-picker> </div> `}},{kind:"field",key:"_excludeEntities",value:()=>(0,r.Z)(((e,t)=>void 0===e?t:[...t||[],...e]))},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,(0,l.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.curValue,i=e.detail.value;if(i===t||void 0!==i&&!(0,d.T)(i))return;const s=this._currentEntities;i&&!s.includes(i)?this._updateEntities(s.map((e=>e===t?i:e))):this._updateEntities(s.filter((e=>e!==t)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const t=e.detail.value;if(!t)return;if(e.currentTarget.value="",!t)return;const i=this._currentEntities;i.includes(t)||this._updateEntities([...i,t])}},{kind:"field",static:!0,key:"styles",value:()=>n.iv`div{margin-top:8px}`}]}}),n.oi);t()}catch(e){t(e)}}))},56208:function(e,t,i){i.a(e,(async function(e,s){try{i.r(t),i.d(t,{HaEntitySelector:function(){return k}});var n=i(44249),a=i(72621),r=(i(39527),i(99790),i(36993),i(57243)),l=i(50778),d=i(95262),o=i(36522),c=i(62992),u=i(41063),h=i(32587),y=i(58725),v=e([h,y]);[h,y]=v.then?(await v)():v;let k=(0,n.Z)([(0,l.Mo)("ha-selector-entity")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,l.SB)()],key:"_createDomains",value:void 0},{kind:"method",key:"_hasIntegration",value:function(e){return e.entity?.filter&&(0,d.r)(e.entity.filter).some((e=>e.integration))}},{kind:"method",key:"willUpdate",value:function(e){e.has("selector")&&void 0!==this.value&&(this.selector.entity?.multiple&&!Array.isArray(this.value)?(this.value=[this.value],(0,o.B)(this,"value-changed",{value:this.value})):!this.selector.entity?.multiple&&Array.isArray(this.value)&&(this.value=this.value[0],(0,o.B)(this,"value-changed",{value:this.value})))}},{kind:"method",key:"render",value:function(){return this._hasIntegration(this.selector)&&!this._entitySources?r.Ld:this.selector.entity?.multiple?r.dy` ${this.label?r.dy`<label>${this.label}</label>`:""} <ha-entities-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .includeEntities="${this.selector.entity.include_entities}" .excludeEntities="${this.selector.entity.exclude_entities}" .entityFilter="${this._filterEntities}" .createDomains="${this._createDomains}" .disabled="${this.disabled}" .required="${this.required}"></ha-entities-picker> `:r.dy`<ha-entity-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .includeEntities="${this.selector.entity?.include_entities}" .excludeEntities="${this.selector.entity?.exclude_entities}" .entityFilter="${this._filterEntities}" .createDomains="${this._createDomains}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-entity-picker>`}},{kind:"method",key:"updated",value:function(e){(0,a.Z)(i,"updated",this,3)([e]),e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,c.m)(this.hass).then((e=>{this._entitySources=e})),e.has("selector")&&(this._createDomains=(0,u.bq)(this.selector))}},{kind:"field",key:"_filterEntities",value(){return e=>!this.selector?.entity?.filter||(0,d.r)(this.selector.entity.filter).some((t=>(0,u.lV)(t,e,this._entitySources)))}}]}}),r.oi);s()}catch(e){s(e)}}))},62992:function(e,t,i){i.d(t,{m:()=>a});const s=async(e,t,i,n,a,...r)=>{const l=a,d=l[e],o=d=>n&&n(a,d.result)!==d.cacheKey?(l[e]=void 0,s(e,t,i,n,a,...r)):d.result;if(d)return d instanceof Promise?d.then(o):o(d);const c=i(a,...r);return l[e]=c,c.then((i=>{l[e]={result:i,cacheKey:n?.(a,i)},setTimeout((()=>{l[e]=void 0}),t)}),(()=>{l[e]=void 0})),c},n=e=>e.callWS({type:"entity/source"}),a=e=>s("_entitySources",3e4,n,(e=>Object.keys(e.states).length),e)},94571:function(e,t,i){i.d(t,{C:()=>h});i("39527"),i("67670");var s=i("2841"),n=i("53232"),a=i("1714");class r{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class l{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}var d=i("45779");const o=e=>!(0,n.pt)(e)&&"function"==typeof e.then,c=1073741823;class u extends a.sR{constructor(){super(...arguments),this._$C_t=c,this._$Cwt=[],this._$Cq=new r(this),this._$CK=new l}render(...e){var t;return null!==(t=e.find((e=>!o(e))))&&void 0!==t?t:s.Jb}update(e,t){const i=this._$Cwt;let n=i.length;this._$Cwt=t;const a=this._$Cq,r=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const s=t[e];if(!o(s))return this._$C_t=e,s;e<n&&s===i[e]||(this._$C_t=c,n=0,Promise.resolve(s).then((async e=>{for(;r.get();)await r.get();const t=a.deref();if(void 0!==t){const i=t._$Cwt.indexOf(s);i>-1&&i<t._$C_t&&(t._$C_t=i,t.setValue(e))}})))}return s.Jb}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const h=(0,d.XM)(u)}};
//# sourceMappingURL=5582.5d619e165ab9b5a9.js.map