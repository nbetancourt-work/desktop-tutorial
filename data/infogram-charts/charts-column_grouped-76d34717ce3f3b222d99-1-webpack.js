(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-column_grouped"],{Gts9:function(t,e,a){"use strict";a.r(e),a.d(e,"ColumnGrouped",(function(){return M}));var i=a("LvDl"),r=a.n(i),n=a("vBe5"),o=a("ziQ1"),s=a("/TIM"),l=a("+3eq"),c=a("30U6"),u=a("LWvD"),h=a("pQx5"),d=a("5Hgy"),g=a("v3rV"),f=a("t982"),p=a("x+1q"),y=a("ejCe"),m=a("VDPv"),b=a("BGfC"),O=a("M51E"),v=a("3y/1"),x=a("aEr2"),j=a("pzpO"),S=a("2YLo"),w=a("x5YE"),L=a("VLlq"),C=a("SGek"),D=a("XKI8"),k=a("pYxU"),T=a("Fi9g"),I=a("eXr4");function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function G(t,e,a){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(a):r.value}})(t,e,a||t)}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i,r,n=[],o=!0,s=!1;try{for(a=a.call(t);!(o=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){s=!0,r=t}finally{try{o||null==a.return||a.return()}finally{if(s)throw r}}return n}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,i=z(t);if(e){var r=z(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return V(this,a)}}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(A,t);var e,a,i,d=P(A);function A(){return B(this,A),d.apply(this,arguments)}return e=A,i=[{key:"getClassName",value:function(){return"ColumnGrouped"}}],(a=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,a=this.root,i=new S.Renderer({instance:this}),c=this.getSheetData(),d=Object(p.default)(c),x=this.runtime={width:e.width,height:e.height,components:{},layout:{},inanimate:Object(g.inanimated)(e),sheet:c,formatter:d},T="absolute"===e.series.data,I=T?Object(h.getAllGraphs)(this):[this.prepareSheetData(c,this.sheetIndex)],A=T?I[this.sheetIndex]:I[0];B&&B.chartType("column"),this.createTickIntervals(),Object(L.default)(this,{width:e.width}),Object(k.DownloadButton)(this,e.style.legend);var B=Object(w.legendHelper)({instance:this});if(!(u.default.prototype.sheetsNotFound.call(this)||this.sheetsNotFound(A)||this.failSafeByHeight(40))){var E=x.margin=x.layout.margin={top:0,right:2,bottom:0,left:0},G=x.layout.marginTitle={left:0,right:0,top:0,bottom:0},z=x.layout.marginAxis={left:0,right:0},V=x.limits={maxCategoryWidth:0,maxCategoryHeight:10},H=x.bottomLabelPadding={top:6,right:2,bottom:4,left:2},R=e.style.axis,P=R.x,M=R.y,U=W(c.axis,2),F=U[0],Z=U[1];x.xAxisOptions=F,x.yAxisOptions=Z;var _=x.categoryData=this.getCategoryData(A),N=Object(w.legendFiltered)(this),Y=Object(h.createGetDomain)("y"),Q=x.yDomain=N?Y(A):Object(h.createGetDomainAbsolute)(Y)(I),q=Object(j.limit)(Z,Q),X=Q[0]<0,J=x.yScale=Object(o.scaleLinear)().domain(Q).clamp(q),K=c.categories.categoryWidth,$=K&&"string"==typeof K&&"%"===K[K.length-1];K=K?Math.round(parseFloat(c.categories.categoryWidth)):null,x.categoryLayout=c.categories.layout;var tt=this.createAnimationCounter(3),et=x.spacing={maxBeforeXAxisTick:50,beforeCategoryBorder:X?H.top:0,beforeBottomCategories:5},at=x.components.yAxisLeftText=Object(m.default)().scale(J).orient("left").style(M.tick),it=r.a.get(F,"title");this.titleLayout(["x","y"]);var rt=x.width-E.left-G.left-E.right-G.right,nt={width:0,height:0};if(Z.ticks){var ot=y.ScaleHelper.ticks(J,this.runtime.yTickInterval);nt=this.yTicksMetrics(ot),z.left=nt.width,E.top=nt.height}var st=x.height-E.top-G.top-E.bottom-G.bottom;V.maxCategoryHeight+=Math.floor(.27*st),x.graphWidth=rt-z.left-z.right;var lt=Object(n.range)(0,_.length),ct=1===lt.length,ut=ct?1:void 0,ht=x.xScale=Object(O.Ordinal)().domain(lt).rangeBandsPct([0,x.graphWidth],$?.01*K:ut),dt=!$&&K;dt&&(ht=x.xScale=Object(O.Ordinal)().domain(lt).rangeBandsFixed([0,x.graphWidth],K)),x.xScaleResize=dt?function(t,e){t.rangeBandsFixed(e,K)}:function(t,e){t.rangeBandsPct(e,$?.01*K:ut)};var gt={scaleType:dt?"fixed":"pct",only:ct};x.igcLeftOffset=E.left+G.left+z.left,V.maxCategoryWidth=ht.rangeBand()+ht.padding()-H.left-H.right,ct&&(V.maxCategoryWidth=x.graphWidth-H.left-H.right);var ft=this.createCategoryLabels();V.maxCategoryHeight=ft.height+H.top+H.bottom;var pt=_.length!==ft.renderData.length||!F.ticks;pt&&(ft.renderData=[],V.maxCategoryHeight=it?H.top:1);var yt=Object(y.Bottom)().style(P.tick).data(F.ticks?ft.renderData:[]).textAlign(ft.renderData.textAlign).bounds({height:V.maxCategoryHeight,y:st-V.maxCategoryHeight+et.beforeBottomCategories}),mt=x.graphHeight=st-V.maxCategoryHeight-et.beforeCategoryBorder;J.range([mt,0]);var bt=r.a.get(c,"graphOptions.column",{}),Ot=bt.showValues,vt=bt.valuesOutside;Ot&&vt&&Object(f.adjustScaleToOutsideValues)({scale:J,graphs:N?A:r.a.flatten(I),axisOptions:Z,getText:function(e){return t.runtime.formatter.labels.format(e.yLabel)},getTextMetrics:function(e){return Object(v.getAllTextDimensions)(e,t.options.style.graph.item.value)},getValue:function(t){return t.y},getTextSize:function(t){return t.height},adjust:function(t,e){return t+e},barSize:function(t,e){return t<0?e(t)-e(0):e(0)-e(t)}});var xt=x.components.yGridLines=Object(b.GridLines)().scale(J).orient(b.GridLines.ORIENTS.horizontal).tickSize(-rt).highlightZero(c.grid.horizontalZeroHighlight).style(e.style.grid).offset({left:-z.left}),jt=Object(b.GridLines)().scale(ht).orient(b.GridLines.ORIENTS.vertical).tickSize(mt).highlightZero(c.grid.verticalZeroHighlight).style(e.style.grid);c.grid.vertical||jt.tickValues([]),at.textOffset(-.25*nt.height).offset({left:-z.left}),this.yTicksSetup(),this.gridSetupHorizontal();var St=0;Z.ticks&&(St=at.getBorderingTick()-nt.height)>0&&(St=0),x.layout.firstTickOffset=St,this.titleComponents(["x","y"]);var wt=x.components,Lt=wt.bottomTitle,Ct=wt.leftTitle;Lt.dispatch().on("animationEnd",tt);var Dt={igc:{x:x.igcLeftOffset,y:E.top+G.top}};x.inanimate&&Object(g.removeAnimation)([Ct,Lt,jt,xt,at,yt]),this.containerSetup();var kt=a.select(".igc"),Tt=l[e.animation.ease],It=e.animation.duration;a.attr("width",x.width).attr("height",x.height),i.add((function(){a.transition().ease(Tt).duration(It).on("start",(function(){t.events.call("startAnimation")})).on("end",(function(){tt()})),kt.attr("transform","translate(".concat(Dt.igc.x,", ").concat(Dt.igc.y,")"))})),i.addGrid(at,"igc-y-axis-text"),i.addGrid(xt,"igc-ygrid"),i.addGrid(jt,"igc-xgrid"),i.addGrid(yt,"igc-x-axis-text"),i.addGraph([{graphs:A,x:ht,y:J,textStyle:e.style.graph.item.value,legend:B,tooltip:Object(D.createStyledTooltip)(this),transitionDuration:It,animationEnd:tt,groupOpts:gt}]),c.grid.horizontal&&F.ticks&&!pt?i.addGrid((function(t){t.each((function(){var t=Object(s.select)(this).selectAll(".igc-x-axis-border-line").data([0]),a=It;0===t.size()&&(a=0),(t=t.merge(t.enter().append("rect"))).attr("class","igc-x-axis-border-line").transition().ease(Tt).duration(a).attr("x",-z.left).attr("width",x.graphWidth+E.right+z.left).attr("y",mt+et.beforeCategoryBorder).attr("height",2).styles({fill:e.style.grid.color,stroke:"none","stroke-width":0})}))}),"igc-x-axis-border"):i.add((function(){a.select(".igc .igc-grid .igc-x-axis-border").remove()})),c.grid.horizontal&&c.grid.showSeparators?i.addGrid((function(t){t.each((function(){if(pt)Object(s.select)(this).selectAll(".igc-x-axis-separator").remove();else{var t=x.xScale,a=Object(O.getScalePositions)(t),i=a.slice(0),r=a[a.length-1],n=t.padding()/2,o=0,l=It;1===a.length?i.push(r+t.bandwidth()+2*n):(o=a[1]-(a[0]+t.bandwidth()),i.push(r+t.bandwidth()+o));var c=(o=t.padding())/2,u=Object(s.select)(this).selectAll(".igc-x-axis-separator").data(i);0===u.size()&&(l=0);var h="tilted"===ft.layout?2*et.beforeBottomCategories:V.maxCategoryHeight;u.exit().remove(),(u=u.enter().append("rect").attr("class","igc-x-axis-separator").merge(u)).attr("y",mt+et.beforeCategoryBorder).attr("x",(function(e){return Math.round(e-c-t.bandwidth()/2)})).attr("height",h).attr("width",1).style("opacity",C.eps).transition().ease(Tt).duration(l).style("opacity",1).styles({fill:e.style.grid.color,stroke:"none","stroke-width":0})}}))}),"igc-x-axis-separators"):i.add((function(){a.select(".igc .igc-grid .igc-x-axis-separators").remove()})),i.addTitle(Ct,"igc-title-left"),i.addTitle(Lt,"igc-title-bottom"),i.start()}}},{key:"graphInstanceSetup",value:function(t,e,a,i){var r=e.data.length,n=this.legendData,o=this.chartId,s=this.runtime.formatter,u=e.colors,h=i.legend,d=i.tooltip,f=i.groupOpts,p=Object.values(n).some((function(t){return!1===t.active})),y=this.graphData({data:e.data,behaviour:x.ColumnGrouped.BEHAVIOURS.COLUMN_GROUPED,colors:u,filter:p?n:void 0,groupOpts:f}),m=Object(c.dispatch)("highlightStart","highlightEnd","animationStart","animationUpdateStart","animationEnterStart","animationEnd","animationUpdateEnd","animationEnterEnd","animationTextEnd","openUrl"),b=Object(T.createListenToLegend)({easing:l.easeLinear,ns:"shape",opacity:null,dispatch:m}),O=Object(I.createAddMouseEvents)({dispatch:m,legend:h,opacity:null,tooltip:d,chartId:o,tooltipText:function(t){return"".concat(t.xLabel,": ").concat(s.tooltip.y.format(t.yLabel))},tooltipValue:function(t){return"".concat(t.groupLabel)},colors:u});h&&h.data().forEach((function(t){h.addListener({id:"".concat(o,"_").concat(t.groupId),dispatch:m})}));var v=Object(g.removeDelay)(this,(function(t,e){return e/r*(i.transitionDuration-200)}));t.data(y).listenToLegend(b).addMouseEvents(O).dispatch(m).transitionDelay(v).transitionDuration(i.transitionDuration)}},{key:"emptySheetData",value:function(){return r.a.merge({},G(z(A.prototype),"emptySheetData",this).call(this),{categories:{padding:20},graphOptions:{column:{valuesOutside:!1}},series:[{type:"column-grouped"}]})}},{key:"prepareSheetData",value:function(t,e){var a=t.categories.colors,i=r.a.get(t,"graphOptions.column",{}),n=i.showValues,o=i.valuesOutside;t.categories.data||(t.categories.data=[]);var s=t.categories.data.length,l=t.categories.data.map((function(t,e){return{colors:a,data:[],categoryIdx:e,showValues:!0===n,valuesOutside:!!o,type:"column-grouped"}}));t.series.forEach((function(e,a){for(var i=r.a.get(e,"index",a),n=0;n<s;n++){var o=t.categories.data[n];if(void 0!==o){var c=e.data[n];l[n].data.push({x:n,y:Object(v.replaceBlank)(c,null),xLabel:Object(v.replaceBlank)(e.title),yLabel:Object(v.replaceBlank)(e.rawData[n]),groupLabel:Object(v.replaceBlank)(o),seriesIdx:i,link:r.a.get(e,"links[".concat(n,"]"),null)})}}}));var c=l.length;if(l.forEach((function(t){var e=t.data.length,a=0;0!==e&&(t.data.forEach((function(t){null===t.y&&a++})),a===e&&(t.data=[]))})),(l=l.filter((function(t){return t.data&&t.data.length>0}))).length!==c&&l.forEach((function(t,e){t.data.forEach((function(t){t.x=e}))})),e===this.sheetIndex){var u=Object(w.createLegendData)(this);l.forEach((function(t){t.data=t.data.filter((function(e){return u({color:Object(v.getColor)(e.seriesIdx,t.colors),title:e.xLabel,groupId:e.seriesIdx}).active}))}))}return l}}])&&E(e.prototype,a),i&&E(e,i),A}(d.default)},Ql3f:function(t,e,a){"use strict";a.r(e);var i=a("LvDl"),r=a.n(i),n=a("3hFj"),o=a("6jAQ"),s=a("BD53"),l=a("Omln"),c=a("YUA+"),u=a("wZn9"),h=a("s9+M"),d=Object.create(o.default);e.default=d,function(t){this.instanceClass=n.Column,this.setupChartOptions=function(){t.setupChartOptions.call(this);var e=this.custom;this.chartOptions.series.data=!0===e.absoluteDistribution?"absolute":"separate"},this.setupChartSheetOptionsItem=function(t){var e={categories:{colors:r.a.merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:!1,horizontal:!0},graphOptions:{column:{showValues:!!t.showInLineValues}},axis:[{},{}]};Object(s.default)(e,t,this.charts),e.legend.enabled=!0===t.showLabels,t.categoryWidthAuto||(e.categories.categoryWidth=t.categoryWidth||this.defaultCategoryWidth);var a=e.axis[1];return a.title=t.ylabel||"",e.axis[0].title=t.xlabel||"","number"==typeof t.ymin&&(a.minLimit=t.ymin),"number"==typeof t.ymax&&(a.maxLimit=t.ymax),e.grid.horizontal=Object(l.getGridSettingsHorizontal)(t),e.grid.horizontalZero=Object(c.getZeroBaselineHorizontal)(t),void 0!==t.showInLineValuesOutside&&r.a.set(e,"graphOptions.column.valuesOutside",t.showInLineValuesOutside),Object(u.assignAxisTickInterval)(e,t),Object(u.assignAxisTicks)(e,t),Object(h.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(h.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(u.assignCategoryLabelLayout)(e,t),e}}.call(d,o.default)},VRUu:function(t,e,a){"use strict";a.r(e);var i=a("LvDl"),r=a.n(i),n=a("K8BY"),o=a("Ql3f"),s=a("BD53"),l=a("Omln"),c=a("YUA+"),u=a("wZn9"),h=a("s9+M"),d=Object.create(o.default);e.default=d,function(){this.instanceClass=n.ColumnStacked,this.setupChartSheetOptionsItem=function(t){var e={categories:{colors:r.a.merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:!1,horizontal:!0},graphOptions:{column:{showValues:!!t.showInLineValues}},axis:[{},{}]};Object(s.default)(e,t,this.charts),t.categoryWidthAuto||(e.categories.categoryWidth=t.categoryWidth||this.defaultCategoryWidth);var a=e.axis[1];return a.title=t.ylabel||"",e.axis[0].title=t.xlabel||"","number"==typeof t.ymin&&(a.minLimit=t.ymin),"number"==typeof t.ymax&&(a.maxLimit=t.ymax),e.grid.horizontal=Object(l.getGridSettingsHorizontal)(t),e.grid.horizontalZero=Object(c.getZeroBaselineHorizontal)(t),Object(u.assignAxisTickInterval)(e,t),Object(u.assignAxisTicks)(e,t),Object(h.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(h.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),Object(u.assignCategoryLabelLayout)(e,t),e}}.call(d)},ZiDq:function(t,e,a){"use strict";a.r(e);var i=a("LvDl"),r=a.n(i),n=a("Gts9"),o=a("VRUu"),s=Object.create(o.default);e.default=s,function(t){this.instanceClass=n.ColumnGrouped,this.setupChartSheetOptionsItem=function(e){var a,i,n,o=t.setupChartSheetOptionsItem.call(this,e);return void 0!==e.showInLineValuesOutside&&r.a.set(o,"graphOptions.column.valuesOutside",e.showInLineValuesOutside),r.a.set(o,"grid.showSeparators",null===(n=null==e?void 0:null===(a=e.axis)||void 0===a?void 0:null===(i=a.x)||void 0===i?void 0:i.showSeparators)||void 0===n||n),o}}.call(s,o.default)}}]);