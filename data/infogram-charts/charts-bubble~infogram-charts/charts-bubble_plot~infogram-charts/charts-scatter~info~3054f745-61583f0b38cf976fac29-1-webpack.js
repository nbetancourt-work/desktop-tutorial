(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-bubble~infogram-charts/charts-bubble_plot~infogram-charts/charts-scatter~info~3054f745"],{T63B:function(e,t,a){"use strict";a.r(t),a.d(t,"Scatter",(function(){return B}));var n=a("LvDl"),r=a.n(n),o=a("ziQ1"),i=a("8d86"),c=a("LWvD"),l=a("3y/1"),u=a("5Td5"),s=a("ejCe"),p=a("pzpO"),f=a("x5YE"),b=a("XKI8"),v=a("D3ez"),y=a("s4vh"),h=a("pQx5"),d=a("I6ut");function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t,a){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(a):r.value}})(e,t,a||e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}Object(v.putGraph)("circle",y.Circle);var S={curveLinear:i.curveLinear,curveMonotoneX:i.curveMonotoneX,monotone:i.curveMonotoneX},B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(v,e);var t,a,n,u=w(v);function v(){return m(this,v),u.apply(this,arguments)}return t=v,n=[{key:"getClassName",value:function(){return"Scatter"}}],(a=[{key:"emptySheetData",value:function(){return r.a.merge({},O(x(v.prototype),"emptySheetData",this).call(this),{categories:{numeric:!0},series:[{type:"circle"}],graphOptions:{dataPointRadius:8}})}},{key:"defaults",value:function(){return r.a.merge({},O(x(v.prototype),"defaults",this).call(this),{series:{dataPoints:!0}})}},{key:"prepareSheetData",value:function(e){var t,a,n=this.emptySheetData().series[0].type,o=r.a.merge([],e.axis),c=e.categories,u=c.data,s=c.colors,p=Object(l.replaceBlank)(o[0].valueLabel),b=Object(l.replaceBlank)(o[1].valueLabel),v=Object(l.replaceBlank)(e.categories.valueLabel),y=[],h=this.runtime.xAxisTimeBased,m=h?Object(d.createTimeFormat)(null==e?void 0:null===(t=e.axis)||void 0===t?void 0:null===(a=t[0])||void 0===a?void 0:a.timeFormat):l.identity,g=0,O=Object(f.createLegendData)(this);return e.series.forEach((function(t,a){var o=r.a.get(t,"index",a);if(O({color:Object(l.getColor)(o,s),title:Object(l.replaceBlank)(u[a]),groupId:a}).active){var c=t.data.map((function(e,n){var r={x:h?e[0]:Object(l.replaceBlank)(Number(e[0]),0),y:Object(l.replaceBlank)(Number(e[1]),null),value:Object(l.replaceBlank)(Number(e[2]),null),valueRaw:Object(l.replaceBlank)(t.rawData[n][2]),xLabel:Object(l.replaceBlank)(h?m(e[0]):t.rawData[n][0]),yLabel:Object(l.replaceBlank)(t.rawData[n][1]),xValueLabel:p,yValueLabel:b,valueLabel:v,seriesIdx:a,groupLabel:Object(l.replaceBlank)(u[a]),groupSubLabel:Object(l.replaceBlank)(t.rawData[n][3]),link:t.links?t.links[n]:null};return g=Math.max(null===r.value?0:r.value,g),r}));y.push({type:n,data:c,colors:[Object(l.getColor)(o,s)],interpolation:S[t.interpolation]||i.curveLinear,sizeRange:r.a.get(e,"graphOptions.sizeRange")})}})),y.forEach((function(e){e.maxValue=g})),y}},{key:"renderGraphs",value:function(){c.default.prototype.renderGraphs.apply(this,arguments)}},{key:"graphInstanceSetup",value:function(e,t,a,n){var o=r.a.get(this,"runtime.sheet.graphOptions",{}).dataPointRadius,i=this.runtime,c=i.formatter,l=i.xAxisTimeBased;e.scaleX(n.x).scaleY(n.y).data(t.data).colors(t.colors).radius((function(e){return"string"==typeof e.y?0:o})).legend(n.legend).filterFn((function(e){return null!==e.y&&null!==e.x})).tooltip(Object(b.createStyledTooltip)(this)).tooltipText((function(e){if(e.groupSubLabel){var t="".concat(e.groupLabel,"\n").concat(e.groupSubLabel),a=!(!e.valueRaw&&null===e.value),n=null===e.value?e.valueRaw:e.value;return a?!e.valueLabel&&a?"".concat(t," (").concat(n,")"):"".concat(t," (").concat(e.valueLabel,": ").concat(n,")"):t}return e.groupLabel})).tooltipValue((function(e){var t=e.xValueLabel?"".concat(e.xValueLabel,": "):"",a=l?e.xLabel:c.tooltip.x.format(e.x),n=e.yValueLabel?"".concat(e.yValueLabel,": "):"",r=c.tooltip.y.format(e.y);return"".concat(t).concat(a,"\n").concat(n).concat(r)})).transitionDuration(this.options.animation.duration).dispatch().on("animationEnd",n.animationEnd)}},{key:"createXScale",value:function(){var e=this.runtime,t=e.sheet,a=e.graphWidth;if(e.xAxisTimeBased){var n=t.series.reduce((function(e,t){var a=!0,n=!1,r=void 0;try{for(var o,i=t.data[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var c=o.value;e.push(c[0])}}catch(e){n=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return e}),[]),r=e.xDomain=Object(p.getTimeDomain)(n);e.xScale=Object(o.scaleTime)().domain(r).range([0,a],0)}else e.xScale=this.numericCategoriesScale();return e.xScale}},{key:"numericCategoriesScale",value:function(){var e,t=this.runtime,a=t.xAxisOptions,n=t.graphWidth,r=t.graphs,i=t.sheet,c=[0,n],l=s.ScaleHelper.linearScaleTicksDomainAdjust,u=Object(h.getGraphsDomainByProperty)(r,"x");return u=l(u,null==i?void 0:null===(e=i.graphOptions)||void 0===e?void 0:e.dataPointRadius,c),Object(p.limit)(a,u),Object(o.scaleLinear)().domain(u).range(c)}},{key:"curtainAnimation",value:function(e,t,a,n){n.animationEnd()}}])&&g(t.prototype,a),n&&g(t,n),v}(u.Line)}}]);