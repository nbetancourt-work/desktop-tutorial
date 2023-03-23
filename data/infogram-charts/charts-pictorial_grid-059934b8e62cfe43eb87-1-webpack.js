(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-pictorial_grid"],{"2YLo":function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}a.r(e),a.d(e,"Renderer",(function(){return r}));var r=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e.instance)throw new Error("No instance provided");this.renderables=[],this.instance=e.instance}var e,a,r;return e=t,(a=[{key:"start",value:function(){var t=this.instance,e=t.root,a=e.select(".igc"),n={igc:a,grid:a.select(".igc-grid"),title:e.select(".igc-titles")};this.renderables.forEach((function(e){"function"!=typeof e?"object"==typeof e&&(-1===["grid","title"].indexOf(e.parent)?"igc"!==e.parent?t.renderPart(e.parent,e.callable,e.className):t.renderGraphs(n.igc,e.callable):t.renderPart(n[e.parent],e.callable,e.className)):e()}))}},{key:"add",value:function(t){return this.renderables.push(t),t}},{key:"addGrid",value:function(t,e){var a={callable:t,className:e,parent:"grid"};return this.add(a),a}},{key:"addTitle",value:function(t,e){var a={callable:t,className:e,parent:"title"};return this.add(a),a}},{key:"addParent",value:function(t,e,a){var n={callable:e,className:a,parent:t};return this.add(n),n}},{key:"addGraph",value:function(t){var e={callable:t,parent:"igc"};return this.add(e),e}}])&&n(e.prototype,a),r&&n(e,r),t}()},"3UmV":function(t,e,a){"use strict";a.r(e),a.d(e,"PictorialGrid",(function(){return I}));var n=a("LvDl"),r=a.n(n),i=a("vBe5"),o=a("ziQ1"),c=a("+3eq"),s=a("3y/1"),l=a("LWvD"),u=a("v3rV"),h=a("ZHFg"),f=a("x+1q"),d=a("SGek"),p=a("x5YE"),g=a("VLlq"),m=a("2YLo"),y=a("XKI8"),v=a("pYxU"),x=a("D3ez"),b=a("TxU/");function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e,a){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(a):r.value}})(t,e,a||t)}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=O(t);if(e){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return D(this,a)}}Object(x.putGraph)("pictorial-grid",b.PictorialGrid);var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(x,t);var e,a,n,l=M(x);function x(){return P(this,x),l.apply(this,arguments)}return e=x,n=[{key:"getClassName",value:function(){return"PictorialGrid"}}],(a=[{key:"render",value:function(){var t=this,e=function(t){return(z.rows-Math.ceil(Math.ceil(t)/z.cols))*X.height};this.detectDimensions();var a=this.root,n=this.options,r=new m.Renderer({instance:this}),s=this.getSheetData(),l=Object(f.default)(s),d=this.runtime={width:n.width,height:n.height,inanimate:Object(u.inanimated)(n),sheet:s,formatter:l},y=n.fixedHeight,x=this.prepareSheetData(s,this.sheetIndex),b=x.data;Object(g.default)(this,{width:n.width}),Object(v.DownloadButton)(this,n.style.legend);var P=Object(p.legendHelper)({instance:this});if(P&&P.chartType("pictorial-grid"),!this.sheetsNotFound()){var S=10,w=10,O=10,D=10,k=5,j=!!n.series.realNumbers,M="absolute"===n.series.data,I="scattered"===n.series.distribution&&s.categories.shapes.length<2,E=this.createAnimationCounter(2),L=d.width-(D+w)*s.iconSizeMultiplier,C=d.height-(S+O)*s.iconSizeMultiplier,A=d.height,T=Object(h.availableShapesMetrics)(n.shapes)(this.getShapeKeys()),X=Object.values(T).reduce((function(t,e){return t.width=Math.max(t.width,(e.bbox.width+k)*s.iconSizeMultiplier),t.height=Math.max(t.height,(e.bbox.height+k)*s.iconSizeMultiplier),t}),{width:0,height:0}),z={cols:Math.floor(L/X.width),rows:Math.floor(C/X.height),cellMetrics:X};z.cellCount=z.rows*z.cols,z.colPosition=Object(o.scaleBand)().domain(Object(i.range)(0,z.cols)).range([0,L]).padding(0),z.rowPosition=Object(o.scaleBand)().domain(Object(i.range)(0,z.rows)).range([0,C]).padding(0);var N=M&&!j?this.getSheetsValueSum():this.getValueSum(b);if(z.realNumbers=j&&z.cellCount>=N,!y){var V=0;if(j){var R=this.getSheetsMaxData();R&&z.cellCount>=R.valuesSum&&(V=e(R.valuesSum))}else if(M){var G=this.getSheetsMaxData();G&&(V=e(G.valuesSum/N*z.cellCount))}A-=V}var U=x.data=I?this.getShapeDataScattered(s,b,z,T,N):this.getShapeData(s,b,z,T,N);x.overlayData=this.getShapeGroupOverlayPaths(b,U,z),this.prepareShapes(T,s);var Y={igc:{x:D,y:S}};this.containerSetup(),a.attr("width",d.width).attr("height",A);var B=a.select(".igc");r.add((function(){a.datum(t).transition().ease(c[n.animation.ease]).duration(n.animation.duration).on("start",(function(){t.events.call("startAnimation")})).on("end",(function(){E()})),B.attr("transform","translate(".concat(Y.igc.x,", ").concat(Y.igc.y,")"))})),r.addGraph([{graphs:[x],transitionDuration:n.animation.duration,legend:P,animationEnd:E}]),r.start()}}},{key:"getShapeKeys",value:function(){var t=this.options,e=this.runtime,a=!!t.series.realNumbers,n="absolute"===t.series.data,i=this.defaults().shapes.map((function(t){return t.title})),o=e.sheet.categories.shapes;return(n||a)&&(o=t.sheets.map((function(t){var e=t.categories.shapes;return!e||e.length<1?i.slice(0):e})),o=r.a.uniq(r.a.flatten(o))),o.length||(o=i.slice(0)),o}},{key:"getShapeDataScattered",value:function(t,e,a,n,r){var i,o=[],c=0,l=a.cellMetrics,u=a.realNumbers,h=t.iconSizeMultiplier,f=this.getSheetColors(),p=function(t){var e={categoryIdx:t.categoryIdx,shape:t.shape,valueLabel:t.valueLabel,category:t.category,countDecimal:t.countDecimal,color:Object(s.getColor)(t.categoryIdx,f),link:t.link},r=c%a.cols,i=Math.floor(c/a.cols),u=n[t.shape].bbox,d=u.width*h,p=u.height*h,g=(l.width-d)/2,m=(l.height-p)/2;return e.xdiff=g,e.ydiff=m,e.cellX=a.colPosition(r),e.cellY=a.rowPosition(i),e.row=i,e.col=r,e.x=e.cellX+g,e.y=e.cellY+m,e.width=d,e.height=p,e.colors=[],o[c]=e,c++,e},g=function(t,e,a){var r=n[t.shape].bbox,i=r.width*h,o=r.height*h,c=m(e);e.colors.push({x:c*i,width:i*a,height:o,pct:a,color:Object(s.getColor)(t.categoryIdx,f),valueLabel:t.valueLabel,category:t.category,categoryIdx:t.categoryIdx,link:t.link})},m=function(t){return t.colors.reduce((function(t,e){return t+e.pct}),0)};return e.forEach((function(t){var e=t.countDecimal=u?t.value:t.value/r*a.cellCount;if(t.countDecimalFloor=Math.floor(t.countDecimal),t.count=Math.round(t.countDecimal),t.countFraction=t.countDecimal-t.count,!(e<=0))for(i||(i=p(t));e>d.eps;){var n=1,o=m(i);1===o&&(i=p(t),o=0);var c=n-o;e-n<0&&(n+=e-n),c-n<0&&(n=c),g(t,i,n),e-=n}})),o}},{key:"getShapeData",value:function(t,e,a,n,i){var o,c,l=function(t,e){e=arguments.length<2?100:arguments[1];var a=t.length,n=t.reduce((function(t,e){return t+Math.round(e.countDecimal)}),0),i=e-n,o=r.a.sortBy(t,(function(t){return Math.round(t.countDecimal)-t.countDecimal}));return o.forEach((function(t,e){t.count=Math.round(t.countDecimal)+(i>e)-(e>=a+i)})),o},u="absolute"===this.options.series.data,h=[],f=0,d=0,p=a.cellMetrics,g=a.realNumbers,m=this.getSheetColors(),y=0;e.forEach((function(t){t.countDecimal=g?t.value:t.value/i*a.cellCount,t.countDecimalFloor=Math.floor(t.countDecimal),y+=t.countDecimal-t.countDecimalFloor,t.count=Math.floor(t.countDecimal),t.countFraction=t.countDecimal-t.count,d+=t.count})),y=parseFloat(y.toPrecision(12)),d+=Math.ceil(y),!u&&!g||g&&d>a.cellCount?(e.forEach((function(t,e){t.sortIndex=e})),e=l(e,a.cellCount),e=r.a.sortBy(e,(function(t){return t.sortIndex}))):(e.forEach((function(t,e){t.sortIndex=e})),e=l(e,Math.min(d,a.cellCount)),e=r.a.sortBy(e,(function(t){return t.sortIndex}))),e.forEach((function(t){for(var e=0;e<t.count;e++)h[f]={categoryIdx:t.categoryIdx,shape:t.shape,valueLabel:t.valueLabel,category:t.category,link:t.link},f++}));for(var v,x,b=0,P=0,S=0;S<f;S++)o=S%a.cols,c=Math.floor(S/a.cols),x=n[(v=h[S]).shape].bbox,b=(p.width-x.width)/2,P=(p.height-x.height)/2,v.xdiff=b,v.ydiff=P,v.cellX=a.colPosition(o),v.cellY=a.rowPosition(c),v.row=c,v.col=o,v.x=v.cellX+b,v.y=v.cellY+P,v.width=x.width*t.iconSizeMultiplier,v.height=x.height*t.iconSizeMultiplier,v.color=Object(s.getColor)(v.categoryIdx,m),v.colors=[{x:0,width:x.width*t.iconSizeMultiplier,height:x.height*t.iconSizeMultiplier,pct:1,color:v.color,valueLabel:v.valueLabel,category:v.category,categoryIdx:v.categoryIdx}];return h}},{key:"getSheetColors",value:function(){return r.a.get(this.runtime,"sheet.categories.colors")}},{key:"getShapeGroupOverlayPaths",value:function(t,e,a){var n={},r=a.cellMetrics;t.forEach((function(t){n[t.categoryIdx]||(n[t.categoryIdx]={minX:999999,maxX:-999999,minY:999999,maxY:-999999,categoryIdx:t.categoryIdx,valueLabel:t.valueLabel,category:t.category,link:t.link})}));var i,o=e[0];e.forEach((function(t,c){i=e[c+1]||t;var s=t.colors.length-1,l=o.xdiff!==t.xdiff?(o.xdiff+t.xdiff)/2:t.xdiff,u=i.xdiff!==t.xdiff?(i.xdiff+t.xdiff)/2:t.xdiff,h=0===t.col,f=t.col===a.cols-1;t.colors.forEach((function(e,i){var o=n[e.categoryIdx],c=i===s,d=0===i,p=0===s,g=t.row+1,m=g<a.rows?a.rowPosition(g):t.cellY+r.height;if(!o.firstPos){var y=t.x+e.x;d&&(y=h?t.cellX:t.x-l),o.firstPos={x:y,y0:t.cellY,y:m,col:t.col,row:t.row},o.color=e.color,o.cellHeight=r.height}var v=t.x+e.x+e.width;c&&(v=f?t.cellX+r.width:t.x+e.x+e.width+(p&&1!==e.pct?0:u)),o.lastPos={x0:t.x+e.x-(h?t.xdiff:0),x:v,y0:t.cellY,y:m,col:t.col,row:t.row},o.minX=Math.min(o.minX,o.firstPos.x,o.lastPos.x0,o.lastPos.x),o.maxX=Math.max(o.maxX,o.firstPos.x,o.lastPos.x),o.minY=Math.min(o.minY,o.firstPos.y0,o.lastPos.y0),o.maxY=Math.max(o.maxY,o.firstPos.y,o.lastPos.y)})),o=t}));var c=(n=Object.values(n).filter((function(t){return t.lastPos})))[0];return n.forEach((function(t){c!==t&&(t.firstPos.x=Math.min(t.firstPos.x,c.lastPos.x),c=t)})),n.forEach((function(t){var e=function(t,e,n){a.push(t+[e,n].join(","))},a=[],n=t.lastPos.row-t.firstPos.row;e("M",t.firstPos.x,t.firstPos.y0),0===n?(e("L",t.lastPos.x,t.firstPos.y0),e("L",t.lastPos.x,t.lastPos.y),e("L",t.firstPos.x,t.lastPos.y),e("L",t.firstPos.x,t.firstPos.y0)):1===n?(e("L",t.maxX,t.firstPos.y0),e("L",t.maxX,t.lastPos.y0),e("L",t.firstPos.x,t.lastPos.y0),e("M",t.lastPos.x,t.lastPos.y0),e("L",t.lastPos.x,t.lastPos.y),e("L",t.minX,t.lastPos.y),e("L",t.minX,t.firstPos.y),e("L",t.firstPos.x,t.firstPos.y)):(e("L",t.maxX,t.firstPos.y0),e("L",t.maxX,t.lastPos.y0),e("L",t.lastPos.x,t.lastPos.y0),e("L",t.lastPos.x,t.lastPos.y),e("L",t.minX,t.lastPos.y),e("L",t.minX,t.firstPos.y),e("L",t.firstPos.x,t.firstPos.y)),t.path=a.join(" ")})),n}},{key:"graphInstanceSetup",value:function(t,e,a,n,r){var i=e.data.length,o=this.runtime.formatter,c=Object(u.removeDelay)(this,(function(t,e){return e/i*500}));t.data(e.data).overlayData(e.overlayData).colors(e.colors).groupId(r).legend(n.legend).tooltip(Object(y.createStyledTooltip)(this)).tooltipText((function(t){return t.category})).tooltipValue((function(t){return o.tooltip.x.format(t.valueLabel)})).transitionDelay(c).transitionDuration(n.transitionDuration),t.dispatch().on("animationEnd",n.animationEnd)}},{key:"prepareShapes",value:function(t,e){var a=this.root;a.selectAll("defs").remove();var n=a.append("defs");Object.keys(t).forEach((function(a){var r=t[a],i=r.shape,o=r.fillRule,c="igc-cp-".concat(a).concat(this.chartId);n.selectAll("#".concat(c)).data([0]).enter().append("clipPath").attr("id",c).attr("clip-rule",o).selectAll("path").data([0]).enter().append("path").attr("d",i).attr("transform","scale(".concat(e.iconSizeMultiplier,")")).attr("fill-rule",o)}),this)}},{key:"getValueSum",value:function(t){return t.reduce((function(t,e){return t+e.value}),0)}},{key:"getSheetsValueSum",value:function(){var t=this;return this.options.sheets.reduce((function(e,a,n){var i=r.a.merge({},t.emptySheetData(),a),o=t.prepareSheetData(i,n);return e+t.getValueSum(o.data)}),0)}},{key:"getSheetsMaxData",value:function(){var t=this,e=this.options.sheets.reduce((function(e,a,n){var i=r.a.merge({},t.emptySheetData(),a),o=t.prepareSheetData(i,n);return e.push({graph:o,shapes:i.categories.shapes,valuesSum:t.getValueSum(o.data)}),e}),[]),a=e[0],n=0;return e.forEach((function(t){t.valuesSum>n&&(a=t,n=t.valuesSum)})),a}},{key:"defaults",value:function(){return r.a.merge({},w(O(x.prototype),"defaults",this).call(this),{series:{data:"separate",distribution:"round"},shapes:[{title:"boyPath",shape:"m14.57,9.54l0,5.91q0,0.57,-0.4,0.97t-0.97,0.4t-0.97,-0.4t-0.4,-0.97l0,-5l-0.91,0l0,12.95q0,0.65,-0.47,1.12t-1.12,0.47t-1.12,-0.47t-0.47,-1.12l0,-6.59l-0.91,0l0,6.59q0,0.65,-0.47,1.12t-1.12,0.47t-1.12,-0.47t-0.47,-1.12l0,-12.95l-0.91,0l0,5q0,0.57,-0.4,0.97t-0.97,0.4t-0.97,-0.4t-0.4,-0.97l0,-5.91q0,-1.14,0.8,-1.93t1.93,-0.8l9.09,0q1.14,0,1.93,0.8t0.8,1.93Zm-4.09,-6.36q0,1.32,-0.93,2.25t-2.25,0.93t-2.25,-0.93t-0.93,-2.25t0.93,-2.25t2.25,-0.93t2.25,0.93t0.93,2.25Z"}]})}},{key:"emptySheetData",value:function(){return r.a.merge({},w(O(x.prototype),"emptySheetData",this).call(this),{categories:{shapes:["boyPath"]},series:[{type:"pictorial-grid",axisIndex:0}],axis:[{}],grid:{}})}},{key:"prepareSheetData",value:function(t,e){var a,n=t.categories,r=n.data,i=n.shapes,o=n.colors,c=i.length,l=t.series[0];if(e===this.sheetIndex){var u=Object(p.createLegendData)(this);a=function(t,e,a){var n=Object(s.replaceBlank)(Math.abs(e),null);if(null===n)return t;var h=Object(s.replaceBlank)(r[a]);return u({color:Object(s.getColor)(a,o),title:h,groupId:a}).active?(t.push({value:n,valueLabel:Object(s.replaceBlank)(l.rawData[a]),category:h,shape:i[a%c],categoryIdx:a,link:l.links?l.links[a]:null}),t):t}}else a=function(t,e,a){var n=Object(s.replaceBlank)(Math.abs(e),null);if(null===n)return t;var o=Object(s.replaceBlank)(r[a]);return t.push({value:n,valueLabel:Object(s.replaceBlank)(l.rawData[a]),category:o,shape:i[a%c],categoryIdx:a,link:l.links?l.links[a]:null}),t};var h=l.data.reduce(a,[]);return{type:l.type,data:h,colors:o}}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach((function(e,a){var n=function(e){return t[e]||t[0]}(a+1);e.iconSizeMultiplier=n.iconSizeMultiplier||1,n.categories&&r.a.merge(e.categories,n.categories),e.series.forEach((function(t){"bar"===t.type&&n.bar&&r.a.merge(t,n.bar)})),n.legend&&r.a.merge(e.legend,n.legend),n.tooltip&&(e.tooltip=e.tooltip||{},r.a.merge(e.tooltip,n.tooltip)),e.axis.forEach((function(t,e){var a=n.axis&&n.axis[e];a&&r.a.merge(t,a)}))}))}}])&&S(e.prototype,a),n&&S(e,n),x}(l.default)},"TxU/":function(t,e,a){"use strict";a.r(e),a.d(e,"PictorialGrid",(function(){return f}));var n=a("LvDl"),r=a.n(n),i=a("30U6"),o=a("/TIM"),c=a("+3eq"),s=a("XKI8"),l=a("SGek"),u=a("3y/1"),h=a("p8DI");function f(){var t,e,a,n=function(t){O.duration.y=k,t.each((function(){var t=Object(o.select)(this);if(t.selectAll(".picto-grid-item").remove(),!P.length)return j.call("animationStart"),j.call("animationUpdateStart"),j.call("animationUpdateEnd"),j.call("animationEnterEnd"),void j.call("animationEnd");var e=t.selectAll(".picto-grid-item");e.transition().duration(0);var a=m(e),n=a[0];y(n),d(t,a),f(t,S)}))},f=function(t,e){t.selectAll(".overlay-pictorial").remove(),t.selectAll(".overlay-pictorial").data(e).enter().append("path").attr("class","overlay-pictorial").attr("stroke-width",0).attr("stroke","#000000").attr("fill","transparent").attr("d",(function(t){return t.path}))},d=function(e,a){var n=e.selectAll(".picto-grid-item").data(a);n.exit().transition().style("opacity",l.eps).remove();var r=n.enter().insert("g","text"),i=0===n.size()&&n.size()<r.size(),c=O.duration,s=0;function h(){n=n.merge(r),j.call("animationEnterEnd"),j.call("animationEnd"),p(n),b(e.selectAll(".overlay-pictorial"),e.selectAll(".picto-grid-item rect"))}i?(j.call("animationStart"),j.call("animationUpdateStart"),j.call("animationUpdateEnd"),r.call(v,h)):(j.call("animationStart"),j.call("animationUpdateStart"),n.style("visibility","hidden").attr("clip-path",(function(e){return"url(".concat(Object(u.absoluteUrl)("igc-cp-".concat(e.next.shape).concat(t)))})).attr("transform",(function(t){return"translate("+t.next.x+","+t.next.y+")"})).transition().duration(c.y+c.x).on("start",(function(){s++})).on("end",(function(){if(Object(o.select)(this).style("visibility",null),0==--s){if(j.call("animationUpdateEnd"),j.call("animationEnterStart"),0===r.size())return void h();r.call(v,h)}})),x(n))},p=function(e){a&&a.data().forEach((function(e){a.addListener({id:t+"_"+e.groupId,dispatch:j})})),j.on("highlightStart.shape",(function(t,a,n){e.selectAll("rect").filter(g(t,a,n)).transition().duration(150).ease(c.easeLinear).style("opacity",.3)})),j.on("highlightEnd.shape",(function(t,a,n){e.selectAll("rect").filter(g(t,a,n)).transition().duration(150).ease(c.easeLinear).style("opacity",1)}))},g=function(t){return function(e){return e.categoryIdx!==t}},m=function(t){var e=P.map((function(t){return r.a.merge({},t)})),a=[];return t.each((function(t){a.push(r.a.merge({},t))})),0===a.length&&(a=e.map((function(t){return r.a.merge({},t)}))),Object(u.pairData)(a,e),a},y=function(t){var e,a,n,r,i={x:["xPos","width"]};if(t)for(a in e=t.next,O.duration)i[a]&&(n=i[a].length,r=0,i[a].forEach(o),n===r&&(O.duration[a]=0));function o(a){Math.abs(t[a]-e[a])<.2&&r++}},v=function(e,a){var n=0;e.attr("class","picto-grid-item").attr("clip-path",(function(e){return"url(".concat(Object(u.absoluteUrl)("igc-cp-".concat(e.shape).concat(t,")")))})).attr("transform",(function(t){return"translate("+t.x+","+t.y+")"})),e.transition().duration(k).delay((function(){return E+D.apply(this,arguments)})).on("start",(function(){x(Object(o.select)(this).selectAll("rect")),0===n&&j.call("animationEnterStart"),n++})).on("end",(function(){0==--n&&a()}))},x=function(t){var e=t.data((function(t){return t.next.colors}));e.exit().remove(),(e=e.merge(e.enter().append("rect"))).attr("x",(function(t){return t.x})).attr("y",0).attr("width",(function(t){return t.width})).attr("height",(function(t){return t.height})).attr("fill",(function(t){return t.color}))},b=function(t,e){L&&(t=t.filter((function(t,e){return 0===e}))),t.on("mousemove.pictorial",(function(t,a){L||e.filter(g(a.categoryIdx)).transition().duration(150).ease(c.easeLinear).style("opacity",.3)})).on("mouseout.pictorial",(function(t,a){L||e.filter(g(a.categoryIdx)).transition().duration(150).ease(c.easeLinear).style("opacity",1)})),Object(h.addMouseEvents)(t,j,C,M,I)},P=[],S=[],w=u.schemeCategory10,O={duration:{x:400,y:700,text:50}},D=0,k=700,j=Object(i.dispatch)("highlightStart","highlightEnd","animationStart","animationUpdateStart","animationEnterStart","animationEnd","animationUpdateEnd","animationEnterEnd","openUrl"),M=function(t){return t.xLabel},I=function(t){return t.yLabel},E=0,L=!1,C=s.getTooltip,A={data:function(t){return arguments.length?(P=t,n):P},overlayData:function(t){return arguments.length?(S=t,n):S},colors:function(t){return arguments.length?(w=t,n):w},groupId:function(t){return arguments.length?(e=t,n):e},chartId:function(e){return arguments.length?(t=e,n):t},legend:function(t){return arguments.length?(a=t,n):a},tooltip:function(t){return arguments.length?(C=t,n):C},tooltipText:function(t){return arguments.length?(M=t,n):M},tooltipValue:function(t){return arguments.length?(I=t,n):I},transitionDelay:function(t){return arguments.length?(D=t,n):D},transitionDuration:function(t){return arguments.length?(k=t,n):k},transitionTiming:function(t){return arguments.length?(O=t,n):O},renderDelay:function(t){return arguments.length?(E=t,n):E},dispatch:function(){return j},renderText:function(){return n},highlightFirstOnly:function(t){return arguments.length?(L=t,n):L}};return Object.assign(n,A),n}},VLlq:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return s}));var n=a("LvDl"),r=a.n(n),i=a("kX2h"),o=a("cSt8"),c=a("nGGV");function s(t){var e=t.options.sheetSwitch,a={tab:i.default,player:o.Player,radio:c.RadioSwitcher},n=r.a.get(e,"type"),s=a[n]||c.RadioSwitcher;s.apply(null,arguments)}},ZHFg:function(t,e,a){"use strict";a.r(e),a.d(e,"availableShapesMetrics",(function(){return r}));var n=a("3y/1");function r(t){return function(e){return e.reduce((function(e,a){var r=t.find((function(t){return t.title===a}))||{},i=r.shape;if(e[a])return e;var o=Object(n.measurePath)(i);return e[a]={shape:i,bbox:o,fillRule:r.fillRule},e}),{})}}},l7Rd:function(t,e,a){"use strict";a.r(e),a.d(e,"cleanShapeName",(function(){return h})),a.d(e,"addShapesToCharts",(function(){return f})),a.d(e,"assignShapesToCategories",(function(){return d}));var n=a("LvDl"),r=a.n(n),i=a("3UmV"),o=a("6jAQ"),c=a("BD53"),s=a("s9+M"),l=a("0Qba"),u=Object.create(o.default);function h(t){return t&&t.replace(/^[^0-9a-z]+|[^\w:.-]+/gi,"")}function f(t){var e=l.default.shapes[t];e||(t=this.defaultShape,e=l.default.shapes[t]),this.chartOptions.shapes||(this.chartOptions.shapes=[]),r.a.find(this.chartOptions.shapes,{title:h(t)})||this.chartOptions.shapes.push({title:h(t),shape:e.path,dimensions:e.dimensions,fillRule:e.fillRule,transform:e.transform})}function d(t){var e=t.custom,a=t.sheetIndex,n=t.sheetOptions,i=this,o=e.defaultPath;if(void 0!==a){var c=this.sheetSettings[a];r.a.has(c,"shapes")&&(e.shapes=c.shapes)}r.a.get(e,"shapes.length")?(e.shapes.forEach((function(t){f.call(i,t)})),n.categories.shapes=e.shapes.map((function(t){return h(t)}))):(f.call(this,o),n.categories.shapes=[h(o)])}e.default=u,function(){this.instanceClass=i.PictorialGrid,this.setupChartOptions=function(){o.default.setupChartOptions.call(this);var t=this.custom,e=this.chartOptions;e.series.data=!0===t.absoluteDistribution?"absolute":"separate",e.series.distribution=!1===t.roundValues?"scattered":"round",e.series.realNumbers=!0===t.realNumbers},this.setupChartSheetOptionsItem=function(t,e){var a={categories:{colors:r.a.merge([],this.themeColors,t.colors||this.colors)},axis:[{}]};Object(c.default)(a,t,this.charts);var n=t.iconSizeMultiplier;return a.iconSizeMultiplier=n,d.call(this,{custom:t,sheetIndex:e,sheetOptions:a}),Object(s.assignNumberFormatLabels)({sheetOptions:a,custom:t,affixes:[{id:"x",path:"",ignoreCheck:!0}],inputDecimalSeparator:this.inputDecimalSeparator}),a}}.call(u)},nGGV:function(t,e,a){"use strict";a.r(e),a.d(e,"RadioSwitcher",(function(){return l}));var n=a("LvDl"),r=a.n(n),i=a("/TIM"),o=a("x5YE"),c=a("cSt8"),s=a("P0iM");function l(t,e){var a=t.container,n=t.options,l=t.sheetIndex,u=n.sheets,h=t.interaction;if(Object(c.removeSheetPlayer)(t),a.selectAll(".igc-sheets").remove(),!Object(s.sheetsEmpty)(t)){var f=r.a.get(n,"style.sheetSwitch.radio"),d=function(t){var e=t.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth;return t.select(".igc-sm-sheet-switch-radio").remove(),e}(a),p=Object(o.TextItemMetrics)().width(e.width).texts(u.map((function(t){return t.categories.title}))).style(f).parentContainer(a).reservedSize(d+20)(),g=a.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px")),m=g.selectAll(".igc-sheet").data(u.map((function(t,e){return{name:t.categories.title,sheetIndex:e}})));(m=m.merge(m.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",(function(t){return t.sheetIndex===l?"true":"false"})).attr("aria-labelledby",(function(t){return"igc-sheet-label".concat(t.sheetIndex)})).attr("class",(function(t){return t.sheetIndex===l?"igc-sheet active":"igc-sheet"})).style("max-width","".concat(p.width,"px")),m.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",(function(t){return"igc-sheet-".concat(t.sheetIndex)})),m.append("span").attr("class","igc-sheet-label").html((function(t){return t.name})).attr("id",(function(t){return"igc-sheet-label".concat(t.sheetIndex)})).styles(f).style("height","".concat(p.label.height,"px")).style("max-width","".concat(p.label.width,"px")),m.on("click",(function(e,n){var r=Object(i.select)(this);h("sheetSwitch.item","click"),t.sheetIndex!==n.sheetIndex&&(a.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),r.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=n.sheetIndex,delete t.legendData,t.render())})),Object(s.subtractHeight)(t,g.node())}}},p8DI:function(t,e,a){"use strict";a.r(e),a.d(e,"addMouseEvents",(function(){return r}));var n=a("3y/1");function r(t,e,a,r,i){t.classed("igc-chart-link",(function(t){return!(!t||!t.link)})).on("mouseover",(function(){return a().interaction("show")})).on("mousemove",(function(t,e){var o=Object(n.getMousePosition)(t),c=r(e),s=i(e);a().setText(c).setValue(s).setPosition(o,e.color)})).on("mouseout",(function(){return a().hide()})).on("click",(function(t,a){return e.call("openUrl",null,a.link)}))}},"s9+M":function(t,e,a){"use strict";a.r(e),a.d(e,"assignNumberFormatValues",(function(){return s})),a.d(e,"assignNumberFormatLabels",(function(){return l}));var n=a("LvDl"),r=a.n(n),i=a("u59D"),o={label:{libraryTargetPath:"labels.format",customAffixPath:"labels.graph.item.format.affix"},x:{libraryTargetPath:"tooltip.format.x",customAffixPath:"labels.tooltip.format.x.affix"},y:{libraryTargetPath:"tooltip.format.y",customAffixPath:"labels.tooltip.format.y.affix"},y2:{libraryTargetPath:"tooltip.format.y2",customAffixPath:"labels.tooltip.format.y2.affix"}};function c(t,e,a){var n=e.decimalSeparator,o=e.groupingSymbol;o&&r.a.set(t,"grouping","none"===o?"":o);var c=!1===n;r.a.set(t,"decimal",c?".,":n);var s=a?new i.default("firstNumber",a):new i.default(c?"legacy":"firstNumber",n);r.a.set(t,"numberParser",s)}function s(t){var e=t.sheetOptions,a=t.custom,n=t.axis,i=t.inputDecimalSeparator,o={x:0,y:1,y2:2,x1:0,y1:1};n.forEach((function(t){var n=t.id,s=t.path,l=s?r.a.get(a,s,{}):a,h=e.axis[o[n]];r.a.has(h,"format")||r.a.set(h,"format",{});var f=h.format;if(u(f,l),!["x1","y1"].includes(n)){c(f,l,i);var d=["useSIPrefixes"];r.a.get(a,"axis.".concat(n,".affix"),!0)&&d.push("prefix","suffix"),d.forEach((function(t){var e=r.a.get(l,t);void 0!==e&&r.a.set(f,t,e)}))}}))}function l(t){var e=t.sheetOptions,a=t.custom,n=t.affixes,i=void 0===n?[]:n,s=t.inputDecimalSeparator;i.forEach((function(t){var n=t.id,i=t.path,l=t.ignoreCheck,h=t.defaultValue,f=o[n],d=f.libraryTargetPath,p=f.customAffixPath,g=i?r.a.get(a,i,{}):a,m=r.a.pick(g,"prefix","suffix");u(m,g),c(m,g,s),l||r.a.get(a,p,h)||(r.a.unset(m,"prefix"),r.a.unset(m,"suffix")),r.a.set(e,d,m)}))}function u(t,e){var a=e.decimalPlaces,n=e.decimalPlacesValue;a&&void 0!==n&&r.a.set(t,"decimalPlaces",n)}},v3rV:function(t,e,a){"use strict";a.r(e),a.d(e,"inanimated",(function(){return i})),a.d(e,"removeAnimation",(function(){return o})),a.d(e,"removeDelay",(function(){return c}));var n=a("LvDl"),r=a.n(n);function i(t){return 0===r.a.get(t,"animation.duration")}function o(t){t.forEach((function(t){r.a.has(t,"animationDuration")?t.animationDuration(0):r.a.has(t,"animate")&&t.animate(!1)}))}function c(t,e){return r.a.get(t,"runtime.inanimate")?function(){return 0}:e}}}]);