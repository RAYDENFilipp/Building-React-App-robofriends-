(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(19),i=n.n(a),c=n(7),s=n(2),l=n(21),u=n(22),h=(n(36),n(4)),d=n(5),f=n(8),b=n(6),g=n(9),p=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))},m=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(p,{key:t,id:e.id,name:e.name,email:e.email})}))},E=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},w=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(r.Component),O=(n(37),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?o.a.createElement("div",{className:"flex h-100 justify-center items-center"},o.a.createElement("h1",null,"Loading")):o.a.createElement("div",{className:"tc fixed w-100"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(E,{searchChange:n}),o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(m,{robots:i}))))}}]),t}(r.Component)),y=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(O),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=n(10),C={searchField:""},k={isPending:!1,robots:[],error:""},_=(n(38),Object(l.createLogger)()),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload;switch(n){case"REQUEST_ROBOTS_PENDING":return Object(S.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)({},e,{robots:r,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(S.a)({},e,{error:r,isPending:!1});default:return e}}}),N=Object(s.d)(T,Object(s.a)(u.a,_));i.a.render(o.a.createElement(c.a,{store:N},o.a.createElement(y,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");R?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.0763826a.chunk.js.map