"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[842],{81618:function(g){(function(f,c){g.exports=c()})(this,function(){function f(n){var d=[];return n.AMapUI&&d.push(c(n.AMapUI)),n.Loca&&d.push(w(n.Loca)),Promise.all(d)}function c(n){return new Promise(function(d,o){var i=[];if(n.plugins)for(var u=0;u<n.plugins.length;u+=1)a.AMapUI.plugins.indexOf(n.plugins[u])==-1&&i.push(n.plugins[u]);if(t.AMapUI===e.failed)o("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");else if(t.AMapUI===e.notload){t.AMapUI=e.loading,a.AMapUI.version=n.version||a.AMapUI.version,u=a.AMapUI.version;var l=document.body||document.head,s=document.createElement("script");s.type="text/javascript",s.src="https://webapi.amap.com/ui/"+u+"/main.js",s.onerror=function(p){t.AMapUI=e.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},s.onload=function(){if(t.AMapUI=e.loaded,i.length)window.AMapUI.loadUI(i,function(){for(var p=0,A=i.length;p<A;p++){var v=i[p].split("/").slice(-1)[0];window.AMapUI[v]=arguments[p]}for(d();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()});else for(d();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(s)}else t.AMapUI===e.loaded?n.version&&n.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):i.length?window.AMapUI.loadUI(i,function(){for(var p=0,A=i.length;p<A;p++){var v=i[p].split("/").slice(-1)[0];window.AMapUI[v]=arguments[p]}d()}):d():n.version&&n.version!==a.AMapUI.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):r.AMapUI.push(function(p){p?o(p):i.length?window.AMapUI.loadUI(i,function(){for(var A=0,v=i.length;A<v;A++){var h=i[A].split("/").slice(-1)[0];window.AMapUI[h]=arguments[A]}d()}):d()})})}function w(n){return new Promise(function(d,o){if(t.Loca===e.failed)o("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");else if(t.Loca===e.notload){t.Loca=e.loading,a.Loca.version=n.version||a.Loca.version;var i=a.Loca.version,u=a.AMap.version.startsWith("2"),l=i.startsWith("2");if(u&&!l||!u&&l)o("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");else{u=a.key,l=document.body||document.head;var s=document.createElement("script");s.type="text/javascript",s.src="https://webapi.amap.com/loca?v="+i+"&key="+u,s.onerror=function(p){t.Loca=e.failed,o("\u8BF7\u6C42 AMapUI \u5931\u8D25")},s.onload=function(){for(t.Loca=e.loaded,d();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(s)}}else t.Loca===e.loaded?n.version&&n.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):d():n.version&&n.version!==a.Loca.version?o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):r.Loca.push(function(p){p?o(p):o()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var e;(function(n){n.notload="notload",n.loading="loading",n.loaded="loaded",n.failed="failed"})(e||(e={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:e.notload,AMapUI:e.notload,Loca:e.notload},r={AMap:[],AMapUI:[],Loca:[]},M=[],I=function(n){typeof n=="function"&&(t.AMap===e.loaded?n(window.AMap):M.push(n))};return{load:function(n){return new Promise(function(d,o){if(t.AMap==e.failed)o("");else if(t.AMap==e.notload){var i=n.key,u=n.version,l=n.plugins;i?(window.AMap&&location.host!=="lbs.amap.com"&&o("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"),a.key=i,a.AMap.version=u||a.AMap.version,a.AMap.plugins=l||a.AMap.plugins,t.AMap=e.loading,u=document.body||document.head,window.___onAPILoaded=function(p){if(delete window.___onAPILoaded,p)t.AMap=e.failed,o(p);else for(t.AMap=e.loaded,f(n).then(function(){d(window.AMap)}).catch(o);M.length;)M.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+i+"&plugin="+a.AMap.plugins.join(","),l.onerror=function(p){t.AMap=e.failed,o(p)},u.appendChild(l)):o("\u8BF7\u586B\u5199key")}else if(t.AMap==e.loaded)if(n.key&&n.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(n.version&&n.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{if(i=[],n.plugins)for(u=0;u<n.plugins.length;u+=1)a.AMap.plugins.indexOf(n.plugins[u])==-1&&i.push(n.plugins[u]);i.length?window.AMap.plugin(i,function(){f(n).then(function(){d(window.AMap)}).catch(o)}):f(n).then(function(){d(window.AMap)}).catch(o)}else if(n.key&&n.key!==a.key)o("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");else if(n.version&&n.version!==a.AMap.version)o("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");else{var s=[];if(n.plugins)for(u=0;u<n.plugins.length;u+=1)a.AMap.plugins.indexOf(n.plugins[u])==-1&&s.push(n.plugins[u]);I(function(){s.length?window.AMap.plugin(s,function(){f(n).then(function(){d(window.AMap)}).catch(o)}):f(n).then(function(){d(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:e.notload,AMapUI:e.notload,Loca:e.notload},r={AMap:[],AMapUI:[],Loca:[]}}}})},74689:function(g,f,c){c.r(f);var w=c(67294),e=c(81618),a=c.n(e),t=c(59841),r=c(85893),M=function(){return a().load({key:"23a5695cd162362078296f5396472fa6",version:"2.0",plugins:[]}).then(function(n){var d=new n.Map("container",{zoom:11,center:[106.54041,29.40268]});(0,t.request)("http://localhost:8080/bridge/getColAndRow.api",{method:"POST"}).then(function(o){console.log(o);for(var i=0;i<o.length;i++){var u=new n.Marker({position:new n.LngLat(o[i].col,o[i].row),title:o[i].bridgeName});d.add(u)}})}).catch(function(n){console.log(n)}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"container",style:{width:"100%",height:"100%"}})})};f.default=M}}]);