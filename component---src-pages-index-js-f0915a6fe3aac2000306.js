(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),i=a.n(n),r=a(278),l=a(126),o=a(279),s=[{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"},{slug:"two-bards",thumbnail:"/images/two-bards/two-bards-seal--mark-only.svg",categories:["Logo Design","Branding"],title:"Two Bards"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"barton-malow",thumbnail:"/images/barton-malow/laptop-homepage.png",categories:["Design","Development"],title:"Barton Malow"},{slug:"transcend",thumbnail:"/images/transcend/alt-mark.svg",categories:["Logo Design","Branding"],title:"Transcend"},{slug:"ripple-cube",video:"/images/ripple-cube/ripplebox.export.mp4",categories:["threejs","experiment"],title:"Ripple Cube"}];t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:"Portfolio"}),i.a.createElement("section",{className:"section section--hero section--index"},i.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),i.a.createElement(l.a,{pill:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"ポートフォリオ"),i.a.createElement("div",{className:"masthead__timespan"},"'18–'19")),heading:i.a.createElement(i.a.Fragment,null,"St",i.a.createElement("em",null,"e"),"v",i.a.createElement("em",null,"e"),"n D",i.a.createElement("em",null,"a"),"n",i.a.createElement("em",null,"a")),text:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"masthead__textline masthead__textline--large"},"Design & Development"),i.a.createElement("div",{className:"masthead__textline masthead__textline--medium"},"Selected Work")),hasBackButton:!1})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"section__indicator"},"02"),i.a.createElement("ul",{className:"work"},s.map((function(e,t){return i.a.createElement(r.a,Object.assign({},e,{upNext:s[t>0?t-1:s.length-1],key:t}))})))))}},278:function(e,t,a){"use strict";a(56),a(17),a(10);var n=a(0),i=a.n(n),r=a(76),l=a(34),o=a(68);var s=function(e){var t,a;function n(){for(var t,a,n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=e.call.apply(e,[this].concat(o))||this).state={hasEntered:!1},n.shutters=i.a.createRef(),n.thumbnail=i.a.createRef(),n.figure=i.a.createRef(),n.title=i.a.createRef(),n.listItem=i.a.createRef(),n.text=i.a.createRef(),n.titleScrollConfig={from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,inside:function(){return n.onEnter()},props:(t={},t["--title-opacity"]={from:0,to:.99},t["--title-ty"]={from:"-20px",to:"0px"},t["--title-accent-scale"]={from:0,to:1},t["--title-accent-ty"]={from:"20px",to:"0px"},t)},n.listItemScrollConfig={from:"top-bottom",to:"bottom-top",timing:"expoOut",direct:!0,props:(a={},a["--image-opacity"]={from:.5,to:.99},a["--thumbnail-ty"]={from:"60px",to:"-60px"},a)},n.componentWillUnmount=function(){n.titleScroll.destroy(),n.listItemScroll.destroy()},n.onEnter=function(){n.state.hasEntered||(n.setState({hasEntered:!0}),n.shutters.current&&Object(l.a)({easing:"easeOutExpo",targets:n.shutters.current.children,scaleY:[1,0],duration:1650,delay:l.a.stagger(100)}),Object(l.a)({easing:"easeOutExpo",targets:n.thumbnail.current,opacity:[.01,1],duration:0}),Object(l.a)({easing:"easeOutExpo",targets:n.text.current,opacity:[.01,1],duration:750,delay:750,complete:function(){n.listItem.current&&n.listItem.current.classList.add("work--entered")}}))},n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){var e=this;this.titleScroll=o.create(Object.assign({elem:this.title.current},this.titleScrollConfig)),this.listItemScroll=o.create(Object.assign({elem:this.listItem.current},this.listItemScrollConfig)),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",(function(){e.titleScroll.calculate(),e.titleScroll.update(),e.listItemScroll.calculate(),e.listItemScroll.update()}))},s.render=function(){var e=this.props,t=e.slug,a=e.thumbnail,n=e.video,l=e.categories,o=e.title,s=e.subtitle;this.state.hasEntered;return i.a.createElement("li",{"data-trigger":t,ref:this.listItem},i.a.createElement(r.Link,{className:"work__main",to:"/"+t+"/",ref:this.figure},i.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},i.a.createElement("ul",{className:"work__shutters",ref:this.shutters},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("div",{className:"work__thumbnail-container"},a&&i.a.createElement("img",{className:"\n                                        work__thumbnail\n                                        work__thumbnail--"+t+"\n                                    ",src:a,alt:o}),n&&!a&&i.a.createElement("div",{className:"video work__video"},i.a.createElement("video",{className:"video__video",autoPlay:!0,playsInline:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:n})))),i.a.createElement("div",{className:"work__text",ref:this.text},i.a.createElement("div",{className:"work__category"},l.map((function(e,t){return t+1===l.length?e:e+" • "}))),i.a.createElement("button",{className:"work__title",ref:this.title},i.a.createElement("div",null,o),s&&i.a.createElement("em",null,s)))))},n}(i.a.PureComponent);t.a=s},279:function(e,t,a){"use strict";var n=a(127),i=a(0),r=a.n(i),l=a(128),o=a.n(l);function s(e){var t=e.description,a=e.image,i=e.lang,l=e.meta,s=e.title,c=n.data.site,m=t||c.siteMetadata.description,u=a||c.siteMetadata.image;return r.a.createElement(o.a,{htmlAttributes:{lang:i},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"image",content:u},{property:"og:image",content:u},{property:"twitter:image",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(l)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-f0915a6fe3aac2000306.js.map