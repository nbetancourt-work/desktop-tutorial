(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-doughnut"],{XKSt:function(t,e,n){"use strict";n.r(e),n.d(e,"toKebabCase",(function(){return a}));var i=n("LvDl"),s=n.n(i);function a(t){return Object.keys(t).reduce((function(e,n){return e[s.a.kebabCase(n)]=t[n],e}),{})}},nEPR:function(t,e,n){"use strict";n.r(e),n.d(e,"centerTextEnabled",(function(){return a}));var i=n("LvDl"),s=n.n(i);function a(t,e){s.a.set(t,"series.showTitle",s.a.get(e,"labels.graph.center.enabled",!0))}},yAih:function(t,e,n){"use strict";n.r(e);var i=n("LvDl"),s=n.n(i),a=n("kvo9"),r=n("Rw0G"),l=n("nEPR"),o=n("wrGL"),h=n("XKSt"),c=Object.create(r.default);e.default=c,function(){this.instanceClass=a.Pie,this.setupChartOptionsStyle=function(){var t,e,n,i;r.default.setupChartOptionsStyle.call(this),this.chartOptions.style.graph.title={"font-size":"19px"};var a=s.a.merge({},null===(t=this.themeFont)||void 0===t?void 0:t.common,null===(e=this.themeFont)||void 0===e?void 0:e.label);this.chartOptions.style.graph.title["font-family"]=a.fontFamily;var l=Object(h.toKebabCase)((null===this||void 0===this?void 0:null===(n=this.charts)||void 0===n?void 0:null===(i=n.pie)||void 0===i?void 0:i.centerStyle)||{});s.a.merge(this.chartOptions.style.graph.title,l)},this.setupChartOptionsCustomStyle=function(){this.chartOptions.style.graph.title.color=o.getChartTextColor.call(this,"custom.labels.graph.title.color","charts.pie.centerStyle.color"),r.default.setupChartOptionsCustomStyle.call(this),r.default.assignChartOptionsCustomStyle.call(this,["graph.title"],["font-family","font-size","font-style","font-weight"])},this.setupChartSheetOptionsItem=function(t){var e=r.default.setupChartSheetOptionsItem.call(this,t),n=s.a.get(this,"charts.doughnut",{});return e.series.innerRadiusPercent=s.a.has(n,"innerRadiusPercent")?n.innerRadiusPercent:.666666,Object(l.centerTextEnabled)(e,t),e}}.call(c)}}]);