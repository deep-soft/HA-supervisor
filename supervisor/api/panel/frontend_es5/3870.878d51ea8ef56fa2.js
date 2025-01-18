"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["3870"],{77794:function(e,t,a){a(52247),a(19134),a(5740),Object.defineProperty(t,"__esModule",{value:!0}),t.InitializeRelativeTimeFormat=function(e,t,a,i){var l=i.getInternalSlots,u=i.availableLocales,s=i.relevantExtensionKeys,c=i.localeData,f=i.getDefaultLocale,v=l(e);v.initializedRelativeTimeFormat=!0;var d=(0,r.CanonicalizeLocaleList)(t),m=Object.create(null),p=(0,r.CoerceOptionsToObject)(a),y=(0,r.GetOption)(p,"localeMatcher","string",["best fit","lookup"],"best fit");m.localeMatcher=y;var b=(0,r.GetOption)(p,"numberingSystem","string",void 0,void 0);if(void 0!==b&&!o.test(b))throw new RangeError("Invalid numbering system ".concat(b));m.nu=b;var h=(0,n.ResolveLocale)(u,d,m,s,c,f),g=h.locale,w=h.nu;v.locale=g,v.style=(0,r.GetOption)(p,"style","string",["long","narrow","short"],"long"),v.numeric=(0,r.GetOption)(p,"numeric","string",["always","auto"],"always");var T=c[h.dataLocale];return(0,r.invariant)(!!T,"Missing locale data for ".concat(h.dataLocale)),v.fields=T,v.numberFormat=(0,r.createMemoizedNumberFormat)(t),v.pluralRules=(0,r.createMemoizedPluralRules)(t),v.numberingSystem=w,e};var r=a(2322),n=a(75233),o=/^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i},90100:function(e,t,a){a(92745),Object.defineProperty(t,"__esModule",{value:!0}),t.MakePartsList=function(e,t,a){for(var n=(0,r.PartitionPattern)(e),o=[],i=0,l=n;i<l.length;i++){var u=l[i];if("literal"===u.type)o.push({type:"literal",value:u.value});else{(0,r.invariant)("0"===u.type,"Malformed pattern ".concat(e));for(var s=0,c=a;s<c.length;s++){var f=c[s];o.push({type:f.type,value:f.value,unit:t})}}}return o};var r=a(2322)},93118:function(e,t,a){a(52247),Object.defineProperty(t,"__esModule",{value:!0}),t.PartitionRelativeTimePattern=function(e,t,a,i){var l=i.getInternalSlots;if((0,r.invariant)("Number"===(0,r.Type)(t),"value must be number, instead got ".concat(typeof t),TypeError),(0,r.invariant)("String"===(0,r.Type)(a),"unit must be number, instead got ".concat(typeof t),TypeError),isNaN(t)||!isFinite(t))throw new RangeError("Invalid value ".concat(t));var u=(0,n.SingularRelativeTimeUnit)(a),s=l(e),c=s.fields,f=s.style,v=s.numeric,d=s.pluralRules,m=s.numberFormat,p=u;"short"===f?p="".concat(u,"-short"):"narrow"===f&&(p="".concat(u,"-narrow"));p in c||(p=u);var y=c[p];if("auto"===v&&(0,r.ToString)(t)in y)return[{type:"literal",value:y[(0,r.ToString)(t)]}];var b="future";((0,r.SameValue)(t,-0)||t<0)&&(b="past");var h=y[b],g="function"==typeof m.formatToParts?m.formatToParts(Math.abs(t)):[{type:"literal",value:m.format(Math.abs(t)),unit:a}],w=d.select(t),T=h[w];return(0,o.MakePartsList)(T,u,g)};var r=a(2322),n=a(22332),o=a(90100)},22332:function(e,t,a){a(52247),Object.defineProperty(t,"__esModule",{value:!0}),t.SingularRelativeTimeUnit=function(e){if((0,r.invariant)("String"===(0,r.Type)(e),"unit must be a string"),"seconds"===e)return"second";if("minutes"===e)return"minute";if("hours"===e)return"hour";if("days"===e)return"day";if("weeks"===e)return"week";if("months"===e)return"month";if("quarters"===e)return"quarter";if("years"===e)return"year";if("second"!==e&&"minute"!==e&&"hour"!==e&&"day"!==e&&"week"!==e&&"month"!==e&&"quarter"!==e&&"year"!==e)throw new RangeError("invalid unit");return e};var r=a(2322)},29388:function(e,t,a){a(71695),a(46692),a(47021),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=r.get(e);t||(t=Object.create(null),r.set(e,t));return t};var r=new WeakMap},30808:function(e,t,a){a(63721),a(52247),a(71695),a(11740),a(92519),a(42179),a(89256),a(24931),a(88463),a(57449),a(19814),a(13334),a(47021),Object.defineProperty(t,"__esModule",{value:!0});var r=a(9065),n=a(2322),o=a(77794),i=a(93118),l=r.__importDefault(a(29388)),u=function(){function e(t,a){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");return(0,o.InitializeRelativeTimeFormat)(this,t,a,{getInternalSlots:l.default,availableLocales:e.availableLocales,relevantExtensionKeys:e.relevantExtensionKeys,localeData:e.localeData,getDefaultLocale:e.getDefaultLocale})}return e.prototype.format=function(e,t){if("object"!=typeof this)throw new TypeError("format was called on a non-object");if(!(0,l.default)(this).initializedRelativeTimeFormat)throw new TypeError("format was called on a invalid context");return(0,i.PartitionRelativeTimePattern)(this,Number(e),(0,n.ToString)(t),{getInternalSlots:l.default}).map((function(e){return e.value})).join("")},e.prototype.formatToParts=function(e,t){if("object"!=typeof this)throw new TypeError("formatToParts was called on a non-object");if(!(0,l.default)(this).initializedRelativeTimeFormat)throw new TypeError("formatToParts was called on a invalid context");return(0,i.PartitionRelativeTimePattern)(this,Number(e),(0,n.ToString)(t),{getInternalSlots:l.default})},e.prototype.resolvedOptions=function(){if("object"!=typeof this)throw new TypeError("resolvedOptions was called on a non-object");var e=(0,l.default)(this);if(!e.initializedRelativeTimeFormat)throw new TypeError("resolvedOptions was called on a invalid context");return{locale:e.locale,style:e.style,numeric:e.numeric,numberingSystem:e.numberingSystem}},e.supportedLocalesOf=function(t,a){return(0,n.SupportedLocales)(e.availableLocales,(0,n.CanonicalizeLocaleList)(t),a)},e.__addLocaleData=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];for(var r=0,n=t;r<n.length;r++){var o=n[r],i=o.data,l=o.locale,u=new Intl.Locale(l).minimize().toString();e.localeData[l]=e.localeData[u]=i,e.availableLocales.add(u),e.availableLocales.add(l),e.__defaultLocale||(e.__defaultLocale=u)}},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.relevantExtensionKeys=["nu"],e.polyfilled=!0,e}();t.default=u;try{"undefined"!=typeof Symbol&&Object.defineProperty(u.prototype,Symbol.toStringTag,{value:"Intl.RelativeTimeFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(u.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(s){}},74546:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var r=a(9065).__importDefault(a(30808));Object.defineProperty(Intl,"RelativeTimeFormat",{value:r.default,writable:!0,enumerable:!1,configurable:!0})}}]);
//# sourceMappingURL=3870.878d51ea8ef56fa2.js.map