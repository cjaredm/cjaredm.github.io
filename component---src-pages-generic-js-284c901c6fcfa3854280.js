(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{199:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(214),r=a.n(l),s=a(211),o=a(248),c=a.n(o);t.default=function(e){return i.a.createElement(s.a,null,i.a.createElement(r.a,null,i.a.createElement("title",null,"Generic - Forty by HTML5 UP"),i.a.createElement("meta",{name:"description",content:"Generic Page"})),i.a.createElement("div",{id:"main",className:"alt"},i.a.createElement("section",{id:"one"},i.a.createElement("div",{className:"inner"},i.a.createElement("header",{className:"major"},i.a.createElement("h1",null,"Generic")),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:c.a,alt:""})),i.a.createElement("p",null,"Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula."),i.a.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.")))))}},209:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(66),r=a.n(l);a.d(t,"a",function(){return r.a});a(210),a(9).default.enqueue,i.a.createContext({})},210:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},211:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(209),r=function(e){return i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement(l.a,{to:"/",className:"logo"},i.a.createElement("strong",null,"cJaredm")," ",i.a.createElement("span",null,"Frontend Developer")),i.a.createElement("nav",null,i.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu},"Menu")))},s=function(e){return i.a.createElement("nav",{id:"menu"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"links"},i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/portfolio"},"Portfolio")),i.a.createElement("li",null,i.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/blog"},"Blog")))),i.a.createElement("a",{className:"close",onClick:e.onToggleMenu},"Close"))},o=a(212),c=a(208),m=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"inner"},i.a.createElement(o.a,null),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© cJaredm"),i.a.createElement("li",null,"GatsbyTheme: ",i.a.createElement(u,{href:"https://html5up.net"},"HTML5 UP")))))},u=c.a.a.withConfig({displayName:"Footer__A",componentId:"sc-51o8k3-0"})(["box-shadow:0 0 0 0;"]),d=(a(194),function(e){var t=e.children,a=e.close;return t?i.a.createElement(p,{id:"modal"},i.a.createElement("div",{className:"inner"},t),i.a.createElement("a",{className:"close",onClick:a},"Close")):null}),p=c.a.div.withConfig({displayName:"Modal__Wrapper",componentId:"drhgbl-0"})(["box-shadow:none;height:100%;width:100%;left:0;top:0;opacity:0;overflow:hidden;padding:3em 2em;position:fixed;background-color:white;margin:auto;"]);var f=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setModal=function(e){return a.setState({modal:e})},a.state={isMenuVisible:!1,isModalVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},l.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},l.render=function(){var e=this,t=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")+" "+(this.state.modal?"modal-is-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),"function"==typeof t?t({setModal:this.setModal}):t,i.a.createElement(m,null)),i.a.createElement(s,{onToggleMenu:this.handleToggleMenu}),i.a.createElement(d,{close:function(){return e.setModal(null)},children:this.state.modal}))},n}(i.a.Component);t.a=f},212:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),i=a.n(n);function l(e){var t=e.className;return i.a.createElement("ul",{className:"icons "+t},i.a.createElement("li",null,i.a.createElement(r,{href:"https://twitter.com/cjaredm",className:"icon alt fa-twitter",title:"Twitter"},i.a.createElement("span",{className:"label"},"Twitter")," ")),i.a.createElement("li",null,i.a.createElement(r,{href:"https://github.com/cjaredm",className:"icon alt fa-github",title:"GitHub"},i.a.createElement("span",{className:"label"},"GitHub")," ")),i.a.createElement("li",null,i.a.createElement(r,{href:"https://www.linkedin.com/in/cjaredm/",className:"icon alt fa-linkedin",title:"LinkedIn"}," ",i.a.createElement("span",{className:"label"},"LinkedIn")," ")),i.a.createElement("li",null,i.a.createElement(r,{href:"mailto:cjaredm@protonmail.com",className:"icon alt fa-envelope",title:"cjaredm@protonmail.com"},i.a.createElement("span",{className:"label"},"Email")," ")))}var r=a(208).a.a.withConfig({displayName:"ContactIcons__A",componentId:"l1t9py-0"})(["box-shadow:0 0 0 0;"])},213:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),l=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},248:function(e,t,a){e.exports=a.p+"static/pic11-d9e39c8bf987cfe48a7aff0b47169898.jpg"}}]);
//# sourceMappingURL=component---src-pages-generic-js-284c901c6fcfa3854280.js.map