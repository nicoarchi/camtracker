(this.webpackJsonpcamtrackerapp=this.webpackJsonpcamtrackerapp||[]).push([[0],{100:function(e,t){},111:function(e,t){},114:function(e,t){},115:function(e,t){},120:function(e,t,n){},121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r=n(18),a=n.n(r),c=n(64),o=n.n(c),s=(n(91),n(92),n(48)),i=n(23),l=(n(93),n(94),n(65)),u=n.n(l),d=function(e){return a.a.createElement("div",{className:"head"},a.a.createElement("img",{src:u.a,className:"bannerLogo",alt:"Camtracker"}))},m=n(17),f=n(2),b=n.n(f),p=n(10),v=n(7),E=(n(96),n(85)),h=(n(122),function(e){var t=Object(r.useState)([]),n=Object(v.a)(t,2),c=n[0],o=n[1],i=Object(r.useRef)(null),l=Object(r.useRef)(null),u=Object(r.useRef)(null),d=a.a.useState(!1),f=Object(v.a)(d,2),h=f[0],g=f[1],w=Object(r.useRef)(null),x=Object(r.useRef)(null),F=Object(r.useRef)(!1),C=Object(r.useRef)([]),P=Object(r.useRef)(null);function A(){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.current){e.next=3;break}return I(),e.abrupt("return");case 3:return e.next=5,x.current.detect(i.current);case 5:for(t=e.sent,n=!1,r=0;r<t.length;r++)"person"===t[r].class&&(n=!0);n?(j(),C.current.push(!0)):C.current.filter(Boolean).length?(j(),C.current.push(!1)):I(),C.current=C.current.slice(Math.max(C.current.length-10,0)),requestAnimationFrame((function(){A()}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){F.current||(F.current=!0,console.log("Start recording"),P.current=new MediaRecorder(window.stream),P.current.ondataavailable=function(e){var t=new Date+"",n=URL.createObjectURL(e.data);o((function(e){return[].concat(Object(m.a)(e),[{href:n,title:t}])}))},P.current.start())}function I(){F.current&&(F.current=!1,P.current.stop(),console.log("Stopped recording"),C.current=[])}return Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.current.setAttribute("disabled",!0),u.current.setAttribute("disabled",!0),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=19;break}return e.prev=3,e.next=6,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 6:return t=e.sent,window.stream=t,i.current.srcObject=t,e.next=11,E.a();case 11:n=e.sent,x.current=n,l.current.removeAttribute("disabled"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("video",{className:"video",autoPlay:!0,muted:!0,playsInline:!0,ref:i})),a.a.createElement("div",{className:"textMain"},"Don't minimize the web app. Leave the app running in a maximized window (may be in the background)"),a.a.createElement("div",{className:"botonesMain"},a.a.createElement("button",{className:"btnStart",onClick:function(){w.current=!0,u.current.removeAttribute("disabled"),l.current.setAttribute("disabled",!0),A(),console.log("Start")},ref:l},"Start"),a.a.createElement("button",{className:"btnStop",onClick:function(){w.current=!1,l.current.removeAttribute("disabled"),u.current.setAttribute("disabled",!0),I(),console.log("Stop")},ref:u},"Stop"),a.a.createElement("button",{className:"btnRecords",onClick:function(){return g(!h)}},h?"Hide":"Show"," Records"),a.a.createElement(s.b,{to:"/about",className:"btnAbout"},"About")),h&&a.a.createElement("div",{className:"seccionRecords"},a.a.createElement("div",{className:"textMain"},"Download your records, these will disappear once the window is closed."),a.a.createElement("div",{className:"tituloRecords"},"Records:"),c.length?c.map((function(e){return a.a.createElement("div",{className:"card mt-3 w-100",key:e.title},a.a.createElement("div",{className:"card-body"},a.a.createElement("h5",{className:"card-title"},e.title),a.a.createElement("video",{controls:!0,src:e.href})))})):null))}),g=function(e){return a.a.createElement("div",{className:"container"},a.a.createElement(d,null),a.a.createElement(h,null))},w=(n(120),n(121),function(e){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"textAbout1"},"Created by N. Architector"),a.a.createElement("div",{className:"textAbout2"},"For any information contact me."),a.a.createElement("div",{className:"botones"},a.a.createElement("a",{href:"https://www.linkedin.com/in/nicoarchi",className:"botonAzul",target:"_blank",rel:"noopener noreferrer"},"Linkedin"),a.a.createElement("a",{href:"https://github.com/nicoarchi",className:"botonAzul",target:"_blank",rel:"noopener noreferrer"},"GitHub"),a.a.createElement(s.b,{to:"/",className:"botonAmarillo"},"Back to App")))}),x=function(e){return a.a.createElement("div",{className:"container"},a.a.createElement(d,null),a.a.createElement(w,null))};var F=function(){return a.a.createElement(s.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(i.a,{exact:!0,path:"/",component:g}),a.a.createElement(i.a,{exact:!0,path:"/about",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t){e.exports="data:image/png;base64,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"},86:function(e,t,n){e.exports=n(123)},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},99:function(e,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.fb21b145.chunk.js.map