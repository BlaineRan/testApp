(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[272],{8212:function(ie,Z,l){"use strict";l.d(Z,{Z:function(){return p}});var v=l(1413),t=l(67294),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},H=R,d=l(27029),f=function(W,J){return t.createElement(d.Z,(0,v.Z)((0,v.Z)({},W),{},{ref:J,icon:H}))};f.displayName="EditOutlined";var p=t.forwardRef(f)},97272:function(ie,Z,l){"use strict";l.d(Z,{Z:function(){return Wt}});var v=l(87462),t=l(67294),R=l(4942),H=l(71002),d=l(29439),f=l(79508),p=l(99165),O=l(8212),W=l(94184),J=l.n(W),le=l(20640),q=l.n(le),S=l(48717),se=l(50344),ce=l(8410),z=l(21770),ue=l(98423),Le=l(42550),Pe=l(53124),lt=l(42051),Oe=l(61580),Ie=l(79370),Me=l(34952),Ne=l(1413),st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ct=st,ut=l(27029),$e=function(r,a){return t.createElement(ut.Z,(0,Ne.Z)((0,Ne.Z)({},r),{},{ref:a,icon:ct}))};$e.displayName="EnterOutlined";var dt=t.forwardRef($e),De=l(15105),ft=l(94418),vt=l(96159),pt=function(r){var a=r.prefixCls,n=r["aria-label"],o=r.className,u=r.style,m=r.direction,y=r.maxLength,P=r.autoSize,I=P===void 0?!0:P,x=r.value,k=r.onSave,A=r.onCancel,F=r.onEnd,b=r.component,K=r.enterIcon,j=K===void 0?t.createElement(dt,null):K,h=t.useRef(),M=t.useRef(!1),G=t.useRef(),w=t.useState(x),ae=(0,d.Z)(w,2),V=ae[0],oe=ae[1];t.useEffect(function(){oe(x)},[x]),t.useEffect(function(){if(h.current&&h.current.resizableTextArea){var E=h.current.resizableTextArea.textArea;E.focus();var C=E.value.length;E.setSelectionRange(C,C)}},[]);var _=function(C){var L=C.target;oe(L.value.replace(/[\n\r]/g,""))},g=function(){M.current=!0},B=function(){M.current=!1},U=function(C){var L=C.keyCode;M.current||(G.current=L)},ee=function(){k(V.trim())},de=function(C){var L=C.keyCode,me=C.ctrlKey,ve=C.altKey,Q=C.metaKey,N=C.shiftKey;G.current===L&&!M.current&&!me&&!ve&&!Q&&!N&&(L===De.Z.ENTER?(ee(),F?.()):L===De.Z.ESC&&A())},te=function(){ee()},fe=b?"".concat(a,"-").concat(b):"",T=J()(a,"".concat(a,"-edit-content"),(0,R.Z)({},"".concat(a,"-rtl"),m==="rtl"),o,fe);return t.createElement("div",{className:T,style:u},t.createElement(ft.Z,{ref:h,maxLength:y,value:V,onChange:_,onKeyDown:U,onKeyUp:de,onCompositionStart:g,onCompositionEnd:B,onBlur:te,"aria-label":n,rows:1,autoSize:I}),j!==null?(0,vt.Tm)(j,{className:"".concat(a,"-edit-content-confirm")}):null)},yt=pt;function Ze(e,r){return t.useMemo(function(){var a=!!e;return[a,(0,v.Z)((0,v.Z)({},r),a&&(0,H.Z)(e)==="object"?e:null)]},[e])}var mt=function(e,r){var a=t.useRef(!1);t.useEffect(function(){a.current?e():a.current=!0},r)},gt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Et=function(r,a){var n=r.prefixCls,o=r.component,u=o===void 0?"article":o,m=r.className,y=r["aria-label"],P=r.setContentRef,I=r.children,x=gt(r,["prefixCls","component","className","aria-label","setContentRef","children"]),k=t.useContext(Pe.E_),A=k.getPrefixCls,F=k.direction,b=a;P&&(b=(0,Le.sQ)(a,P));var K=u,j=A("typography",n),h=J()(j,(0,R.Z)({},"".concat(j,"-rtl"),F==="rtl"),m);return t.createElement(K,(0,v.Z)({className:h,"aria-label":y,ref:b},x),I)},ht=t.forwardRef(Et),Ct=ht,ke=Ct;function Ae(e){var r=(0,H.Z)(e);return r==="string"||r==="number"}function bt(e){var r=0;return e.forEach(function(a){Ae(a)?r+=String(a).length:r+=1}),r}function je(e,r){for(var a=0,n=[],o=0;o<e.length;o+=1){if(a===r)return n;var u=e[o],m=Ae(u),y=m?String(u).length:1,P=a+y;if(P>r){var I=r-a;return n.push(String(u).slice(0,I)),n}n.push(u),a=P}return e}var St=0,Ee=1,ze=2,we=3,Ke=4,xt=function(r){var a=r.enabledMeasure,n=r.children,o=r.text,u=r.width,m=r.rows,y=r.onEllipsis,P=t.useState([0,0,0]),I=(0,d.Z)(P,2),x=I[0],k=I[1],A=t.useState(St),F=(0,d.Z)(A,2),b=F[0],K=F[1],j=(0,d.Z)(x,3),h=j[0],M=j[1],G=j[2],w=t.useState(0),ae=(0,d.Z)(w,2),V=ae[0],oe=ae[1],_=t.useRef(null),g=t.useRef(null),B=t.useMemo(function(){return(0,se.Z)(o)},[o]),U=t.useMemo(function(){return bt(B)},[B]),ee=t.useMemo(function(){return!a||b!==we?n(B,!1):n(je(B,M),M<U)},[a,b,n,B,M,U]);(0,ce.Z)(function(){a&&u&&U&&(K(Ee),k([0,Math.ceil(U/2),U]))},[a,u,o,U,m]),(0,ce.Z)(function(){var T;b===Ee&&oe(((T=_.current)===null||T===void 0?void 0:T.offsetHeight)||0)},[b]),(0,ce.Z)(function(){var T,E;if(V){if(b===Ee){var C=((T=g.current)===null||T===void 0?void 0:T.offsetHeight)||0,L=m*V;C<=L?(K(Ke),y(!1)):K(ze)}else if(b===ze)if(h!==G){var me=((E=g.current)===null||E===void 0?void 0:E.offsetHeight)||0,ve=m*V,Q=h,N=G;h===G-1?N=h:me<=ve?Q=M:N=M;var Te=Math.ceil((Q+N)/2);k([Q,Te,N])}else K(we),y(!0)}},[b,h,G,m,V]);var de={width:u,whiteSpace:"normal",margin:0,padding:0},te=function(E,C,L){return t.createElement("span",{"aria-hidden":!0,ref:C,style:(0,v.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},L)},E)},fe=function(E,C){var L=je(B,E);return te(n(L,!0),C,de)};return t.createElement(t.Fragment,null,ee,a&&b!==we&&b!==Ke&&t.createElement(t.Fragment,null,te("lg",_,{wordBreak:"keep-all",whiteSpace:"nowrap"}),b===Ee?te(n(B,!1),g,de):fe(M,g)))},Rt=xt,Ot=function(r){var a=r.title,n=r.enabledEllipsis,o=r.isEllipsis,u=r.children;return!a||!n?u:t.createElement(Oe.Z,{title:a,visible:o?void 0:!1},u)},Zt=Ot,wt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};function Tt(e,r){var a=e.mark,n=e.code,o=e.underline,u=e.delete,m=e.strong,y=e.keyboard,P=e.italic,I=r;function x(k,A){!k||(I=t.createElement(A,{},I))}return x(m,"strong"),x(o,"u"),x(u,"del"),x(n,"code"),x(a,"mark"),x(y,"kbd"),x(P,"i"),I}function he(e,r,a){return e===!0||e===void 0?r:e||a&&r}function Be(e){return Array.isArray(e)?e:[e]}var Lt="...",Pt=t.forwardRef(function(e,r){var a=e.prefixCls,n=e.className,o=e.style,u=e.type,m=e.disabled,y=e.children,P=e.ellipsis,I=e.editable,x=e.copyable,k=e.component,A=e.title,F=wt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),b=t.useContext(Pe.E_),K=b.getPrefixCls,j=b.direction,h=(0,lt.E)("Text")[0],M=t.useRef(null),G=t.useRef(null),w=K("typography",a),ae=(0,ue.Z)(F,["mark","code","delete","underline","strong","keyboard","italic"]),V=Ze(I),oe=(0,d.Z)(V,2),_=oe[0],g=oe[1],B=(0,z.Z)(!1,{value:g.editing}),U=(0,d.Z)(B,2),ee=U[0],de=U[1],te=g.triggerType,fe=te===void 0?["icon"]:te,T=function(i){var s;i&&((s=g.onStart)===null||s===void 0||s.call(g)),de(i)};mt(function(){var c;ee||(c=G.current)===null||c===void 0||c.focus()},[ee]);var E=function(i){i?.preventDefault(),T(!0)},C=function(i){var s;(s=g.onChange)===null||s===void 0||s.call(g,i),T(!1)},L=function(){var i;(i=g.onCancel)===null||i===void 0||i.call(g),T(!1)},me=Ze(x),ve=(0,d.Z)(me,2),Q=ve[0],N=ve[1],Te=t.useState(!1),Ue=(0,d.Z)(Te,2),be=Ue[0],He=Ue[1],We=t.useRef(),Fe={};N.format&&(Fe.format=N.format);var Ge=function(){clearTimeout(We.current)},Ft=function(i){var s;i?.preventDefault(),i?.stopPropagation(),q()(N.text||String(y)||"",Fe),He(!0),Ge(),We.current=setTimeout(function(){He(!1)},3e3),(s=N.onCopy)===null||s===void 0||s.call(N,i)};t.useEffect(function(){return Ge},[]);var Gt=t.useState(!1),Je=(0,d.Z)(Gt,2),Ve=Je[0],Jt=Je[1],Vt=t.useState(!1),Qe=(0,d.Z)(Vt,2),Xe=Qe[0],Qt=Qe[1],Xt=t.useState(!1),Ye=(0,d.Z)(Xt,2),Yt=Ye[0],qt=Ye[1],_t=t.useState(!1),qe=(0,d.Z)(_t,2),_e=qe[0],en=qe[1],tn=t.useState(!1),et=(0,d.Z)(tn,2),tt=et[0],nn=et[1],rn=Ze(P,{expandable:!1}),nt=(0,d.Z)(rn,2),ne=nt[0],$=nt[1],X=ne&&!Yt,rt=$.rows,pe=rt===void 0?1:rt,Se=t.useMemo(function(){return!X||$.suffix!==void 0||$.onEllipsis||$.expandable||_||Q},[X,$,_,Q]);(0,ce.Z)(function(){ne&&!Se&&(Jt((0,Ie.G)("webkitLineClamp")),Qt((0,Ie.G)("textOverflow")))},[Se,ne]);var Y=t.useMemo(function(){return Se?!1:pe===1?Xe:Ve},[Se,Xe,Ve]),at=X&&(Y?tt:_e),an=X&&pe===1&&Y,xe=X&&pe>1&&Y,on=function(i){var s;qt(!0),(s=$.onExpand)===null||s===void 0||s.call($,i)},ln=t.useState(0),ot=(0,d.Z)(ln,2),sn=ot[0],cn=ot[1],un=function(i){var s=i.offsetWidth;cn(s)},dn=function(i){var s;en(i),_e!==i&&((s=$.onEllipsis)===null||s===void 0||s.call($,i))};t.useEffect(function(){var c=M.current;if(ne&&Y&&c){var i=xe?c.offsetHeight<c.scrollHeight:c.offsetWidth<c.scrollWidth;tt!==i&&nn(i)}},[ne,Y,y,xe]);var Re=$.tooltip===!0?y:$.tooltip,it=t.useMemo(function(){var c=function(s){return["string","number"].includes((0,H.Z)(s))};if(!(!ne||Y)){if(c(y))return y;if(c(A))return A;if(c(Re))return Re}},[ne,Y,A,Re,at]);if(ee)return t.createElement(yt,{value:typeof y=="string"?y:"",onSave:C,onCancel:L,onEnd:g.onEnd,prefixCls:w,className:n,style:o,direction:j,component:k,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});var fn=function(){var i=$.expandable,s=$.symbol;if(!i)return null;var D;return s?D=s:D=h.expand,t.createElement("a",{key:"expand",className:"".concat(w,"-expand"),onClick:on,"aria-label":h.expand},D)},vn=function(){if(!!_){var i=g.icon,s=g.tooltip,D=(0,se.Z)(s)[0]||h.edit,re=typeof D=="string"?D:"";return fe.includes("icon")?t.createElement(Oe.Z,{key:"edit",title:s===!1?"":D},t.createElement(Me.Z,{ref:G,className:"".concat(w,"-edit"),onClick:E,"aria-label":re},i||t.createElement(O.Z,{role:"button"}))):null}},pn=function(){if(!!Q){var i=N.tooltips,s=N.icon,D=Be(i),re=Be(s),ge=be?he(D[1],h.copied):he(D[0],h.copy),gn=be?h.copied:h.copy,En=typeof ge=="string"?ge:gn;return t.createElement(Oe.Z,{key:"copy",title:ge},t.createElement(Me.Z,{className:J()("".concat(w,"-copy"),be&&"".concat(w,"-copy-success")),onClick:Ft,"aria-label":En},be?he(re[1],t.createElement(f.Z,null),!0):he(re[0],t.createElement(p.Z,null),!0)))}},yn=function(i){return[i&&fn(),vn(),pn()]},mn=function(i){return[i&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Lt),$.suffix,yn(i)]};return t.createElement(S.Z,{onResize:un,disabled:!X||Y},function(c){var i;return t.createElement(Zt,{title:Re,enabledEllipsis:X,isEllipsis:at},t.createElement(ke,(0,v.Z)({className:J()((i={},(0,R.Z)(i,"".concat(w,"-").concat(u),u),(0,R.Z)(i,"".concat(w,"-disabled"),m),(0,R.Z)(i,"".concat(w,"-ellipsis"),ne),(0,R.Z)(i,"".concat(w,"-single-line"),X&&pe===1),(0,R.Z)(i,"".concat(w,"-ellipsis-single-line"),an),(0,R.Z)(i,"".concat(w,"-ellipsis-multiple-line"),xe),i),n),style:(0,v.Z)((0,v.Z)({},o),{WebkitLineClamp:xe?pe:void 0}),component:k,ref:(0,Le.sQ)(c,M,r),direction:j,onClick:fe.includes("text")?E:null,"aria-label":it,title:A},ae),t.createElement(Rt,{enabledMeasure:X&&!Y,text:y,rows:pe,width:sn,onEllipsis:dn},function(s,D){var re=s;s.length&&D&&it&&(re=t.createElement("span",{key:"show-content","aria-hidden":!0},re));var ge=Tt(e,t.createElement(t.Fragment,null,re,mn(D)));return ge})))})}),Ce=Pt,It=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Mt=function(r,a){var n=r.ellipsis,o=r.rel,u=It(r,["ellipsis","rel"]),m=t.useRef(null);t.useImperativeHandle(a,function(){return m.current});var y=(0,v.Z)((0,v.Z)({},u),{rel:o===void 0&&u.target==="_blank"?"noopener noreferrer":o});return delete y.navigate,t.createElement(Ce,(0,v.Z)({},y,{ref:m,ellipsis:!!n,component:"a"}))},Nt=t.forwardRef(Mt),$t=function(r,a){return t.createElement(Ce,(0,v.Z)({ref:a},r,{component:"div"}))},Dt=t.forwardRef($t),kt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},At=function(r,a){var n=r.ellipsis,o=kt(r,["ellipsis"]),u=t.useMemo(function(){return n&&(0,H.Z)(n)==="object"?(0,ue.Z)(n,["expandable","rows"]):n},[n]);return t.createElement(Ce,(0,v.Z)({ref:a},o,{ellipsis:u,component:"span"}))},jt=t.forwardRef(At),zt=l(93355),Kt=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a},Bt=(0,zt.a)(1,2,3,4,5),Ut=function(r,a){var n=r.level,o=n===void 0?1:n,u=Kt(r,["level"]),m;return Bt.indexOf(o)!==-1?m="h".concat(o):m="h1",t.createElement(Ce,(0,v.Z)({ref:a},u,{component:m}))},Ht=t.forwardRef(Ut),ye=ke;ye.Text=jt,ye.Link=Nt,ye.Title=Ht,ye.Paragraph=Dt;var Wt=ye},20640:function(ie,Z,l){"use strict";var v=l(11742),t={"text/plain":"Text","text/html":"Url",default:"Text"},R="Copy to clipboard: #{key}, Enter";function H(f){var p=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return f.replace(/#{\s*key\s*}/g,p)}function d(f,p){var O,W,J,le,q,S,se=!1;p||(p={}),O=p.debug||!1;try{J=v(),le=document.createRange(),q=document.getSelection(),S=document.createElement("span"),S.textContent=f,S.style.all="unset",S.style.position="fixed",S.style.top=0,S.style.clip="rect(0, 0, 0, 0)",S.style.whiteSpace="pre",S.style.webkitUserSelect="text",S.style.MozUserSelect="text",S.style.msUserSelect="text",S.style.userSelect="text",S.addEventListener("copy",function(z){if(z.stopPropagation(),p.format)if(z.preventDefault(),typeof z.clipboardData>"u"){O&&console.warn("unable to use e.clipboardData"),O&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ue=t[p.format]||t.default;window.clipboardData.setData(ue,f)}else z.clipboardData.clearData(),z.clipboardData.setData(p.format,f);p.onCopy&&(z.preventDefault(),p.onCopy(z.clipboardData))}),document.body.appendChild(S),le.selectNodeContents(S),q.addRange(le);var ce=document.execCommand("copy");if(!ce)throw new Error("copy command was unsuccessful");se=!0}catch(z){O&&console.error("unable to copy using execCommand: ",z),O&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(p.format||"text",f),p.onCopy&&p.onCopy(window.clipboardData),se=!0}catch(ue){O&&console.error("unable to copy using clipboardData: ",ue),O&&console.error("falling back to prompt"),W=H("message"in p?p.message:R),window.prompt(W,f)}}finally{q&&(typeof q.removeRange=="function"?q.removeRange(le):q.removeAllRanges()),S&&document.body.removeChild(S),J()}return se}ie.exports=d},79370:function(ie,Z,l){"use strict";l.d(Z,{G:function(){return H}});var v=l(98924),t=function(f){if((0,v.Z)()&&window.document.documentElement){var p=Array.isArray(f)?f:[f],O=window.document.documentElement;return p.some(function(W){return W in O.style})}return!1},R=function(f,p){if(!t(f))return!1;var O=document.createElement("div"),W=O.style[f];return O.style[f]=p,O.style[f]!==W};function H(d,f){return!Array.isArray(d)&&f!==void 0?R(d,f):t(d)}},11742:function(ie){ie.exports=function(){var Z=document.getSelection();if(!Z.rangeCount)return function(){};for(var l=document.activeElement,v=[],t=0;t<Z.rangeCount;t++)v.push(Z.getRangeAt(t));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return Z.removeAllRanges(),function(){Z.type==="Caret"&&Z.removeAllRanges(),Z.rangeCount||v.forEach(function(R){Z.addRange(R)}),l&&l.focus()}}}}]);
