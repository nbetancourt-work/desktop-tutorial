(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-pyramid"],{Ga8l:function(e,a,s){"use strict";s.r(a);var t=s("LvDl"),r=s.n(t),i=s("xcGy"),o=s("6jAQ"),l=s("BD53"),n=s("s9+M"),h=Object.create(o.default);a.default=h,function(){this.instanceClass=i.Pyramid,this.setupChartSheetOptionsItem=function(e){var a;a=r.a.has(e,"dynamicShape")&&!r.a.has(e,"regularEdge")?!e.dynamicShape:!!r.a.has(e,"regularEdge")&&e.regularEdge;var s={categories:{colors:r.a.merge([],this.themeColors,e.colors||this.colors)},pyramid:{showValues:!!r.a.has(e,"showValues")&&e.showValues,showText:!r.a.has(e,"showText")||e.showText,direction:r.a.has(e,"direction")?e.direction:"up",endType:r.a.has(e,"endType")?e.endType:"zero",regularEdge:a,singleColor:r.a.get(e,"singleColor.enabled")},axis:[{}]};return Object(l.default)(s,e,this.charts),s.legend.enabled=r.a.get(e,"showLegend",!1),Object(n.assignNumberFormatLabels)({sheetOptions:s,custom:e,affixes:[{id:"x",path:"",defaultValue:!0},{id:"label",path:"",defaultValue:!0}],inputDecimalSeparator:this.inputDecimalSeparator}),s}}.call(h)}}]);