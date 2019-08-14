(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{206:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(210),o=n(212),i=n(232),c=n(215),s=n.n(c);function u(e){var t=e.description,n=e.lang,a=e.meta,l=e.keywords,o=e.title,c=i.data.site,u=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(a)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""};var m=u,d=n(238),p=n.n(d),f=n(240),h=n.n(f);h.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete h.a.googleFonts;var g=new p.a(h.a);var E=g.rhythm,v=g.scale,w=n(208);function b(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n"]);return b=function(){return e},e}function y(e){var t=e.previous,n=e.next;return r.a.createElement(M,null,r.a.createElement("li",null,t&&r.a.createElement(w.a,{to:t.fields.slug,rel:"prev"},"← ",t.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(w.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))}var M=l.a.ul(b());function k(){var e=x(["\n  display: block;\n  margin: 10px 0 "," 0;\n"]);return k=function(){return e},e}function T(){var e=x(["\n  border-bottom: solid 1px white;\n  margin-bottom: ",";\n"]);return T=function(){return e},e}function N(){var e=x(["\n  padding: 1em 0 1em 0;\n  margin: 0 auto;\n  max-width: 65em;\n  width: calc(100% - 6em);\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    margin: 0;\n  }\n  img {\n    display: block;\n    margin: 0 auto;\n  }\n"]);return N=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"pageQuery",function(){return C});var j=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,l=n.next;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(_,null,r.a.createElement(m,{title:e.frontmatter.title,description:e.excerpt}),r.a.createElement("h1",null,e.frontmatter.title),r.a.createElement(I,{css:Object.assign({},v(-.2))},e.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement(J,null),r.a.createElement(y,{next:l,previous:a})))},a}(r.a.Component),C=(t.default=j,"2761936148"),_=l.a.div(N()),J=l.a.hr(T(),E(1)),I=l.a.p(k(),E(1))},208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(66),o=n.n(l);n.d(t,"a",function(){return o.a});n(209),n(7).default.enqueue,r.a.createContext({})},209:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},211:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  box-shadow: 0 0 0 0;\n"]);return l=function(){return e},e}function o(e){var t=e.className;return r.a.createElement("ul",{className:"icons "+t},r.a.createElement("li",null,r.a.createElement(i,{href:"https://twitter.com/cjaredm",className:"icon alt fa-twitter",title:"Twitter"},r.a.createElement("span",{className:"label"},"Twitter")," ")),r.a.createElement("li",null,r.a.createElement(i,{href:"https://github.com/cjaredm",className:"icon alt fa-github",title:"GitHub"},r.a.createElement("span",{className:"label"},"GitHub")," ")),r.a.createElement("li",null,r.a.createElement(i,{href:"https://www.linkedin.com/in/cjaredm/",className:"icon alt fa-linkedin",title:"LinkedIn"}," ",r.a.createElement("span",{className:"label"},"LinkedIn")," ")),r.a.createElement("li",null,r.a.createElement(i,{href:"mailto:cjaredm@protonmail.com",className:"icon alt fa-envelope",title:"cjaredm@protonmail.com"},r.a.createElement("span",{className:"label"},"Email")," ")))}var i=n(210).a.a(l())},212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(208),o=function(e){return r.a.createElement("header",{id:"header",className:"alt"},r.a.createElement(l.a,{to:"/",className:"logo"},r.a.createElement("strong",null,"cJaredm")," ",r.a.createElement("span",null,"Frontend Developer")),r.a.createElement("nav",null,r.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu},"Menu")))},i=function(e){return r.a.createElement("nav",{id:"menu"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement(l.a,{onClick:e.onToggleMenu,to:"/blog"},"Blog")))),r.a.createElement("a",{className:"close",onClick:e.onToggleMenu},"Close"))},c=n(211),s=n(210);function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  box-shadow: 0 0 0 0;\n"]);return u=function(){return e},e}var m=function(e){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement(c.a,null),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© cJaredm"),r.a.createElement("li",null,"GatsbyTheme: ",r.a.createElement(d,{href:"https://html5up.net"},"HTML5 UP")))))},d=s.a.a(u());n(194);var p=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},n.handleToggleMenu=n.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},l.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},l.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},r.a.createElement("div",{id:"wrapper"},r.a.createElement(o,{onToggleMenu:this.handleToggleMenu})," ",e," ",r.a.createElement(m,null)),r.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},a}(r.a.Component);t.a=p},213:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),l=n(91);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null}},232:function(e){e.exports={data:{site:{siteMetadata:{title:"cJaredm Dev Blog",description:"Portfolio and Dev Blog for cJaredm",author:"Jared Mortenson"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-518170b824e86c5fdc94.js.map