(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-8"],{FR8n:function(t,e,n){"use strict";function r(t){return"number"==typeof t[1]&&"number"==typeof t[0]?Math.abs(t[1]-t[0]):1/0}function i(t,e){var n=t[0],r=t[1],i=0;if(void 0===n||void 0===r)return i;var o=Math.abs(r-n);return o>=e?i:(i=e/o,0===e%o?i-1:Math.floor(i))}function o(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=t.length,o=[],a=[],u=[];if(!i)return{range:o,domain:a,domainIndex:u};for(var l=n+1,c=Math.ceil(i/l),s=-1===r?i-1-(c-1)*l:0,f=0,d=s;f<c;f++,d+=l)o.push(t[d]),a.push(e[d]),u.push(d);return{range:o,domain:a,domainIndex:u}}function a(t,e,n){for(var r=function(t){return u[t]+a-n.collection[t].height/2},a=t.bandwidth()/2,u=t.domain().map((function(e){return t(e)})),l=u.length-1,c=0,s=0,f=u.length;s<f;s++)if(r(s)>=0){c=s;break}var d=i(u=u.slice(c),e.height);return o(u,u,d).domainIndex.map((function(t){return c+t})).filter((function(t){return t<=l}))}n.r(e),n.d(e,"getRangeStep",(function(){return r})),n.d(e,"stepFromPositionsByWidth",(function(){return i})),n.d(e,"filterToFit",(function(){return o})),n.d(e,"filterOverlappingCategories",(function(){return a}))},I6ut:function(t,e,n){"use strict";n.r(e),n.d(e,"displayValue",(function(){return l})),n.d(e,"countDecimals",(function(){return c})),n.d(e,"enUSFormatLocale",(function(){return s})),n.d(e,"createTimeFormat",(function(){return f}));var r=n("rWgG"),i=n("cOGN"),o=n("ziQ1"),a=n("SGek"),u=n("RTfP");function l(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return n(0===e||1===e?t(e):a.math.round(t(e),r))}function c(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0}var s=Object(r.formatLocale)(Object(u.enUSLocaleConfig)());function f(t){return t&&"auto"!==t?(t=t.replace(/^norepeat:/,""),Object(i.timeFormat)(t)):Object(o.scaleTime)().tickFormat()}},eXr4:function(t,e,n){"use strict";n.r(e),n.d(e,"setupFillColor",(function(){return b})),n.d(e,"createLabel",(function(){return x})),n.d(e,"labelInfo",(function(){return g})),n.d(e,"addOutline",(function(){return v})),n.d(e,"ColumnHorizontalMiddle",(function(){return p})),n.d(e,"ColumnVertical",(function(){return y})),n.d(e,"ColumnHorizontal",(function(){return L})),n.d(e,"createAddMouseEvents",(function(){return w})),n.d(e,"createColumnLabelRenderer",(function(){return O})),n.d(e,"LineHorizontal",(function(){return k})),n.d(e,"createLineLabelRenderer",(function(){return j}));var r=n("SC+/"),i=n("vBe5"),o=n("tU/c"),a=n("LvDl"),u=n.n(a),l=n("v4xw"),c=n("SGek"),s=n("3y/1"),f=n("p8DI");function d(t,e,n,r,i,o,a){try{var u=t[o](a),l=u.value}catch(t){return void n(t)}u.done?e(l):Promise.resolve(l).then(r,i)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){d(o,r,i,a,u,"next",t)}function u(t){d(o,r,i,a,u,"throw",t)}a(void 0)}))}}var m=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function b(t){var e,n,i,o,a=u.a.get(t,"color.method","manual"),c=u.a.get(t,"color.".concat(a));switch(a){case"manual":e=u.a.get(c,"fill","#000000");break;default:n=u.a.get(c,"dark","#000000"),i=u.a.get(c,"light","#ffffff"),o=u.a.get(c,"background","#ffffff"),e=function(t){return l.Colors.getContrastYIQ(t.inside?Object(r.rgb)(t.color).hex():Object(r.rgb)(o).hex(),Object(r.rgb)(n).hex(),Object(r.rgb)(i).hex())}}return e}function x(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t,e){return e},i=b(n),o=t.selectAll("text").data(e,r);o.transition().duration(0),o.exit().remove();var a=o.enter().append("text").style("opacity",c.eps);return(o=o.merge(a)).attr("x",(function(t){return t.textX})).attr("y",(function(t){return t.textY})).attr("text-anchor",(function(t){return t.textAnchor})).attr("fill",i).style("cursor","default").styles(u.a.omit(n,["color"])),o}function g(t){var e=u.a.get(t,"color.method","contrast"),n=u.a.get(t,"color.manual.stroke"),i=u.a.get(t,"color.manual.fill","#000000");return{manual:"manual"===e&&n&&Object(r.rgb)(n).toString()!==Object(r.rgb)(i).toString(),stroke:n,fill:i}}function v(t,e,n){var r=g(e);if(t.selectAll("tspan").remove(),r.manual){var i=r.stroke,o=r.fill;t.append("tspan").attr("class","text-outline").attr("x",(function(t){return t.textX})).attr("y",(function(t){return t.textY})).attr("stroke",i).attr("fill",i).attr("stroke-width","3px").attr("stroke-linejoin","round").text(n),t.append("tspan").attr("class","text-outline-fill").attr("fill",o).attr("x",(function(t){return t.textX})).attr("y",(function(t){return t.textY})).text(n)}else t.text(n)}function p(t){for(var e,n,r=t.data,i=t.metrics,o=t.style,a=[],u=[],l=function(t,e){var n=i.collection[e],r=Object(s.extendBBox)({x:t.xPos,y:t.yPos-t.height/2+.25*n.height-n.baseLineOffset,width:n.width,height:n.height});return r.xLabel=t.xLabel,r},c=r.length,f=0;f<c;f++){var d=r[f];if(null===d.x&&u.push(f),!u.includes(f))for(var h=l(d,f),m=0;m<c;m++){var b=r[m];if(!u.includes(m)){var x=l(b,m);f===m||(n=x,(e=h).x>n.x2||e.x2<n.x||e.y>n.y2||e.y2<n.y)||u.push(m)}}}return r.forEach((function(t,e){if(!u.includes(e)){var n={},r=i.collection[e].height;n.inside=!0,n.fillColor=o.color,n.textX=t.xPos+t.width/2,n.textY=Math.round(t.yPos-t.height/2+.25*r),n.transform=null,n.textAnchor="middle",n.text=t.yLabel,n.index=e,n.seriesIdx=t.seriesIdx,n.yLabel=t.yLabel,n.xLabel=t.xLabel,n.groupLabel=t.groupLabel,n.categoryLabel=t.categoryLabel,n.color=t.color,a.push(n)}})),a}function y(t){var e=t.data,n=t.metrics,r=t.style,o=t.scale,a=t.valuesOutside,u=[],l=Object(i.max)(o.range()),c=.25*n.height;return e.forEach((function(t,e){if(null!==t.x){var i,o={},s=t.yPos,f=s,d="start",h=s,m=l-s,b=1,x=!0,g=n.collection[e].width+c,v=Math.abs(t.height),p=!a&&v>g;t.y<0&&(d="end",h=m,m=s,b=-1),p?f-=b*c:h>=v+g?f-=b*(v+c):m>=g?(f+=b*c,d="end"===d?"start":"end"):x=!1,x&&(o.inside=p,o.fillColor=r.color,o.textX=i=t.xPos+t.width/2+c,o.textY=f,o.transform="rotate(-90,".concat(i,",").concat(f,")"),o.textAnchor=d,o.text=t.yLabel,o.index=e,o.seriesIdx=t.seriesIdx,o.yLabel=t.yLabel,o.xLabel=t.xLabel,o.groupLabel=t.groupLabel,o.categoryLabel=t.categoryLabel,o.color=t.color,u.push(o))}})),u}function L(t){var e=t.data,n=t.style,r=t.scale,o=t.metrics,a=t.valuesOutside,u=Object(i.max)(r.range()),l=[];return e.forEach((function(t,e){var r=t.y,i=t.xPos,c=t.yPos,s=t.width,f=t.height,d=t.seriesIdx,h=t.xLabel,m=t.yLabel,b=t.groupLabel,x=t.categoryLabel,g=t.color,v=c,p=c,y=u-c,L=1,w=!0,O=o.collection[e],k=.25*O.height,j=O.height,P=j+k,S=Math.abs(f),M=!a&&S>P;r<0&&(p=y,y=c,L=-1),M?v-=L*(r<0?j-1:k):p>=S+P?v-=L*(S+(r<0?j-1:k)):y>=P?v+=L*(r<0?k+1:j):w=!1,w&&l.push({inside:M,fillColor:n.color,textX:i+s/2,textY:v,transform:null,textAnchor:"middle",text:m,index:e,seriesIdx:d,yLabel:m,xLabel:h,groupLabel:b,categoryLabel:x,color:g})})),l}function w(t){var e=t.dispatch,n=t.legend,r=t.opacity,i=void 0===r?null:r,o=t.tooltip,a=t.chartId,u=t.tooltipText,l=t.tooltipValue,c=t.colors;return function(t){Object(f.addMouseEvents)(t,e,o,u,l),t.on("mousemove",(function(t,e){var r=Object(s.getMousePosition)(t),f=e.color||Object(s.getColor)(e.seriesIdx,c),d=u(e),h=l(e);o().setText(d).setValue(h).setPosition(r,f),null!==i&&n&&n.sendListeners(e.seriesIdx,a,"highlightStart")})).on("mouseout.labels",(function(t,e){null!==i&&n&&n.sendListeners(e.seriesIdx,a,"highlightEnd")}))}}function O(t){var e,n=t.textStyle,r=t.showValues,i=t.scale,o=t.isWaterfall,a=t.isStacked,l=t.valuesOutside,c=t.textFormat,f=t.transitionTiming,d=t.addMouseEvents,b=t.listenToLegendText,g=t.opacity,w=0;return e=h((function(t,e){var h,O,k,j,P,S,M;return m(this,(function(m){return t.selectAll("text").transition().duration(0).remove(),r?(h=e.map((function(t){return c({text:t.yLabel})})),O=Object(s.getAllTextDimensions)(h,n),k=function(t){var e=t.metrics,n=t.data,r=t.isStacked,i=u.a.get(n,"[0].width",0),o=i>=e.height,a=i>=e.width;if(!r)return{vertical:o,horizontal:a};var l={horizontal:0,vertical:0},c=e.height,s=c-e.baseLineOffset,f=.25*c,d=f-s;e.collection.reduce((function(t,e,r){var i=n[r],o=Math.abs(i.width),a=Math.abs(i.height),u=e.height+d,l=e.width+f;return t.horizontal+=+(e.width<=o&&u<=a),t.vertical+=+(l<=a&&e.height<=o),t}),l);var h=0===l.horizontal&&l.horizontal===l.vertical;return a=l.horizontal>=l.vertical,{horizontal:a=!h&&a,vertical:!h&&!a}}({metrics:O,data:e,isStacked:a}),j=k.horizontal||k.vertical,P=[],j?(S={data:e,metrics:O,style:n,scale:i},o?P=p(S):a?(S.horizontal=k.horizontal,P=function(t){var e=t.data,n=t.metrics,r=t.style,i=t.horizontal,o=[],a=n.height,u=a-n.baseLineOffset,l=.25*a;return e.forEach((function(t,e){if(null!==t.x){var a={},c=n.collection[e],s=i?"width":"height",f=i?"height":"width",d=Math.abs(t.width),h=Math.abs(t.height),m=c[s],b=c[f],x=m<=d&&b+(i?l-u:l)<=h,g=t.y<0,v=g?-1:1,p=t.xPos+t.width/2+l,y=t.yPos-v*l;x&&(a.y=t.y,a.inside=!0,a.fillColor=r.color,a.textX=p,a.textY=y,a.textAnchor=g?"end":"start",a.transform="rotate(-90,".concat(p,",").concat(y,")"),i&&(a.textAnchor="middle",a.transform=null,a.textX=t.xPos+t.width/2,a.textY=t.yPos-v*(g?n.baseLineOffset+1:l)),a.yLabel=t.yLabel,a.xLabel=t.xLabel,a.groupLabel=t.groupLabel,a.categoryLabel=t.categoryLabel,a.text=t.yLabel,a.seriesIdx=t.seriesIdx,a.color=t.color,o.push(a))}})),o}(S)):k.horizontal?(S.valuesOutside=l,P=L(S)):(S.valuesOutside=l,P=y(S)),P.length?((M=x(t,P,n)).attr("transform",(function(t){return t.transform})),v(M,n,c),[2,new Promise((function(t){M.transition().duration(f.duration.text).style("opacity",g||1).on("start",(function(){return w++})).on("end",(function(){--w||(d(M.filter((function(t){return t.inside}))),b(M),t())}))}))]):[2]):[2]):[2]}))})),function(t,n){return e.apply(this,arguments)}}function k(t){var e=t.data,n=t.metrics,r=t.style,i=t.xScale,a=t.yScale,u=t.dataPointRadius,l=t.valueProperty,c=void 0===l?"yLabel":l,s=[],f=[],d=[],h=i.bandwidth?i.bandwidth()/2:0,m=Math.max.apply(null,a.range()),b=Math.max.apply(null,i.range()),x=new o({width:b,height:m});return e.forEach((function(t,e){if(null!==t.y&&null!==t.x){var r=n.collection[e],o={x:i(t.x)-r.width/2+h,y:a(t.y)-u-r.baseLineOffset,width:r.width,height:r.height,index:e};x.push(o)}else f.push(e)})),x.each((function(t){var e=x.colliding(t).length;e&&d.push({collisions:e,item:t})})),d.sort((function(t,e){return e.collisions-t.collisions})),d.forEach((function(t){var e=t.item;x.colliding(e).length&&(x.remove(e),f.push(e.index))})),e.forEach((function(t,e){if(!f.includes(e)){var n={};n.fillColor=r.color,n.textX=i(t.x)+h,n.textY=a(t.y)-u,n.textAnchor="middle",n.text=t[c],n.yPct=t.yPct,n.index=e,n.seriesIdx=t.seriesIdx,n.yLabel=t.yLabel,n.xLabel=t.xLabel,n.groupLabel=t.groupLabel,n.categoryLabel=t.categoryLabel,n.color=t.color,s.push(n)}})),s}function j(t){var e,n=t.textStyle,r=t.showValues,i=t.textFormat,o=t.transitionTiming,a=t.listenToLegendText,u=t.addMouseEvents,l=void 0===u?function(){}:u,c=t.opacity,f=t.xScale,d=t.yScale,b=t.dataPointRadius,g=t.valueProperty,p=void 0===g?"yLabel":g,y=0;return e=h((function(t,e){var u,h,g,L;return m(this,(function(m){return t.selectAll("text").transition().duration(0).remove(),r?(u=e.map((function(t){return i({text:t[p]})})),h=Object(s.getAllTextDimensions)(u,n),(g=k({data:e,metrics:h,style:n,xScale:f,yScale:d,dataPointRadius:b,valueProperty:p})).length?(v(L=x(t,g,n),n,i),[2,new Promise((function(t){L.transition().duration(o.duration.text).style("opacity",c||1).on("start",(function(){return y++})).on("end",(function(){--y||(a(L),l(L),t())}))}))]):[2]):[2]}))})),function(t,n){return e.apply(this,arguments)}}},p8DI:function(t,e,n){"use strict";n.r(e),n.d(e,"addMouseEvents",(function(){return i}));var r=n("3y/1");function i(t,e,n,i,o){t.classed("igc-chart-link",(function(t){return!(!t||!t.link)})).on("mouseover",(function(){return n().interaction("show")})).on("mousemove",(function(t,e){var a=Object(r.getMousePosition)(t),u=i(e),l=o(e);n().setText(u).setValue(l).setPosition(a,e.color)})).on("mouseout",(function(){return n().hide()})).on("click",(function(t,n){return e.call("openUrl",null,n.link)}))}},pzpO:function(t,e,n){"use strict";n.r(e),n.d(e,"getTimeDomain",(function(){return l})),n.d(e,"adjustSymmetricalDomain",(function(){return c})),n.d(e,"ensureZero",(function(){return s})),n.d(e,"ensureZeroEqual",(function(){return f})),n.d(e,"limit",(function(){return d})),n.d(e,"hasLimits",(function(){return h})),n.d(e,"orderLimits",(function(){return m})),n.d(e,"containsZero",(function(){return b})),n.d(e,"forceTicksToDomain",(function(){return x})),n.d(e,"domainInvalid",(function(){return g}));var r=n("vBe5"),i=n("wd/R"),o=n.n(i),a=n("3y/1"),u=n("SGek");function l(t){var e=t.filter((function(t){return null!==t}));return e.length?e.reduce((function(t,e){return e>t[1]&&(t[1]=e),e<t[0]&&(t[0]=e),t}),[e[0],e[e.length-1]]):[o()().toDate(),o()().add(1,"year").toDate()]}function c(t){var e=t[1]-t[0];return t[0]=-e,t[1]=e,Math.abs(t[0])>Math.abs(t[1])?[t[0],-t[0]]:[-t[1],t[1]]}function s(t){var e=t[0]<0&&t[1]<0,n=t[0]>0&&t[1]>0;e&&!n&&(t[1]=0),n&&!e&&(t[0]=0)}function f(t){t[0]===t[1]&&(t[0]>0?t[0]=0:t[0]<0?t[1]=0:(t[0]=-1,t[1]=1))}function d(t,e){if(!t)return!1;var n=t.minLimit,i=t.maxLimit,o=Object(a.isNumber)(n),u=Object(a.isNumber)(i);return e[0]=o?Number(n):e[0],e[1]=u?Number(i):e[1],e.sort(r.ascending),u||o}function h(t){return t&&(Object(a.isNumber)(t.minLimit)||Object(a.isNumber)(t.maxLimit))}function m(t){if(t&&Object(a.isNumber)(t.minLimit)&&Object(a.isNumber)(t.maxLimit)&&t.minLimit>t.maxLimit){var e=t.maxLimit;t.maxLimit=t.minLimit,t.minLimit=e}}function b(t){return t[0]<=0&&t[1]>=0}function x(t,e){for(var n=Math.max(e.length-1,1),r=t[0],i=t[1],o=(i-r)/n,a=[r],l=1;l<n;l++)a[l]=u.math.preciseNumber(r+l*o);return a[n]=i,a}function g(t){return t[0]===t[1]}},tn5u:function(t,e,n){"use strict";n.r(e),n.d(e,"ScaleHelper",(function(){return u})),n.d(e,"ticks",(function(){return l}));var r=n("ziQ1"),i=n("vBe5"),o=n("3y/1"),a=n("pzpO");function u(){var t=function(){return n[e]()},e="ordinal",n={numeric:function(){var t=s.map((function(t){return Object(o.replaceBlank)(Number(t),0)})).sort((function(t,e){return t-e})),e=[Object(i.min)(t),Object(i.max)(t)];return e=d(e,f,c),Object(a.limit)({minLimit:l[0],maxLimit:l[1]},e),e[0]===e[1]&&0===e[0]&&(e[0]=-1,e[1]=1),Object(r.scaleLinear)().domain(e).rangeRound(c)}},l=[],c=[0,1],s=[],f=0,d=u.linearScaleTicksDomainAdjust;return Object.assign(t,{type:function(r){return arguments.length&&r in n?(e=r,t):t},sheet:function(){return arguments.length,t},domainLimit:function(e){return arguments.length?(l=e.slice(0),t):t},range:function(e){return arguments.length?(c=e.slice(0),t):t},data:function(e){return arguments.length?(s=e.slice(0),t):s},rangePointRadius:function(e){return arguments.length?(f=e,t):f}}),t}function l(t,e){if(t.ticks){var n=t.ticks(e),r=n.length;return 1===e&&1===r&&(r=(n=t.ticks(2)).length),1===e&&r>2?[n[0],n[r-1]]:n}return t.domain()}u.linearScaleTicksDomainAdjust=function(t,e,n){var i=function(t,e,n){n(a.invert(t),e)};e=e||0;var o=10,a=Object(r.scaleLinear)().domain(t).rangeRound(n).nice(o);return 0===e?a.domain():(i(a(t[0])-e,a.domain()[0],(function(t,e){if(t<e){var n=a.ticks(o),r=n.length-1;a.domain([t,n[r]]).nice(o)}})),i(a(t[1])+e,a.domain()[1],(function(t,e){t>e&&a.domain([a.ticks(o)[0],t]).nice(o)})),a.domain())},u.ticks=l}}]);