export const id=5327;export const ids=[5327,2840];export const modules={15263:(e,t,a)=>{a.a(e,(async(e,i)=>{try{a.d(t,{PE:()=>d});a(53501);var s=a(92840),n=a(67319),o=a(65647),r=e([s]);s=(r.then?(await r)():r)[0];const l=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],d=e=>e.first_weekday===o.zt.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,n.S)(e.language)%7:l.includes(e.first_weekday)?l.indexOf(e.first_weekday):1;i()}catch(e){i(e)}}))},60441:(e,t,a)=>{a.a(e,(async(e,i)=>{try{a.d(t,{LW:()=>y,Xs:()=>m,fU:()=>d,ie:()=>c});var s=a(92840),n=a(45081),o=a(35163),r=a(97484),l=e([s]);s=(l.then?(await l)():l)[0];const d=(e,t,a)=>h(t,a.time_zone).format(e),h=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,r.J)(e)?"h12":"h23",timeZone:(0,o.w)(e.time_zone,t)}))),c=(e,t,a)=>u(t,a.time_zone).format(e),u=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,r.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,r.J)(e)?"h12":"h23",timeZone:(0,o.w)(e.time_zone,t)}))),m=(e,t,a)=>v(t,a.time_zone).format(e),v=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,r.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,r.J)(e)?"h12":"h23",timeZone:(0,o.w)(e.time_zone,t)}))),y=(e,t,a)=>f(t,a.time_zone).format(e),f=(0,n.A)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,o.w)(e.time_zone,t)})));i()}catch(e){i(e)}}))},35163:(e,t,a)=>{a.d(t,{w:()=>h});var i,s,n,o,r,l=a(65647);const d=null!==(i=null===(s=(n=Intl).DateTimeFormat)||void 0===s||null===(o=(r=s.call(n)).resolvedOptions)||void 0===o?void 0:o.call(r).timeZone)&&void 0!==i?i:"UTC",h=(e,t)=>e===l.Wj.local&&"UTC"!==d?d:t},97484:(e,t,a)=>{a.d(t,{J:()=>n});a(53501);var i=a(45081),s=a(65647);const n=(0,i.A)((e=>{if(e.time_format===s.Hg.language||e.time_format===s.Hg.system){const t=e.time_format===s.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===s.Hg.am_pm}))},75327:(e,t,a)=>{a.a(e,(async(e,i)=>{try{a.r(t);var s=a(62659),n=a(76504),o=a(80792),r=(a(21950),a(71936),a(55888),a(66274),a(84531),a(8339),a(52345)),l=a(20068),d=a(73330),h=a(36847),c=a(56138),u=a(21513),m=a(94061),v=a(51561),y=a(98597),f=a(196),g=a(15263),k=a(60441),_=a(97484),p=a(77664),w=(a(42398),a(88436)),b=a(65647),x=a(98876),z=a(14126),$=e([g,k,h,d,r]);[g,k,h,d,r]=$.then?(await $)():$;const I={plugins:[h.A,d.Ay],headerToolbar:!1,initialView:"timeGridWeek",editable:!0,selectable:!0,selectMirror:!0,selectOverlap:!1,eventOverlap:!1,allDaySlot:!1,height:"parent",locales:l.A,firstDay:1,dayHeaderFormat:{weekday:"short",month:void 0,day:void 0}};(0,s.A)([(0,f.EM)("ha-schedule-form")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"new",value:()=>!1},{kind:"field",decorators:[(0,f.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_monday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_tuesday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_wednesday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_thursday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_friday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_saturday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_sunday",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"calendar",value:void 0},{kind:"field",key:"_item",value:void 0},{kind:"set",key:"item",value:function(e){this._item=e,e?(this._name=e.name||"",this._icon=e.icon||"",this._monday=e.monday||[],this._tuesday=e.tuesday||[],this._wednesday=e.wednesday||[],this._thursday=e.thursday||[],this._friday=e.friday||[],this._saturday=e.saturday||[],this._sunday=e.sunday||[]):(this._name="",this._icon="",this._monday=[],this._tuesday=[],this._wednesday=[],this._thursday=[],this._friday=[],this._saturday=[],this._sunday=[])}},{kind:"method",key:"disconnectedCallback",value:function(){var e,t;(0,n.A)((0,o.A)(a.prototype),"disconnectedCallback",this).call(this),null===(e=this.calendar)||void 0===e||e.destroy(),this.calendar=void 0,null===(t=this.renderRoot.querySelector("style[data-fullcalendar]"))||void 0===t||t.remove()}},{kind:"method",key:"connectedCallback",value:function(){(0,n.A)((0,o.A)(a.prototype),"connectedCallback",this).call(this),this.hasUpdated&&!this.calendar&&this.setupCalendar()}},{kind:"method",key:"focus",value:function(){this.updateComplete.then((()=>{var e;return null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector("[dialogInitialFocus]"))||void 0===e?void 0:e.focus()}))}},{kind:"method",key:"render",value:function(){return this.hass?y.qy` <div class="form"> <ha-textfield .value="${this._name}" .configValue="${"name"}" @input="${this._valueChanged}" .label="${this.hass.localize("ui.dialogs.helper_settings.generic.name")}" autoValidate required .validationMessage="${this.hass.localize("ui.dialogs.helper_settings.required_error_msg")}" dialogInitialFocus></ha-textfield> <ha-icon-picker .hass="${this.hass}" .value="${this._icon}" .configValue="${"icon"}" @value-changed="${this._valueChanged}" .label="${this.hass.localize("ui.dialogs.helper_settings.generic.icon")}"></ha-icon-picker> <div id="calendar"></div> </div> `:y.s6}},{kind:"method",key:"willUpdate",value:function(e){if((0,n.A)((0,o.A)(a.prototype),"willUpdate",this).call(this,e),!this.calendar)return;(e.has("_sunday")||e.has("_monday")||e.has("_tuesday")||e.has("_wednesday")||e.has("_thursday")||e.has("_friday")||e.has("_saturday")||e.has("calendar"))&&(this.calendar.removeAllEventSources(),this.calendar.addEventSource(this._events));const t=e.get("hass");t&&t.language!==this.hass.language&&this.calendar.setOption("locale",this.hass.language)}},{kind:"method",key:"firstUpdated",value:function(){this.setupCalendar()}},{kind:"method",key:"setupCalendar",value:function(){const e={...I,locale:this.hass.language,firstDay:(0,g.PE)(this.hass.locale),slotLabelFormat:{hour:"numeric",minute:void 0,hour12:(0,_.J)(this.hass.locale),meridiem:!!(0,_.J)(this.hass.locale)&&"narrow"},eventTimeFormat:{hour:(0,_.J)(this.hass.locale)?"numeric":"2-digit",minute:(0,_.J)(this.hass.locale)?"numeric":"2-digit",hour12:(0,_.J)(this.hass.locale),meridiem:!!(0,_.J)(this.hass.locale)&&"narrow"}};e.eventClick=e=>this._handleEventClick(e),e.select=e=>this._handleSelect(e),e.eventResize=e=>this._handleEventResize(e),e.eventDrop=e=>this._handleEventDrop(e),this.calendar=new r.Vv(this.shadowRoot.getElementById("calendar"),e),this.calendar.render()}},{kind:"get",key:"_events",value:function(){const e=[];for(const[t,a]of w.mx.entries())this[`_${a}`].length&&this[`_${a}`].forEach(((i,s)=>{let n=(0,c.s)(new Date,t);(0,u.R)(n,new Date,{weekStartsOn:(0,g.PE)(this.hass.locale)})||(n=(0,m.f)(n,-7));const o=new Date(n),r=i.from.split(":");o.setHours(parseInt(r[0]),parseInt(r[1]),0,0);const l=new Date(n),d=i.to.split(":");l.setHours(parseInt(d[0]),parseInt(d[1]),0,0),e.push({id:`${a}-${s}`,start:o.toISOString(),end:l.toISOString()})}));return e}},{kind:"method",key:"_handleSelect",value:function(e){const{start:t,end:a}=e,i=w.mx[t.getDay()],s=[...this[`_${i}`]],n={...this._item},o=(0,k.LW)(a,{...this.hass.locale,time_zone:b.Wj.local},this.hass.config);s.push({from:(0,k.LW)(t,{...this.hass.locale,time_zone:b.Wj.local},this.hass.config),to:(0,v.r)(t,a)&&"0:00"!==o?o:"24:00"}),n[i]=s,(0,p.r)(this,"value-changed",{value:n}),(0,v.r)(t,a)||this.calendar.unselect()}},{kind:"method",key:"_handleEventResize",value:function(e){const{id:t,start:a,end:i}=e.event,[s,n]=t.split("-"),o=this[`_${s}`][parseInt(n)],r={...this._item},l=(0,k.LW)(i,this.hass.locale,this.hass.config);r[s][n]={from:o.from,to:(0,v.r)(a,i)&&"0:00"!==l?l:"24:00"},(0,p.r)(this,"value-changed",{value:r}),(0,v.r)(a,i)||(this.requestUpdate(`_${s}`),e.revert())}},{kind:"method",key:"_handleEventDrop",value:function(e){const{id:t,start:a,end:i}=e.event,[s,n]=t.split("-"),o=w.mx[a.getDay()],r={...this._item},l=(0,k.LW)(i,this.hass.locale,this.hass.config),d={from:(0,k.LW)(a,this.hass.locale,this.hass.config),to:(0,v.r)(a,i)&&"0:00"!==l?l:"24:00"};if(o===s)r[s][n]=d;else{r[s].splice(n,1);const e=[...this[`_${o}`]];e.push(d),r[o]=e}(0,p.r)(this,"value-changed",{value:r}),(0,v.r)(a,i)||(this.requestUpdate(`_${s}`),e.revert())}},{kind:"method",key:"_handleEventClick",value:async function(e){if(!await(0,x.dk)(this,{title:this.hass.localize("ui.dialogs.helper_settings.schedule.delete"),text:this.hass.localize("ui.dialogs.helper_settings.schedule.confirm_delete"),destructive:!0,confirmText:this.hass.localize("ui.common.delete")}))return;const[t,a]=e.event.id.split("-"),i=[...this[`_${t}`]],s={...this._item};i.splice(parseInt(a),1),s[t]=i,(0,p.r)(this,"value-changed",{value:s})}},{kind:"method",key:"_valueChanged",value:function(e){var t;if(!this.new&&!this._item)return;e.stopPropagation();const a=e.target.configValue,i=(null===(t=e.detail)||void 0===t?void 0:t.value)||e.target.value;if(this[`_${a}`]===i)return;const s={...this._item};i?s[a]=i:delete s[a],(0,p.r)(this,"value-changed",{value:s})}},{kind:"get",static:!0,key:"styles",value:function(){return[z.RF,y.AH`.form{color:var(--primary-text-color)}ha-textfield{display:block;margin:8px 0}#calendar{margin:8px 0;height:450px;width:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none;--fc-border-color:var(--divider-color);--fc-event-border-color:var(--divider-color)}.fc-v-event .fc-event-time{white-space:inherit}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--divider-color);border-radius:var(--mdc-shape-small,4px)}.fc-scrollgrid-section-header td{border:none}:host([narrow]) .fc-scrollgrid-sync-table{overflow:hidden}table.fc-scrollgrid-sync-table tbody tr:first-child .fc-daygrid-day-top{padding-top:0}.fc-scroller::-webkit-scrollbar{width:.4rem;height:.4rem}.fc-scroller::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.fc-scroller{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}.fc-timegrid-event-short .fc-event-time:after{content:""}a{color:inherit!important}th.fc-col-header-cell.fc-day{background-color:var(--table-header-background-color);color:var(--primary-text-color);font-size:11px;font-weight:700;text-transform:uppercase}`]}}]}}),y.WF);i()}catch(e){i(e)}}))},92840:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(21950),a(71936),a(55888),a(8339);var i=a(68079),s=a(11703),n=a(3444),o=a(45177),r=a(86935),l=a(39083),d=a(50644),h=a(29051),c=a(73938),u=a(88514);const e=async()=>{const e=(0,c.wb)(),t=[];(0,n.Z)()&&await Promise.all([a.e(5378),a.e(3964)]).then(a.bind(a,63964)),(0,r.Z)()&&await Promise.all([a.e(3789),a.e(5378),a.e(3833)]).then(a.bind(a,63833)),(0,i.Z)(e)&&t.push(Promise.all([a.e(3789),a.e(5105)]).then(a.bind(a,15105)).then((()=>(0,u.T)()))),(0,s.Z6)(e)&&t.push(Promise.all([a.e(3789),a.e(2713)]).then(a.bind(a,62713))),(0,o.Z)(e)&&t.push(Promise.all([a.e(3789),a.e(3506)]).then(a.bind(a,53506))),(0,l.Z)(e)&&t.push(Promise.all([a.e(3789),a.e(9693)]).then(a.bind(a,49693))),(0,d.Z)(e)&&t.push(Promise.all([a.e(3789),a.e(9596)]).then(a.bind(a,29596)).then((()=>a.e(5224).then(a.t.bind(a,5224,23))))),(0,h.Z)(e)&&t.push(Promise.all([a.e(3789),a.e(317)]).then(a.bind(a,30317))),0!==t.length&&await Promise.all(t).then((()=>(0,u.K)(e)))};await e(),t()}catch(e){t(e)}}),1)}};
//# sourceMappingURL=5327.sK27ichvojo.js.map