(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-bar"],{"4VkV":function(t,e,i){"use strict";i.r(e),i.d(e,"Bar",(function(){return R}));var a=i("LvDl"),r=i.n(a),n=i("ziQ1"),o=i("vBe5"),s=i("+3eq"),l=i("b/Qv"),c=i("pQx5"),u=i("LWvD"),h=i("v3rV"),d=i("t982"),g=i("pzpO"),f=i("x+1q"),p=i("ejCe"),m=i("VDPv"),b=i("BGfC"),y=i("HTVg"),x=i("3y/1"),v=i("VLlq"),O=i("2YLo"),j=i("XKI8"),w=i("pYxU"),k=i("x5YE"),D=i("D3ez"),S=i("XRHE");function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function V(t,e,i){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(a){var r=Object.getOwnPropertyDescriptor(a,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var H=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=C(t);if(e){var r=C(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return B(this,i)}}Object(D.putGraph)("bar",S.Bar);var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(D,t);var e,i,a,l=A(D);function D(){return L(this,D),l.apply(this,arguments)}return e=D,a=[{key:"getClassName",value:function(){return"Bar"}}],(i=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,i=this.root,a=new O.Renderer({instance:this}),l=this.getSheetData(),j=Object(f.default)(l),D=this.runtime={width:e.width,height:e.height,components:{},metrics:{},layout:{},sheet:l,formatter:j,inanimate:Object(h.inanimated)(e)},S=D.layout,L=e.fixedHeight,T=l.axis[0],V=l.axis[1],C="absolute"===e.series.data,B=C?Object(c.getAllGraphs)(this):[this.prepareSheetData(l)],G=C?B[this.sheetIndex]:B[0],H=["PopulationPyramid","Tornado"].includes(this.getClassName());if(this.createTickIntervals(),Object(v.default)(this,{width:D.width}),Object(w.DownloadButton)(this,e.style.legend),H&&Object(k.legendHelper)({instance:this,attachEvents:function(){}}),!u.default.prototype.sheetsNotFound.call(this)){var A,R=0,z=1,E=0,I=0,P=D.layout.marginTitle={left:0,right:0,top:0,bottom:0},N=D.layout.marginAxis={left:0,right:0},Z={maxLeftCategoryWidth:0,maxLeftCategoryHeight:0},_=S.leftLabelPadding={top:0,right:10,bottom:0,left:0},M=this.createAnimationCounter(G.length+2);l.categories.categoryHeight&&(A=Number(l.categories.categoryHeight)),G[0].data=G[0].data.filter((function(t){return null!==t.x}));var W=G[0].data.map((function(t){return t.y}));if(W.length<1)return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();var F=e.style.axis.x,Y=e.style.axis.y;this.titleLayout(["x","y"]);var Q={width:0,height:0};T.ticks&&((Q=Object(x.getTextDimensions)(j.axis.x.tickSample(),F.tick)).height=Math.min(Q.height,30));var q=D.width-I-P.left-z-P.right,X=D.height-R-P.top-E-P.bottom,J=Object(o.range)(0,W.length),U=Object(n.scaleBand)().domain(J).padding(.1);if(!L&&A){var K=10;for(U.range([0,K-(Q.height+5)]);U.bandwidth()-A<0;)K+=1,U.range([0,K-(Q.height+5)]);K-=1,D.height=K+R+P.top+E+P.bottom,X=K}U.range([0,X-(Q.height+5)]);var $=q-N.left-N.right,tt=Object(c.createGetDomain)("x"),et=D.xDomain=Object(c.createGetDomainAbsolute)(tt)(B);l.grid.symmetrical&&(et=Object(g.adjustSymmetricalDomain)(et));var it=Object(g.limit)(T,et);V.ticks||(_.right=0);var at=_.right;et[0]<0&&(at*=2);var rt=Object(x.getTextDimensions)(W,Y.tick);Z.maxLeftCategoryWidth=.35*$-_.right,Z.maxLeftCategoryHeight=U.bandwidth()+.1*U.bandwidth()/.9-_.top-_.bottom;var nt,ot=D.metrics.leftCategoryWidth=0,st=!1;V.ticks&&(rt.width<=Z.maxLeftCategoryHeight?ot=rt.height:((st=Z.maxLeftCategoryHeight<rt.height)&&(nt=Object(p.filterOverlappingCategories)(U,rt,Object(x.getAllTextDimensions)(W,Y.tick))),ot=y.Measure.wrappedText(Z.maxLeftCategoryWidth,nt?nt.map((function(t){return W[t]})):W,Y.tick,rt.height).width,Math.ceil(ot)<=Z.maxLeftCategoryWidth&&(ot=Math.ceil(ot)))),D.metrics.leftCategoryWidth=ot;var lt=Object(p.Left)().scale(U).data(W).style(Y.tick).bounds({width:ot+_.right,height:X}).offset({left:-(ot+at),top:0}).padding(_);st&&lt.indexFilter(nt),$-=ot+at;var ct=D.xScale=Object(n.scaleLinear)().range([0,$]).clamp(it);ct.domain(et);var ut=r.a.get(l,"graphOptions.bar",{}),ht=ut.showValues;if(ut.valuesOutside&&ht&&(Object(d.adjustScaleToOutsideValues)({scale:ct,graphs:r.a.flatten(B),axisOptions:T,getText:function(e){return t.runtime.formatter.labels.format(e.xLabel)},getTextMetrics:function(e){return Object(x.getAllTextDimensions)(e,t.options.style.graph.item.value)},getValue:function(t){return t.x},getTextSize:function(t){return t.width},adjust:function(t,e){return t-e},barSize:function(t,e){return t>0?e(t)-e(0):e(0)-e(t)}}),l.grid.symmetrical)){var dt=Object(g.adjustSymmetricalDomain)(ct.domain());ct.domain(dt)}var gt=Object(b.GridLines)().scale(U).orient(b.GridLines.ORIENTS.horizontal).tickSize(-q).highlightZero(!H&&l.grid.horizontalZeroHighlight).style(e.style.grid);l.grid.horizontal||gt.tickValues([]);var ft=D.components.xGridLines=Object(b.GridLines)().scale(ct).orient(b.GridLines.ORIENTS.vertical).tickSize(X).highlightZero(!H&&l.grid.verticalZeroHighlight).style(e.style.grid),pt=D.components.xAxisBottomText=Object(m.default)().scale(ct).orient("bottom").style(F.tick).textOffset(-5).offset({top:X-Q.height/4});S.igc={x:I+P.left+N.left+(ot+at),y:R+P.top},this.xTicksSetup(),this.gridSetupVertical(),this.titleComponents(["x","y"]);var mt=D.components,bt=mt.bottomTitle,yt=mt.leftTitle;bt.orientBounds({y2:D.height-E-5,y1:R,x2:D.width,x1:I+P.left+N.left+ot+lt.padding().right}),yt.orientBounds({x2:D.width,x1:I+4,y2:R+P.top+X,y1:R+P.top}),bt.dispatch().on("animationEnd",M),D.inanimate&&Object(h.removeAnimation)([yt,bt,ft,gt,pt,lt]),this.containerSetup(),a.add((function(){i.attr("width",D.width).attr("height",D.height),i.transition().ease(s[t.options.animation.ease]).duration(t.options.animation.duration).on("start",(function(){t.events.call("startAnimation")})).on("end",(function(){M()})),i.select(".igc").attr("transform","translate(".concat(S.igc.x,", ").concat(S.igc.y,")"))})),a.addGrid(gt,"igc-ygrid"),a.addGrid(ft,"igc-xgrid"),a.addGraph([{graphs:G,x:ct,y:U,textStyle:e.style.graph.item.value,transitionDuration:e.animation.duration,animationEnd:M}]),V.ticks?(a.addGrid(lt,"igc-y-axis-text"),l.grid.vertical?a.add((function(){t.createBorderLineFunc(i.select(".igc .igc-grid .igc-y-axis-text"),lt)()})):a.addGrid((function(t){t.select(".igc-y-axis-border").remove()}),"igc-y-axis-text")):a.addGrid((function(t){t.selectAll(".tick").remove(),t.select(".igc-y-axis-border").remove()}),"igc-y-axis-text"),a.addGrid(pt,"igc-x-axis-text"),a.addTitle(yt,"igc-title-left"),a.addTitle(bt,"igc-title-bottom"),a.start()}}},{key:"graphInstanceSetup",value:function(t,e,i,a,r){var n=this.runtime.formatter,o=e.data.length,s=Object(h.removeDelay)(this,(function(t,e){return e/o*500}));t.scaleX(a.x).scaleY(a.y).data(e.data).groupId(r).textStyle(a.textStyle).showValues(e.showValues).valuesOutside(e.valuesOutside).tooltip(Object(j.createStyledTooltip)(this)).tooltipText((function(t){return t.yLabel})).tooltipValue((function(t){return n.tooltip.x.format(t.xLabel)})).numberFormat(n.labels).baseValue(e.baseValue).transitionDelay(s).transitionDuration(a.transitionDuration).dispatch().on("animationEnd",a.animationEnd)}},{key:"defaults",value:function(){return r.a.merge({},V(C(D.prototype),"defaults",this).call(this),{series:{data:"separate"}})}},{key:"emptySheetData",value:function(){return r.a.merge({},V(C(D.prototype),"emptySheetData",this).call(this),{series:[{title:"",type:"bar"}],graphOptions:{bar:{showValues:!0,valuesOutside:!1}},axis:[{title:"",ticks:!0,tickInterval:10},{title:"",ticks:!0}],grid:{vertical:!0,verticalZeroHighlight:!0,horizontal:!1}})}},{key:"prepareSheetData",value:function(t){var e=t.categories.colors,i=r.a.get(t,"series[0]"),a=i.type,n=r.a.get(t,"graphOptions.bar",{}),o=n.showValues,s=n.valuesOutside;return[{type:a,data:i.data.map((function(a,n){return{x:Object(x.replaceBlank)(a,null),y:Object(x.replaceBlank)(t.categories.data[n]),xLabel:Object(x.replaceBlank)(i.rawData[n]),color:Object(x.getColor)(n,e),link:r.a.get(i,"links[".concat(n,"]"),null)}})),showValues:o,valuesOutside:s}]}}])&&T(e.prototype,i),a&&T(e,a),D}(l.default)},m1zM:function(t,e,i){"use strict";i.r(e);var a=i("LvDl"),r=i.n(a),n=i("4VkV"),o=i("6jAQ"),s=i("Omln"),l=i("YUA+"),c=i("wZn9"),u=i("s9+M"),h=Object.create(o.default);e.default=h,function(t){this.instanceClass=n.Bar,this.setupChartOptions=function(){t.setupChartOptions.call(this);var e=this.custom;this.chartOptions.series.data=!0===e.absoluteDistribution?"absolute":"separate"},this.setupChartSheetOptionsItem=function(t){var e={categories:{colors:r.a.merge([],this.themeColors,t.colors||this.colors)},graphOptions:{bar:{showValues:!!t.showInLineValues,valuesOutside:!!t.showInLineValuesOutside}},grid:{vertical:!0,horizontal:!1},axis:[{},{}]},i=e.axis[0];return t.enableHeight||(e.categories.categoryHeight=t.categoryHeight||this.defaultCategoryHeight),i.title=t.xlabel||"",e.axis[1].title=t.ylabel||"","number"==typeof t.xmin&&(i.minLimit=t.xmin),"number"==typeof t.xmax&&(i.maxLimit=t.xmax),e.grid.vertical=Object(s.getGridSettingsVertical)(t),e.grid.verticalZero=Object(l.getZeroBaselineVertical)(t),Object(c.assignAxisTickInterval)(e,t),Object(c.assignAxisTicks)(e,t),Object(u.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"x",path:""},{id:"x1",path:"axis.x"}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(u.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"x",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),e}}.call(h,o.default)}}]);