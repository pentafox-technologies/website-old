(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,n,t){"use strict";var a=t("TqRt");n.__esModule=!0,n.default=void 0;var i,r=a(t("PJYZ")),l=a(t("VbXa")),o=a(t("8OQS")),s=a(t("pVnL")),d=a(t("q1tI")),c=a(t("17x9")),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],g=function(e){var n=(0,s.default)({},e),t=n.resolutions,a=n.sizes,i=n.critical;return t&&(n.fixed=t,delete n.resolutions),a&&(n.fluid=a,delete n.sizes),i&&(n.loading="eager"),n.fluid&&(n.fluid=S([].concat(n.fluid))),n.fixed&&(n.fixed=S([].concat(n.fixed))),n},m=function(e){var n=e.media;return!!n&&(E&&!!window.matchMedia(n).matches)},p=function(e){var n=e.fluid,t=e.fixed,a=f(n||t||[]);return a&&a.src},f=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var n=e.findIndex(m);if(-1!==n)return e[n];var t=e.findIndex((function(e){return void 0===e.media}));if(-1!==t)return e[t]}return e[0]},h=Object.create({}),b=function(e){var n=g(e),t=p(n);return h[t]||!1},x="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var n=e.src,t=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:n},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:r}),t&&d.default.createElement("source",{media:i,srcSet:t,sizes:r}))}))}function S(e){var n=[],t=[];return e.forEach((function(e){return(e.media?n:t).push(e)})),[].concat(n,t)}function k(e){return e.map((function(e){var n=e.src,t=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:n,media:t,srcSet:a})}))}function z(e){return e.map((function(e){var n=e.src,t=e.media,a=e.base64;return d.default.createElement("source",{key:n,media:t,srcSet:a})}))}function I(e,n){var t=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(n?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(n?a:t)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var O=function(e,n){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),n())}}))}),{rootMargin:"200px"})),i);return t&&(t.observe(e),y.set(e,n)),function(){t.unobserve(e),y.delete(e)}},L=function(e){var n=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+o+t+a+n+r+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},F=d.default.forwardRef((function(e,n){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,l=e.ariaHidden,o=d.default.createElement(R,(0,s.default)({ref:n,src:t},r,{ariaHidden:l}));return a.length>1?d.default.createElement("picture",null,i(a),o):o})),R=d.default.forwardRef((function(e,n){var t=e.sizes,a=e.srcSet,i=e.src,r=e.style,l=e.onLoad,c=e.onError,g=e.loading,m=e.draggable,p=e.ariaHidden,f=(0,o.default)(e,u);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:t,srcSet:a,src:i},f,{onLoad:l,onError:c,ref:n,loading:g,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function n(n){var t;(t=e.call(this,n)||this).seenBefore=E&&b(n),t.isCritical="eager"===n.loading||n.critical,t.addNoScript=!(t.isCritical&&!n.fadeIn),t.useIOSupport=!x&&v&&!t.isCritical&&!t.seenBefore;var a=t.isCritical||E&&(x||!t.useIOSupport);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&n.fadeIn,isHydrated:!1},t.imageRef=d.default.createRef(),t.placeholderRef=n.placeholderRef||d.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)(t)),t.handleRef=t.handleRef.bind((0,r.default)(t)),t}(0,l.default)(n,e);var t=n.prototype;return t.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var n=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(n.props);n.state.isVisible||"function"!=typeof n.props.onStartLoad||n.props.onStartLoad({wasCached:e}),n.setState({isVisible:!0},(function(){n.setState({imgLoaded:e,imgCached:!(!n.imageRef.current||!n.imageRef.current.currentSrc)})}))})))},t.handleImageLoaded=function(){var e,n,t;e=this.props,n=g(e),(t=p(n))&&(h[t]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=g(this.props),n=e.title,t=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,x=e.durationFadeIn,E=e.Tag,v=e.itemProp,y=e.loading,S=e.draggable,I=p||h;if(!I)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,s.default)({opacity:O?1:0,transition:N?"opacity "+x+"ms":"none"},o),j="boolean"==typeof b?"lightgray":b,T={transitionDelay:x+"ms"},H=(0,s.default)({opacity:this.state.imgLoaded?0:1},N&&T,o,u),C={title:n,alt:this.state.isVisible?"":t,style:H,className:m,itemProp:v},M=this.state.isHydrated?f(I):I[0];if(p)return d.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),j&&d.default.createElement(E,{"aria-hidden":!0,title:n,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),M.base64&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:I,generateSources:z}),M.tracedSVG&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:I,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(R,{alt:t,title:n,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:t,title:n,loading:y},M,{imageVariants:I}))}}));if(h){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete W.display,d.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},j&&d.default.createElement(E,{"aria-hidden":!0,title:n,style:(0,s.default)({backgroundColor:j,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&T)}),M.base64&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:I,generateSources:z}),M.tracedSVG&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:I,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(R,{alt:t,title:n,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:t,title:n,loading:y},M,{imageVariants:I}))}}))}return null},n}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(n,t,a){var i;if(!n.fixed&&!n.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[t]=e,i),n,"prop",a)}}N.propTypes={resolutions:V,sizes:j,fixed:T(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:T(c.default.oneOfType([j,c.default.arrayOf(j)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=N;n.default=H},RXBc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),r=t("fItr"),l=t("F5Ag"),o=t("Eg6Q"),s=(t("sQfG"),function(e){var n=e.children,t=e.headProps,a=void 0===t?{}:t,s=e.hideLink,d=e.showCareers,c=void 0===d||d;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,a),i.a.createElement(o.a,{showCareers:c,showDarkLogo:!1}),i.a.createElement("div",{className:"content-wrap"},i.a.createElement("main",null,n)),i.a.createElement(r.a,{hideLink:s}))});var d,c=t("Wbzz"),u=t("MUpH"),g=t("vOnD"),m=t("j4+Y"),p=g.b.div(d||(d=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n\n  ","{\n    height: 100vh;\n    min-height: 702px;\n    margin-bottom: 56px;\n  }\n\n  /* common css starts */\n  .left-col, .right-col {\n    overflow: hidden;\n\n    figure {\n      position: relative;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      height: 100%;\n      margin-bottom: 0;\n      display: flex;\n      align-items: flex-end;\n      \n      ","{\n        overflow: hidden;\n        transition: all .75s ease-in-out;\n        backface-visibility: hidden;\n        transform-style: preserve-3d;\n\n        &:before {\n          content: \"\";\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          // background: inherit;\n          transition: inherit;\n        }\n\n        &:hover {\n          &:before {\n            transform: scale(1.2);\n          }\n        }\n\n      }\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        mix-blend-mode: hard-light;\n      }\n\n      figcaption {\n        color: #FFFFFF;\n        width: 100%;\n        z-index: 1;\n        padding: 0 24px 32px;\n\n        ","{\n          padding: 0 112px 24px 24px;\n        }\n\n        h2 {\n          font-size: 18px;\n          line-height: 26px;\n          font-weight: 700;\n          margin: 0;\n\n          "," {\n            font-size: 24px;\n            line-height: 80%;\n            margin-bottom: 8px;\n          }\n        }\n\n        p {\n          margin-bottom: 0;\n\n          ","{\n            font-size: 13px;\n            line-height: 150%;\n          }\n        }\n      }\n    }\n  }\n  /* common css ends */\n  \n  /* left col starts */\n  .left-col {\n    width: 100%;\n    ","{\n      width: 70%;\n    }\n\n    figure {\n      ","{\n        height: 100vh;\n        min-height: 700px;\n      }\n      &:after {\n        background: linear-gradient(180deg, #E64545 0%, #A22121 100%);\n      }\n\n      figcaption {\n        padding: 0 24px 96px;\n        ","{\n          padding: 0 272px 56px 124px;\n        }\n\n        h2 {\n          font-weight: 700;\n          font-size: 28px;\n          line-height: 32px;\n          margin-bottom: 8px;\n          "," {\n            font-size: 28px;\n            line-height: 38px;\n            margin-bottom: 12px;\n          }\n        }\n\n        p {\n          margin-bottom: 24px;\n        }\n\n        span {\n          &.know-more {\n            display: inline-block;\n            padding: 5px 12px;\n            border: 1px solid #FFFFFF;\n            cursor: pointer;\n            ","{\n              font-size: 16px;\n              line-height: 140%;\n              padding: 10px 22px;\n              transition: box-shadow .4s;\n\n              &:hover {\n                box-shadow: 2px 2px 2px 0 rgba(255, 255, 255, 0.5);\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  /* left col ends */\n  \n  /* right col starts */\n  .right-col {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    ","{\n      width: 30%;    \n    }\n\n    figure {\n      height: 33.33vh;\n      min-height: 132px;\n\n      ","{\n        flex: 1 1;\n      }\n      \n      &:after {\n        background: #F4A261;\n        ","{\n          background: linear-gradient(180deg, #F4B061 0%, #BF7E31 100%);\n        }\n      }\n\n      &:first-child {\n        ","{\n          height: 240px;\n        }\n        &:after {\n          background: linear-gradient(180deg, #A94026 0%, #E76F51 100%);\n        }\n      }\n\n      &:last-child {\n        &:after {\n          background: #F4B061;\n\n          ","{\n            background: #F4A261;\n          }\n        }\n      }\n    }\n  }\n  /* right col ends */\n"])),m.c,m.b,m.a,m.b,m.d,m.c,m.d,m.a,m.b,m.b,m.c,m.c,m.c,m.d,m.c),f=t("1eu9"),h=t.n(f),b=t("boqk"),x=t.n(b),E=["children","id"],v=function(e){var n=e.children,t=e.id,a=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,E);return i.a.createElement(h.a,{Tag:"figure",fluid:a.image,onClick:function(){return x()("#content-section-"+t)}},n)},y=function(){var e=Object(c.useStaticQuery)("2955960199");return i.a.createElement(p,null,i.a.createElement("div",{className:"left-col"},i.a.createElement(h.a,{Tag:"figure",fluid:e.homeJson.landingImage.childImageSharp.fluid},i.a.createElement("figcaption",null,i.a.createElement("h2",null,e.homeJson.landingTitle),i.a.createElement("p",null,e.homeJson.landingDescription.childMarkdownRemark.rawMarkdownBody),i.a.createElement("span",{className:"know-more",onClick:function(){return x()("#content-section-0")}},"Know more")))),i.a.createElement("div",{className:"right-col"},e.homeJson.bannerSection.map((function(e,n){return i.a.createElement(v,{key:n,id:n,image:e.image.childImageSharp.fluid},i.a.createElement("figcaption",null,i.a.createElement("h2",null,e.title),i.a.createElement("p",null,e.content)))}))))},w=t("17x9"),S=t.n(w),k=t("x1tc"),z=function(e){var n=e.id,t=e.heading,r=e.description,l=e.rightSide,o=e.listWithIcons,s=e.serviceStock,d=e.image1,c=e.image2,u=e.category;return i.a.createElement(k.a,{id:"content-section-"+n,rightSideStyle:l},i.a.createElement("div",{className:"container lg-container"},i.a.createElement("div",{className:"middle-content"},i.a.createElement("div",{className:"left-col"},i.a.createElement("h3",null,t),i.a.createElement("p",null,r),s?i.a.createElement(a.Fragment,null,i.a.createElement("h5",null,"Service Stock:"),i.a.createElement("ul",{className:"list-unstyled list-icon"},i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/zmmFoXx.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/VYzQKup.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/zmmFoXx.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/VYzQKup.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/zmmFoXx.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/VYzQKup.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/zmmFoXx.png",alt:""})),i.a.createElement("li",null,i.a.createElement("img",{src:"https://i.imgur.com/VYzQKup.png",alt:""})))):null,o?i.a.createElement("ul",{className:"clearfix list-unstyled list-card"},u.map((function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(h.a,{Tag:"figure",fluid:e.image.childImageSharp.fluid,style:{position:"absolute"}}),i.a.createElement("span",null,e.title),e.content)}))):null),i.a.createElement("div",{className:"right-col"},i.a.createElement("div",{className:"image-card"},i.a.createElement(h.a,{Tag:"figure",fluid:d,className:"left-img",style:{position:"absolute"}}),i.a.createElement(h.a,{Tag:"figure",fluid:c,className:"right-img",style:{position:"absolute"}}))))))};z.prototypes={heading:S.a.string,description:S.a.string,rightSide:S.a.bool,listWithIcons:S.a.bool,serviceStock:S.a.bool};var I,O=z,L=t("9eSz"),F=t.n(L),R=g.b.div(I||(I=Object(u.a)(["\n  background: #F4F4F4;\n  padding: 32px 0;\n  text-align: center;\n  // margin-bottom: 64px;\n  "," {\n    padding: 50px 0;\n    // margin-bottom: 120px;\n    p {\n      width: 70%;\n      margin: 0 auto;\n      margin-top: 15px;\n      margin-bottom: 40px;\n    }\n  }\n\n  ul {\n    list-style: none;\n    padding-left: 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n\n    ","{\n      width: 70%;\n    }\n\n    li {\n      display: inline-block;\n      margin: 0 20px;\n      margin-bottom: 30px;\n      transition: all .35s ease-in-out;\n\n      img {\n        filter: grayscale(90%);\n        height: 38px;\n        "," {\n          height: 45px;\n        }\n      }\n\n      &:hover img {\n        filter: none;\n      }\n    }\n  }\n"])),m.c,m.c,m.c),N=function(){var e=Object(c.useStaticQuery)("2442134400");return i.a.createElement("div",null,i.a.createElement(R,null,i.a.createElement("div",{className:"container"},i.a.createElement("h3",null,e.homeJson.clients.title),i.a.createElement("p",null,e.homeJson.clients.description),i.a.createElement("ul",{className:"ml-auto mr-auto mb-24"},e.homeJson.clients.list.map((function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(F.a,{title:e.title,alt:e.title,fixed:[e.image.childImageSharp.fixed,Object.assign({},e.mobile.childImageSharp.fixed,{media:"(max-width: 767px)"})]}))}))))),i.a.createElement(R,{className:"bg-white"},i.a.createElement("div",{className:"container"},i.a.createElement("h3",null,e.homeJson.partners.title),i.a.createElement("p",null,e.homeJson.partners.description),i.a.createElement("ul",{className:"ml-auto mr-auto mb-24"},e.homeJson.partners.list.map((function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(F.a,{title:e.title,alt:e.title,fixed:[e.image.childImageSharp.fixed,Object.assign({},e.mobile.childImageSharp.fixed,{media:"(max-width: 767px)"})]}))}))))))},V=t("e8B/");n.default=function(){var e=Object(c.useStaticQuery)("35376602");return i.a.createElement(s,null,i.a.createElement(V.a,null,i.a.createElement(y,null),e.servicesJson.services.map((function(e,n){return i.a.createElement(O,{key:n,id:n,rightSide:n%2,listWithIcons:!0,image1:e.image1.childImageSharp.fluid,image2:e.image2.childImageSharp.fluid,heading:e.title,description:e.content.childMarkdownRemark.rawMarkdownBody,category:e.category})})),i.a.createElement(N,null)))}},boqk:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var a=function(e,n){void 0===n&&(n="start");var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:n}),!0)};n.default=a},"e8B/":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a,i=t("MUpH"),r=t("vOnD"),l=t("j4+Y"),o=t("x1tc"),s=r.b.div(a||(a=Object(i.a)(["\n  h3 {\n    font-size: 20px;\n    line-height: 120%;\n    color: #292733;\n    margin: 0 0 8px;\n    font-weight: 500;\n\n    "," {\n      font-size: 28px;\n    }\n  }\n\n  p {\n    line-height: 140%;\n    margin-bottom: 24px;\n    \n    "," {\n      font-size: 12px;\n    }\n  }\n\n  h5 {\n    font-size: 14px;\n    line-height: 140%;\n    font-weight: 700;\n    margin-bottom: 12px;\n    ","{\n      font-size: 16px;\n    }\n  }\n\n  "," {\n    p {\n      ","{\n        margin-bottom: 40px;\n      }\n    }\n  }\n"])),l.c,l.d,l.c,o.a,l.b)},x1tc:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a,i,r=t("MUpH"),l=t("vOnD"),o=t("j4+Y"),s=l.b.div(a||(a=Object(r.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  ","{\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n\n  .middle-content {\n    display: flex;\n    flex-wrap: wrap;\n\n    ","{\n      flex-wrap: nowrap;\n    }\n\n    .left-col, .right-col {\n      width: 100%;\n      ","{\n        width: 50%;\n      }\n    }\n\n    .left-col {\n      ul {\n        margin-bottom: 40px;\n        "," {\n          margin-bottom: 0;\n        }\n\n        &.list-icon {\n          display: flex;\n\n          li {\n            display: flex;\n            min-height: 56px;\n            margin-right: 4px;\n            "," {\n              margin-right: 8px;\n              min-height: 80px;\n            }\n\n            &:last-child {\n              margin-right: 0;\n            }\n\n            &:nth-of-type(odd) {\n              align-items: flex-end;\n            }\n            \n            &:nth-of-type(even) {\n              align-items: flex-start;\n            }\n\n            img {\n              width: 24px;\n              height: 24px;\n              ","{\n                width: 32px;\n                height: 32px;\n              }\n            }\n          }\n        }\n\n        &.list-card {\n          display: flex;\n          flex-wrap: wrap;\n          align-items: flex-start;\n          \n          li {\n            position: relative;\n            width: 100%;\n            float: left;\n            padding: 0 16px 0 64px;\n            min-height: 46px;\n            display: flex;\n            flex-wrap: wrap;\n            align-items: center;\n            margin-bottom: 24px;\n            ","{\n              width: 50%;\n            }\n  \n            span {\n              width: 100%;\n              display: block;\n              font-weight: 700;\n              margin-bottom: 6px;\n            }\n  \n            figure {\n              background-color: #fcfcfc;\n              width: 46px;\n              height: 46px;\n              border-radius: 100%;\n              position: absolute;\n              top: 0;\n              left: 0;\n\n              &:before {\n                opacity: 0.75;\n              }\n            }\n          }\n        }\n\n      }\n    }\n\n    .right-col {\n      .image-card {\n        position: relative;\n        min-height: 164px;\n        width: 300px;\n        margin: 0 auto;\n\n        ","{\n          margin: 0 0 0 auto;\n        }\n        ","{\n          width: 412px;\n          min-height: 350px;\n        }\n\n        &:before, &:after {\n          content: '';\n          position: absolute;\n          width: 90px;\n          height: 90px;\n          border-radius: 3px;\n          z-index: 1;\n          "," {\n            width: 150px;\n            height: 150px;\n          }\n        }\n        &:before {\n          top: 16px;\n          left: 0;\n          background: linear-gradient(0deg, #FFEDAE, #FFEDAE);\n          ","{\n            top: 105px;\n          }\n        }\n        &:after {\n          right: 0;\n          bottom: 24px;\n          background: linear-gradient(0deg, rgba(231, 111, 81, 0.3), rgba(231, 111, 81, 0.3));\n          ","{\n            bottom: 10px;\n          }\n        }\n\n\n        figure {\n          margin: 0;\n\n          &.left-img, &.right-img {\n            position: absolute;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center;\n            background-color: #E5E5E5;\n            border-radius: 4px;\n            z-index: 2;\n\n            &:before {\n              border-radius: 4px;\n            }\n          }\n\n          &.left-img {\n            width: 103px;\n            height: 128px;\n            left: 16px;\n            bottom: 0;\n            z-index: 3;\n            ","{\n              width: 194px;\n              height: 220px;\n              left: 24px;\n            }\n          }\n\n          &.right-img {\n            width: 186px;\n            height: 122px;\n            right: 16px;\n            top: 0;\n\n            ","{\n              width: 230px;\n              height: 325px;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  ",";\n"])),o.c,o.c,o.c,o.c,o.c,o.c,o.b,o.c,o.b,o.b,o.b,o.c,o.b,o.b,(function(e){return e.rightSideStyle&&Object(l.a)(i||(i=Object(r.a)(["\n    ","{\n      .middle-content {\n        .left-col {\n          order: 2;\n        }\n        .right-col {\n          .image-card {\n            margin: 0 auto 0 0;\n          }\n        }\n      }\n    }\n  "])),o.c)}))}}]);
//# sourceMappingURL=component---src-pages-index-js-5ee55ed351e2c09b816b.js.map