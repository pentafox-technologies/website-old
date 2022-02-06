/*! For license information please see component---src-pages-careers-js-821b60ab0dd46e5b8fd5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2W6z":function(e,n,t){"use strict";var o=function(){};e.exports=o},"2rMq":function(e,n,t){var o;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(o=function(){return r}.call(n,t,n,e))||(e.exports=o)}()},"2zs7":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.canUseDOM=n.SafeNodeList=n.SafeHTMLCollection=void 0;var o,a=t("2rMq");var r=((o=a)&&o.__esModule?o:{default:o}).default,i=r.canUseDOM?window.HTMLElement:{};n.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},n.SafeNodeList=r.canUseDOM?window.NodeList:{},n.canUseDOM=r.canUseDOM;n.default=i},"6KBY":function(e,n,t){"use strict";t.r(n);var o,a,r,i,l,s,u,c=t("q1tI"),d=t.n(c),f=t("8k0H"),p=t("e8B/"),m=t("Wbzz"),h=t("MUpH"),b=t("vOnD"),v=t("j4+Y"),g=b.b.div(o||(o=Object(h.a)(["\n"]))),y=b.b.section(a||(a=Object(h.a)(["\n  /* text-align: center; */\n  padding-top: 100px;\n  padding-bottom: 32px;\n  background: linear-gradient(180deg, #E64545 0%, #C23232 39.46%, #A22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 40vh;\n  display: flex;\n  align-items: center;\n\n  "," {\n    padding-top: 80px;\n    /* box-shadow: 0px 60px 15px 0px rgba(0,0,0,0.25) inset; */\n  }\n\n  h1, p {\n    color: #f3f3f3;\n  }\n  h1 {\n    font-weight: 700;\n    font-size: 2.75rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n  }\n\n  "," {\n    padding-top: 140px;\n    min-height: 40vh;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n\n"])),v.d,v.d),x=g,O=b.b.div(r||(r=Object(h.a)(["\n  padding-top: 20px;\n\n  .heading {\n    color: #999;\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n    position: relative;\n    /* text-align: center; */\n\n    &::after {\n      /* content: ''; */\n      position: absolute;\n      left: 40%;\n      left: 0;\n      bottom: -10px;\n      border-bottom: 2px solid #ddd;\n      width: 20%;\n      margin: 0 auto;\n    }\n  }\n\n  .job-listing {\n    display: grid;\n    grid-gap: 16px;\n    grid-template-columns: 1fr;\n\n    .job-card {\n      cursor: pointer;\n      padding: 16px;\n      border: 1px solid rgba(50,50,50, .1);\n      border-radius: 3px;\n      background-color: #fff;\n      transition: all .35s ease-in-out;\n\n      &:hover {\n        box-shadow: 0 12px 20px -10px #ccc;\n      }\n\n      .job-title {\n        font-size: 1.35rem;\n        color: #444;\n        letter-spacing: .5px;\n      }\n\n      .job-desc-short {\n        color: #888;\n        margin: 0;\n        margin-top: 12px;\n      }\n\n      .job-tags {\n        margin-top: 12px;\n\n        .job-tag-item {\n          display: inline-block;\n          padding: 2px 8px;\n          margin-right: 8px;\n          border-radius: 2px;\n          color: #fff;\n          font-size: .8rem;\n          line-height: 1rem;\n          background-color: rgba(41, 31, 51, .8);\n        }\n      }\n    }\n  }\n\n  .job-email {\n    padding-top: 40px;\n    /* text-align: center; */\n    font-size: 1.2rem;\n    color: #bbb;\n\n    a {\n      color: #777;\n      transition: all .3s ease-in-out;\n\n      &:hover {\n        color: #333;\n      }\n    }\n  }\n\n  .benefits {\n    display: grid;\n    grid-gap: 16px;\n    grid-template-columns: 1fr;\n    /* margin-bottom: 40px; */\n\n    .benefit-card {\n      h5 {\n        font-size: 1.2rem;\n        color: #777;\n        margin-bottom: 5px;\n      }\n      p {\n        font-size: 1rem;\n        color: #999;\n        margin-bottom: 8px;\n      }\n\n    }\n  }\n\n  .benefits-section {\n    padding: 30px 0;\n  }\n\n  "," {\n    padding-top: 32px;\n\n    .heading {\n      color: #aaa;\n      font-size: 2rem;\n      margin-bottom: 30px;\n      position: relative;\n      /* text-align: center; */\n\n      &::after {\n        /* content: ''; */\n        position: absolute;\n        left: 45%;\n        left: 0%;\n        bottom: -16px;\n        border-bottom: 2px solid #ddd;\n        width: 10%;\n        margin: 0 auto;\n      }\n    }\n\n    .benefits-section {\n      padding-top: 40px;\n      padding-bottom: 60px;\n    }\n\n    .benefits {\n      max-width: 60%;\n      grid-template-columns: 1fr 1fr;\n      /* margin-bottom: 40px; */\n\n      .benefit-card {\n        h5 {\n          font-size: 1.3rem;\n          color: #777;\n          margin-bottom: 5px;\n        }\n        p {\n          font-size: 1rem;\n          color: #999;\n        }\n      }\n    }\n\n    .job-listing {\n      grid-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n"])),v.c),w=t("9rZX"),E=t.n(w),C=(b.b.div(i||(i=Object(h.a)(["\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  padding: 0;\n\n  "," {\n    overflow: auto;\n    padding: 0 10%;\n    padding-top: min(8vh, 100px);\n    padding-bottom: 0;\n    overflow: inherit;\n  }\n"])),v.b),b.b.div(l||(l=Object(h.a)(["\n  margin: 0 auto;\n  padding: 20px;\n  width: 100%;\n  /* height: 100%; */\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top: 0;\n\n  "," {\n    top: 10vh;\n    width: 80%;\n    padding: 30px;\n    padding-top: 24px;\n    /* height: auto; */\n  }\n"])),v.b),b.b.div(s||(s=Object(h.a)(['\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: flex-end;\n\n  h1 {\n    font-size: 26px;\n    margin-bottom: 26px;\n  }\n\n  span {\n    display: inline-block;\n    height: 32px;\n    width: 24px;\n    position: relative;\n    cursor: pointer;\n    align-self: flex-end;\n\n    &:after {\n      content: "\\00d7";\n      font-size: 36px;\n      color: #aaa;\n      position: absolute;\n      top: -16px;\n      transition: all .35s ease-in-out;\n    }\n\n    &:hover {\n      &:after {\n        color: #888;\n        transform: rotate(90deg) scale(1.025);\n      }\n    }\n  }\n\n  '," {\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 10px;\n    padding-top: 10px;\n\n    h1 {\n      margin-bottom: 14px;\n    }\n\n    span {\n      align-self: flex-start;\n    }\n  }\n"],['\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: flex-end;\n\n  h1 {\n    font-size: 26px;\n    margin-bottom: 26px;\n  }\n\n  span {\n    display: inline-block;\n    height: 32px;\n    width: 24px;\n    position: relative;\n    cursor: pointer;\n    align-self: flex-end;\n\n    &:after {\n      content: "\\\\00d7";\n      font-size: 36px;\n      color: #aaa;\n      position: absolute;\n      top: -16px;\n      transition: all .35s ease-in-out;\n    }\n\n    &:hover {\n      &:after {\n        color: #888;\n        transform: rotate(90deg) scale(1.025);\n      }\n    }\n  }\n\n  '," {\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 10px;\n    padding-top: 10px;\n\n    h1 {\n      margin-bottom: 14px;\n    }\n\n    span {\n      align-self: flex-start;\n    }\n  }\n"])),v.b)),j=b.b.div(u||(u=Object(h.a)(["\n  overflow: auto;\n  padding-bottom: 20px;\n\n  .meta-section {\n    margin-bottom: 16px;\n    .meta-grid {\n      display: grid;\n      grid-template-columns: 100px 1fr;\n      margin-top: 16px;\n    }\n  }\n\n  h3 {\n    font-size: 16px;\n    font-weight: 600;\n    color: #444;\n    letter-spacing: 0.5px;\n\n    &+p {\n      font-size: 14px;\n      margin-bottom: 4px;\n    }\n  }\n\n  ul {\n    padding-left: 20px;\n    li {\n      font-size: 14px;\n      line-height: 1.45em;\n    }\n  }\n\n  "," {\n    padding: 10px;\n\n    h3 {\n      font-size: 16px;\n      font-weight: 600;\n\n      &+p {\n        margin-bottom: 4px;\n      }\n    }\n\n    ul {\n      padding-left: 28px;\n      li {\n        font-size: 14px;\n      }\n    }\n  }\n"])),v.b);E.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,.3)",E.a.defaultStyles.overlay.zIndex=50;var S=function(e){var n=e.data,t=void 0===n?{}:n;return null!=t&&t.profile?d.a.createElement("div",{className:"meta-section"},d.a.createElement("h3",null,"Job Profile"),d.a.createElement("p",null,t.profile),d.a.createElement("div",{className:"meta-grid"},d.a.createElement("div",null,"Job Type"),d.a.createElement("div",null,": ",t.jobType.join(", ")),d.a.createElement("div",null,"Location"),d.a.createElement("div",null,": ",t.location.join(", ")),d.a.createElement("div",null,"Skills"),d.a.createElement("div",null,": ",t.skills.join(", ")),d.a.createElement("div",null,"Education"),d.a.createElement("div",null,": ",t.education))):null},M=function(e){var n,t,o,a,r,i,l=e.data,s=Object(c.useState)({}),u=s[0],f=s[1];return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"job-listing"},l.map((function(e,n){return d.a.createElement("div",{key:n,className:"job-card",onClick:function(){return f(e)}},d.a.createElement("h4",{className:"job-title"},e.title),d.a.createElement("div",{className:"job-tags"},e.tags.map((function(e,n){return d.a.createElement("span",{key:n,className:"job-tag-item"},e)}))),d.a.createElement("p",{className:"job-desc-short"},e.shortDescription))}))),d.a.createElement(E.a,{isOpen:u.title,onRequestClose:function(){return f({})}},d.a.createElement(C,null,d.a.createElement("h1",null,u.title),d.a.createElement("span",{onClick:function(){return f({})}})),d.a.createElement(j,null,d.a.createElement(S,{data:null==u||null===(n=u.description)||void 0===n||null===(t=n.childrenMarkdownRemark)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.frontmatter}),d.a.createElement("p",{dangerouslySetInnerHTML:{__html:null==u||null===(a=u.description)||void 0===a||null===(r=a.childrenMarkdownRemark)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.html}}))))};n.default=function(){var e=Object(m.useStaticQuery)("2937772501");return d.a.createElement(f.a,{hideLink:!0,headProps:{pageTitle:"Careers"}},d.a.createElement(p.a,null,d.a.createElement(x,null,d.a.createElement(y,null,d.a.createElement("div",{className:"container lg-container"},d.a.createElement("h1",null,e.careersJson.careers.title),d.a.createElement("p",null,e.careersJson.careers.description.childMarkdownRemark.rawMarkdownBody))),d.a.createElement("div",{className:"container lg-container"},d.a.createElement(O,null,d.a.createElement("section",{className:"benefits-section"},d.a.createElement("h3",{className:"heading"},"Benefits at Pentafox"),d.a.createElement("div",{className:"benefits"},d.a.createElement("div",{className:"benefit-card"},d.a.createElement("h5",null,"Health Insurance")),d.a.createElement("div",{className:"benefit-card"},d.a.createElement("h5",null,"Financial wellbeing")),d.a.createElement("div",{className:"benefit-card"},d.a.createElement("h5",null,"Flexibility and time off")),d.a.createElement("div",{className:"benefit-card"},d.a.createElement("h5",null,"Flexibility and time off")))),d.a.createElement("h3",{className:"heading"},"Current opportunities"),d.a.createElement(M,{data:e.careersJson.careers.jobs}),d.a.createElement("div",{className:"job-email"},d.a.createElement("p",null,"Email your CV to ",d.a.createElement("a",{href:"mailto:jobs@pentafox.in",title:"Email us"},"jobs@pentafox.in")," with <Job-Title> as subject.")))))))}},"9rZX":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a=t("qFS3"),r=(o=a)&&o.__esModule?o:{default:o};n.default=r.default,e.exports=n.default},QEso:function(e,n,t){"use strict";t("E9XD"),Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t("q1tI"),l=b(t("17x9")),s=h(t("VKEO")),u=b(t("S1to")),c=h(t("Ye7m")),d=h(t("fbhf")),f=t("2zs7"),p=b(f),m=b(t("UIKY"));function h(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function b(e){return e&&e.__esModule?e:{default:e}}t("WkvU");var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},g=0,y=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.setOverlayRef=function(e){t.overlay=e,t.props.overlayRef&&t.props.overlayRef(e)},t.setContentRef=function(e){t.content=e,t.props.contentRef&&t.props.contentRef(e)},t.afterClose=function(){var e=t.props,n=e.appElement,o=e.ariaHideApp,a=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.remove(document.body,r),a&&d.remove(document.getElementsByTagName("html")[0],a),o&&g>0&&0===(g-=1)&&c.show(n),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(s.returnFocus(t.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),m.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(s.setupScopedFocus(t.node),s.markForFocusLater()),t.setState({isOpen:!0},(function(){t.openAnimationFrame=requestAnimationFrame((function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})}))})))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var e=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:e},(function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())}))},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(t.content,e),t.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),t.requestClose(e))},t.handleOverlayOnClick=function(e){null===t.shouldClose&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(e):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(e){t.props.shouldCloseOnOverlayClick||e.target!=t.overlay||e.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(e){return t.ownerHandlesClose()&&t.props.onRequestClose(e)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(e,n){var o="object"===(void 0===n?"undefined":a(n))?n:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},r=o.base;return t.state.afterOpen&&(r=r+" "+o.afterOpen),t.state.beforeClose&&(r=r+" "+o.beforeClose),"string"==typeof n&&n?r+" "+n:r},t.attributesFromObject=function(e,n){return Object.keys(n).reduce((function(t,o){return t[e+"-"+o]=n[o],t}),{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),r(n,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,n){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!n.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,n=e.appElement,t=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.add(document.body,a),o&&d.add(document.getElementsByTagName("html")[0],o),t&&(g+=1,c.hide(n)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.className,a=e.overlayClassName,r=e.defaultStyles,i=e.children,l=t?{}:r.content,s=a?{}:r.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",a),style:o({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:n,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",t),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,i);return this.props.overlayElement(u,d)}}]),n}(i.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(f.SafeHTMLCollection),l.default.instanceOf(f.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},n.default=y,e.exports=n.default},S1to:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=(0,r.default)(e);if(!t.length)return void n.preventDefault();var o=void 0,a=n.shiftKey,i=t[0],l=t[t.length-1],s=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return n.activeElement.shadowRoot?e(n.activeElement.shadowRoot):n.activeElement}();if(e===s){if(!a)return;o=l}l!==s||a||(o=i);i===s&&a&&(o=l);if(o)return n.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=t.indexOf(s);c>-1&&(c+=a?-1:1);if(void 0===(o=t[c]))return n.preventDefault(),void(o=a?l:i).focus();n.preventDefault(),o.focus()};var o,a=t("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};e.exports=n.default},UIKY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.log=function(){console.log("portalOpenInstances ----------"),console.log(a.openInstances.length),a.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},n.resetState=function(){a=new o};var o=function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===n.openInstances.indexOf(e)&&(n.openInstances.push(e),n.emit("register"))},this.deregister=function(e){var t=n.openInstances.indexOf(e);-1!==t&&(n.openInstances.splice(t,1),n.emit("deregister"))},this.subscribe=function(e){n.subscribers.push(e)},this.emit=function(e){n.subscribers.forEach((function(t){return t(e,n.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},a=new o;n.default=a},VKEO:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetState=function(){i=[]},n.log=function(){0},n.handleBlur=u,n.handleFocus=c,n.markForFocusLater=function(){i.push(document.activeElement)},n.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=null;try{return void(0!==i.length&&(n=i.pop()).focus({preventScroll:e}))}catch(t){console.warn(["You tried to return focus to",n,"but it is not in the DOM anymore"].join(" "))}},n.popWithoutFocus=function(){i.length>0&&i.pop()},n.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},n.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var o,a=t("ZDLa"),r=(o=a)&&o.__esModule?o:{default:o};var i=[],l=null,s=!1;function u(){s=!0}function c(){if(s){if(s=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,r.default)(l)[0]||l).focus()}),0)}}},WkvU:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetState=function(){for(var e=[i,l],n=0;n<e.length;n++){var t=e[n];t&&(t.parentNode&&t.parentNode.removeChild(t))}i=l=null,s=[]},n.log=function(){console.log("bodyTrap ----------"),console.log(s.length);for(var e=[i,l],n=0;n<e.length;n++){var t=e[n]||{};console.log(t.nodeName,t.className,t.id)}console.log("edn bodyTrap ----------")};var o,a=t("UIKY"),r=(o=a)&&o.__esModule?o:{default:o};var i=void 0,l=void 0,s=[];function u(){0!==s.length&&s[s.length-1].focusContent()}r.default.subscribe((function(e,n){i||l||((i=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),i.style.position="absolute",i.style.opacity="0",i.setAttribute("tabindex","0"),i.addEventListener("focus",u),(l=i.cloneNode()).addEventListener("focus",u)),(s=n).length>0?(document.body.firstChild!==i&&document.body.insertBefore(i,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(i.parentElement&&i.parentElement.removeChild(i),l.parentElement&&l.parentElement.removeChild(l))}))},Ye7m:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetState=function(){l&&(l.removeAttribute?l.removeAttribute("aria-hidden"):null!=l.length?l.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(l).forEach((function(e){return e.removeAttribute("aria-hidden")})));l=null},n.log=function(){0},n.assertNodeList=s,n.setElement=function(e){var n=e;if("string"==typeof n&&i.canUseDOM){var t=document.querySelectorAll(n);s(t,n),n=t}return l=n||l},n.validateElement=u,n.hide=function(e){var n=!0,t=!1,o=void 0;try{for(var a,r=u(e)[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){a.value.setAttribute("aria-hidden","true")}}catch(i){t=!0,o=i}finally{try{!n&&r.return&&r.return()}finally{if(t)throw o}}},n.show=function(e){var n=!0,t=!1,o=void 0;try{for(var a,r=u(e)[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){a.value.removeAttribute("aria-hidden")}}catch(i){t=!0,o=i}finally{try{!n&&r.return&&r.return()}finally{if(t)throw o}}},n.documentNotReadyOrSSRTesting=function(){l=null};var o,a=t("2W6z"),r=(o=a)&&o.__esModule?o:{default:o},i=t("2zs7");var l=null;function s(e,n){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+n+".")}function u(e){var n=e||l;return n?Array.isArray(n)||n instanceof HTMLCollection||n instanceof NodeList?n:[n]:((0,r.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},ZDLa:function(e,n,t){"use strict";t("E9XD"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function e(n){return[].slice.call(n.querySelectorAll("*"),0).reduce((function(n,t){return n.concat(t.shadowRoot?e(t.shadowRoot):[t])}),[]).filter(i)};var o=/input|select|textarea|button|object/;function a(e){var n=e.offsetWidth<=0&&e.offsetHeight<=0;if(n&&!e.innerHTML)return!0;try{var t=window.getComputedStyle(e);return n?"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==t.getPropertyValue("display")}catch(o){return console.warn("Failed to inspect element style"),!1}}function r(e,n){var t=e.nodeName.toLowerCase();return(o.test(t)&&!e.disabled||"a"===t&&e.href||n)&&function(e){for(var n=e,t=e.getRootNode&&e.getRootNode();n&&n!==document.body;){if(t&&n===t&&(n=t.host.parentNode),a(n))return!1;n=n.parentNode}return!0}(e)}function i(e){var n=e.getAttribute("tabindex");null===n&&(n=void 0);var t=isNaN(n);return(t||n>=0)&&r(e,!t)}e.exports=n.default},"e8B/":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o,a=t("MUpH"),r=t("vOnD"),i=t("j4+Y"),l=t("x1tc"),s=r.b.div(o||(o=Object(a.a)(["\n  h3 {\n    font-size: 20px;\n    line-height: 120%;\n    color: #292733;\n    margin: 0 0 8px;\n    font-weight: 500;\n\n    "," {\n      font-size: 28px;\n    }\n  }\n\n  p {\n    line-height: 140%;\n    margin-bottom: 24px;\n    \n    "," {\n      font-size: 12px;\n    }\n  }\n\n  h5 {\n    font-size: 14px;\n    line-height: 140%;\n    font-weight: 700;\n    margin-bottom: 12px;\n    ","{\n      font-size: 16px;\n    }\n  }\n\n  "," {\n    p {\n      ","{\n        margin-bottom: 40px;\n      }\n    }\n  }\n"])),i.c,i.d,i.c,l.a,i.b)},fbhf:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var n in o)r(e,o[n]);var t=document.body;for(var i in a)r(t,a[i]);o={},a={}},n.log=function(){0};var o={},a={};function r(e,n){e.classList.remove(n)}n.add=function(e,n){return t=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void n.split(" ").forEach((function(e){!function(e,n){e[n]||(e[n]=0),e[n]+=1}(r,e),t.add(e)}));var t,r},n.remove=function(e,n){return t=e.classList,r="html"==e.nodeName.toLowerCase()?o:a,void n.split(" ").forEach((function(e){!function(e,n){e[n]&&(e[n]-=1)}(r,e),0===r[e]&&t.remove(e)}));var t,r}},qFS3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.bodyOpenClassName=n.portalClassName=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=t("q1tI"),i=m(r),l=m(t("i8i4")),s=m(t("17x9")),u=m(t("QEso")),c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t("Ye7m")),d=t("2zs7"),f=m(d),p=t("94VI");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var v=n.portalClassName="ReactModalPortal",g=n.bodyOpenClassName="ReactModal__Body--open",y=d.canUseDOM&&void 0!==l.default.createPortal,x=function(e){return document.createElement(e)},O=function(){return y?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var E=function(e){function n(){var e,t,a;h(this,n);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return t=a=b(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),a.removePortal=function(){!y&&l.default.unmountComponentAtNode(a.node);var e=w(a.props.parentSelector);e&&e.contains(a.node)?e.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(e){a.portal=e},a.renderPortal=function(e){var t=O()(a,i.default.createElement(u.default,o({defaultStyles:n.defaultStyles},e)),a.node);a.portalRef(t)},b(a,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=x("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,n,t){if(d.canUseDOM){var o=this.props,a=o.isOpen,r=o.portalClassName;e.portalClassName!==r&&(this.node.className=r);var i=t.prevParent,l=t.nextParent;l!==i&&(i.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||a)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,n=Date.now(),t=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||n+this.props.closeTimeoutMS);t?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,t-n)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=x("div")),O()(i.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:n.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),n}(r.Component);E.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func},E.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:g,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return i.default.createElement("div",e,n)},contentElement:function(e,n){return i.default.createElement("div",e,n)}},E.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(E),n.default=E},x1tc:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o,a,r=t("MUpH"),i=t("vOnD"),l=t("j4+Y"),s=i.b.div(o||(o=Object(r.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  ","{\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n\n  .middle-content {\n    display: flex;\n    flex-wrap: wrap;\n\n    ","{\n      flex-wrap: nowrap;\n    }\n\n    .left-col, .right-col {\n      width: 100%;\n      ","{\n        width: 50%;\n      }\n    }\n\n    .left-col {\n      ul {\n        margin-bottom: 40px;\n        "," {\n          margin-bottom: 0;\n        }\n\n        &.list-icon {\n          display: flex;\n\n          li {\n            display: flex;\n            min-height: 56px;\n            margin-right: 4px;\n            "," {\n              margin-right: 8px;\n              min-height: 80px;\n            }\n\n            &:last-child {\n              margin-right: 0;\n            }\n\n            &:nth-of-type(odd) {\n              align-items: flex-end;\n            }\n            \n            &:nth-of-type(even) {\n              align-items: flex-start;\n            }\n\n            img {\n              width: 24px;\n              height: 24px;\n              ","{\n                width: 32px;\n                height: 32px;\n              }\n            }\n          }\n        }\n\n        &.list-card {\n          display: flex;\n          flex-wrap: wrap;\n          align-items: flex-start;\n          \n          li {\n            position: relative;\n            width: 100%;\n            float: left;\n            padding: 0 16px 0 64px;\n            min-height: 46px;\n            display: flex;\n            flex-wrap: wrap;\n            align-items: center;\n            margin-bottom: 24px;\n            ","{\n              width: 50%;\n            }\n  \n            span {\n              width: 100%;\n              display: block;\n              font-weight: 700;\n              margin-bottom: 6px;\n            }\n  \n            figure {\n              background-color: #fcfcfc;\n              width: 46px;\n              height: 46px;\n              border-radius: 100%;\n              position: absolute;\n              top: 0;\n              left: 0;\n\n              &:before {\n                opacity: 0.75;\n              }\n            }\n          }\n        }\n\n      }\n    }\n\n    .right-col {\n      .image-card {\n        position: relative;\n        min-height: 164px;\n        width: 300px;\n        margin: 0 auto;\n\n        ","{\n          margin: 0 0 0 auto;\n        }\n        ","{\n          width: 412px;\n          min-height: 350px;\n        }\n\n        &:before, &:after {\n          content: '';\n          position: absolute;\n          width: 90px;\n          height: 90px;\n          border-radius: 3px;\n          z-index: 1;\n          "," {\n            width: 150px;\n            height: 150px;\n          }\n        }\n        &:before {\n          top: 16px;\n          left: 0;\n          background: linear-gradient(0deg, #FFEDAE, #FFEDAE);\n          ","{\n            top: 105px;\n          }\n        }\n        &:after {\n          right: 0;\n          bottom: 24px;\n          background: linear-gradient(0deg, rgba(231, 111, 81, 0.3), rgba(231, 111, 81, 0.3));\n          ","{\n            bottom: 10px;\n          }\n        }\n\n\n        figure {\n          margin: 0;\n\n          &.left-img, &.right-img {\n            position: absolute;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center;\n            background-color: #E5E5E5;\n            border-radius: 4px;\n            z-index: 2;\n\n            &:before {\n              border-radius: 4px;\n            }\n          }\n\n          &.left-img {\n            width: 103px;\n            height: 128px;\n            left: 16px;\n            bottom: 0;\n            z-index: 3;\n            ","{\n              width: 194px;\n              height: 220px;\n              left: 24px;\n            }\n          }\n\n          &.right-img {\n            width: 186px;\n            height: 122px;\n            right: 16px;\n            top: 0;\n\n            ","{\n              width: 230px;\n              height: 325px;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  ",";\n"])),l.c,l.c,l.c,l.c,l.c,l.c,l.b,l.c,l.b,l.b,l.b,l.c,l.b,l.b,(function(e){return e.rightSideStyle&&Object(i.a)(a||(a=Object(r.a)(["\n    ","{\n      .middle-content {\n        .left-col {\n          order: 2;\n        }\n        .right-col {\n          .image-card {\n            margin: 0 auto 0 0;\n          }\n        }\n      }\n    }\n  "])),l.c)}))}}]);
//# sourceMappingURL=component---src-pages-careers-js-821b60ab0dd46e5b8fd5.js.map