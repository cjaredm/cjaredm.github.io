(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(211);t.default=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},209:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(66),i=a.n(o);a.d(t,"a",function(){return i.a});a(210),a(9).default.enqueue,l.a.createContext({})},210:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},211:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(209),i=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(o.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"cJaredm")," ",l.a.createElement("span",null,"Frontend Developer")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu},"Menu")))},r=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e.onToggleMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e.onToggleMenu,to:"/portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(o.a,{onClick:e.onToggleMenu,to:"/blog"},"Blog")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu},"Close"))},c=a(212),s=a(208),m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement(c.a,null),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© cJaredm"),l.a.createElement("li",null,"GatsbyTheme: ",l.a.createElement(u,{href:"https://html5up.net"},"HTML5 UP")))))},u=s.a.a.withConfig({displayName:"Footer__A",componentId:"sc-51o8k3-0"})(["box-shadow:0 0 0 0;"]),d=(a(194),function(e){var t=e.children,a=e.close;return t?l.a.createElement(h,{id:"modal"},l.a.createElement("div",{className:"inner"},t),l.a.createElement("a",{className:"close",onClick:a},"Close")):null}),h=s.a.div.withConfig({displayName:"Modal__Wrapper",componentId:"drhgbl-0"})(["box-shadow:none;height:100%;width:100%;left:0;top:0;opacity:0;overflow:hidden;padding:3em 2em;position:fixed;background-color:white;margin:auto;"]);var p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setModal=function(e){return a.setState({modal:e})},a.state={isMenuVisible:!1,isModalVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},o.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},o.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},o.render=function(){var e=this,t=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")+" "+(this.state.modal?"modal-is-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(i,{onToggleMenu:this.handleToggleMenu}),"function"==typeof t?t({setModal:this.setModal}):t,l.a.createElement(m,null)),l.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),l.a.createElement(d,{close:function(){return e.setModal(null)},children:this.state.modal}))},n}(l.a.Component);t.a=p},212:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),l=a.n(n);function o(e){var t=e.className;return l.a.createElement("ul",{className:"icons "+t},l.a.createElement("li",null,l.a.createElement(i,{href:"https://twitter.com/cjaredm",className:"icon alt fa-twitter",title:"Twitter"},l.a.createElement("span",{className:"label"},"Twitter")," ")),l.a.createElement("li",null,l.a.createElement(i,{href:"https://github.com/cjaredm",className:"icon alt fa-github",title:"GitHub"},l.a.createElement("span",{className:"label"},"GitHub")," ")),l.a.createElement("li",null,l.a.createElement(i,{href:"https://www.linkedin.com/in/cjaredm/",className:"icon alt fa-linkedin",title:"LinkedIn"}," ",l.a.createElement("span",{className:"label"},"LinkedIn")," ")),l.a.createElement("li",null,l.a.createElement(i,{href:"mailto:cjaredm@protonmail.com",className:"icon alt fa-envelope",title:"cjaredm@protonmail.com"},l.a.createElement("span",{className:"label"},"Email")," ")))}var i=a(208).a.a.withConfig({displayName:"ContactIcons__A",componentId:"l1t9py-0"})(["box-shadow:0 0 0 0;"])},213:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-404-js-4bc2bbdc096cf63756c2.js.map