(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-waterfall"],{"4vEY":function(t,e,n){"use strict";n.r(e);var r=n("LvDl"),a=n.n(r),o=n("cMc0"),i=n("6jAQ"),c=n("wrGL"),l=n("Omln"),u=n("YUA+"),s=n("wZn9"),f=n("s9+M"),p=Object.create(i.default);e.default=p,function(){this.instanceClass=o.Waterfall,this.setupChartOptionsStyle=function(){i.default.setupChartOptionsStyle.call(this);this.chartOptions.style.graph.item.value.color=Object(c.defaultColorValue)(null,"manual")},this.setupChartSheetOptionsItem=function(t){var e=Object(l.getGridSettings)(t),n=e.vertical,r=e.horizontal,o={categories:{colors:a.a.merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:n,horizontal:r,horizontalZero:Object(u.getZeroBaselineHorizontal)(t)},graphOptions:{column:{showValues:!!t.showInLineValues},waterfall:{connectors:!!t.guidPathShow}},axis:[{},{}],legend:{enabled:!1}},i=o.axis[1];return i.title=t.ylabel||"",o.axis[0].title=t.xlabel||"","number"==typeof t.ymin&&(i.minLimit=t.ymin),"number"==typeof t.ymax&&(i.maxLimit=t.ymax),Object(s.assignAxisTickInterval)(o,t),Object(s.assignAxisTicks)(o,t),Object(f.assignNumberFormatValues)({sheetOptions:o,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(f.assignNumberFormatLabels)({sheetOptions:o,custom:t,affixes:[{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(s.assignCategoryLabelLayout)(o,t),o}}.call(p)},cMc0:function(t,e,n){"use strict";n.r(e),n.d(e,"Waterfall",(function(){return g}));var r=n("LvDl"),a=n.n(r),o=n("vBe5"),i=n("ziQ1"),c=n("3hFj"),l=n("3y/1"),u=n("pzpO");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var a=Object.getOwnPropertyDescriptor(r,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(y,t);var e,n,r,c=O(y);function y(){return s(this,y),c.apply(this,arguments)}return e=y,r=[{key:"getClassName",value:function(){return"Waterfall"}}],(n=[{key:"emptySheetData",value:function(){return a.a.merge({},p(h(y.prototype),"emptySheetData",this).call(this),{series:[{type:"column-grouped",axisIndex:1}],graphOptions:{column:{valuesOutside:!1,showValues:!1},waterfall:{connectors:!1}}})}},{key:"getDomain",value:function(t){var e=[Object(o.min)(t,(function(t){return Object(o.min)(t.data,(function(t){return t.y0}))})),Object(o.max)(t,(function(t){return Object(o.max)(t.data,(function(t){return t.y}))}))];return Object(u.ensureZeroEqual)(e),Object(u.ensureZero)(e),Object(i.scaleLinear)().domain(e).nice(10).domain()}},{key:"getColor",value:function(t,e,n,r,a){return 0===e||e===n?0:r>r+a?2:1}},{key:"prepareSheetData",value:function(t){var e=this,n=a.a.get(t,"graphOptions.column",{}),r=n.showValues,o=n.valuesOutside,i=t.categories.colors,c={type:"column-grouped",colors:i,showValues:!!r,valuesOutside:!!o,data:[]},u=c.data,s=t.series[0],f=0,p=s.data.length-1;return s.data.reduce((function(n,r,o){if(null===(r=Object(l.replaceBlank)(r,null)))return n;p===o&&(r=-f);var c=e.getColor(i,o,p,f,r);return n.push({x:0,xLabel:Object(l.replaceBlank)(t.categories.data[o]),y0:f,y:f+=r,yLabel:Object(l.replaceBlank)(s.rawData[o]),categoryIdx:o,seriesIdx:o,colorIdx:c,link:a.a.get(s,"links[".concat(o,"]"),null)}),n}),u),[c]}},{key:"graphInstanceSetup",value:function(t,e,n,r){p(h(y.prototype),"graphInstanceSetup",this).apply(this,arguments),t.outlineStyle(r.outlineStyle).showConnectors(a.a.get(this.runtime,"sheet.graphOptions.waterfall.connectors",!1)).isWaterfall(!0)}}])&&f(e.prototype,n),r&&f(e,r),y}(c.Column)}}]);