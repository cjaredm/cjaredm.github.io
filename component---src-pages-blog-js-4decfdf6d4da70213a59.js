(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3deL":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=a("vOnD");function l(t){var e=t.posts,a=void 0===e?[]:e,n=t.defaultImage;return a.length?i.a.createElement(d,null,a.map((function(t){return i.a.createElement("li",{key:t.route+t.strapiId},i.a.createElement(s,{post:t,defaultImage:n}))}))):null}var d=o.a.ul.withConfig({displayName:"post-parts__PostListWrapper",componentId:"dzpcq3-0"})(["max-width:1140px;margin:0 auto 50px;padding:0;display:flex;flex-wrap:wrap;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));@media (min-width:756px){grid-gap:40px;}li{list-style:none;margin:0 auto;padding:0;}"]);function s(t){var e,a,n,o,l,d=t.post,s=t.defaultImage,m=null==d||null===(e=d.image)||void 0===e||null===(a=e.childImageSharp)||void 0===a||null===(n=a.fluid)||void 0===n?void 0:n.srcSet,u=null==s||null===(o=s.childImageSharp)||void 0===o||null===(l=o.fluid)||void 0===l?void 0:l.srcSet;return i.a.createElement(r.Link,{to:d.route,key:d.strapiId},i.a.createElement(c,null,i.a.createElement("img",{className:"post-car__img",src:"",srcSet:m||u,alt:""}),i.a.createElement(p,{className:"major"},i.a.createElement("h2",null,d.title)),i.a.createElement("time",null,d.date),i.a.createElement("p",null,d.synopsis)))}var p=o.a.header.withConfig({displayName:"post-parts__Header",componentId:"dzpcq3-1"})(["margin-bottom:0 !important;"]),c=o.a.div.withConfig({displayName:"post-parts__PostCardWrapper",componentId:"dzpcq3-2"})(["width:auto;height:100%;flex:1;border-radius:5px;margin:0 20px 20px;padding:20px;transition:transform 500ms;@media (min-width:756px){}&:hover{transform:scale(1.05);box-shadow:2px 3px 6px black;}.post-car__img{object-fit:cover;width:100%;height:200px;}time{font-size:14px;}"])},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"cJaredm Dev Blog","description":"Portfolio and Dev Blog for cJaredm","author":"Jared Mortenson"}}}}')},vrFN:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a("EH9Q"),i=a("q1tI"),r=a.n(i),o=a("TJpk"),l=a.n(o);function d(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,d=t.title,s=n.data.site,p=e||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""}},vx99:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return d})),a.d(e,"pageQuery",(function(){return s}));var n=a("q1tI"),i=a.n(n),r=a("3deL"),o=a("Bl7J"),l=a("vrFN");function d(t){var e,a,n=t.data,d=null==n||null===(e=n.site)||void 0===e?void 0:e.siteName,s=n.posts.nodes,p=null==n||null===(a=n.defaults)||void 0===a?void 0:a.postImage;return i.a.createElement(o.a,{location:t.location,title:d},i.a.createElement(l.a,{title:"Dev Blog",description:""}),i.a.createElement("h1",{className:"section-title"},"<Dev Blog />"),i.a.createElement(r.a,{posts:s,defaultImage:p}))}var s="3399497013"}}]);
//# sourceMappingURL=component---src-pages-blog-js-4decfdf6d4da70213a59.js.map