(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{255:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=(t(249),t(65),t(265),t(266),t(267),t(251)),l=t(250),c=t(268);class i extends r.a.PureComponent{constructor(...e){var a,t,n;super(...e),n={from:"top-bottom",to:"bottom-top",timing:"expoIn",direct:!0,props:{"--pat-ty":{from:"20%",to:"-20%"}}},(t="sealConfig")in(a=this)?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}render(){return r.a.createElement("main",{className:"transcend"},r.a.createElement(s.a,null),r.a.createElement("section",{className:"section section--hero"},r.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),r.a.createElement(l.a,{heading:"Transcend",pill:"Design • Branding"})),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"02"),r.a.createElement("div",{className:"case-study__row"},r.a.createElement(c.a,{svg:"/images/transcend/seal.svg",alt:"Logo",className:"transcend__logo"})),r.a.createElement("div",{className:"case-study__row"},r.a.createElement(c.a,{svg:"/images/transcend/alt-mark.svg",alt:"Alternate Mark",className:"transcend__logo"}))))}}a.default=i},264:function(e,a,t){var n;t(66),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===s)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},265:function(e,a,t){"use strict";var n,r,s,l=t(0),c=t.n(l),i=t(264),o=t.n(i);class m extends c.a.PureComponent{render(){const{image:e,webp:a,alt:t,styleBlock:n,modifier:r,span:s,noFill:l,shift:i}=this.props;return c.a.createElement("figure",{className:o()("revealer__figure revealer--no-animation",{[`${n}__figure`]:n,[`${n}__figure--${r}`]:n&&r,[`revealer--span-${s}`]:s,[`revealer--shift-${i}`]:i,"revealer--no-fill":l})},!l&&c.a.createElement("div",{className:`\n                                ${n}__figure-fill\n                                ${n}__figure-fill--${r}\n                                revealer__figure-fill\n                            `}),c.a.createElement("picture",null,a&&c.a.createElement("source",{srcSet:a,type:"image/webp"}),c.a.createElement("source",{srcSet:e}),c.a.createElement("img",{src:e,alt:t,className:`\n                            ${n}__image\n                            ${n}__image--${r}\n                            revealer__image`})))}}s={span:3},(r="defaultProps")in(n=m)?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,a.a=m},266:function(e,a,t){"use strict";var n=t(0),r=t.n(n);t(249);r.a.PureComponent},267:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(264),l=t.n(s);class c extends r.a.PureComponent{render(){const{heading:e,text:a}=this.props;return r.a.createElement("li",{className:l()({[`shift-${this.props.shift}`]:this.props.shift})},r.a.createElement("div",{className:"callouts__heading-container"},e&&r.a.createElement("h6",{className:"callouts__heading",ref:this.heading},e),r.a.createElement("div",{className:"callouts__heading-fill",ref:this.fill}),r.a.createElement("div",{className:"callouts__heading-accent",ref:this.accent}),r.a.createElement("div",{className:"callouts__heading-anchor"})),r.a.createElement("p",{className:"callouts__text"},a))}}a.a=c},268:function(e,a,t){"use strict";var n=t(0),r=t.n(n);class s extends r.a.PureComponent{render(){const{path:e,alt:a,className:t,svg:n}=this.props;return n?r.a.createElement("img",{src:n,alt:a,className:t}):r.a.createElement("picture",null,r.a.createElement("source",{srcSet:`${e}.webp`,type:"image/webp"}),r.a.createElement("source",{srcSet:`${e}.png`,type:"image/png"}),r.a.createElement("img",{src:`${e}.png`,alt:a,className:t}))}}a.a=s}}]);
//# sourceMappingURL=component---src-pages-transcend-js-8562612e17afff7eba6f.js.map