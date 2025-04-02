export const __webpack_ids__=["380"];export const __webpack_modules__={49976:function(e,t,i){i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},97969:function(e,t,i){i.d(t,{p:()=>n});const n=e=>e.substr(e.indexOf(".")+1)},47194:function(e,t,i){i.d(t,{C:()=>o});var n=i(97969);const o=e=>{return t=e.entity_id,void 0===(i=e.attributes).friendly_name?(0,n.p)(t).replace(/_/g," "):(i.friendly_name??"").toString();var t,i}},22381:function(e,t,i){i.d(t,{D:()=>n});const n=(e,t,i=!1)=>{let n;const o=(...o)=>{const a=i&&!n;clearTimeout(n),n=window.setTimeout((()=>{n=void 0,e(...o)}),t),a&&e(...o)};return o.cancel=()=>{clearTimeout(n)},o}},7285:function(e,t,i){var n=i(44249),o=i(72621),a=i(65703),s=i(46289),d=i(57243),r=i(50778);(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,o.Z)(i,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[s.W,d.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?d.iv`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:d.iv``]}}]}}),a.K)},92824:function(e,t,i){var n=i(44249),o=i(72621),a=i(60930),s=i(9714),d=i(57243),r=i(50778),l=i(22381),c=i(76320);i(23043);(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:"inline-arrow",type:Boolean})],key:"inlineArrow",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)()],key:"options",value:void 0},{kind:"method",key:"render",value:function(){return d.dy` ${(0,o.Z)(i,"render",this,3)([])} ${this.clearable&&!this.required&&!this.disabled&&this.value?d.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:d.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?d.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:d.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"firstUpdated",value:async function(){(0,o.Z)(i,"firstUpdated",this,3)([]),this.inlineArrow&&this.shadowRoot?.querySelector(".mdc-select__selected-text-container")?.classList.add("inline-arrow")}},{kind:"method",key:"updated",value:function(e){if((0,o.Z)(i,"updated",this,3)([e]),e.has("inlineArrow")){const e=this.shadowRoot?.querySelector(".mdc-select__selected-text-container");this.inlineArrow?e?.classList.add("inline-arrow"):e?.classList.remove("inline-arrow")}e.get("options")&&(this.layoutOptions(),this.selectByValue(this.value))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,l.D)((async()=>{await(0,c.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[s.W,d.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}.inline-arrow{flex-grow:0}`]}]}}),a.K)},3427:function(e,t,i){i.r(t),i.d(t,{HaConversationAgentSelector:()=>k});var n=i(44249),o=i(57243),a=i(50778),s=i(72621),d=(i(9359),i(1331),i(70104),i(36522)),r=i(49976),l=i(22381),c=i(75101),p=i(42740),u=i(57816);const h=(e,t)=>e.callApi("POST","config/config_entries/options/flow",{handler:t,show_advanced_options:Boolean(e.userData?.showAdvanced)}),m=(e,t)=>e.callApi("GET",`config/config_entries/options/flow/${t}`),g=(e,t,i)=>e.callApi("POST",`config/config_entries/options/flow/${t}`,i),v=(e,t)=>e.callApi("DELETE",`config/config_entries/options/flow/${t}`);var _=i(7956);i(7285),i(92824);var f=i(63318);const y="__NONE_OPTION__";(0,n.Z)([(0,a.Mo)("ha-conversation-agent-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_agents",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_configEntry",value:void 0},{kind:"method",key:"render",value:function(){if(!this._agents)return o.Ld;let e=this.value;if(!e&&this.required){for(const t of this._agents)if("conversation.home_assistant"===t.id&&t.supported_languages.includes(this.language)){e=t.id;break}if(!e)for(const t of this._agents)if("*"===t.supported_languages&&t.supported_languages.includes(this.language)){e=t.id;break}}return e||(e=y),o.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.coversation-agent-picker.conversation_agent")}" .value="${e}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> ${this.required?o.Ld:o.dy`<ha-list-item .value="${y}"> ${this.hass.localize("ui.components.coversation-agent-picker.none")} </ha-list-item>`} ${this._agents.map((e=>o.dy`<ha-list-item .value="${e.id}" .disabled="${"*"!==e.supported_languages&&0===e.supported_languages.length}"> ${e.name} </ha-list-item>`))}</ha-select>${this._configEntry?.supports_options?o.dy`<ha-icon-button .path="${"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}" @click="${this._openOptionsFlow}"></ha-icon-button>`:""} `}},{kind:"method",key:"willUpdate",value:function(e){(0,s.Z)(i,"willUpdate",this,3)([e]),this.hasUpdated?e.has("language")&&this._debouncedUpdateAgents():this._updateAgents(),e.has("value")&&this._maybeFetchConfigEntry()}},{kind:"method",key:"_maybeFetchConfigEntry",value:async function(){if(this.value&&this.value in this.hass.entities)try{const e=await(0,f.L3)(this.hass,this.value);if(!e.config_entry_id)return void(this._configEntry=void 0);this._configEntry=(await(0,c.RQ)(this.hass,e.config_entry_id)).config_entry}catch(e){this._configEntry=void 0}else this._configEntry=void 0}},{kind:"field",key:"_debouncedUpdateAgents",value(){return(0,l.D)((()=>this._updateAgents()),500)}},{kind:"method",key:"_updateAgents",value:async function(){const{agents:e}=await(0,p.rM)(this.hass,this.language,this.hass.config.country||void 0);if(this._agents=e,!this.value)return;const t=e.find((e=>e.id===this.value));(0,d.B)(this,"supported-languages-changed",{value:t?.supported_languages}),(!t||"*"!==t.supported_languages&&0===t.supported_languages.length)&&(this.value=void 0,(0,d.B)(this,"value-changed",{value:this.value}))}},{kind:"method",key:"_openOptionsFlow",value:async function(){var e,t,i;this._configEntry&&(e=this,t=this._configEntry,i={manifest:await(0,u.t4)(this.hass,this._configEntry.domain)},(0,_.w)(e,{startFlowHandler:t.entry_id,domain:t.domain,...i},{flowType:"options_flow",showDevices:!1,createFlow:async(e,i)=>{const[n]=await Promise.all([h(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return n},fetchFlow:async(e,i)=>{const[n]=await Promise.all([m(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return n},handleFlowStep:g,deleteFlow:v,renderAbortDescription(e,i){const n=e.localize(`component.${i.translation_domain||t.domain}.options.abort.${i.reason}`,i.description_placeholders);return n?o.dy` <ha-markdown breaks allow-svg .content="${n}"></ha-markdown> `:i.reason},renderShowFormStepHeader:(e,i)=>e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.title`,i.description_placeholders)||e.localize("ui.dialogs.options_flow.form.header"),renderShowFormStepDescription(e,i){const n=e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return n?o.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderShowFormStepFieldLabel(e,i,n,o){if("expandable"===n.type)return e.localize(`component.${t.domain}.options.step.${i.step_id}.sections.${n.name}.name`);const a=o?.path?.[0]?`sections.${o.path[0]}.`:"";return e.localize(`component.${t.domain}.options.step.${i.step_id}.${a}data.${n.name}`)||n.name},renderShowFormStepFieldHelper(e,i,n,a){if("expandable"===n.type)return e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.sections.${n.name}.description`);const s=a?.path?.[0]?`sections.${a.path[0]}.`:"",d=e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.${s}data_description.${n.name}`,i.description_placeholders);return d?o.dy`<ha-markdown breaks .content="${d}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,i,n)=>e.localize(`component.${i.translation_domain||t.domain}.options.error.${n}`,i.description_placeholders)||n,renderShowFormStepFieldLocalizeValue:(e,i,n)=>e.localize(`component.${t.domain}.selector.${n}`),renderShowFormStepSubmitButton:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===i.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>"",renderExternalStepDescription:(e,t)=>"",renderCreateEntryDescription:(e,t)=>o.dy` <p>${e.localize("ui.dialogs.options_flow.success.description")}</p> `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderShowFormProgressDescription(e,i){const n=e.localize(`component.${i.translation_domain||t.domain}.options.progress.${i.progress_action}`,i.description_placeholders);return n?o.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderMenuHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderMenuDescription(e,i){const n=e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return n?o.dy` <ha-markdown allow-svg breaks .content="${n}"></ha-markdown> `:""},renderMenuOption:(e,i,n)=>e.localize(`component.${i.translation_domain||t.domain}.options.step.${i.step_id}.menu_options.${n}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${t.domain}.options.loading`)||("loading_flow"===i||"loading_step"===i?e.localize(`ui.dialogs.options_flow.loading.${i}`,{integration:(0,u.Lh)(e.localize,t.domain)}):"")}))}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{display:flex;align-items:center}ha-select{width:100%}ha-icon-button{color:var(--secondary-text-color)}`},{kind:"method",key:"_changed",value:function(e){const t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===y||(this.value=t.value===y?void 0:t.value,(0,d.B)(this,"value-changed",{value:this.value}),(0,d.B)(this,"supported-languages-changed",{value:this._agents.find((e=>e.id===this.value))?.supported_languages}))}}]}}),o.oi);let k=(0,n.Z)([(0,a.Mo)("ha-selector-conversation_agent")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){return o.dy`<ha-conversation-agent-picker .hass="${this.hass}" .value="${this.value}" .language="${this.selector.conversation_agent?.language||this.context?.language}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-conversation-agent-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`ha-conversation-agent-picker{width:100%}`}]}}),o.oi)},75101:function(e,t,i){i.d(t,{RQ:()=>o,pB:()=>n});i(9359),i(56475),i(1331);const n=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},o=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t})},42740:function(e,t,i){i.d(t,{KH:()=>a,rM:()=>o,zt:()=>n});let n=function(e){return e[e.CONTROL=1]="CONTROL",e}({});const o=(e,t,i)=>e.callWS({type:"conversation/agent/list",language:t,country:i}),a=(e,t,i)=>e.callWS({type:"conversation/agent/homeassistant/language_scores",language:t,country:i})},63318:function(e,t,i){i.d(t,{Iq:()=>d,L3:()=>s,Mw:()=>l,vA:()=>a,w1:()=>r});i(9359),i(56475),i(1331);var n=i(27486),o=i(47194);i(1416);const a=(e,t)=>{if(t.name)return t.name;const i=e.states[t.entity_id];return i?(0,o.C)(i):t.original_name?t.original_name:t.entity_id},s=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),d=(e,t)=>e.callWS({type:"config/entity_registry/get_entries",entity_ids:t}),r=(0,n.Z)((e=>{const t={};for(const i of e)t[i.entity_id]=i;return t})),l=(0,n.Z)((e=>{const t={};for(const i of e)t[i.id]=i;return t}))},57816:function(e,t,i){i.d(t,{F3:()=>o,Lh:()=>n,t4:()=>a});const n=(e,t,i)=>e(`component.${t}.title`)||i?.name||t,o=(e,t)=>{const i={type:"manifest/list"};return t&&(i.integrations=t),e.callWS(i)},a=(e,t)=>e.callWS({type:"manifest/get",integration:t})},7956:function(e,t,i){i.d(t,{w:()=>a});var n=i(36522);const o=()=>Promise.all([i.e("3578"),i.e("3895"),i.e("7983"),i.e("4782"),i.e("3258"),i.e("986")]).then(i.bind(i,12656)),a=(e,t,i)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}}};
//# sourceMappingURL=380.009af73ee4bbe2b5.js.map