export const id=1872;export const ids=[1872,2840];export const modules={77396:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.d(t,{Yq:()=>d,zB:()=>c});i(54317),i(54895),i(66274),i(85767);var o=i(92840),n=i(45081),r=i(65647),s=i(35163),l=e([o]);o=(l.then?(await l)():l)[0];(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,s.w)(e.time_zone,t)})));const d=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,s.w)(e.time_zone,t)}))),c=((0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,s.w)(e.time_zone,t)}))),(e,t,i)=>{var a,o,n,s;const l=h(t,i.time_zone);if(t.date_format===r.ow.language||t.date_format===r.ow.system)return l.format(e);const d=l.formatToParts(e),u=null===(a=d.find((e=>"literal"===e.type)))||void 0===a?void 0:a.value,c=null===(o=d.find((e=>"day"===e.type)))||void 0===o?void 0:o.value,m=null===(n=d.find((e=>"month"===e.type)))||void 0===n?void 0:n.value,p=null===(s=d.find((e=>"year"===e.type)))||void 0===s?void 0:s.value,f=d.at(d.length-1);let v="literal"===(null==f?void 0:f.type)?null==f?void 0:f.value:"";"bg"===t.language&&t.date_format===r.ow.YMD&&(v="");return{[r.ow.DMY]:`${c}${u}${m}${u}${p}${v}`,[r.ow.MDY]:`${m}${u}${c}${u}${p}${v}`,[r.ow.YMD]:`${p}${u}${m}${u}${c}${v}`}[t.date_format]}),h=(0,n.A)(((e,t)=>{const i=e.date_format===r.ow.system?void 0:e.language;return e.date_format===r.ow.language||(e.date_format,r.ow.system),new Intl.DateTimeFormat(i,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,s.w)(e.time_zone,t)})}));(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,s.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,s.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,s.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,s.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,s.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,s.w)(e.time_zone,t)})));a()}catch(e){a(e)}}))},64854:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.d(t,{r6:()=>c});var o=i(92840),n=i(45081),r=i(77396),s=i(60441),l=i(35163),d=i(97484),u=e([o,r,s]);[o,r,s]=u.then?(await u)():u;const c=(e,t,i)=>h(t,i.time_zone).format(e),h=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,d.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)})));(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,d.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,d.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,d.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)}))),(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,d.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,d.J)(e)?"h12":"h23",timeZone:(0,l.w)(e.time_zone,t)})));a()}catch(e){a(e)}}))},60441:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.d(t,{LW:()=>f,Xs:()=>m,fU:()=>d,ie:()=>c});var o=i(92840),n=i(45081),r=i(35163),s=i(97484),l=e([o]);o=(l.then?(await l)():l)[0];const d=(e,t,i)=>u(t,i.time_zone).format(e),u=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,s.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),c=(e,t,i)=>h(t,i.time_zone).format(e),h=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,s.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),m=(e,t,i)=>p(t,i.time_zone).format(e),p=(0,n.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,s.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),f=(e,t,i)=>v(t,i.time_zone).format(e),v=(0,n.A)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.w)(e.time_zone,t)})));a()}catch(e){a(e)}}))},35163:(e,t,i)=>{i.d(t,{w:()=>u});var a,o,n,r,s,l=i(65647);const d=null!==(a=null===(o=(n=Intl).DateTimeFormat)||void 0===o||null===(r=(s=o.call(n)).resolvedOptions)||void 0===r?void 0:r.call(s).timeZone)&&void 0!==a?a:"UTC",u=(e,t)=>e===l.Wj.local&&"UTC"!==d?d:t},97484:(e,t,i)=>{i.d(t,{J:()=>n});i(53501);var a=i(45081),o=i(65647);const n=(0,a.A)((e=>{if(e.time_format===o.Hg.language||e.time_format===o.Hg.system){const t=e.time_format===o.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===o.Hg.am_pm}))},33997:(e,t,i)=>{i.d(t,{H:()=>a});i(27934),i(21950),i(55888),i(98168),i(8339);const a=async e=>{if(!e.parentNode)throw new Error("Cannot setup Leaflet map on disconnected element");const t=(await Promise.all([i.e(1859),i.e(5027)]).then(i.t.bind(i,75027,23))).default;t.Icon.Default.imagePath="/static/images/leaflet/images/";const a=t.map(e),n=document.createElement("link");n.setAttribute("href","/static/images/leaflet/leaflet.css"),n.setAttribute("rel","stylesheet"),e.parentNode.appendChild(n),a.setView([52.3731339,4.8903147],13);return[a,t,o(t).addTo(a)]},o=e=>e.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}"+(e.Browser.retina?"@2x.png":".png"),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",minZoom:0,maxZoom:20})},55118:(e,t,i)=>{var a=i(62659),o=(i(21950),i(8339),i(98597)),n=i(196);(0,a.A)([(0,n.EM)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return o.qy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>o.AH`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}`}]}}),o.WF)},61872:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t),i.d(t,{HaLocationSelector:()=>c});var o=i(62659),n=(i(21950),i(8339),i(98597)),r=i(196),s=i(45081),l=i(77664),d=i(88088),u=(i(23006),e([d]));d=(u.then?(await u)():u)[0];let c=(0,o.A)([(0,r.EM)("ha-selector-location")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Object})],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",key:"_schema",value:()=>(0,s.A)(((e,t)=>[{name:"",type:"grid",schema:[{name:"latitude",required:!0,selector:{number:{step:"any"}}},{name:"longitude",required:!0,selector:{number:{step:"any"}}}]},...e?[{name:"radius",required:!0,default:1e3,disabled:!!t,selector:{number:{min:0,step:1,mode:"box"}}}]:[]]))},{kind:"method",key:"willUpdate",value:function(){var e;this.value||(this.value={latitude:this.hass.config.latitude,longitude:this.hass.config.longitude,radius:null!==(e=this.selector.location)&&void 0!==e&&e.radius?1e3:void 0})}},{kind:"method",key:"render",value:function(){var e,t;return n.qy` <p>${this.label?this.label:""}</p> <ha-locations-editor class="flex" .hass="${this.hass}" .helper="${this.helper}" .locations="${this._location(this.selector,this.value)}" @location-updated="${this._locationChanged}" @radius-updated="${this._radiusChanged}"></ha-locations-editor> <ha-form .hass="${this.hass}" .schema="${this._schema(null===(e=this.selector.location)||void 0===e?void 0:e.radius,null===(t=this.selector.location)||void 0===t?void 0:t.radius_readonly)}" .data="${this.value}" .computeLabel="${this._computeLabel}" .disabled="${this.disabled}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"field",key:"_location",value(){return(0,s.A)(((e,t)=>{var i,a,o,n,r,s;const l=getComputedStyle(this),d=null!==(i=e.location)&&void 0!==i&&i.radius?l.getPropertyValue("--zone-radius-color")||l.getPropertyValue("--accent-color"):void 0;return[{id:"location",latitude:!t||isNaN(t.latitude)?this.hass.config.latitude:t.latitude,longitude:!t||isNaN(t.longitude)?this.hass.config.longitude:t.longitude,radius:null!==(a=e.location)&&void 0!==a&&a.radius?(null==t?void 0:t.radius)||1e3:void 0,radius_color:d,icon:null!==(o=e.location)&&void 0!==o&&o.icon||null!==(n=e.location)&&void 0!==n&&n.radius?"mdi:map-marker-radius":"mdi:map-marker",location_editable:!0,radius_editable:!(null===(r=e.location)||void 0===r||!r.radius||null!==(s=e.location)&&void 0!==s&&s.radius_readonly)}]}))}},{kind:"method",key:"_locationChanged",value:function(e){const[t,i]=e.detail.location;(0,l.r)(this,"value-changed",{value:{...this.value,latitude:t,longitude:i}})}},{kind:"method",key:"_radiusChanged",value:function(e){const t=Math.round(e.detail.radius);(0,l.r)(this,"value-changed",{value:{...this.value,radius:t}})}},{kind:"method",key:"_valueChanged",value:function(e){var t,i;e.stopPropagation();const a=e.detail.value,o=Math.round(e.detail.value.radius);(0,l.r)(this,"value-changed",{value:{latitude:a.latitude,longitude:a.longitude,...null===(t=this.selector.location)||void 0===t||!t.radius||null!==(i=this.selector.location)&&void 0!==i&&i.radius_readonly?{}:{radius:o}}})}},{kind:"field",key:"_computeLabel",value(){return e=>this.hass.localize(`ui.components.selectors.location.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>n.AH`ha-locations-editor{display:block;height:400px;margin-bottom:16px}p{margin-top:0}`}]}}),n.WF);a()}catch(e){a(e)}}))},43656:(e,t,i)=>{var a=i(62659),o=(i(21950),i(8339),i(98597)),n=i(196),r=i(12506),s=i(77664);let l=(0,a.A)(null,(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:"entity-id"})],key:"entityId",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"entity-name"})],key:"entityName",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"entity-picture"})],key:"entityPicture",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:"entity-color"})],key:"entityColor",value:void 0},{kind:"method",key:"render",value:function(){return o.qy` <div class="marker ${this.entityPicture?"picture":""}" style="${(0,r.W)({"border-color":this.entityColor})}" @click="${this._badgeTap}"> ${this.entityPicture?o.qy`<div class="entity-picture" style="${(0,r.W)({"background-image":`url(${this.entityPicture})`})}"></div>`:this.entityName} </div> `}},{kind:"method",key:"_badgeTap",value:function(e){e.stopPropagation(),this.entityId&&(0,s.r)(this,"hass-more-info",{entityId:this.entityId})}},{kind:"get",static:!0,key:"styles",value:function(){return o.AH`.marker{display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:48px;height:48px;font-size:var(--ha-marker-font-size, 1.5em);border-radius:var(--ha-marker-border-radius,50%);border:1px solid var(--ha-marker-color,var(--primary-color));color:var(--primary-text-color);background-color:var(--card-background-color)}.marker.picture{overflow:hidden}.entity-picture{background-size:cover;height:100%;width:100%}`}}]}}),o.WF);customElements.define("ha-entity-marker",l)},88088:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(62659),o=i(76504),n=i(80792),r=(i(21950),i(71936),i(55888),i(66274),i(85038),i(84531),i(98168),i(8339),i(98597)),s=i(196),l=i(45081),d=i(77664),u=(i(55118),i(76474)),c=e([u]);u=(c.then?(await c)():c)[0];(0,a.A)([(0,s.EM)("ha-locations-editor")],(function(e,t){class a extends t{constructor(){super(),e(this),this._loadPromise=Promise.all([i.e(1859),i.e(5027)]).then(i.t.bind(i,75027,23)).then((e=>i.e(9943).then(i.t.bind(i,19943,23)).then((()=>(this.Leaflet=e.default,this._updateMarkers(),this.updateComplete.then((()=>this.fitMap())))))))}}return{F:a,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"locations",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Number})],key:"zoom",value:()=>16},{kind:"field",decorators:[(0,s.MZ)({attribute:"theme-mode",type:String})],key:"themeMode",value:()=>"auto"},{kind:"field",decorators:[(0,s.wk)()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_circles",value:()=>({})},{kind:"field",decorators:[(0,s.P)("ha-map",!0)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_loadPromise",value:void 0},{kind:"method",key:"fitMap",value:function(e){this.map.fitMap(e)}},{kind:"method",key:"fitBounds",value:function(e,t){this.map.fitBounds(e,t)}},{kind:"method",key:"fitMarker",value:async function(e,t){if(this.Leaflet||await this._loadPromise,!this.map.leafletMap||!this._locationMarkers)return;const i=this._locationMarkers[e];if(i)if("getBounds"in i)this.map.leafletMap.fitBounds(i.getBounds()),i.bringToFront();else{const a=this._circles[e];a?this.map.leafletMap.fitBounds(a.getBounds()):this.map.leafletMap.setView(i.getLatLng(),(null==t?void 0:t.zoom)||this.zoom)}}},{kind:"method",key:"render",value:function(){return r.qy` <ha-map .hass="${this.hass}" .layers="${this._getLayers(this._circles,this._locationMarkers)}" .zoom="${this.zoom}" .autoFit="${this.autoFit}" .themeMode="${this.themeMode}"></ha-map> ${this.helper?r.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"field",key:"_getLayers",value:()=>(0,l.A)(((e,t)=>{const i=[];return Array.prototype.push.apply(i,Object.values(e)),t&&Array.prototype.push.apply(i,Object.values(t)),i}))},{kind:"method",key:"willUpdate",value:function(e){(0,o.A)((0,n.A)(a.prototype),"willUpdate",this).call(this,e),this.Leaflet&&e.has("locations")&&this._updateMarkers()}},{kind:"method",key:"updated",value:function(e){if(this.Leaflet&&e.has("locations")){var t;const a=e.get("locations"),o=null===(t=this.locations)||void 0===t?void 0:t.filter(((e,t)=>{var i,o;return!a[t]||(e.latitude!==a[t].latitude||e.longitude!==a[t].longitude)&&(null===(i=this.map.leafletMap)||void 0===i?void 0:i.getBounds().contains({lat:a[t].latitude,lng:a[t].longitude}))&&!(null!==(o=this.map.leafletMap)&&void 0!==o&&o.getBounds().contains({lat:e.latitude,lng:e.longitude}))}));var i;if(1===(null==o?void 0:o.length))null===(i=this.map.leafletMap)||void 0===i||i.panTo({lat:o[0].latitude,lng:o[0].longitude})}}},{kind:"method",key:"_updateLocation",value:function(e){const t=e.target,i=t.getLatLng();let a=i.lng;Math.abs(a)>180&&(a=(a%360+540)%360-180);const o=[i.lat,a];(0,d.r)(this,"location-updated",{id:t.id,location:o},{bubbles:!1})}},{kind:"method",key:"_updateRadius",value:function(e){const t=e.target,i=this._locationMarkers[t.id];(0,d.r)(this,"radius-updated",{id:t.id,radius:i.getRadius()},{bubbles:!1})}},{kind:"method",key:"_markerClicked",value:function(e){const t=e.target;(0,d.r)(this,"marker-clicked",{id:t.id},{bubbles:!1})}},{kind:"method",key:"_updateMarkers",value:function(){if(!this.locations||!this.locations.length)return this._circles={},void(this._locationMarkers=void 0);const e={},t={},i=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach((a=>{let o;if(a.icon||a.iconPath){const e=document.createElement("div");let t;e.className="named-icon",void 0!==a.name&&(e.innerText=a.name),a.icon?(t=document.createElement("ha-icon"),t.setAttribute("icon",a.icon)):(t=document.createElement("ha-svg-icon"),t.setAttribute("path",a.iconPath)),e.prepend(t),o=this.Leaflet.divIcon({html:e.outerHTML,iconSize:[24,24],className:"light"})}if(a.radius){const n=this.Leaflet.circle([a.latitude,a.longitude],{color:a.radius_color||i,radius:a.radius});a.radius_editable||a.location_editable?(n.editing.enable(),n.addEventListener("add",(()=>{const e=n.editing._moveMarker,t=n.editing._resizeMarkers[0];o&&e.setIcon(o),t.id=e.id=a.id,e.addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e))),a.radius_editable?t.addEventListener("dragend",(e=>this._updateRadius(e))):t.remove()})),e[a.id]=n):t[a.id]=n}if(!a.radius||!a.radius_editable&&!a.location_editable){const t={title:a.name,draggable:a.location_editable};o&&(t.icon=o);const i=this.Leaflet.marker([a.latitude,a.longitude],t).addEventListener("dragend",(e=>this._updateLocation(e))).addEventListener("click",(e=>this._markerClicked(e)));i.id=a.id,e[a.id]=i}})),this._circles=t,this._locationMarkers=e,(0,d.r)(this,"markers-updated")}},{kind:"get",static:!0,key:"styles",value:function(){return r.AH`ha-map{display:block;height:100%}`}}]}}),r.WF);t()}catch(e){t(e)}}))},76474:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(62659),o=i(76504),n=i(80792),r=i(74808),s=(i(21950),i(71936),i(55888),i(66274),i(84531),i(98168),i(8339),i(79581)),l=i(98597),d=i(196),u=i(64854),c=i(60441),h=i(33997),m=i(66596),p=i(82931),f=i(79661),v=(i(72214),i(43656),e([r,u,c]));[r,u,c]=v.then?(await v)():v;const y=e=>"string"==typeof e?e:e.entity_id;(0,a.A)([(0,d.EM)("ha-map")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"entities",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"paths",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"layers",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"autoFit",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"renderPassive",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"interactiveZones",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"fitZones",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({attribute:"theme-mode",type:String})],key:"themeMode",value:()=>"auto"},{kind:"field",decorators:[(0,d.MZ)({type:Number})],key:"zoom",value:()=>14},{kind:"field",decorators:[(0,d.wk)()],key:"_loaded",value:()=>!1},{kind:"field",key:"leafletMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"field",key:"_mapItems",value:()=>[]},{kind:"field",key:"_mapFocusItems",value:()=>[]},{kind:"field",key:"_mapZones",value:()=>[]},{kind:"field",key:"_mapPaths",value:()=>[]},{kind:"method",key:"connectedCallback",value:function(){(0,o.A)((0,n.A)(i.prototype),"connectedCallback",this).call(this),this._loadMap(),this._attachObserver()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.A)((0,n.A)(i.prototype),"disconnectedCallback",this).call(this),this.leafletMap&&(this.leafletMap.remove(),this.leafletMap=void 0,this.Leaflet=void 0),this._loaded=!1,this._resizeObserver&&this._resizeObserver.unobserve(this)}},{kind:"method",key:"update",value:function(e){var t,a;if((0,o.A)((0,n.A)(i.prototype),"update",this).call(this,e),!this._loaded)return;let r=!1;const s=e.get("hass");if(e.has("_loaded")||e.has("entities"))this._drawEntities(),r=!0;else if(this._loaded&&s&&this.entities)for(const e of this.entities)if(s.states[y(e)]!==this.hass.states[y(e)]){this._drawEntities(),r=!0;break}(e.has("_loaded")||e.has("paths"))&&this._drawPaths(),(e.has("_loaded")||e.has("layers"))&&(this._drawLayers(e.get("layers")),r=!0),(e.has("_loaded")||this.autoFit&&r)&&this.fitMap(),e.has("zoom")&&this.leafletMap.setZoom(this.zoom),(e.has("themeMode")||e.has("hass")&&(!s||(null===(t=s.themes)||void 0===t?void 0:t.darkMode)!==(null===(a=this.hass.themes)||void 0===a?void 0:a.darkMode)))&&this._updateMapStyle()}},{kind:"get",key:"_darkMode",value:function(){return"dark"===this.themeMode||"auto"===this.themeMode&&Boolean(this.hass.themes.darkMode)}},{kind:"method",key:"_updateMapStyle",value:function(){const e=this.renderRoot.querySelector("#map");e.classList.toggle("dark",this._darkMode),e.classList.toggle("forced-dark","dark"===this.themeMode),e.classList.toggle("forced-light","light"===this.themeMode)}},{kind:"field",key:"_loading",value:()=>!1},{kind:"method",key:"_loadMap",value:async function(){if(this._loading)return;let e=this.shadowRoot.getElementById("map");e||(e=document.createElement("div"),e.id="map",this.shadowRoot.append(e)),this._loading=!0;try{[this.leafletMap,this.Leaflet]=await(0,h.H)(e),this._updateMapStyle(),this._loaded=!0}finally{this._loading=!1}}},{kind:"method",key:"fitMap",value:function(e){var t,i,a;if(!this.leafletMap||!this.Leaflet||!this.hass)return;if(!(this._mapFocusItems.length||null!==(t=this.layers)&&void 0!==t&&t.length))return void this.leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude,this.hass.config.longitude),(null==e?void 0:e.zoom)||this.zoom);let o=this.Leaflet.latLngBounds(this._mapFocusItems?this._mapFocusItems.map((e=>e.getLatLng())):[]);var n;this.fitZones&&(null===(n=this._mapZones)||void 0===n||n.forEach((e=>{o.extend("getBounds"in e?e.getBounds():e.getLatLng())})));null===(i=this.layers)||void 0===i||i.forEach((e=>{o.extend("getBounds"in e?e.getBounds():e.getLatLng())})),o=o.pad(null!==(a=null==e?void 0:e.pad)&&void 0!==a?a:.5),this.leafletMap.fitBounds(o,{maxZoom:(null==e?void 0:e.zoom)||this.zoom})}},{kind:"method",key:"fitBounds",value:function(e,t){var i;if(!this.leafletMap||!this.Leaflet||!this.hass)return;const a=this.Leaflet.latLngBounds(e).pad(null!==(i=null==t?void 0:t.pad)&&void 0!==i?i:.5);this.leafletMap.fitBounds(a,{maxZoom:(null==t?void 0:t.zoom)||this.zoom})}},{kind:"method",key:"_drawLayers",value:function(e){if(e&&e.forEach((e=>e.remove())),!this.layers)return;const t=this.leafletMap;this.layers.forEach((e=>{t.addLayer(e)}))}},{kind:"method",key:"_computePathTooltip",value:function(e,t){let i;return i=e.fullDatetime?(0,u.r6)(t.timestamp,this.hass.locale,this.hass.config):(0,s.c)(t.timestamp)?(0,c.ie)(t.timestamp,this.hass.locale,this.hass.config):(0,c.Xs)(t.timestamp,this.hass.locale,this.hass.config),`${e.name}<br>${i}`}},{kind:"method",key:"_drawPaths",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapPaths.length&&(this._mapPaths.forEach((e=>e.remove())),this._mapPaths=[]),!this.paths)return;const a=getComputedStyle(this).getPropertyValue("--dark-primary-color");this.paths.forEach((e=>{let o,n;e.gradualOpacity&&(o=e.gradualOpacity/(e.points.length-2),n=1-e.gradualOpacity);for(let t=0;t<e.points.length-1;t++){const r=e.gradualOpacity?n+t*o:void 0;this._mapPaths.push(i.circleMarker(e.points[t].point,{radius:f.C?8:3,color:e.color||a,opacity:r,fillOpacity:r,interactive:!0}).bindTooltip(this._computePathTooltip(e,e.points[t]),{direction:"top"})),this._mapPaths.push(i.polyline([e.points[t].point,e.points[t+1].point],{color:e.color||a,opacity:r,interactive:!1}))}const r=e.points.length-1;if(r>=0){const t=e.gradualOpacity?n+r*o:void 0;this._mapPaths.push(i.circleMarker(e.points[r].point,{radius:f.C?8:3,color:e.color||a,opacity:t,fillOpacity:t,interactive:!0}).bindTooltip(this._computePathTooltip(e,e.points[r]),{direction:"top"}))}this._mapPaths.forEach((e=>t.addLayer(e)))}))}},{kind:"method",key:"_drawEntities",value:function(){const e=this.hass,t=this.leafletMap,i=this.Leaflet;if(!e||!t||!i)return;if(this._mapItems.length&&(this._mapItems.forEach((e=>e.remove())),this._mapItems=[],this._mapFocusItems=[]),this._mapZones.length&&(this._mapZones.forEach((e=>e.remove())),this._mapZones=[]),!this.entities)return;const a=getComputedStyle(this),o=a.getPropertyValue("--accent-color"),n=a.getPropertyValue("--secondary-text-color"),r=a.getPropertyValue("--dark-primary-color"),s=this._darkMode?"dark":"light";for(const t of this.entities){const a=e.states[y(t)];if(!a)continue;const l="string"!=typeof t?t.name:void 0,d=null!=l?l:(0,p.u)(a),{latitude:u,longitude:c,passive:h,icon:f,radius:v,entity_picture:g,gps_accuracy:k}=a.attributes;if(!u||!c)continue;if("zone"===(0,m.t)(a)){if(h&&!this.renderPassive)continue;let e="";if(f){const t=document.createElement("ha-icon");t.setAttribute("icon",f),e=t.outerHTML}else{const t=document.createElement("span");t.innerHTML=d,e=t.outerHTML}this._mapZones.push(i.marker([u,c],{icon:i.divIcon({html:e,iconSize:[24,24],className:s}),interactive:this.interactiveZones,title:d})),this._mapZones.push(i.circle([u,c],{interactive:!1,color:h?n:o,radius:v}));continue}const _="string"!=typeof t&&"state"===t.label_mode?this.hass.formatEntityState(a):null!=l?l:d.split(" ").map((e=>e[0])).join("").substr(0,3),b=i.marker([u,c],{icon:i.divIcon({html:`\n              <ha-entity-marker\n                entity-id="${y(t)}"\n                entity-name="${_}"\n                entity-picture="${g?this.hass.hassUrl(g):""}"\n                ${"string"!=typeof t?`entity-color="${t.color}"`:""}\n              ></ha-entity-marker>\n            `,iconSize:[48,48],className:""}),title:d});this._mapItems.push(b),"string"!=typeof t&&!1===t.focus||this._mapFocusItems.push(b),k&&this._mapItems.push(i.circle([u,c],{interactive:!1,color:r,radius:k}))}this._mapItems.forEach((e=>t.addLayer(e))),this._mapZones.forEach((e=>t.addLayer(e)))}},{kind:"method",key:"_attachObserver",value:async function(){this._resizeObserver||(this._resizeObserver=new ResizeObserver((()=>{var e;null===(e=this.leafletMap)||void 0===e||e.invalidateSize({debounceMoveend:!0})}))),this._resizeObserver.observe(this)}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`:host{display:block;height:300px}#map{height:100%}#map.dark{background:#090909}#map.forced-dark{color:#fff;--map-filter:invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(0.3)}#map.forced-light{background:#fff;color:#000;--map-filter:invert(0)}#map:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.leaflet-tile-pane{filter:var(--map-filter)}.dark .leaflet-bar a{background-color:#1c1c1c;color:#fff}.dark .leaflet-bar a:hover{background-color:#313131}.leaflet-marker-draggable{cursor:move!important}.leaflet-edit-resize{border-radius:50%;cursor:nesw-resize!important}.named-icon{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;color:var(--primary-text-color)}.leaflet-pane{z-index:0!important}.leaflet-bottom,.leaflet-control,.leaflet-top{z-index:1!important}.leaflet-tooltip{padding:8px;font-size:90%;background:rgba(80,80,80,.9)!important;color:#fff!important;border-radius:4px;box-shadow:none!important;text-align:center}`}}]}}),l.mN);t()}catch(e){t(e)}}))},92840:(e,t,i)=>{i.a(e,(async(e,t)=>{try{i(21950),i(71936),i(55888),i(8339);var a=i(68079),o=i(11703),n=i(3444),r=i(45177),s=i(86935),l=i(39083),d=i(50644),u=i(29051),c=i(73938),h=i(88514);const e=async()=>{const e=(0,c.wb)(),t=[];(0,n.Z)()&&await Promise.all([i.e(5378),i.e(3964)]).then(i.bind(i,63964)),(0,s.Z)()&&await Promise.all([i.e(3789),i.e(5378),i.e(3833)]).then(i.bind(i,63833)),(0,a.Z)(e)&&t.push(Promise.all([i.e(3789),i.e(5105)]).then(i.bind(i,15105)).then((()=>(0,h.T)()))),(0,o.Z6)(e)&&t.push(Promise.all([i.e(3789),i.e(2713)]).then(i.bind(i,62713))),(0,r.Z)(e)&&t.push(Promise.all([i.e(3789),i.e(3506)]).then(i.bind(i,53506))),(0,l.Z)(e)&&t.push(Promise.all([i.e(3789),i.e(9693)]).then(i.bind(i,49693))),(0,d.Z)(e)&&t.push(Promise.all([i.e(3789),i.e(9596)]).then(i.bind(i,29596)).then((()=>i.e(5224).then(i.t.bind(i,5224,23))))),(0,u.Z)(e)&&t.push(Promise.all([i.e(3789),i.e(317)]).then(i.bind(i,30317))),0!==t.length&&await Promise.all(t).then((()=>(0,h.K)(e)))};await e(),t()}catch(e){t(e)}}),1)},74808:(e,t,i)=>{i.a(e,(async(e,t)=>{try{i(21950),i(55888),i(8339);"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await i.e(6071).then(i.bind(i,76071))).default),t()}catch(e){t(e)}}),1)},79661:(e,t,i)=>{i.d(t,{C:()=>a});const a="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},54317:(e,t,i)=>{var a=i(87568),o=i(51607),n=i(95124),r=i(94905),s=i(33523);a({target:"Array",proto:!0},{at:function(e){var t=o(this),i=n(t),a=r(e),s=a>=0?a:i+a;return s<0||s>=i?void 0:t[s]}}),s("at")},54895:(e,t,i)=>{var a=i(87568),o=i(82374),n=i(43972),r=i(94905),s=i(83841),l=i(32565),d=o("".charAt);a({target:"String",proto:!0,forced:l((function(){return"\ud842"!=="𠮷".at(-2)}))},{at:function(e){var t=s(n(this)),i=t.length,a=r(e),o=a>=0?a:i+a;return o<0||o>=i?void 0:d(t,o)}})},86174:(e,t,i)=>{function a(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}i.d(t,{w:()=>a})},51561:(e,t,i)=>{i.d(t,{r:()=>o});var a=i(93352);function o(e,t){return+(0,a.o)(e)==+(0,a.o)(t)}},79581:(e,t,i)=>{i.d(t,{c:()=>r});var a=i(86174);function o(e){return(0,a.w)(e,Date.now())}var n=i(51561);function r(e){return(0,n.r)(e,o(e))}},93352:(e,t,i)=>{i.d(t,{o:()=>o});var a=i(74396);function o(e){const t=(0,a.a)(e);return t.setHours(0,0,0,0),t}},74396:(e,t,i)=>{function a(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}i.d(t,{a:()=>a})}};
//# sourceMappingURL=1872.lBfT_a7kRvs.js.map