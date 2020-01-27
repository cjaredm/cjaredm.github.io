(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{203:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(208),o=t(214),c=t.n(o),i=t(211),s=t(215),m=t(216),u=t.n(m),d=t(217),E=t.n(d),p=t(218),h=t.n(p);a.default=function(e){return l.a.createElement(i.a,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"cJaredm - Portfolio"),l.a.createElement("meta",{name:"description",content:"Portfolio of coding projects for cJaredm"})),l.a.createElement(s.a,{title:"Code Portfolio",description:"This is a short list of the prominent and interesting projects you can browse to learn more about how I code."}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one",className:"spotlights"},l.a.createElement("section",null,l.a.createElement(r.a,{to:"/portfolio/my-shop-analytics",className:"image"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"MyShopAnalytics.com")),l.a.createElement("p",null,"Front and backend machine shop order, part and operation tracker currently being used daily by Alphaeus Manufacturing LLC"),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/portfolio/my-shop-analytics",className:"button"},"Learn more")))))),l.a.createElement("section",null,l.a.createElement(r.a,{to:"/portfolio/pos-system",className:"image"},l.a.createElement("img",{src:u.a,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Runway Fashion POS")),l.a.createElement("p",null,"React Native point of sale system made for iOS to be used with clothing resellers. Runway Fashion Exchange is currently working with us as our first user."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/portfolio/pos-system",className:"button"},"Learn more")))))),l.a.createElement("section",null,l.a.createElement(r.a,{to:"/portfolio/in-theaters-soon",className:"image"},l.a.createElement("img",{src:E.a,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"In Theaters Soon!")),l.a.createElement("p",null,"First React Native app used to learn RN. Connects to TheMovieDatabase api to show all and only upcoming movie trailers."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/portfolio/in-theaters-soon",className:"button"},"Learn more")))))),l.a.createElement("section",null,l.a.createElement(r.a,{to:"/portfolio/dev-blog",className:"image"},l.a.createElement("img",{src:E.a,alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,"Dev Blog")),l.a.createElement("p",null,"This portfolio site began as my first Gatsby Static Blog. I started it on Github Pages and transitioned over to my own custom domain using Netlify."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/portfolio/dev-blog",className:"button"},"Learn more")))))))))}},208:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(66),o=t.n(r);t.d(a,"a",function(){return o.a});t(210),t(9).default.enqueue,l.a.createContext({})},210:function(e,a,t){var n;e.exports=(n=t(213))&&n.default||n},211:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(208),o=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(r.a,{to:"/",className:"logo"},l.a.createElement("strong",null,"cJaredm")," ",l.a.createElement("span",null,"Frontend Developer")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu},"Menu")))},c=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(r.a,{onClick:e.onToggleMenu,to:"/blog"},"Blog")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu},"Close"))},i=t(212),s=t(209),m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement(i.a,null),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© cJaredm"),l.a.createElement("li",null,"GatsbyTheme: ",l.a.createElement(u,{href:"https://html5up.net"},"HTML5 UP")))))},u=s.a.a.withConfig({displayName:"Footer__A",componentId:"sc-51o8k3-0"})(["box-shadow:0 0 0 0;"]);t(194);var d=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},r.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(o,{onToggleMenu:this.handleToggleMenu})," ",e," ",l.a.createElement(m,null)),l.a.createElement(c,{onToggleMenu:this.handleToggleMenu}))},n}(l.a.Component);a.a=d},212:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(0),l=t.n(n);function r(e){var a=e.className;return l.a.createElement("ul",{className:"icons "+a},l.a.createElement("li",null,l.a.createElement(o,{href:"https://twitter.com/cjaredm",className:"icon alt fa-twitter",title:"Twitter"},l.a.createElement("span",{className:"label"},"Twitter")," ")),l.a.createElement("li",null,l.a.createElement(o,{href:"https://github.com/cjaredm",className:"icon alt fa-github",title:"GitHub"},l.a.createElement("span",{className:"label"},"GitHub")," ")),l.a.createElement("li",null,l.a.createElement(o,{href:"https://www.linkedin.com/in/cjaredm/",className:"icon alt fa-linkedin",title:"LinkedIn"}," ",l.a.createElement("span",{className:"label"},"LinkedIn")," ")),l.a.createElement("li",null,l.a.createElement(o,{href:"mailto:cjaredm@protonmail.com",className:"icon alt fa-envelope",title:"cjaredm@protonmail.com"},l.a.createElement("span",{className:"label"},"Email")," ")))}var o=t(209).a.a.withConfig({displayName:"ContactIcons__A",componentId:"l1t9py-0"})(["box-shadow:0 0 0 0;"])},213:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),r=t(91);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},215:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(209);a.a=function(e){var a=e.img,t=e.title,n=e.content,r=e.height,c=e.className;return l.a.createElement(o,{img:a,id:"banner",className:"major "+c,height:r},l.a.createElement("div",{className:"inner"},l.a.createElement("div",{className:"banner-wrapper"},l.a.createElement("div",null,l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,t)),l.a.createElement("div",{className:"content"},n)))))};var o=r.a.section.withConfig({displayName:"Hero__Section",componentId:"sc-5hrsgb-0"})(["background:url(",") no-repeat center center fixed;background-size:cover;min-height:"," !important;"],function(e){return e.img},function(e){var a=e.height;return a||"auto"})},216:function(e,a,t){e.exports=t.p+"static/pic09-d59e4b49832baeb9c62a7a9d6c070f8c.jpg"},217:function(e,a,t){e.exports=t.p+"static/pic10-fc2217a3259dbe4bf90380771114f39c.jpg"},218:function(e,a,t){e.exports=t.p+"static/MyShopAnalytics-0fe1fcba589c6bfb3171ccd7118927d2.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-index-js-08730bf99cf18be46a69.js.map