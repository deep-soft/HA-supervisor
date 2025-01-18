export const ids=["515"];export const modules={49976:function(e,t,i){i.d(t,{U:function(){return n}});const n=e=>e.stopPropagation()},22381:function(e,t,i){i.d(t,{D:function(){return n}});const n=(e,t,i=!1)=>{let n;const a=(...a)=>{const d=i&&!n;clearTimeout(n),n=window.setTimeout((()=>{n=void 0,e(...a)}),t),d&&e(...a)};return a.cancel=()=>{clearTimeout(n)},a}},7285:function(e,t,i){var n=i(44249),a=i(72621),d=i(65703),s=i(46289),o=i(57243),l=i(50778);(0,n.Z)([(0,l.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,o.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?o.iv`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:o.iv``]}}]}}),d.K)},92824:function(e,t,i){var n=i(44249),a=i(72621),d=i(60930),s=i(9714),o=i(57243),l=i(50778),r=i(22381),c=i(76320);i(23043);(0,n.Z)([(0,l.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value:()=>!1},{kind:"method",key:"render",value:function(){return o.dy` ${(0,a.Z)(i,"render",this,3)([])} ${this.clearable&&!this.required&&!this.disabled&&this.value?o.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:o.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?o.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:o.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){(0,a.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow&&this.shadowRoot?.querySelector(".mdc-select__selected-text-container")?.classList.add("inline-arrow")}},{kind:"method",key:"updated",value:function(e){if((0,a.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){const e=this.shadowRoot?.querySelector(".mdc-select__selected-text-container");this.inlineArrow?e?.classList.add("inline-arrow"):e?.classList.remove("inline-arrow")}}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,o.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`]}]}}),d.K)},12596:function(e,t,i){i.r(t),i.d(t,{HaTTSVoiceSelector:function(){return s}});var n=i(44249),a=i(57243),d=i(50778);i(20901);let s=(0,n.Z)([(0,d.Mo)("ha-selector-tts_voice")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){return a.dy`<ha-tts-voice-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .language="${this.selector.tts_voice?.language||this.context?.language}" .engineId="${this.selector.tts_voice?.engineId||this.context?.engineId}" .disabled="${this.disabled}" .required="${this.required}"></ha-tts-voice-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-tts-picker{width:100%}`}]}}),a.oi)},20901:function(e,t,i){var n=i(44249),a=i(72621),d=(i(39527),i(67670),i(13334),i(57243)),s=i(50778),o=i(36522),l=i(49976),r=i(22381),c=i(58968);i(7285),i(92824);const u="__NONE_OPTION__";(0,n.Z)([(0,s.Mo)("ha-tts-voice-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"engineId",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_voices",value:void 0},{kind:"field",decorators:[(0,s.IO)("ha-select")],key:"_select",value:void 0},{kind:"method",key:"render",value:function(){if(!this._voices)return d.Ld;const e=this.value??(this.required?this._voices[0]?.voice_id:u);return d.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.tts-voice-picker.voice")}" .value="${e}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${l.U}" fixedMenuPosition naturalMenuWidth> ${this.required?d.Ld:d.dy`<ha-list-item .value="${u}"> ${this.hass.localize("ui.components.tts-voice-picker.none")} </ha-list-item>`} ${this._voices.map((e=>d.dy`<ha-list-item .value="${e.voice_id}"> ${e.name} </ha-list-item>`))} </ha-select> `}},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)(i,"willUpdate",this,3)([e]),this.hasUpdated?(e.has("language")||e.has("engineId"))&&this._debouncedUpdateVoices():this._updateVoices()}},{kind:"field",key:"_debouncedUpdateVoices",value(){return(0,r.D)((()=>this._updateVoices()),500)}},{kind:"method",key:"_updateVoices",value:async function(){this.engineId&&this.language?(this._voices=(await(0,c.MV)(this.hass,this.engineId,this.language)).voices,this.value&&(this._voices&&this._voices.find((e=>e.voice_id===this.value))||(this.value=void 0,(0,o.B)(this,"value-changed",{value:this.value})))):this._voices=void 0}},{kind:"method",key:"updated",value:function(e){(0,a.Z)(i,"updated",this,3)([e]),e.has("_voices")&&this._select?.value!==this.value&&(this._select?.layoutOptions(),(0,o.B)(this,"value-changed",{value:this._select?.value}))}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===u||(this.value=t.value===u?void 0:t.value,(0,o.B)(this,"value-changed",{value:this.value}))}}]}}),d.oi)},58968:function(e,t,i){i.d(t,{MV:function(){return r},Wg:function(){return o},Xk:function(){return s},aT:function(){return n},b_:function(){return d},yP:function(){return l}});const n=(e,t)=>e.callApi("POST","tts_get_url",t),a="media-source://tts/",d=e=>e.startsWith(a),s=e=>e.substring(19),o=(e,t,i)=>e.callWS({type:"tts/engine/list",language:t,country:i}),l=(e,t)=>e.callWS({type:"tts/engine/get",engine_id:t}),r=(e,t,i)=>e.callWS({type:"tts/engine/voices",engine_id:t,language:i})}};
//# sourceMappingURL=515.c3f8e8f50c5c1cf6.js.map