(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1oc3":function(e,t,a){"use strict";var n=a("cNtr"),c=a("q1tI"),r=a.n(c),i=a("vOnD");t.a=function(e){var t=e.imgUrl,a=e.name,c=e.content,i=n.data.defaults,o=t||i.postImage.childImageSharp.fluid.src;return r.a.createElement(l,{imgUrl:o,id:"banner",className:"major"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"banner-wrapper"},r.a.createElement("div",null,r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,a)),r.a.createElement("div",{className:"content"},c)))))};var l=i.a.section.withConfig({displayName:"Hero__Section",componentId:"sc-5hrsgb-0"})(["background:url(",") no-repeat center center fixed;background-size:cover;min-height:auto !important;"],(function(e){return e.imgUrl}))},cNtr:function(e){e.exports=JSON.parse('{"data":{"defaults":{"postImage":{"childImageSharp":{"fluid":{"src":"/static/f80269153379c1038dc706360665c483/14b42/57ccb0e75a8f98e0f484c17e2122f0fd.jpg","srcSet":"/static/f80269153379c1038dc706360665c483/f836f/57ccb0e75a8f98e0f484c17e2122f0fd.jpg 200w,\\n/static/f80269153379c1038dc706360665c483/2244e/57ccb0e75a8f98e0f484c17e2122f0fd.jpg 400w,\\n/static/f80269153379c1038dc706360665c483/14b42/57ccb0e75a8f98e0f484c17e2122f0fd.jpg 800w,\\n/static/f80269153379c1038dc706360665c483/47498/57ccb0e75a8f98e0f484c17e2122f0fd.jpg 1200w,\\n/static/f80269153379c1038dc706360665c483/0e329/57ccb0e75a8f98e0f484c17e2122f0fd.jpg 1600w"}}}}}}')},"fGr+":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));a("E5k/");var n=a("q1tI"),c=a.n(n),r=a("vOnD"),i=a("IujW"),l=a.n(i),o=a("vrFN"),s=a("Bl7J"),m=a("1oc3");function d(e){var t=e.items,a=e.indexSelected,n=void 0===a?0:a,r=c.a.useState(n),i=r[0],l=r[1],o=t.length>1;return c.a.createElement(u,null,o&&c.a.createElement(p,{onClick:function(){return l(0===i?t.length-1:i-1)}},"Prev"),c.a.createElement(f,null,t[i]),o&&c.a.createElement(h,{onClick:function(){return i===t.length-1?l(0):l(i+1)}},"Next"))}var u=r.a.div.withConfig({displayName:"Carousel__Wrapper",componentId:"va8p3c-0"})(["position:relative;width:inherit;height:inherit;"]),f=r.a.div.withConfig({displayName:"Carousel__Container",componentId:"va8p3c-1"})(["height:inherit;display:flex;img{max-width:90%;max-height:90%;margin:0 auto;align-self:center;}"]),p=r.a.button.withConfig({displayName:"Carousel__LBtn",componentId:"va8p3c-2"})(["position:absolute;top:50%;left:0;transform:translateY(-50%);background-color:white;"]),h=r.a.button.withConfig({displayName:"Carousel__RBtn",componentId:"va8p3c-3"})(["position:absolute;top:50%;right:0;transform:translateY(-50%);background-color:white;"]);t.default=function(e){var t=e.data.item,a=void 0===t?{}:t;return c.a.createElement(s.a,null,(function(e){var t,n=e.setModal;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"cJaredm - "+a.name,description:a.excerpt}),c.a.createElement(m.a,{imgUrl:null==a||null===(t=a.screenshots)||void 0===t?void 0:t.publicUrl,name:a.name,content:a.description}),c.a.createElement("div",{id:"main",className:"alt"},c.a.createElement(v,{id:"one"},c.a.createElement("div",{className:"inner"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Tech Stack")))),c.a.createElement(v,{id:"two",color:"#6fc3df"},c.a.createElement("div",{className:"inner"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"What")),c.a.createElement(l.a,{source:a.description}))),(null==a?void 0:a.screenshots)&&c.a.createElement(v,{id:"three",color:"#8d82c4"},c.a.createElement("div",{className:"inner"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Screenshots")),c.a.createElement("div",{className:"box alt"},c.a.createElement("div",{className:"grid-wrapper"},a.screenshots.map((function(e,t){return c.a.createElement("div",{className:"col-4",key:t+e.url},c.a.createElement("button",{className:"image fit",onClick:function(){return n(c.a.createElement(N,{images:a.screenshots,selected:t}))}},c.a.createElement("img",Object.assign({},b(e,"medium"),{alt:"screenshot",style:{cursor:"pointer"}}))))}))))))))}))};var g="1831234",v=r.a.section.withConfig({displayName:"portfolio-item__Container",componentId:"sc-1t85eu6-0"})(["background-color:",";"],(function(e){return e.color||"white"})),E=r.a.img.withConfig({displayName:"portfolio-item__Image",componentId:"sc-1t85eu6-1"})(["display:flex;"]);function N(e){var t=e.images,a=e.selected;return c.a.createElement(d,{indexSelected:a,items:t.map((function(e,t){return c.a.createElement(E,Object.assign({},b(e,"large"),{alt:"screenshot",key:t+e.url}))}))})}function b(e,t){var a,n,c,r,i,l;void 0===e&&(e={}),void 0===t&&(t="medium");var o=null===(a=e)||void 0===a||null===(n=a.formats)||void 0===n||null===(c=n[t])||void 0===c||null===(r=c.childImageSharp)||void 0===r||null===(i=r.fluid)||void 0===i?void 0:i.srcSet;return{src:o?"":null===(l=e)||void 0===l?void 0:l.url,srcSet:o}}}}]);
//# sourceMappingURL=component---src-templates-portfolio-item-js-6cb26af89e0dd398645e.js.map