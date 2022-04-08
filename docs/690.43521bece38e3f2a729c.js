"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[690],{3647:(A,b,c)=>{c.d(b,{tT:()=>M,zk:()=>Q});var n=c(3018),a=c(1103),m=c(8935),g=c(4933),h=c(8583),f=c(5257);let l,p=(()=>{class t{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(s=>s!==e);let o=this._focusTrapStack;o.length&&o[o.length-1]._disable(),o.push(e),e._enable()}deregister(e){e._disable();const o=this._focusTrapStack,s=o.indexOf(e);-1!==s&&(o.splice(s,1),o.length&&o[o.length-1]._enable())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=(0,n.Yz7)({factory:function(){return new t},token:t,providedIn:"root"}),t})();try{l="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(t){l=!1}let v=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,h.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!l)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(n.Lbi))},t.\u0275prov=(0,n.Yz7)({factory:function(){return new t((0,n.LFG)(n.Lbi))},token:t,providedIn:"root"}),t})(),y=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function(t){return!!(t.offsetWidth||t.offsetHeight||"function"==typeof t.getClientRects&&t.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const o=function(t){try{return t.frameElement}catch(i){return null}}(function(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}(e));if(o&&(-1===T(o)||!this.isVisible(o)))return!1;let s=e.nodeName.toLowerCase(),r=T(e);return e.hasAttribute("contenteditable")?-1!==r:!("iframe"===s||"object"===s||this._platform.WEBKIT&&this._platform.IOS&&!function(t){let i=t.nodeName.toLowerCase(),e="input"===i&&t.type;return"text"===e||"password"===e||"select"===i||"textarea"===i}(e))&&("audio"===s?!!e.hasAttribute("controls")&&-1!==r:"video"===s?-1!==r&&(null!==r||this._platform.FIREFOX||e.hasAttribute("controls")):e.tabIndex>=0)}isFocusable(e,o){return function(t){return!function(t){return function(t){return"input"==t.nodeName.toLowerCase()}(t)&&"hidden"==t.type}(t)&&(function(t){let i=t.nodeName.toLowerCase();return"input"===i||"select"===i||"button"===i||"textarea"===i}(t)||function(t){return function(t){return"a"==t.nodeName.toLowerCase()}(t)&&t.hasAttribute("href")}(t)||t.hasAttribute("contenteditable")||k(t))}(e)&&!this.isDisabled(e)&&((null==o?void 0:o.ignoreVisibility)||this.isVisible(e))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(v))},t.\u0275prov=(0,n.Yz7)({factory:function(){return new t((0,n.LFG)(v))},token:t,providedIn:"root"}),t})();function k(t){if(!t.hasAttribute("tabindex")||void 0===t.tabIndex)return!1;let i=t.getAttribute("tabindex");return"-32768"!=i&&!(!i||isNaN(parseInt(i,10)))}function T(t){if(!k(t))return null;const i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function O(t){return null!=t&&"false"!=`${t}`}class z{constructor(i,e,o,s,r=!1){this._element=i,this._checker=e,this._ngZone=o,this._document=s,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}destroy(){const i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.parentNode&&i.parentNode.removeChild(i)),e&&(e.removeEventListener("focus",this.endAnchorListener),e.parentNode&&e.parentNode.removeChild(e)),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(){return new Promise(i=>{this._executeOnStable(()=>i(this.focusInitialElement()))})}focusFirstTabbableElementWhenReady(){return new Promise(i=>{this._executeOnStable(()=>i(this.focusFirstTabbableElement()))})}focusLastTabbableElementWhenReady(){return new Promise(i=>{this._executeOnStable(()=>i(this.focusLastTabbableElement()))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);for(let o=0;o<e.length;o++)e[o].hasAttribute(`cdk-focus-${i}`)?console.warn(`Found use of deprecated attribute 'cdk-focus-${i}', use 'cdkFocusRegion${i}' instead. The deprecated attribute will be removed in 8.0.0.`,e[o]):e[o].hasAttribute(`cdk-focus-region-${i}`)&&console.warn(`Found use of deprecated attribute 'cdk-focus-region-${i}', use 'cdkFocusRegion${i}' instead. The deprecated attribute will be removed in 8.0.0.`,e[o]);return"start"==i?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(){const i=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(i){if(i.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",i),!this._checker.isFocusable(i)){const e=this._getFirstTabbableElement(i);return null==e||e.focus(),!!e}return i.focus(),!0}return this.focusFirstTabbableElement()}focusFirstTabbableElement(){const i=this._getRegionBoundary("start");return i&&i.focus(),!!i}focusLastTabbableElement(){const i=this._getRegionBoundary("end");return i&&i.focus(),!!i}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children||i.childNodes;for(let o=0;o<e.length;o++){let s=e[o].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[o]):null;if(s)return s}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children||i.childNodes;for(let o=e.length-1;o>=0;o--){let s=e[o].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[o]):null;if(s)return s}return null}_createAnchor(){const i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._ngZone.isStable?i():this._ngZone.onStable.pipe((0,f.q)(1)).subscribe(i)}}let U=(()=>{class t{constructor(e,o,s){this._checker=e,this._ngZone=o,this._document=s}create(e,o=!1){return new z(e,this._checker,this._ngZone,this._document,o)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(y),n.LFG(n.R0b),n.LFG(h.K0))},t.\u0275prov=(0,n.Yz7)({factory:function(){return new t((0,n.LFG)(y),(0,n.LFG)(n.R0b),(0,n.LFG)(h.K0))},token:t,providedIn:"root"}),t})(),V=(()=>{class t{constructor(e,o,s){this._elementRef=e,this._focusTrapFactory=o,this._previouslyFocusedElement=null,this._autoCapture=!1,this._document=s,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=O(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=O(e)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(e){const o=e.autoCapture;o&&!o.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=this._document.activeElement,this.focusTrap.focusInitialElementWhenReady()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(U),n.Y36(h.K0))},t.\u0275dir=n.lG2({type:t,selectors:[["","focusTrap",""]],inputs:{enabled:["cdkTrapFocus","enabled"],autoCapture:["cdkTrapFocusAutoCapture","autoCapture"]},exportAs:["focusTrap"],features:[n.TTD]}),t})(),D=(()=>{class t{static forRoot(){return{ngModule:t,providers:[p,v,y]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[h.ez]]}),t})();const J=["*"];let B=(()=>{class t{constructor(){this.hide=()=>{},this.setClass=()=>{}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();const C={backdrop:!0,keyboard:!0,focus:!0,show:!1,ignoreBackdropClick:!1,class:"",animated:!0,initialState:{},closeInterceptor:void 0},F=new n.OlP("override-default-config");let X=(()=>{class t{constructor(e,o,s){this._element=o,this._renderer=s,this.isShown=!1,this.isAnimated=!1,this.isModalHiding=!1,this.clickStartedInContent=!1,this.config=Object.assign({},e)}ngOnInit(){this.isAnimated&&this._renderer.addClass(this._element.nativeElement,"fade"),this._renderer.setStyle(this._element.nativeElement,"display","block"),setTimeout(()=>{this.isShown=!0,this._renderer.addClass(this._element.nativeElement,(0,a.XA)()?"in":"show")},this.isAnimated?150:0),document&&document.body&&(this.bsModalService&&1===this.bsModalService.getModalsCount()&&(this.bsModalService.checkScrollbar(),this.bsModalService.setScrollbar()),this._renderer.addClass(document.body,"modal-open"),this._renderer.setStyle(document.body,"overflow-y","hidden")),this._element.nativeElement&&this._element.nativeElement.focus()}onClickStarted(e){this.clickStartedInContent=e.target!==this._element.nativeElement}onClickStop(e){var o;this.config.ignoreBackdropClick||"static"===this.config.backdrop||e.target!==this._element.nativeElement||this.clickStartedInContent?this.clickStartedInContent=!1:(null===(o=this.bsModalService)||void 0===o||o.setDismissReason("backdrop-click"),this.hide())}onPopState(){var e;null===(e=this.bsModalService)||void 0===e||e.setDismissReason("browser-back-navigation-clicked"),this.hide()}onEsc(e){var o,s;!this.isShown||((27===e.keyCode||"Escape"===e.key)&&e.preventDefault(),this.config.keyboard&&this.level===(null===(o=this.bsModalService)||void 0===o?void 0:o.getModalsCount())&&(null===(s=this.bsModalService)||void 0===s||s.setDismissReason("esc"),this.hide()))}ngOnDestroy(){this.isShown&&this._hide()}hide(){if(!this.isModalHiding&&this.isShown){if(this.config.closeInterceptor)return void this.config.closeInterceptor().then(()=>this._hide(),()=>{});this._hide()}}_hide(){this.isModalHiding=!0,this._renderer.removeClass(this._element.nativeElement,(0,a.XA)()?"in":"show"),setTimeout(()=>{var e,o;this.isShown=!1,document&&document.body&&1===(null===(e=this.bsModalService)||void 0===e?void 0:e.getModalsCount())&&(this._renderer.removeClass(document.body,"modal-open"),this._renderer.setStyle(document.body,"overflow-y","")),null===(o=this.bsModalService)||void 0===o||o.hide(this.config.id),this.isModalHiding=!1},this.isAnimated?300:0)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(I),n.Y36(n.SBq),n.Y36(n.Qsj))},t.\u0275cmp=n.Xpm({type:t,selectors:[["modal-container"]],hostAttrs:["role","dialog","tabindex","-1",1,"modal"],hostVars:3,hostBindings:function(e,o){1&e&&n.NdJ("mousedown",function(r){return o.onClickStarted(r)})("click",function(r){return o.onClickStop(r)})("popstate",function(){return o.onPopState()},!1,n.Jf7)("keydown.esc",function(r){return o.onEsc(r)},!1,n.Jf7),2&e&&n.uIk("aria-modal",!0)("aria-labelledby",o.config.ariaLabelledBy)("aria-describedby",o.config.ariaDescribedby)},ngContentSelectors:J,decls:3,vars:2,consts:[["role","document","focusTrap",""],[1,"modal-content"]],template:function(e,o){1&e&&(n.F$t(),n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.Hsn(2),n.qZA(),n.qZA()),2&e&&n.Tol("modal-dialog"+(o.config.class?" "+o.config.class:""))},directives:[V],encapsulation:2}),t})(),R=(()=>{class t{constructor(e,o){this._isAnimated=!1,this._isShown=!1,this.element=e,this.renderer=o}get isAnimated(){return this._isAnimated}set isAnimated(e){this._isAnimated=e}get isShown(){return this._isShown}set isShown(e){this._isShown=e,e?this.renderer.addClass(this.element.nativeElement,"in"):this.renderer.removeClass(this.element.nativeElement,"in"),(0,a.XA)()||(e?this.renderer.addClass(this.element.nativeElement,"show"):this.renderer.removeClass(this.element.nativeElement,"show"))}ngOnInit(){this.isAnimated&&(this.renderer.addClass(this.element.nativeElement,"fade"),a.cQ.reflow(this.element.nativeElement)),this.isShown=!0}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(n.Qsj))},t.\u0275cmp=n.Xpm({type:t,selectors:[["bs-modal-backdrop"]],hostAttrs:[1,"modal-backdrop"],decls:0,vars:0,template:function(e,o){},encapsulation:2}),t})(),q=1,M=(()=>{class t{constructor(e,o,s){this.clf=o,this.modalDefaultOption=s,this.onShow=new n.vpe,this.onShown=new n.vpe,this.onHide=new n.vpe,this.onHidden=new n.vpe,this.isBodyOverflowing=!1,this.originalBodyPadding=0,this.scrollbarWidth=0,this.modalsCount=0,this.loaders=[],this._backdropLoader=this.clf.createLoader(),this._renderer=e.createRenderer(null,null),this.config=s?Object.assign({},C,s):C}show(e,o){this.modalsCount++,this._createLoaders();const s=(null==o?void 0:o.id)||q++;return this.config=this.modalDefaultOption?Object.assign({},C,this.modalDefaultOption,o):Object.assign({},C,o),this.config.id=s,this._showBackdrop(),this.lastDismissReason=void 0,this._showModal(e)}hide(e){(1===this.modalsCount||null==e)&&(this._hideBackdrop(),this.resetScrollbar()),this.modalsCount=this.modalsCount>=1&&null!=e?this.modalsCount-1:0,setTimeout(()=>{this._hideModal(e),this.removeLoaders(e)},this.config.animated?150:0)}_showBackdrop(){const e=!0===this.config.backdrop||"static"===this.config.backdrop,o=!this.backdropRef||!this.backdropRef.instance.isShown;1===this.modalsCount&&(this.removeBackdrop(),e&&o&&(this._backdropLoader.attach(R).to("body").show({isAnimated:this.config.animated}),this.backdropRef=this._backdropLoader._componentRef))}_hideBackdrop(){this.backdropRef&&(this.backdropRef.instance.isShown=!1,setTimeout(()=>this.removeBackdrop(),this.config.animated?150:0))}_showModal(e){var o;const s=this.loaders[this.loaders.length-1];if(this.config&&this.config.providers)for(const _ of this.config.providers)s.provide(_);const r=new B,u=s.provide({provide:I,useValue:this.config}).provide({provide:B,useValue:r}).attach(X).to("body");return r.hide=()=>{var _;return null===(_=u.instance)||void 0===_?void 0:_.hide()},r.setClass=_=>{u.instance&&(u.instance.config.class=_)},r.onHidden=new n.vpe,r.onHide=new n.vpe,this.copyEvent(s.onBeforeHide,r.onHide),this.copyEvent(s.onHidden,r.onHidden),u.show({content:e,isAnimated:this.config.animated,initialState:this.config.initialState,bsModalService:this,id:this.config.id}),u.instance&&(u.instance.level=this.getModalsCount(),r.content=s.getInnerComponent(),r.id=null===(o=u.instance.config)||void 0===o?void 0:o.id),r}_hideModal(e){if(null!=e){const o=this.loaders.findIndex(r=>{var u;return(null===(u=r.instance)||void 0===u?void 0:u.config.id)===e}),s=this.loaders[o];s&&s.hide(e)}else this.loaders.forEach(o=>{o.instance&&o.hide(o.instance.config.id)})}getModalsCount(){return this.modalsCount}setDismissReason(e){this.lastDismissReason=e}removeBackdrop(){this._renderer.removeClass(document.body,"modal-open"),this._renderer.setStyle(document.body,"overflow-y",""),this._backdropLoader.hide(),this.backdropRef=void 0}checkScrollbar(){this.isBodyOverflowing=document.body.clientWidth<window.innerWidth,this.scrollbarWidth=this.getScrollbarWidth()}setScrollbar(){!document||(this.originalBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")||"0",10),this.isBodyOverflowing&&(document.body.style.paddingRight=`${this.originalBodyPadding+this.scrollbarWidth}px`))}resetScrollbar(){document.body.style.paddingRight=`${this.originalBodyPadding}px`}getScrollbarWidth(){const e=this._renderer.createElement("div");this._renderer.addClass(e,"modal-scrollbar-measure"),this._renderer.appendChild(document.body,e);const o=e.offsetWidth-e.clientWidth;return this._renderer.removeChild(document.body,e),o}_createLoaders(){const e=this.clf.createLoader();this.copyEvent(e.onBeforeShow,this.onShow),this.copyEvent(e.onShown,this.onShown),this.copyEvent(e.onBeforeHide,this.onHide),this.copyEvent(e.onHidden,this.onHidden),this.loaders.push(e)}removeLoaders(e){if(null!=e){const o=this.loaders.findIndex(s=>{var r;return(null===(r=s.instance)||void 0===r?void 0:r.config.id)===e});o>=0&&(this.loaders.splice(o,1),this.loaders.forEach((s,r)=>{s.instance&&(s.instance.level=r+1)}))}else this.loaders.splice(0,this.loaders.length)}copyEvent(e,o){e.subscribe(s=>{o.emit(this.lastDismissReason||s)})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(n.FYo),n.LFG(m.oj),n.LFG(F,8))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();D.forRoot();let Q=(()=>{class t{static forRoot(){return{ngModule:t,providers:[M,m.oj,g.sA]}}static forChild(){return{ngModule:t,providers:[M,m.oj,g.sA]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[D]]}),t})()},3514:(A,b,c)=>{c.d(b,{z:()=>h});var n=c(3018),a=c(3647),m=c(8583);function g(f,p){if(1&f){const l=n.EpF();n.TgZ(0,"div",3),n.NdJ("click",function(){const y=n.CHM(l).$implicit;return n.oxw().openModal(y)}),n.TgZ(1,"div",4),n.TgZ(2,"span",5),n._uU(3),n.qZA(),n.TgZ(4,"h1"),n._uU(5),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA(),n.qZA(),n.qZA()}if(2&f){const l=p.$implicit;n.xp6(3),n.Oqu(l.date),n.xp6(2),n.Oqu(l.title),n.xp6(2),n.Oqu(l.description)}}let h=(()=>{class f{constructor(l){this.modalService=l,this.events=[]}ngOnInit(){}openModal(l){}}return f.\u0275fac=function(l){return new(l||f)(n.Y36(a.tT))},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-timeline"]],inputs:{events:"events"},decls:3,vars:1,consts:[[1,"container"],[1,"timeline"],["class","timeline-event","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"timeline-event",2,"cursor","pointer",3,"click"],[1,"timeline-event-content"],[1,"date"]],template:function(l,v){1&l&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.YNc(2,g,8,3,"div",2),n.qZA(),n.qZA()),2&l&&(n.xp6(2),n.Q6J("ngForOf",v.events))},directives:[m.sg],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.container[_ngcontent-%COMP%]{padding-top:30px;min-height:75vh;width:100%;display:flex;align-items:center;justify-content:center}.timeline[_ngcontent-%COMP%]{width:80%;height:auto;max-width:800px;margin:0 auto;position:relative}.timeline-event[_ngcontent-%COMP%]{padding:20px;background-color:#3131314b;border-radius:10px;margin-bottom:20px}.timeline-event[_ngcontent-%COMP%]:last-child{margin-bottom:0}.timeline-event[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px;font-weight:500;line-height:30px;margin-bottom:10px}.timeline-event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:30px;font-weight:300}@media only screen and (min-width: 768px){.container[_ngcontent-%COMP%]{min-height:100vh}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;height:100%;width:2px;left:50%;background-color:gray;transform:translate(-50%)}.timeline-event[_ngcontent-%COMP%]{width:50%;margin-bottom:50px;position:relative;transition:box-shadow .3s}.timeline-event[_ngcontent-%COMP%]:nth-child(odd){float:left;clear:right;transform:translate(-30px);border-radius:20px 0 20px 20px}.timeline-event[_ngcontent-%COMP%]:nth-child(odd):after{transform:translate(50%,-50%);right:-30px}.timeline-event[_ngcontent-%COMP%]:nth-child(even){float:right;clear:left;transform:translate(30px);border-radius:0 20px 20px}.timeline-event[_ngcontent-%COMP%]:nth-child(even):after{transform:translate(-50%,-50%);left:-30px}.timeline-event[_ngcontent-%COMP%]:hover{box-shadow:0 0 12px #73ffff99}.timeline-event[_ngcontent-%COMP%]:after{content:"";position:absolute;height:20px;width:20px;background-color:gray;border-radius:50%;top:0}.timeline-event[_ngcontent-%COMP%]:hover:after{background-color:#00bfff}.date[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin-bottom:10px;letter-spacing:2px;position:absolute;top:-30px}}']}),f})()},4466:(A,b,c)=>{c.d(b,{m:()=>g});var n=c(8583),a=c(3647),m=c(3018);let g=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=m.oAB({type:h}),h.\u0275inj=m.cJS({imports:[[n.ez,a.zk.forRoot()]]}),h})()}}]);