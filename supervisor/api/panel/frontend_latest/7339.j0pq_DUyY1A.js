export const id=7339;export const ids=[7339];export const modules={16895:(e,i,t)=>{t.d(i,{M:()=>a,l:()=>l});t(21950),t(15445),t(24483),t(13478),t(46355),t(14612),t(53691),t(48455),t(8339);const l=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function a(e){return l.has(e)?`var(--${e}-color)`:e}},16168:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var l=t(62659),a=(t(53501),t(21950),t(55888),t(66274),t(38129),t(85038),t(85767),t(84531),t(98168),t(22836),t(15445),t(24483),t(13478),t(46355),t(14612),t(53691),t(48455),t(8339),t(98597)),s=t(196),o=t(69760),d=t(45081),n=t(77664),r=t(47038),c=t(38696),u=t(1169),h=t(51477),v=t(94027),b=t(72590),k=t(35641),_=(t(72214),t(39335),t(1683),e([k]));k=(_.then?(await _)():_)[0];const y="___ADD_NEW___",p="___NO_LABELS___",m="___ADD_NEW_SUGGESTION___",f=e=>a.qy`<ha-list-item graphic="icon" class="${(0,o.H)({"add-new":e.label_id===y})}"> ${e.icon?a.qy`<ha-icon slot="graphic" .icon="${e.icon}"></ha-icon>`:a.s6} ${e.name} </ha-list-item>`;(0,l.A)([(0,s.EM)("ha-label-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,s.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,h.o5)(this.hass.connection,(e=>{this._labels=e}))]}},{kind:"field",key:"_getLabels",value(){return(0,d.A)(((e,i,t,l,a,s,o,d,n,c,h)=>{let v,b,k={};(a||s||o||d||n)&&(k=(0,u.g2)(l),v=t,b=l.filter((e=>e.labels.length>0)),a&&(v=v.filter((e=>{const i=k[e.id];return!(!i||!i.length)&&k[e.id].some((e=>a.includes((0,r.m)(e.entity_id))))})),b=b.filter((e=>a.includes((0,r.m)(e.entity_id))))),s&&(v=v.filter((e=>{const i=k[e.id];return!i||!i.length||l.every((e=>!s.includes((0,r.m)(e.entity_id))))})),b=b.filter((e=>!s.includes((0,r.m)(e.entity_id))))),o&&(v=v.filter((e=>{const i=k[e.id];return!(!i||!i.length)&&k[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&o.includes(i.attributes.device_class))}))})),b=b.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&o.includes(i.attributes.device_class)}))),d&&(v=v.filter((e=>d(e)))),n&&(v=v.filter((e=>{const i=k[e.id];return!(!i||!i.length)&&k[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))})),b=b.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&n(i)}))));let _=e;const m=new Set;let f;var g;(v&&(f=v.filter((e=>e.area_id)).map((e=>e.area_id)),v.forEach((e=>{e.labels.forEach((e=>m.add(e)))}))),b)&&(f=(null!==(g=f)&&void 0!==g?g:[]).concat(b.filter((e=>e.area_id)).map((e=>e.area_id))),b.forEach((e=>{e.labels.forEach((e=>m.add(e)))})));return f&&f.forEach((e=>{i[e].labels.forEach((e=>m.add(e)))})),h&&(_=_.filter((e=>!h.includes(e.label_id)))),(v||b)&&(_=_.filter((e=>m.has(e.label_id)))),_.length||(_=[{label_id:p,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null,description:null}]),c?_:[..._,{label_id:y,name:this.hass.localize("ui.components.label-picker.add_new"),icon:"mdi:plus",color:null,description:null}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass&&this._labels||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getLabels(this._labels,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels).map((e=>({...e,strings:[e.label_id,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return a.qy` <ha-combo-box .hass="${this.hass}" .helper="${this.helper}" item-value-path="label_id" item-id-path="label_id" item-label-path="name" .value="${this._value}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.label"):this.label}" .placeholder="${this.placeholder?null===(e=this._labels)||void 0===e||null===(e=e.find((e=>e.label_id===this.placeholder)))||void 0===e?void 0:e.name:void 0}" .renderer="${f}" @filter-changed="${this._filterChanged}" @opened-changed="${this._openedChanged}" @value-changed="${this._labelChanged}"> </ha-combo-box> `}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.target,l=e.detail.value;if(!l)return void(this.comboBox.filteredItems=this.comboBox.items);const a=(0,c.H)(l,(null===(i=t.items)||void 0===i?void 0:i.filter((e=>![p,y].includes(e.label_id))))||[]);0===a.length?this.noAdd?this.comboBox.filteredItems=[{label_id:p,name:this.hass.localize("ui.components.label-picker.no_match"),icon:null,color:null}]:(this._suggestion=l,this.comboBox.filteredItems=[{label_id:m,name:this.hass.localize("ui.components.label-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",color:null}]):this.comboBox.filteredItems=a}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===p)return i="",void this.comboBox.setInputValue("");[m,y].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),(0,b.f)(this,{entry:void 0,suggestedName:i===m?this._suggestion:"",createEntry:async e=>{const i=await(0,h._9)(this.hass,e),t=[...this._labels,i];return this.comboBox.filteredItems=this._getLabels(t,this.hass.areas,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeLabels),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.label_id),i}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,n.r)(this,"value-changed",{value:e}),(0,n.r)(this,"change")}),0)}}]}}),(0,v.E)(a.WF));i()}catch(e){i(e)}}))},7339:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var l=t(62659),a=(t(53501),t(21950),t(14460),t(55888),t(66274),t(85038),t(84531),t(98168),t(8339),t(98597)),s=t(196),o=t(66580),d=t(45081),n=t(16895),r=t(77664),c=t(95507),u=t(51477),h=t(94027),v=t(72590),b=(t(9028),t(2090),t(16168)),k=e([b]);b=(k.then?(await k)():k)[0];(0,l.A)([(0,s.EM)("ha-labels-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,attribute:"no-add"})],key:"noAdd",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-label"})],key:"excludeLabels",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.wk)()],key:"_labels",value:void 0},{kind:"field",decorators:[(0,s.P)("ha-label-picker",!0)],key:"labelPicker",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.labelPicker)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.labelPicker)||void 0===e?void 0:e.focus())}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,u.o5)(this.hass.connection,(e=>{const i={};e.forEach((e=>{i[e.label_id]=e})),this._labels=i}))]}},{kind:"field",key:"_sortedLabels",value:()=>(0,d.A)(((e,i,t)=>null==e?void 0:e.map((e=>null==i?void 0:i[e])).sort(((e,i)=>(0,c.x)((null==e?void 0:e.name)||"",(null==i?void 0:i.name)||"",t)))))},{kind:"method",key:"render",value:function(){const e=this._sortedLabels(this.value,this._labels,this.hass.locale.language);return a.qy` ${null!=e&&e.length?a.qy`<ha-chip-set> ${(0,o.u)(e,(e=>null==e?void 0:e.label_id),(e=>{const i=null!=e&&e.color?(0,n.M)(e.color):void 0;return a.qy` <ha-input-chip .item="${e}" @remove="${this._removeItem}" @click="${this._openDetail}" .label="${null==e?void 0:e.name}" selected="selected" style="${i?`--color: ${i}`:""}"> ${null!=e&&e.icon?a.qy`<ha-icon slot="icon" .icon="${e.icon}"></ha-icon>`:a.s6} </ha-input-chip> `}))} </ha-chip-set>`:a.s6} <ha-label-picker .hass="${this.hass}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.label-picker.add_label"):this.label}" .placeholder="${this.placeholder}" .excludeLabels="${this.value}" @value-changed="${this._labelChanged}"> </ha-label-picker> `}},{kind:"get",key:"_value",value:function(){return this.value||[]}},{kind:"method",key:"_removeItem",value:function(e){const i=e.currentTarget.item;this._setValue(this._value.filter((e=>e!==i.label_id)))}},{kind:"method",key:"_openDetail",value:function(e){const i=e.currentTarget.item;(0,v.f)(this,{entry:i,updateEntry:async e=>await(0,u.Rp)(this.hass,i.label_id,e)})}},{kind:"method",key:"_labelChanged",value:function(e){e.stopPropagation();const i=e.detail.value;i&&!this._value.includes(i)&&(this._setValue([...this._value,i]),this.labelPicker.value="")}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,r.r)(this,"value-changed",{value:e}),(0,r.r)(this,"change")}),0)}},{kind:"field",static:!0,key:"styles",value:()=>a.AH`ha-chip-set{margin-bottom:8px}ha-input-chip{--md-input-chip-selected-container-color:var(--color, var(--grey-color));--ha-input-chip-selected-container-opacity:0.5}`}]}}),(0,h.E)(a.WF));i()}catch(e){i(e)}}))},51477:(e,i,t)=>{t.d(i,{Rp:()=>c,_9:()=>r,o5:()=>n});t(14460);var l=t(44856),a=t(95507),s=t(47394);const o=e=>e.sendMessagePromise({type:"config/label_registry/list"}).then((e=>e.sort(((e,i)=>(0,a.x)(e.name,i.name))))),d=(e,i)=>e.subscribeEvents((0,s.s)((()=>o(e).then((e=>i.setState(e,!0)))),500,!0),"label_registry_updated"),n=(e,i)=>(0,l.N)("_labelRegistry",o,d,e,i),r=(e,i)=>e.callWS({type:"config/label_registry/create",...i}),c=(e,i,t)=>e.callWS({type:"config/label_registry/update",label_id:i,...t})},94027:(e,i,t)=>{t.d(i,{E:()=>d});var l=t(62659),a=t(76504),s=t(80792),o=(t(53501),t(21950),t(55888),t(66274),t(22836),t(8339),t(196));const d=e=>(0,l.A)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,a.A)((0,s.A)(t.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,a.A)((0,s.A)(t.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,a.A)((0,s.A)(t.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},72590:(e,i,t)=>{t.d(i,{f:()=>s});t(21950),t(55888),t(8339);var l=t(77664);const a=()=>Promise.all([t.e(6674),t.e(2658),t.e(256),t.e(3410)]).then(t.bind(t,3410)),s=(e,i)=>{(0,l.r)(e,"show-dialog",{dialogTag:"dialog-label-detail",dialogImport:a,dialogParams:i})}}};
//# sourceMappingURL=7339.j0pq_DUyY1A.js.map