(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-6"],{"1A/D":function(t,e,n){"use strict";function i(t){for(var e=!0,n=((null==t?void 0:t.series.length)||0)-1;n>=0;n--)if(t.series[n].data.length>0){e=!1;break}return e}function r(t){var e;return!!((null==t?void 0:null===(e=t.sheets)||void 0===e?void 0:e.length)<1)}n.r(e),n.d(e,"sheetSeriesDataEmpty",(function(){return i})),n.d(e,"sheetsNotFound",(function(){return r}))},"2YLo":function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"Renderer",(function(){return r}));var r=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e.instance)throw new Error("No instance provided");this.renderables=[],this.instance=e.instance}var e,n,r;return e=t,(n=[{key:"start",value:function(){var t=this.instance,e=t.root,n=e.select(".igc"),i={igc:n,grid:n.select(".igc-grid"),title:e.select(".igc-titles")};this.renderables.forEach((function(e){"function"!=typeof e?"object"==typeof e&&(-1===["grid","title"].indexOf(e.parent)?"igc"!==e.parent?t.renderPart(e.parent,e.callable,e.className):t.renderGraphs(i.igc,e.callable):t.renderPart(i[e.parent],e.callable,e.className)):e()}))}},{key:"add",value:function(t){return this.renderables.push(t),t}},{key:"addGrid",value:function(t,e){var n={callable:t,className:e,parent:"grid"};return this.add(n),n}},{key:"addTitle",value:function(t,e){var n={callable:t,className:e,parent:"title"};return this.add(n),n}},{key:"addParent",value:function(t,e,n){var i={callable:e,className:n,parent:t};return this.add(i),i}},{key:"addGraph",value:function(t){var e={callable:t,parent:"igc"};return this.add(e),e}}])&&i(e.prototype,n),r&&i(e,r),t}()},"5Td5":function(t,e,n){"use strict";n.r(e),n.d(e,"Line",(function(){return Q}));var i=n("LvDl"),r=n.n(i),a=n("30U6"),o=n("vBe5"),l=n("ziQ1"),s=n("/TIM"),c=n("+3eq"),h=n("8d86"),u=n("W6Ny"),f=n("v3rV"),d=n("I6ut"),g=n("x+1q"),p=n("b/Qv"),m=n("3y/1"),y=n("ejCe"),v=n("VDPv"),b=n("x5YE"),x=n("VLlq"),O=n("JQGg"),w=n("BGfC"),k=n("eXr4"),j=n("pzpO"),L=n("pQx5"),S=n("v4xw"),E=n("Ozxj"),C=n("2YLo"),T=n("M51E"),A=n("XKI8"),M=n("pYxU"),I=n("emqt"),D=n("1A/D"),P=n("IdFA"),B=n("D3ez"),z=n("/mLy"),R=n("MK1G"),N=n("rTau");function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function F(t,e,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Y(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=V(t);if(e){var r=V(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return U(this,n)}}Object(B.putGraph)("line",z.Line),Object(B.putGraph)("area",N.Area);var q={curveLinear:h.curveLinear,curveMonotoneX:h.curveMonotoneX,monotone:h.curveMonotoneX},Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(z,t);var e,n,i,B=Z(z);function z(){return G(this,z),B.apply(this,arguments)}return e=z,i=[{key:"getClassName",value:function(){return"Line"}}],(n=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,n=this.root,i=new C.Renderer({instance:this}),a=this.getSheetData(),l=Object(g.default)(a),s=this.runtime={width:e.width,height:e.height,layout:{},components:{},inanimate:Object(f.inanimated)(e),sheet:a,formatter:l,margin:{top:0,right:1,bottom:0,left:0},spacing:{maxBeforeXAxisTick:50,beforeBottomCategories:5,afterTopCategories:5,afterYAxisTick:5},xAxisTimeBased:a.categories.xAxisTimeBased},h=s.layout,d=s.spacing,p=s.layout.marginTitle={top:0,right:0,bottom:0,left:0},O=s.layout.marginAxis={top:0,right:0,bottom:0,left:0};if(!u.default.prototype.sheetsNotFound.call(this)){var k=s.graphs=this.prepareSheetData(a,this.sheetIndex);this.createTickIntervals();var L=a.graphOptions.dataPointRadius;Object(x.default)(this,{width:e.width}),Object(M.DownloadButton)(this,e.style.legend);var S=Object(b.legendHelper)({instance:this});if(!this.sheetsNotFound(k)){var T=e.animation.duration,A=this.createAnimationCounter(k.length+3),B=s.reverseAxis=!(!a.grid||!a.grid.reverse),z=s.numericCategories=!!a.categories.numeric;s.categoryLayout=a.categories.layout;var N,_=s.xAxisOptions=a.axis[0],G=s.yAxisOptions=a.axis[1],W=this.showDataPoints(),F=!!_.ticks,V=null,U=!!G.ticks,X=null,Y=this.showAsPercent(),H=s.xRangeLimits=Object(j.hasLimits)(_),Z=s.yRangeLimits=Object(j.hasLimits)(G),q=e.style.axis.x,Q=e.style.axis.y,K=r.a.get(G,"title"),J=r.a.get(_,"title"),$=Object(v.default)();if(this.titleLayout(["x","y"]),z)N=Object(m.getTextDimensions)([E.NUMBERS_WITH_DELIMITERS],q.tick);else{var tt=["".concat(Object(m.firstNonEmpty)(a.categories.data)).concat(E.PRINTABLE_ASCII)];N=Object(m.getTextDimensions)(tt,q.tick)}s.xTickMetrics=N,F&&(s.margin.right+=Math.ceil(.5*N.height)),H&&(s.margin.right+=5,G.ticks||K||(s.margin.left+=5)),Z&&(G.ticks||B||(s.margin.top+=5),_.ticks||J||(s.margin.bottom+=Math.max(0,L-d.beforeBottomCategories)),B&&!_.ticks&&(s.margin.top+=Math.max(0,L-d.afterTopCategories)));var et={width:0,height:0};if(U&&(et=Object(m.getTextDimensions)(l.axis.y.tickSample(),Q.tick),B?J||(s.margin.bottom+=et.height+(et.height-et.baseLineOffset)):s.margin.top+=et.height),r.a.get(a,"graphOptions.line.showValues")){var nt=Object(m.getTextDimensions)(E.PRINTABLE_ASCII,e.style.graph.item.value);if(B){if(!J){var it=Math.max(0,nt.height-(et.height+(et.height-et.baseLineOffset)));s.margin.bottom+=it}}else{var rt=Math.max(0,nt.height-et.height);s.margin.top+=rt}}var at=s.width-s.margin.left-p.left-s.margin.right-p.right,ot=s.height-s.margin.top-p.top-s.margin.bottom-p.bottom,lt=s.limits={maxCategoryHeight:Math.max(0,Math.floor(.28*ot)),categoryHeight:0},st=B?[0,ot]:[ot,0],ct=this.createYScale();ct.range(st);var ht=this.adjustYDomain(this.getDomain(k,["y","y0","y1"]),ot);if(ct.domain(ht),Object(j.domainInvalid)(ht))return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();if(X=this.yTicks(ct),U){var ut;if("BubblePlot"===this.getClassName())ut=ct.domain().map((function(t){var e=a.series[t];return e&&Object(m.replaceBlank)(e.title)||""})),$.tickFormat((function(t){return ut[t]||""}));else{var ft=l.axis.y.createTickFormatter(X,G);ut=X.map(ft),$.tickFormat(ft)}et.width=Object(m.getTextDimensions)(ut,Q.tick).width,O.left=et.width+d.afterYAxisTick}s.graphWidth=at-O.left-1,s.igcLeftOffset=s.margin.left+O.left+p.left,this.createXScale();var dt=s.igcLeftOffset,gt=s.graphWidth,pt=s.margin.left,mt=F||a.grid.vertical?this.createCategoryLabels():this.createCategoryLabelsEmpty();if(F||(s.igcLeftOffset=dt,s.graphWidth=gt,s.margin.left=pt,this.createXScale()),V=mt.ticks,!U&&z&&F&&"regular"===mt.layout){var yt=r.a.get(mt,"renderData[0]");if(null===r.a.get(yt,"transform")){if(yt.x<0&&p.left<Math.abs(yt.x)){var vt=Math.floor(Math.abs(yt.x)-p.left);s.graphWidth-=vt,s.igcLeftOffset+=vt}}else{var bt=yt.h/2;if(bt>0&&p.left<bt){var xt=Math.floor(bt-p.left);s.graphWidth-=xt,s.igcLeftOffset+=xt}}s.hiddenLines=[],this.createXScale(),mt=this.createCategoryLabels()}F&&(s.limits.categoryHeight=mt.height),B?O.top=s.limits.categoryHeight+d.afterTopCategories:O.bottom=s.limits.categoryHeight+d.beforeBottomCategories;var Ot=s.margin.top+O.top+p.top;ot=ot-O.top-O.bottom,s.graphHeight=ot,st=B?[0,ot]:[ot,0],ct.range(st);var wt={enabled:W,showOnlyClosest:!1,numericCategories:z,radius:L,pointStrokeColor:r.a.get(a,"style.pointStrokeColor"),showValues:r.a.get(a,"graphOptions.line.showValues",{}),svgContainer:n.node(),x:s.xScale,y:ct.fn,offset:{left:s.igcLeftOffset,top:Ot},graphs:k,bounds:{height:Object(o.max)(st),width:s.graphWidth},animationEnd:A,type:this.getClassName(),legend:S},kt=Object(o.max)(k,(function(t){return t.data.length}));s.graphWidth<2*L*kt&&(wt.showOnlyClosest=!0);var jt=Object(w.GridLines)().scale(ct.fn).orient(w.GridLines.ORIENTS.horizontal).tickSize(-(s.graphWidth+O.left+O.right)).highlightZero(a.grid.horizontalZeroHighlight).style(e.style.grid).tickValues(X).animationDuration(T).offset({left:-O.left});if(!a.grid.horizontal){var Lt=r.a.get(a,"grid.horizontalZero",!1)&&-1!==X.indexOf(0);jt.tickValues(Lt?[0]:[])}var St=Object(w.GridLines)().scale(s.xScale).orient(w.GridLines.ORIENTS.vertical).tickSize(ot+1).highlightZero(a.grid.verticalZeroHighlight).style(e.style.grid).animationDuration(T).tickValues(V).offset({top:0});if(s.hiddenLines&&s.hiddenLines.length&&St.hideLinesByIndex(s.hiddenLines),a.grid.vertical)z||St.tickValues(r.a.get(mt,"filterMetrics.domainIndex"));else{var Et=r.a.get(a,"grid.verticalZero",!1)&&V&&-1!==V.indexOf(0);St.tickValues(Et?[0]:[])}s.xAxisTimeBased&&a.grid.vertical&&(St.tickValues(null),St.ticks(s.xTickInterval)),$.scale(ct.fn).orient("left").style(Q.tick).textOffset(B?et.height:et.baseLineOffset-et.height).tickValues(X),Y&&$.tickFormat(Object(I.percentFormat)(l.axis.y)),U||$.tickValues([]),this.titleComponents(["x","y"]);var Ct=s.components,Tt=Ct.bottomTitle,At=Ct.leftTitle;Tt.orientBounds({y1:0,y2:s.height-s.margin.bottom-5,x1:s.margin.left+p.left,x2:s.width}),At.orientBounds({x1:s.margin.left+4,x2:s.width,y1:Ot,y2:Ot+ot}),Tt.dispatch().on("animationEnd",A);var Mt=Object(y.Bottom)().data(F?mt.renderData:[]).bounds({height:lt.maxCategoryHeight,y:B?-O.top:ot+d.beforeBottomCategories}).textAlign(F?mt.renderData.textAlign:null).style(q.tick);if(Object(D.sheetSeriesDataEmpty)(a))return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();h.igc={x:s.igcLeftOffset,y:Ot},s.inanimate&&Object(f.removeAnimation)([At,Tt,Mt,$]),this.containerSetup();var It=n.select(".igc"),Dt=n.select("defs"),Pt=c[e.animation.ease],Bt=e.animation.duration;i.add((function(){n.attr("width",s.width).attr("height",s.height).transition().ease(Pt).duration(Bt).on("start",(function(){t.events.call("startAnimation")})).on("end",(function(){A()})),It.attr("transform","translate(".concat(h.igc.x,", ").concat(h.igc.y,")"))})),i.addGrid(jt,"igc-ygrid"),i.addGrid(St,"igc-xgrid"),i.addGraph([{graphs:k,x:s.xScale,y:ct.fn,legend:S,bounds:{width:s.graphWidth,height:ot},offset:{x:s.igcLeftOffset,y:Ot},animationEnd:A,pointStrokeColor:r.a.get(a,"style.pointStrokeColor")}]),i.add((function(){var e=Object(R.Trendline)(),n="igc-cp-".concat(t.chartId,"-trendline");Object(P.createRectClipPath)(Dt,{clipPathId:n,x:0,y:0,width:s.graphWidth,height:ot}),r.a.get(a,"categories.trendline.enabled")?(e.data(k).scaleX(s.xScale).scaleY(ct.fn).clipPathUrl(n).dataPointOptions(wt).filterFn((function(t){return null!==t.y})),r.a.has(a,"categories.trendline.color")&&e.color(r.a.get(a,"categories.trendline.color")),It.call(e)):It.call(e.cleanup)})),"BubblePlot"===this.getClassName()&&this.renderCategorySeparator(i),i.add((function(){if(H||Z){var n=5;"DotPlot"===t.getClassName()&&(n=L);var i=2*(n+=1),r={x:-n,y:-n,width:s.graphWidth+i,height:ot+i,clipPathId:"igc-cp-".concat(t.chartId)};t.graphsSetupClipPath(It,Dt,r)}else It.selectAll(".igc-graph-group").attr("clip-path",null);It.selectAll(".igc-crosshair-circle").remove(),It.selectAll(".igc-crosshair-overlay").remove(),It.selectAll(".igc-labels").remove();var a={x:-s.igcLeftOffset,y:-Ot,width:e.width,height:s.height,clipPathId:"igc-cp-curtain-".concat(t.chartId)};t.curtainAnimation(It,Dt,a,wt)})),i.addGrid($,"igc-y0-axis-text"),i.add((function(){U&&It.select(".igc-grid").select(".igc-y0-axis-text").selectAll(".tick").select("text").attr("transform","translate(".concat(-O.left,", 0)"))})),i.addGrid(Mt,"igc-x-axis-text"),i.addTitle(At,"igc-title-left"),i.addTitle(Tt,"igc-title-bottom"),i.start()}}}},{key:"renderGraphs",value:function(t){t.selectAll(".igc-graph-group").remove(),F(V(z.prototype),"renderGraphs",this).apply(this,arguments)}},{key:"graphInstanceSetup",value:function(t,e,n,i){t.scaleX(i.x).scaleY(i.y).data(e.data).colors(e.colors).groupId(n).animate(!1).legend(i.legend).tooltip(Object(A.createStyledTooltip)(this)).interpolate(e.interpolation).filterFn((function(t){return null!==t.y})).dispatch().on("animationEnd",i.animationEnd),"line"===e.type&&t.groupId(e.groupId).strokeWidth(e.style.strokeWidth).strokeStyle(e.style.strokeStyle),"area"===e.type&&"Line"===this.getClassName()&&(t.filterFn(void 0),t.defined((function(t){return null!==t.x&&(null!==t.y0||null!==t.y1)})),t.highlightEndColor((function(t){return S.Colors.rgbStrToRgbaStr(t,.2)})),t.highlightStartColor((function(t){return S.Colors.rgbStrToRgbaStr(t,.2)})),t.y1((function(t){return function(e){return t(e.y1)}})))}},{key:"renderGraphInstances",value:function(){this.graphInstances.forEach((function(t){var e,n=t.selection,i=null==t?void 0:null===(e=t.graphObj)||void 0===e?void 0:e.type;i&&n.classed("igc-graph-".concat(i),!0),n.call(t.instance)}))}},{key:"curtainAnimation",value:function(t,e,n,i){var r=this,a=.625*this.options.animation.duration;t.selectAll(".igc-graph").attr("clip-path","url(".concat(Object(m.absoluteUrl)(n.clipPathId),")")),Object(P.createRectClipPath)(e,n),e.select("#".concat(n.clipPathId)).selectAll("path").attr("transform","translate(".concat(-(n.width-n.x),", 0)")).transition().on("end",(function(){r.renderDataPoints(t,i)})).duration(a).ease(c.easeLinear).attr("transform","translate(0, 0)")}},{key:"adjustYDomain",value:function(t,e){var n=this.runtime,i=this.showAsPercent(),r=n.sheet.graphOptions.dataPointRadius,a=n.yTickInterval,o=n.yAxisOptions,s=this.getClassName();return t=i?[0,1]:this.showDataPoints()?y.ScaleHelper.linearScaleTicksDomainAdjust(t,r,[0,e]):Object(l.scaleLinear)().domain(t).nice(a).domain(),-1!==["AreaStacked","Area","StreamGraph"].indexOf(s)&&(t[0]=Math.min(t[0],0),"AreaStacked"===s&&(t[1]=Math.max(t[1],0))),i||Object(j.limit)(o,t),t}},{key:"sheetsNotFound",value:function(){return p.default.prototype.sheetsNotFound.apply(this,arguments)}},{key:"gatherDataFromGroups",value:function(t){var e=this,n=[];return t.forEach((function(t){var i;"area"===t.type&&"Line"===e.getClassName()||(i=n).push.apply(i,Y(t.data.map((function(e){return e.colors=t.colors,e}))))})),n}},{key:"renderDataPoints",value:function(t,e){var n=this.chartId,i=this.runtime,o=this.interaction,l=this.options,h=i.formatter,u=i.errorMargin,f=r.a.get(this,"runtime.sheet.graphOptions.line.showValues",!1),d=Object(A.createStyledTooltip)(this),g=f&&!e.showOnlyClosest,p=this.tooltipEnabled(),y=function(t){return t.groupLabel},v=function(t){var n=e.numericCategories?h.tooltip.x.format(t.xLabel):t.xLabel,i=h.tooltip.y.format(t.yLabel);return"".concat(n,": ").concat(i)};u&&(v=function(t){var n=e.numericCategories?h.tooltip.x.format(t.xLabel):t.xLabel,i=function(t){return t?"".concat(t,": "):""},r=function(t){return h.tooltip.y.format(t)};return"".concat(n,"                \n").concat(i(t.yLabel)).concat(r(t.yRaw),"                \n").concat(i(t.y1Label)).concat(r(t.y1Raw),"                \n").concat(i(t.y0Label)).concat(r(t.y0Raw))});var x=function(){e.animationEnd()},j=g||p?this.gatherDataFromGroups(e.graphs):[],L=t.selectAll(".igc-crosshair-overlay").data([0]);if(L.enter().append("rect").attr("class","igc-crosshair-overlay"),(L=t.selectAll(".igc-crosshair-overlay")).attr("x",0).attr("y",0).attr("width",e.bounds.width).attr("height",e.bounds.height).styles({"stroke-width":"0px","fill-opacity":0}),p){var S=Object(O.default)().data(j.filter((function(t){return null!==t.x&&null!==t.y}))).scaleX(e.x).scaleY(e.y).offset(e.offset).bounds(e.bounds).svgContainer(e.svgContainer).targetParent(t).chartId(n).pointStrokeColor(e.pointStrokeColor).tooltip(d).tooltipText(y).tooltipValue(v);S.dispatch().on("openUrl",(function(t){return Object(m.openUrl)(t,o)})),S.target(L),L.call(S)}if(g){var E=t.selectAll(".igc-labels").data([0]);E=E.merge(E.enter().insert("g",".igc-crosshair-overlay").attr("class","igc-labels"));var C=Object(a.dispatch)("highlightStart","highlightEnd"),T=Object(k.createLineLabelRenderer)({textStyle:l.style.graph.item.value,showValues:f,textFormat:function(t){return h.labels.format(t.text)},xScale:e.x,yScale:e.y,transitionTiming:{duration:{text:50}},listenToLegendText:Object(b.createListenToLegend)({easing:c.easeLinear,ns:"text",dispatch:C}),dataPointRadius:e.radius,valueProperty:u?"yRaw":"yLabel"});e.legend&&e.legend.addListener({id:n,dispatch:C}),x=function(){T(E,j).then((function(){e.animationEnd()}))}}!e.showOnlyClosest&&e.enabled?(t.selectAll(".igc-graph-group").each((function(t){Object(s.select)(this).selectAll(".igc-graph-line").each((function(i,a){var l=Object(w.Circle)().scaleX(t.x).scaleY(t.y).data(i.data).colors(i.colors).groupId(r.a.get(i,"groupId",a)).chartId(n).filterFn((function(t){return null!==t.y&&null!==t.x})).className("igc-data-point-line").legend(t.legend).pointStrokeColor(e.pointStrokeColor).tooltip(d).tooltipText(y).tooltipValue(v).animate(!1);l.dispatch().on("openUrl",(function(t){return Object(m.openUrl)(t,o)})),Object(s.select)(this).call(l)}))})),x()):x()}},{key:"getDomain",value:function(){return L.getGraphsDomainByProperty.apply(null,arguments)}},{key:"createYScale",value:function(){var t=this.runtime.yScale=Object(l.scaleLinear)();return Object(T.scaleProxy)({fn:t,range:"rangeRound",domain:"domain",ticks:"ticks"})}},{key:"yTicks",value:function(t){var e=this.runtime,n=e.yRangeLimits,i=e.yTickInterval,r=t.domain().slice(0),a=y.ScaleHelper.ticks(t,i);return n?this.showAsPercent()?a:Object(j.forceTicksToDomain)(r,a):t.ticks?a:r}},{key:"createXScale",value:function(){var t=this.runtime,e=t.sheet,n=t.graphWidth,i=e.categories.data;if(t.xAxisTimeBased){var r=t.xDomain=Object(j.getTimeDomain)(i);t.xScale=Object(l.scaleTime)().domain(r).range([0,n],0)}else t.numericCategories?t.xScale=this.numericCategoriesScale():t.xScale=Object(l.scaleBand)().domain(Object(o.range)(0,i.length)).range([0,n],0);return t.xScale}},{key:"createCategoryLabels",value:function(){var t=this.runtime,e=t.categoryLayout,n=t.numericCategories,i=y.Bottom.createLabels(this,e);return n&&this.afterNumericCategories(i),i}},{key:"createCategoryLabelsEmpty",value:function(){return{renderData:[],height:0,layout:this.runtime.sheet.categories.layout,ticks:null,filterMetrics:{domainIndex:[]}}}},{key:"numericCategoriesScale",value:function(){var t=this.runtime,e=t.xAxisOptions,n=t.sheet,i=t.graphWidth,r=Object(y.ScaleHelper)();return r.type("numeric").data(n.categories.data).domainLimit([e.minLimit,e.maxLimit]).range([0,i]).rangePointRadius(n.graphOptions.dataPointRadius),r()}},{key:"afterNumericCategories",value:function(t){var e=this.runtime,n=t.renderData.length,i=t.ticks.length,r=i-1;i>n&&(e.hiddenLines=[r])}},{key:"showDataPoints",value:function(){return!0===this.options.series.dataPoints}},{key:"showAsPercent",value:function(){return r.a.get(this,"options.series.percent")}},{key:"lastOrdinalTickExceeds",value:function(t,e,n,i){var r=e.length-1,a=e[r];if(-1!==r)return i.bandwidth()/2+a+n.width/2>t}},{key:"emptySheetData",value:function(){return r.a.merge({},F(V(z.prototype),"emptySheetData",this).call(this),{series:[{title:"",type:"line",axisIndex:0}],axis:[{title:"",ticks:!0,tickInterval:10},{title:"",ticks:!0,tickInterval:10}],graphOptions:{line:{showValues:!1},dataPointRadius:5}})}},{key:"defaults",value:function(){return r.a.merge({},F(V(z.prototype),"defaults",this).call(this),{series:{dataPoints:!0},animation:{duration:800}})}},{key:"prepareSheetData",value:function(t,e){var n,i,a,o=this.emptySheetData().series[0].type,l=t.categories,s=l.data,c=l.styles,u=l.colors,f=!!l.numeric,g=this.runtime.xAxisTimeBased,p=t.series,y=[],v=0,x=e===this.sheetIndex;x&&(a=Object(b.createLegendData)(this));var O=g?Object(d.createTimeFormat)(null==t?void 0:null===(n=t.axis)||void 0===n?void 0:null===(i=n[0])||void 0===i?void 0:i.timeFormat):m.identity;return this.runtime.errorMargin=p.some((function(t){return"line-area"===t.type})),p.forEach((function(t,e){var n=t.type||o,i=r.a.get(t,"index",e),l="line-area"===n;if(!x||a({color:Object(m.getColor)(i,u),title:Object(m.replaceBlank)(t.title),groupId:e}).active){var d={type:n,data:s.map((function(n,i){var r=i;g?r=n:f&&(r=Object(m.replaceBlank)(Number(n),0));var a={x:r,y:null,yLabel:Object(m.replaceBlank)(t.rawData[i]),xLabel:Object(m.replaceBlank)(O(n)),groupLabel:Object(m.replaceBlank)(t.title),link:t.links?t.links[i]:null,titleLink:t.titleLink,seriesIdx:e};return t.data&&(a.y=Object(m.replaceBlank)(t.data[i],null)),l&&function(t,e,n){var i=e.rawData&&e.rawData[n],r=e.data&&e.data[n];t.y=Object(m.replaceBlank)(r&&r[0],null),t.y0=Object(m.replaceBlank)(r&&r[1],null),t.y1=Object(m.replaceBlank)(r&&r[2],null),t.yRaw=Object(m.replaceBlank)(i&&i[0]),t.y0Raw=Object(m.replaceBlank)(i&&i[1]),t.y1Raw=Object(m.replaceBlank)(i&&i[2]),t.yLabel=Object(m.replaceBlank)(e.dataLabels&&e.dataLabels[0]),t.y0Label=Object(m.replaceBlank)(e.dataLabels&&e.dataLabels[1]),t.y1Label=Object(m.replaceBlank)(e.dataLabels&&e.dataLabels[2])}(a,t,i),a})),colors:[Object(m.getColor)(i,u)],interpolation:q[t.interpolation]||h.curveLinear,groupId:e,style:Object(m.getCategoryStyle)(i,c,{strokeWidth:2})};l&&(d.type="line",y.splice(v,0,r.a.extend({},d,{type:"area"})),v++),y.push(d)}})),y}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach((function(e,n){var i=function(e){return t[e]||t[0]}(n+1);i.categories&&r.a.merge(e.categories,i.categories),i.grid&&r.a.merge(e.grid,i.grid),i.legend&&r.a.merge(e.legend,i.legend),i.axis&&i.axis.length&&r.a.merge(e.axis,i.axis),i.tooltip&&(e.tooltip=e.tooltip||{},r.a.merge(e.tooltip,i.tooltip)),i.labels&&(e.labels=e.labels||{},r.a.merge(e.labels,i.labels)),r.a.merge(e.graphOptions,i.graphOptions),e.series.forEach((function(t){r.a.merge(t,i.series&&i.series[0]||{})})),i.style&&(e.style=i.style)}))}}])&&W(e.prototype,n),i&&W(e,i),z}(u.default)},MK1G:function(t,e,n){"use strict";n.r(e),n.d(e,"Trendline",(function(){return s}));var i=n("30U6"),r=n("ziQ1"),a=n("/TIM"),o=n("8d86"),l=n("3y/1");function s(){var t,e,n,s,c,h=function(t){t.each((function(){var t=Object(a.select)(this);t.selectAll(".igc-graph-trendline").remove();var e=t.selectAll(".igc-graph-trendline").data([0]);if((e=e.enter().append("g").attr("class","igc-graph ".concat(".igc-graph-trendline".slice(1))).merge(e)).attr("clip-path",c?"url(".concat(Object(l.absoluteUrl)(c),")"):null),p.length){var n=e.append("path"),i=this.__chart__=d.copy(),r=this.__chart__=g.copy();i.bandwidth&&(O=i.bandwidth()/2);var o=u();n.attr("stroke",y).attr("fill","none").attr("d","M".concat(i(o[0].x)+O,",").concat(r(o[0].yhat),"L").concat(i(o[1].x)+O,",").concat(r(o[1].yhat)))}}))},u=function(){var t=x.numericCategories,e=x.type,n=[],i=0,r=0;if("Scatter"===e)p.forEach((function(t){n=n.concat(t.data)})),n=n.sort((function(t,e){return e.x-t.x}));else for(var a=function(){var e=0,n=0,a=0;return p.forEach((function(t){var i=t.data[r];i&&(a=i.x,e+=null===i.y?0:i.y,n++)})),r++,0!==n&&{x:t?a:i++,y:e/n}},o=a();o;)n.push(o),o=a();return f(n)},f=function(t){for(var e=x.numericCategories,n=t.length,i=e?0:1,r=0,a=0,o=0;o<n;o++){var l=t[o];r+=l.x+i,a+=l.y}for(var s=r/n,c=a/n,h=0,u=0,f=0;f<n;f++){var d=t[f],g=d.x-s;h+=g*(d.y-c),u+=g*g}var p=h/u,m=c-p*s;function y(e){var n=t[e];n.yhat=m+n.x*p}return y(0),y(n-1),[t[0],t[n-1]]},d=Object(r.scaleLinear)(),g=Object(r.scaleLinear)(),p=[],m=o.curveLinear,y=l.schemeCategory10[0],v=Object(i.dispatch)("animationEnd"),b=!0,x={enabled:!1},O=0,w={scaleX:function(t){return arguments.length?(d=t,h):d},scaleY:function(t){return arguments.length?(g=t,h):g},data:function(t){return arguments.length?(p=t,h):p},interpolate:function(t){return arguments.length?(m=t,h):m},color:function(t){return arguments.length?(y=t,h):y},groupId:function(t){return arguments.length?(e=t,h):e},chartId:function(e){return arguments.length?(t=e,h):t},dispatch:function(){return v},legend:function(t){return arguments.length?(n=t,h):n},filterFn:function(t){return arguments.length?(s=t,h):s},animate:function(t){return arguments.length?(b=t,h):b},clipPathUrl:function(t){return arguments.length?(c=t,h):c},dataPointOptions:function(t){return arguments.length?(x=t,h):x},cleanup:function(t){return t.selectAll(".igc-graph-trendline").remove()}};return Object.assign(h,w),h}},pQx5:function(t,e,n){"use strict";n.r(e),n.d(e,"getAllGraphs",(function(){return s})),n.d(e,"createGetDomainAbsolute",(function(){return c})),n.d(e,"createGetDomain",(function(){return h})),n.d(e,"getGraphsDomainByProperty",(function(){return u}));var i=n("LvDl"),r=n.n(i),a=n("vBe5"),o=n("ziQ1"),l=n("pzpO");function s(t){for(var e=t.options.sheets,n=e.length,i=[],a=0;a<n;a++){var o=e[a],l=r.a.merge({},t.emptySheetData(),o);i.push(t.prepareSheetData(l,a))}return i}function c(t){return function(e){var n;return e.forEach((function(e,i){var r=t(e);0===i?n=r.slice(0):(n[0]=Math.min(r[0],n[0]),n[1]=Math.max(r[1],n[1]))})),n}}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",e=function(e){return e[t]};return function(t){var n=[Object(a.min)(t,(function(t){return Object(a.min)(t.data,e)})),Object(a.max)(t,(function(t){return Object(a.max)(t.data,e)}))];return Object(l.ensureZeroEqual)(n),Object(l.ensureZero)(n),Object(o.scaleLinear)().domain(n).nice(10).domain()}}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y",n=[].concat(e),i=[Object(a.min)(t,(function(t){return Object(a.min)(t.data,(function(t){return Object(a.min)(n.map((function(e){return t[e]})))}))})),Object(a.max)(t,(function(t){return Object(a.max)(t.data,(function(t){return Object(a.max)(n.map((function(e){return t[e]})))}))}))];return Object(l.ensureZeroEqual)(i),i}},rTau:function(t,e,n){"use strict";n.r(e),n.d(e,"Area",(function(){return u}));var i=n("/TIM"),r=n("30U6"),a=n("ziQ1"),o=n("+3eq"),l=n("8d86"),s=n("XKI8"),c=n("3y/1"),h=n("v4xw");function u(){var t,e,n,u,f=function(e){e.each((function(){if(v.length){var e=Object(i.select)(this),r=this.__chart__=m.copy(),a=this.__chart__=y.copy(),o=0;r.bandwidth&&(o=r.bandwidth()/2),u&&(v=v.filter(u));var s=e.selectAll("path").data([v[0]]);s=s.enter().append("path").merge(s);var c=Object(l.area)().defined(M).x((function(t){return r(t.x)+o})).y0((function(t){return a(t.y0)})).y1(C(a)).curve(b);s.attr("d",c(v)).style("fill",A(x[0])),d(s),g(s),O.call("animationEnd"),n&&n.addListener({id:t,dispatch:O})}}))},d=function(n){O.on("highlightStart",(function(i,r){e===i&&t===r&&n.transition().duration(150).ease(o.easeLinear).style("fill",T(x[0]))})),O.on("highlightEnd",(function(i,r){e===i&&t===r&&n.transition().duration(150).ease(o.easeLinear).style("fill",A(x[0]))}))},g=function(t){t.classed("igc-chart-link",(function(t){return!(!t||!t.link&&!t.titleLink)})).on("mouseover",(function(){E().interaction("show")})).on("mousemove",(function(t,e){Object(i.select)(this).transition().duration(150).ease(o.easeLinear).style("fill",T(x[0])),function(t,e){var n=Object(c.getMousePosition)(e),i=x[0],r=L(t),a=S(t);E().setText(r).setValue(a).setPosition(n,i)}(e,t)})).on("mouseout",(function(){Object(i.select)(this).transition().duration(150).ease(o.easeLinear).style("fill",A(x[0])),E().hide()})).on("click",(function(t,e){var n=e.link||e.titleLink;O.call("openUrl",null,n)}))},p=h.Colors.rgbStrToRgbaStr,m=Object(a.scaleLinear)(),y=Object(a.scaleLinear)(),v=[],b=l.curveLinear,x=c.schemeCategory10,O=Object(r.dispatch)("highlightStart","highlightEnd","animationEnd","openUrl"),w={x:0,y:0},k={width:0,height:0},j=!0,L=function(t){return t.groupLabel},S=function(){return""},E=s.getTooltip,C=function(t){return function(e){return t(e.y0+e.y)}},T=function(t){return p(t,1)},A=function(t){return p(t,.7)},M=function(t){return null!==t.y&&null!==t.x},I={scaleX:function(t){return arguments.length?(m=t,f):m},scaleY:function(t){return arguments.length?(y=t,f):y},data:function(t){return arguments.length?(v=t,f):v},interpolate:function(t){return arguments.length?(b=t,f):b},colors:function(t){return arguments.length?(x=t,f):x},groupId:function(t){return arguments.length?(e=t,f):e},chartId:function(e){return arguments.length?(t=e,f):t},dispatch:function(){return O},legend:function(t){return arguments.length?(n=t,f):n},filterFn:function(t){return arguments.length?(u=t,f):u},defined:function(t){return arguments.length?(M=t,f):M},bounds:function(t){return arguments.length?(k.width="number"==typeof t.width?t.width:k.width,k.height="number"==typeof t.height?t.height:k.height,f):k},offset:function(t){return arguments.length?(w.left="number"==typeof t.left?t.left:w.left,w.top="number"==typeof t.top?t.top:w.top,f):w},animate:function(t){return arguments.length?(j=t,f):j},tooltip:function(t){return arguments.length?(E=t,f):E},tooltipText:function(t){return arguments.length?(L=t,f):L},tooltipValue:function(t){return arguments.length?(S=t,f):S},y1:function(t){return arguments.length?(C=t,f):C},highlightStartColor:function(t){return arguments.length?(T=t,f):T},highlightEndColor:function(t){return arguments.length?(A=t,f):A}};return Object.assign(f,I),f}},"tU/c":function(t,e,n){var i,r,a;r=[],void 0===(a="function"==typeof(i=function(){return function(){function t(e){var n,i;if(this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this.maxElements=e.maxElements,null==this.width||null==this.height)throw new Error("Missing quadtree dimensions.");if(null==this.x&&(this.x=0),null==this.y&&(this.y=0),null==this.maxElements&&(this.maxElements=1),this.contents=[],this.oversized=[],this.size=0,this.width<1||this.height<1)throw new Error("Dimensions must be positive integers.");if(!Number.isInteger(this.x)||!Number.isInteger(this.y))throw new Error("Coordinates must be integers");if(this.maxElements<1)throw new Error("The maximum number of elements before a split must be a positive integer.");for(n in i=this,this.children={NW:{create:function(){return new t({x:i.x,y:i.y,width:Math.max(Math.floor(i.width/2),1),height:Math.max(Math.floor(i.height/2),1),maxElements:i.maxElements})},tree:null},NE:{create:function(){return new t({x:i.x+Math.max(Math.floor(i.width/2),1),y:i.y,width:Math.ceil(i.width/2),height:Math.max(Math.floor(i.height/2),1),maxElements:i.maxElements})},tree:null},SW:{create:function(){return new t({x:i.x,y:i.y+Math.max(Math.floor(i.height/2),1),width:Math.max(Math.floor(i.width/2),1),height:Math.ceil(i.height/2),maxElements:i.maxElements})},tree:null},SE:{create:function(){return new t({x:i.x+Math.max(Math.floor(i.width/2),1),y:i.y+Math.max(Math.floor(i.height/2),1),width:Math.ceil(i.width/2),height:Math.ceil(i.height/2),maxElements:i.maxElements})},tree:null}},this.children)this.children[n].get=function(){return null!=this.tree?this.tree:(this.tree=this.create(),this.tree)}}var e,n,i,r,a,o,l,s;return r=function(t){var e,n;return{x:Math.floor((null!=(e=t.width)?e:1)/2)+t.x,y:Math.floor((null!=(n=t.height)?n:1)/2)+t.y}},e=function(t,e){var n,i,r,a;return!(t.x>=e.x+(null!=(n=e.width)?n:1)||t.x+(null!=(i=t.width)?i:1)<=e.x||t.y>=e.y+(null!=(r=e.height)?r:1)||t.y+(null!=(a=t.height)?a:1)<=e.y)},n=function(t,e){var n;return n=r(e),t.x<n.x?t.y<n.y?"NW":"SW":t.y<n.y?"NE":"SE"},s=function(t){if("object"!=typeof t)throw new Error("Element must be an Object.");if(null==t.x||null==t.y)throw new Error("Coordinates properties are missing.");if((null!=t?t.width:void 0)<0||(null!=t?t.height:void 0)<0)throw new Error("Width and height must be positive integers.")},o=function(t){var e,n,i,r;return n=Math.max(Math.floor(t.width/2),1),i=Math.ceil(t.width/2),r=Math.max(Math.floor(t.height/2),1),e=Math.ceil(t.height/2),{NW:{x:t.x,y:t.y,width:n,height:r},NE:{x:t.x+n,y:t.y,width:i,height:r},SW:{x:t.x,y:t.y+r,width:n,height:e},SE:{x:t.x+n,y:t.y+r,width:i,height:e}}},i=function(t,n){var i,r,a,l;for(r in l=[],a=o(n))i=a[r],e(t,i)&&l.push(r);return l},a=function(t,e){var n;return(n=function(n){return t["_"+n]=t[n],Object.defineProperty(t,n,{set:function(t){return e.remove(this,!0),this["_"+n]=t,e.push(this)},get:function(){return this["_"+n]},configurable:!0})})("x"),n("y"),n("width"),n("height")},l=function(t){var e;return(e=function(e){if(null!=t["_"+e])return delete t[e],t[e]=t["_"+e],delete t["_"+e]})("x"),e("y"),e("width"),e("height")},t.prototype.clear=function(){var t,e;for(t in this.contents=[],this.oversized=[],this.size=0,e=[],this.children)e.push(this.children[t].tree=null);return e},t.prototype.push=function(t,e){return this.pushAll([t],e)},t.prototype.pushAll=function(t,e){var n,r,o,l,c,h,u,f,d,g,p,m,y,v,b,x,O,w,k,j;for(p=0,v=t.length;p<v;p++)g=t[p],s(g),e&&a(g,this);for(u=[{tree:this,elements:t}];u.length>0;){for(j=(O=u.shift()).tree,f={NW:null,NE:null,SW:null,SE:null},m=0,b=(h=O.elements).length;m<b;m++)if(c=h[m],j.size++,1!==(d=i(c,j)).length||1===j.width||1===j.height)j.oversized.push(c);else if(j.size-j.oversized.length<=j.maxElements)j.contents.push(c);else{for(l=d[0],k=j.children[l],null==f[l]&&(f[l]={tree:k.get(),elements:[]}),f[l].elements.push(c),y=0,x=(w=j.contents).length;y<x;y++)r=w[y],null==f[o=i(r,j)[0]]&&(f[o]={tree:j.children[o].get(),elements:[]}),f[o].elements.push(r);j.contents=[]}for(l in f)null!=(n=f[l])&&u.push(n)}return this},t.prototype.remove=function(t,e){var i,r;return s(t),(i=this.oversized.indexOf(t))>-1?(this.oversized.splice(i,1),this.size--,e||l(t),!0):(i=this.contents.indexOf(t))>-1?(this.contents.splice(i,1),this.size--,e||l(t),!0):!(null==(r=this.children[n(t,this)]).tree||!r.tree.remove(t,e)||(this.size--,0===r.tree.size&&(r.tree=null),0))},t.prototype.colliding=function(t,n){var r,a,o,l,c,h,u,f,d,g,p,m,y,v;for(null==n&&(n=e),s(t),c=[],o=[this];o.length>0;){for(h=0,d=(m=(v=o.shift()).oversized).length;h<d;h++)(a=m[h])!==t&&n(t,a)&&c.push(a);for(u=0,g=(y=v.contents).length;u<g;u++)(a=y[u])!==t&&n(t,a)&&c.push(a);for(0===(l=i(t,v)).length&&(l=[],t.x>=v.x+v.width&&l.push("NE"),t.y>=v.y+v.height&&l.push("SW"),l.length>0&&(1===l.length?l.push("SE"):l=["SE"])),f=0,p=l.length;f<p;f++)r=l[f],null!=v.children[r].tree&&o.push(v.children[r].tree)}return c},t.prototype.onCollision=function(t,n,r){var a,o,l,c,h,u,f,d,g,p,m,y,v;for(null==r&&(r=e),s(t),l=[this];l.length>0;){for(h=0,d=(m=(v=l.shift()).oversized).length;h<d;h++)(o=m[h])!==t&&r(t,o)&&n(o);for(u=0,g=(y=v.contents).length;u<g;u++)(o=y[u])!==t&&r(t,o)&&n(o);for(0===(c=i(t,v)).length&&(c=[],t.x>=v.x+v.width&&c.push("NE"),t.y>=v.y+v.height&&c.push("SW"),c.length>0&&(1===c.length?c.push("SE"):c=["SE"])),f=0,p=c.length;f<p;f++)a=c[f],null!=v.children[a].tree&&l.push(v.children[a].tree)}return null},t.prototype.get=function(t){return this.where(t)},t.prototype.where=function(t){var e,i,r,a,o,l,c,h,u,f,d,g,p;if("object"==typeof t&&(null==t.x||null==t.y))return this.find((function(e){var n,i;for(i in n=!0,t)t[i]!==e[i]&&(n=!1);return n}));for(s(t),a=[],r=[this];r.length>0;){for(o=0,h=(f=(p=r.shift()).oversized).length;o<h;o++){for(c in i=f[o],e=!0,t)t[c]!==i[c]&&(e=!1);e&&a.push(i)}for(l=0,u=(d=p.contents).length;l<u;l++){for(c in i=d[l],e=!0,t)t[c]!==i[c]&&(e=!1);e&&a.push(i)}null!=(g=p.children[n(t,p)]).tree&&r.push(g.tree)}return a},t.prototype.each=function(t){var e,n,i,r,a,o,l,s,c,h;for(n=[this];n.length>0;){for(r=0,o=(s=(h=n.shift()).oversized).length;r<o;r++)i=s[r],"function"==typeof t&&t(i);for(a=0,l=(c=h.contents).length;a<l;a++)i=c[a],"function"==typeof t&&t(i);for(e in h.children)null!=h.children[e].tree&&n.push(h.children[e].tree)}return this},t.prototype.find=function(t){var e,n,i,r,a,o,l,s,c,h,u;for(n=[this],r=[];n.length>0;){for(a=0,l=(c=(u=n.shift()).oversized).length;a<l;a++)i=c[a],("function"==typeof t?t(i):void 0)&&r.push(i);for(o=0,s=(h=u.contents).length;o<s;o++)i=h[o],("function"==typeof t?t(i):void 0)&&r.push(i);for(e in u.children)null!=u.children[e].tree&&n.push(u.children[e].tree)}return r},t.prototype.filter=function(e){var n;return(n=function(i){var r,a,o,l,s,c,h,u,f,d,g;for(r in(a=new t({x:i.x,y:i.y,width:i.width,height:i.height,maxElements:i.maxElements})).size=0,i.children)null!=i.children[r].tree&&(a.children[r].tree=n(i.children[r].tree),a.size+=null!=(u=null!=(f=a.children[r].tree)?f.size:void 0)?u:0);for(l=0,c=(d=i.oversized).length;l<c;l++)o=d[l],(null==e||("function"==typeof e?e(o):void 0))&&a.oversized.push(o);for(s=0,h=(g=i.contents).length;s<h;s++)o=g[s],(null==e||("function"==typeof e?e(o):void 0))&&a.contents.push(o);return a.size+=a.oversized.length+a.contents.length,0===a.size?null:a})(this)},t.prototype.reject=function(t){return this.filter((function(e){return!("function"==typeof t?t(e):void 0)}))},t.prototype.visit=function(t){var e,n,i;for(n=[this];n.length>0;)for(e in i=n.shift(),t.bind(i)(),i.children)null!=i.children[e].tree&&n.push(i.children[e].tree);return this},t.prototype.pretty=function(){var t,e,n,i,r,a,o;for(a="",n=function(t){var e,n,i;for(i="",e=n=t;n<=0?e<0:e>0;n<=0?++e:--e)i+="   ";return i},e=[{label:"ROOT",tree:this,level:0}];e.length>0;){for(t in a+=(i=n((o=e.shift()).level))+"| "+o.label+"\n"+i+"| ------------\n",o.tree.oversized.length>0&&(a+=i+"| * Oversized elements *\n"+i+"|   "+o.tree.oversized+"\n"),o.tree.contents.length>0&&(a+=i+"| * Leaf content *\n"+i+"|   "+o.tree.contents+"\n"),r=!1,o.tree.children)null!=o.tree.children[t].tree&&(r=!0,e.unshift({label:t,tree:o.tree.children[t].tree,level:o.level+1}));r&&(a+=i+"└──┐\n")}return a},t}()})?i.apply(e,r):i)||(t.exports=a)}}]);