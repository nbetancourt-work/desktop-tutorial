(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-wordcloud"],{IBhO:function(t,e,n){"use strict";n.r(e),n.d(e,"Wordcloud",(function(){return D}));var r=n("LvDl"),o=n.n(r),i=n("+3eq"),a=n("LWvD"),u=n("x+1q"),l=n("3y/1"),c=n("2YLo"),s=n("VLlq"),f=n("XKI8"),h=n("pYxU"),d=n("D3ez"),y=n("rRFs");function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}Object(d.putGraph)("wordcloud",y.Wordcloud);var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(d,t);var e,n,r,a=O(d);function d(){return p(this,d),a.apply(this,arguments)}return e=d,r=[{key:"getClassName",value:function(){return"Wordcloud"}}],(n=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.root,n=this.options,r=new c.Renderer({instance:this}),o=this.getSheetData(),a=Object(u.default)(o),l=this.runtime={width:n.width,height:n.height,sheet:o,formatter:a};if(Object(s.default)(this,{width:l.width}),Object(h.DownloadButton)(this,n.style.legend),!this.sheetsNotFound()){var f=this.prepareSheetData(o),d=this.createAnimationCounter(2);this.containerSetup(),r.add((function(){e.attr("width",l.width).attr("height",l.height).datum(t).transition().ease(i[n.animation.ease]).duration(n.animation.duration).on("start",(function(){t.events.call("startAnimation")})).on("end",(function(){d()}))})),r.addGraph([{graphs:[f],bounds:{width:l.width,height:l.height},offset:{left:0,top:0},transitionDuration:n.animation.duration,animationEnd:d}]),r.start()}}},{key:"graphInstanceSetup",value:function(t,e,n,r,o){var i=e.data.length,a=this.runtime.formatter;t.data(e.data).groupId(o).bounds(r.bounds).offset(r.offset).textDirection(e.textDirection).transitionDelay((function(t,e){return e/i*r.transitionDuration})).labelOptions(e.labels).transitionDuration(r.transitionDuration).tooltip(Object(f.createStyledTooltip)(this)).tooltipText((function(t){return t.categoryLabel})).tooltipValue((function(t){return a.tooltip.x.format(t.valueLabel)})),t.dispatch().on("animationEnd",r.animationEnd)}},{key:"defaults",value:function(){return o.a.merge({},x(m(d.prototype),"defaults",this).call(this),{animation:{duration:700}})}},{key:"emptySheetData",value:function(){return o.a.merge({},x(m(d.prototype),"emptySheetData",this).call(this),{labels:{fontFamily:"Arial"},axis:[{}],series:[{title:"",type:"wordcloud",showValues:!1,sort:"none"}]})}},{key:"prepareSheetData",value:function(t){var e=t.series[0],n=[],r=t.categories.colors;return e.data.forEach((function(o,i){var a={categoryLabel:Object(l.replaceBlank)(t.categories.data[i],""),valueLabel:Object(l.replaceBlank)(e.rawData[i]),size:Object(l.replaceBlank)(o,null),color:Object(l.getColor)(i,r),link:e.links?e.links[i]:null};null!==a.size&&(a.sizeAbs=Math.abs(a.size),n.push(a))})),{type:e.type,data:n,textDirection:t.categories.textDirection,labels:t.labels}}},{key:"applySheetOptions",value:function(t){t&&this.options.sheets.forEach((function(e,n){var r=function(e){return t[e]||t[0]}(n+1);r.labels&&o.a.merge(e.labels,r.labels),r.axis&&o.a.merge(e.axis,r.axis),r.tooltip&&(e.tooltip=e.tooltip||{},o.a.merge(e.tooltip,r.tooltip)),r.categories&&o.a.merge(e.categories,r.categories)}))}}])&&g(e.prototype,n),r&&g(e,r),d}(a.default)},QCgN:function(t,e,n){"use strict";n.r(e);var r=n("LvDl"),o=n.n(r),i=n("IBhO"),a=n("6jAQ"),u=n("oS2o"),l=n("s9+M"),c=Object.create(u.default);e.default=c,function(){this.instanceClass=i.Wordcloud,this.setupChartSheetOptionsItem=function(t){var e=a.default.setupChartSheetOptionsItem.call(this,t),n={"[0,-90,90,0]":"horizontalVertical","[0]":"horizontal","[90,-90]":"vertical","[45,-45]":"any"};e.axis=[{}],Object(l.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"x",path:"",ignoreCheck:!0}],inputDecimalSeparator:this.inputDecimalSeparator}),e.categories.textDirection=o.a.has(t,"rotate")?n[t.rotate]:n["[0,-90,90,0]"],e.labels=o.a.merge({},o.a.get(this,"charts.wordcloud.labels",{}));var r=o.a.get(t,"labels.graph.item.name.font-family");return r&&(e.labels.fontFamily=r),e}}.call(c)},pAIP:function(t,e,n){"use strict";n.r(e);var r=n("30U6"),o=Math.PI/180;function i(t){return t.text}function a(){return"serif"}function u(){return"normal"}function l(t){return Math.sqrt(t.value)}function c(){return 30*(~~(6*Math.random())-3)}function s(){return 1}function f(t,e,n,r){if(!e.sprite){var i=t.context,a=t.ratio;i.clearRect(0,0,2048/a,2048/a);var u=0,l=0,c=0,s=n.length;for(--r;++r<s;){e=n[r],i.save(),i.font=e.style+" "+e.weight+" "+~~((e.size+1)/a)+"px "+e.font;var f=i.measureText(e.text+"m").width*a,h=e.size<<1;if(e.rotate){var d=Math.sin(e.rotate*o),y=Math.cos(e.rotate*o),p=f*y,g=f*d,x=h*y,m=h*d;f=Math.max(Math.abs(p+m),Math.abs(p-m))+31>>5<<5,h=~~Math.max(Math.abs(g+x),Math.abs(g-x))}else f=f+31>>5<<5;if(h>c&&(c=h),u+f>=2048&&(u=0,l+=c,c=0),l+h>=2048)break;i.translate((u+(f>>1))/a,(l+(h>>1))/a),e.rotate&&i.rotate(e.rotate*o),i.fillText(e.text,0,0),e.padding&&(i.lineWidth=2*e.padding,i.strokeText(e.text,0,0)),i.restore(),e.width=f,e.height=h,e.xoff=u,e.yoff=l,e.x1=f>>1,e.y1=h>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,u+=f}for(var v=i.getImageData(0,0,2048/a,2048/a).data,b=[];--r>=0;)if((e=n[r]).hasText){for(var w=e.width,O=w>>5,D=e.y1-e.y0,S=0;S<D*O;S++)b[S]=0;if(null==(u=e.xoff))return;l=e.yoff;for(var z=0,M=-1,j=0;j<D;j++){for(var k=0;k<w;k++){var I=O*j+(k>>5),P=v[2048*(l+j)+(u+k)<<2]?1<<31-k%32:0;b[I]|=P,z|=P}z?M=j:(e.y0++,D--,j--,l++)}e.y1=e.y0+M,e.sprite=b.slice(0,(e.y1-e.y0)*O)}}}function h(t,e,n){n>>=5;for(var r,o=t.sprite,i=t.width>>5,a=t.x-(i<<4),u=127&a,l=32-u,c=t.y1-t.y0,s=(t.y+t.y0)*n+(a>>5),f=0;f<c;f++){r=0;for(var h=0;h<=i;h++)if((r<<l|(h<i?(r=o[f*i+h])>>>u:0))&e[s+h])return!0;s+=n}return!1}function d(t,e){var n=t[0],r=t[1];e.x+e.x0<n.x&&(n.x=e.x+e.x0),e.y+e.y0<n.y&&(n.y=e.y+e.y0),e.x+e.x1>r.x&&(r.x=e.x+e.x1),e.y+e.y1>r.y&&(r.y=e.y+e.y1)}function y(t){var e=t[0]/t[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function p(){return document.createElement("canvas")}function g(t){return"function"==typeof t?t:function(){return t}}e.default=function(){var t,e=function(t,e,r){for(var o,i,a,u,l,c=e.x,s=e.y,f=Math.sqrt(n[0]*n[0]+n[1]*n[1]),d=S(n),y=-1;(o=d(y+=1))&&(i=~~o[0],a=~~o[1],!(Math.min(Math.abs(i),Math.abs(a))>=f));)if(e.x=c+i,e.y=s+a,!(r&&h(e,t,n[0])||r&&(l=r,!((u=e).x+u.x1>l[0].x&&u.x+u.x0<l[1].x&&u.y+u.y1>l[0].y&&u.y+u.y0<l[1].y)))){for(var p=e.sprite,g=e.width>>5,x=n[0]>>5,m=e.x-(g<<4),v=127&m,b=32-v,w=e.y1-e.y0,O=(e.y+e.y0)*x+(m>>5),D=void 0,z=0;z<w;z++){D=0;for(var M=0;M<=g;M++)t[O+M]|=D<<b|(M<g?(D=p[z*g+M])>>>v:0);O+=x}return delete e.sprite,!0}return!1},n=[256,256],o=i,m=a,v=l,b=u,w=u,O=c,D=s,S=y,z=[],M=1/0,j=Object(r.dispatch)("word","end"),k=null,I=Math.random,P={},A=p;return P.canvas=function(t){return arguments.length?(A=g(t),P):A},P.start=function(){var r=function(){for(var r=Date.now();Date.now()-r<M&&++c<l&&k;){var o=h[c];t?(o.x=t[0],o.y=t[1]):(o.x=n[0]*(Math.random()+.5)>>1,o.y=n[1]*(Math.random()+.5)>>1),f(i,o,h,c),o.hasText&&e(a,o,u)&&(s.push(o),j.call("word",null,o),u?d(u,o):u=[{x:o.x+o.x0,y:o.y+o.y0},{x:o.x+o.x1,y:o.y+o.y1}],o.x-=n[0]>>1,o.y-=n[1]>>1)}c>=l&&(P.stop(),j.call("end",null,s,u))},i=function(t){t.width=t.height=1;var e=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=2048/e,t.height=2048/e;var n=t.getContext("2d");return n.fillStyle=n.strokeStyle="red",n.textAlign="center",{context:n,ratio:e}}(A()),a=function(t){var e=[],n=-1;for(;++n<t;)e[n]=0;return e}((n[0]>>5)*n[1]),u=null,l=z.length,c=-1,s=[],h=z.map((function(t,e){return t.text=o.call(this,t,e),t.font=m.call(this,t,e),t.style=b.call(this,t,e),t.weight=w.call(this,t,e),t.rotate=O.call(this,t,e),t.size=~~v.call(this,t,e),t.padding=D.call(this,t,e),t})).sort((function(t,e){return e.size-t.size}));return k&&clearInterval(k),k=setInterval(r,0),r(),P},P.stop=function(){return k&&(clearInterval(k),k=null),P},P.timeInterval=function(t){return arguments.length?(M=null==t?1/0:t,P):M},P.words=function(t){return arguments.length?(z=t,P):z},P.size=function(t){return arguments.length?(n=[+t[0],+t[1]],P):n},P.startPoint=function(e){return arguments.length?(t=[+e[0],+e[1]],P):t},P.font=function(t){return arguments.length?(m=g(t),P):m},P.fontStyle=function(t){return arguments.length?(b=g(t),P):b},P.fontWeight=function(t){return arguments.length?(w=g(t),P):w},P.rotate=function(t){return arguments.length?(O=g(t),P):O},P.text=function(t){return arguments.length?(o=g(t),P):o},P.spiral=function(t){return arguments.length?(S=x[t]||t,P):S},P.fontSize=function(t){return arguments.length?(v=g(t),P):v},P.padding=function(t){return arguments.length?(D=g(t),P):D},P.random=function(t){return arguments.length?(I=t,P):I},P.on=function(){var t=j.on.apply(j,arguments);return t===j?P:t},P};var x={archimedean:y,rectangular:function(t){var e=4*t[0]/t[1],n=0,r=0;return function(t){var o=t<0?-1:1;switch(Math.sqrt(1+4*o*t)-o&3){case 0:n+=e;break;case 1:r+=4;break;case 2:n-=e;break;default:r-=4}return[n,r]}}}},rRFs:function(t,e,n){"use strict";n.r(e),n.d(e,"Wordcloud",(function(){return d}));var r=n("LvDl"),o=n.n(r),i=n("30U6"),a=n("ziQ1"),u=n("/TIM"),l=n("SGek"),c=n("XKI8"),s=n("3y/1"),f=n("pAIP"),h=n("p8DI");function d(){var t,e,n=function(t){t.each((function(){var t=Object(u.select)(this);if(!x.length)return t.selectAll(".igc-wc-node").remove(),void z.call("animationEnd");if(0!==v.width&&0!==v.height){M=m.left+(v.width>>1),j=m.top+(v.height>>1);var e=(x=x.slice(0).sort((function(t,e){return e.sizeAbs-t.sizeAbs}))).length;"string"==typeof(A=o.a.get(S,"fontSize",A))&&(A=Number(A.replace(/(px|pt)$/gi,"")));var n=Object(a.scaleLinear)().range([5,A]).domain([+x[e-1].sizeAbs||1,+x[0].sizeAbs]);Object(f.default)().size([v.width,v.height]).startPoint([v.width/2,v.height/2]).padding(1).spiral("archimedean").rotate(w).font(S.fontFamily).fontStyle(S.fontStyle).fontWeight(S.fontWeight).fontSize((function(t){return n(t.sizeAbs)})).text((function(t){return t.categoryLabel})).on("end",(function(e){var n=t.selectAll(".igc-wc-node").data(e);n.exit().remove(),(n=n.merge(n.enter().append("text").attr("text-anchor","middle").attr("class","igc-wc-node"))).call(r),t.call(y),n.transition().duration(D).delay(O).style("opacity",1).on("start",(function(){b++})).on("end",(function(){0==--b&&(Object(h.addMouseEvents)(n,z,E,k,I),z.call("animationEnd"))}))})).stop().words(x).start()}else z.call("animationEnd")}))},r=function(t){t.style("font-size",(function(t){return t.size+"px"})).styles({"font-family":S.fontFamily,"font-weight":S.fontWeight,"font-style":S.fontStyle}).text((function(t){return t.text})).attr("fill",(function(t){return t.color})).attr("transform",(function(t){return"translate("+[t.x+M,t.y+j]+") rotate("+t.rotate+")"})).style("opacity",l.eps)},y=function(t){var e=P(t.node()),n=v.width,r=v.height,o=l.math.fitToSize(e.width,e.height,n,r).width/e.width,i="scale(".concat(o,")");t.attr("transform",i);var a=p(t.node(),o),u=m.left-a.x+(n-a.width)/2,c=m.top-a.y+(r-a.height)/2;t.attr("transform","translate(".concat(u,",").concat(c,") ").concat(i))},p=function(t,e){var n=P(t),r=t.ownerSVGElement,o={x:n.x,y:n.y,width:n.width,height:n.height},i=[r.createSVGPoint(),r.createSVGPoint(),r.createSVGPoint(),r.createSVGPoint()];i[0].x=n.x,i[0].y=n.y,i[1].x=n.x+n.width,i[1].y=n.y,i[2].x=n.x+n.width,i[2].y=n.y+n.height,i[3].x=n.x,i[3].y=n.y+n.height;var a=1/0,u=-1/0,l=1/0,c=-1/0;return i.forEach((function(t){a=Math.min(a,t.x*e),u=Math.max(u,t.x*e),l=Math.min(l,t.y*e),c=Math.max(c,t.y*e)})),o.x=a,o.width=u-a,o.y=l,o.height=c-l,o},g=d.TextDirection,x=[],m={x:0,y:0},v={width:0,height:0},b=0,w=g.horizontalVertical,O=0,D=700,S={fontFamily:"serif",fontStyle:"normal",fontWeight:"normal"},z=Object(i.dispatch)("animationEnd","openUrl"),M=0,j=0,k=function(t){return t.categoryLabel},I=function(t){return t.sizeAbs},P=Object(s.setupBBox)(),A=40,E=c.getTooltip,T={data:function(t){return arguments.length?(x=t,n):x},groupId:function(t){return arguments.length?(e=t,n):e},chartId:function(e){return arguments.length?(t=e,n):t},bounds:function(t){return arguments.length?(v.width="number"==typeof t.width?t.width:v.width,v.height="number"==typeof t.height?t.height:v.height,n):v},offset:function(t){return arguments.length?(m.left="number"==typeof t.left?t.left:m.left,m.top="number"==typeof t.top?t.top:m.top,n):m},transitionDelay:function(t){return arguments.length?(O=t,n):O},transitionDuration:function(t){return arguments.length?(D=t,n):D},dispatch:function(){return z},textDirection:function(t){return arguments.length?(w=t in g?g[t]:w,n):w},labelOptions:function(t){return arguments.length?(S=o.a.merge(S,t),n):S},tooltip:function(t){return arguments.length?(E=t,n):E},tooltipText:function(t){return arguments.length?(k=t,n):k},tooltipValue:function(t){return arguments.length?(I=t,n):I}};return Object.assign(n,T),n}d.TextDirection={horizontal:0,vertical:-90,horizontalVertical:function(t,e){return e%2?-90:0},any:function(t,e){return e%2?-45:45}}}}]);