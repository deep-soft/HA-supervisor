export const id=9362;export const ids=[9362];export const modules={45210:(t,a,i)=>{i.r(a);var e=i(62659),o=(i(21950),i(55888),i(8339),i(58068),i(98597)),r=i(196),n=i(45081),s=i(77664),l=(i(95439),i(23006),i(67558)),c=i(27096),d=i(14126);const u=(0,n.A)((()=>[{name:"default_backup_mount",required:!0,selector:{backup_location:{}}}]));(0,e.A)([(0,r.EM)("dialog-hassio-backup-location")],(function(t,a){return{F:class extends a{constructor(...a){super(...a),t(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_waiting",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._dialogParams=t}},{kind:"method",key:"closeDialog",value:function(){this._data=void 0,this._error=void 0,this._waiting=void 0,this._dialogParams=void 0,(0,s.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?o.qy` <ha-dialog open scrimClickAction escapeKeyAction .heading="${this._dialogParams.supervisor.localize("dialog.backup_location.title")}" @closed="${this.closeDialog}"> ${this._error?o.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:o.s6} <ha-form .hass="${this.hass}" .data="${this._data}" .schema="${u()}" .computeLabel="${this._computeLabelCallback}" .computeHelper="${this._computeHelperCallback}" @value-changed="${this._valueChanged}" dialogInitialFocus></ha-form> <mwc-button slot="secondaryAction" @click="${this.closeDialog}" dialogInitialFocus> ${this._dialogParams.supervisor.localize("common.cancel")} </mwc-button> <mwc-button .disabled="${this._waiting||!this._data}" slot="primaryAction" @click="${this._changeMount}"> ${this._dialogParams.supervisor.localize("common.save")} </mwc-button> </ha-dialog> `:o.s6}},{kind:"field",key:"_computeLabelCallback",value(){return t=>this._dialogParams.supervisor.localize(`dialog.backup_location.options.${t.name}.name`)||t.name}},{kind:"field",key:"_computeHelperCallback",value(){return t=>this._dialogParams.supervisor.localize(`dialog.backup_location.options.${t.name}.description`)}},{kind:"method",key:"_valueChanged",value:function(t){const a=t.detail.value.default_backup_mount;this._data={default_backup_mount:"/backup"===a?null:a}}},{kind:"method",key:"_changeMount",value:async function(){if(this._data){this._error=void 0,this._waiting=!0;try{await(0,c.Su)(this.hass,this._data)}catch(t){return this._error=(0,l.VR)(t),void(this._waiting=!1)}this.closeDialog()}}},{kind:"get",static:!0,key:"styles",value:function(){return[d.RF,d.nA,o.AH`.delete-btn{--mdc-theme-primary:var(--error-color)}`]}}]}}),o.WF)},27096:(t,a,i)=>{i.d(a,{Su:()=>n,Wu:()=>e,bK:()=>r,h1:()=>o});i(55888);let e=function(t){return t.BIND="bind",t.CIFS="cifs",t.NFS="nfs",t}({}),o=function(t){return t.BACKUP="backup",t.MEDIA="media",t.SHARE="share",t}({});const r=async t=>t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}),n=async(t,a)=>t.callWS({type:"supervisor/api",endpoint:"/mounts/options",method:"post",timeout:null,data:a})},79372:(t,a,i)=>{var e=i(73155),o=i(33817),r=i(3429),n=i(75077);t.exports=function(t,a){a&&"string"==typeof t||o(t);var i=n(t);return r(o(void 0!==i?e(i,t):t))}},18684:(t,a,i)=>{var e=i(87568),o=i(42509),r=i(30356),n=i(51607),s=i(95124),l=i(79635);e({target:"Array",proto:!0},{flatMap:function(t){var a,i=n(this),e=s(i);return r(t),(a=l(i,0)).length=o(a,i,i,e,0,1,t,arguments.length>1?arguments[1]:void 0),a}})},74991:(t,a,i)=>{i(33523)("flatMap")},69704:(t,a,i)=>{var e=i(87568),o=i(73155),r=i(30356),n=i(33817),s=i(3429),l=i(79372),c=i(23408),d=i(44933),u=i(89385),h=c((function(){for(var t,a,i=this.iterator,e=this.mapper;;){if(a=this.inner)try{if(!(t=n(o(a.next,a.iterator))).done)return t.value;this.inner=null}catch(t){d(i,"throw",t)}if(t=n(o(this.next,i)),this.done=!!t.done)return;try{this.inner=l(e(t.value,this.counter++),!1)}catch(t){d(i,"throw",t)}}}));e({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(t){return n(this),r(t),new h(s(this),{mapper:t,inner:null})}})}};
//# sourceMappingURL=9362.88V19Rmetho.js.map