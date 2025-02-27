const d=`
  <style>
  :host {
    display: inline-block;
    position: relative;
  }
  :host([hidden]) {
    display: none;
  }
  s {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
		z-index: 5;
		border-radius: var(--scroll-shadow-radius);
    background:
      var(--scroll-shadow-top, radial-gradient(farthest-side at 50% 0%, rgba(0,0,0,.2), rgba(0,0,0,0))) top/100% var(--top),
      var(--scroll-shadow-bottom, radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0))) bottom/100% var(--bottom),
      var(--scroll-shadow-left, radial-gradient(farthest-side at 0%, rgba(0,0,0,.2), rgba(0,0,0,0))) left/var(--left) 100%,
      var(--scroll-shadow-right, radial-gradient(farthest-side at 100%, rgba(0,0,0,.2), rgba(0,0,0,0))) right/var(--right) 100%;
    background-repeat: no-repeat;
  }
  </style>
  <slot></slot>
  <s></s>
`,h=new WeakMap;class b extends HTMLElement{static get observedAttributes(){return["el"]}get el(){return this.getAttribute("el")}set el(t){this.setAttribute("el",t)}constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=d,h.set(this,new u(this.shadowRoot.lastElementChild))}connectedCallback(){this.shadowRoot.querySelector("slot").addEventListener("slotchange",()=>this.start()),this.start()}disconnectedCallback(){h.get(this).stop()}attributeChangedCallback(t,s,e){s!==e&&(this.scrollEl=e?this.querySelector(e):null,this.start())}start(){const t=this.scrollEl||this.firstElementChild;h.get(this).start(t,this.scrollEl?this.firstElementChild:null)}}class u{constructor(t){const s=this.update.bind(this,t,getComputedStyle(t));this.handleScroll=g(s),this.resizeObserver=new ResizeObserver(s)}start(t,s){this.el&&this.stop(),t&&(t.addEventListener("scroll",this.handleScroll),this.resizeObserver.observe(t),this.el=t),s&&(this.resizeObserver.observe(s),this.rootEl=s)}stop(){this.el&&(this.el.removeEventListener("scroll",this.handleScroll),this.resizeObserver.disconnect(),this.el=null,this.rootEl=null)}update(t,s){const{el:e,rootEl:c}=this;if(!e)return;const l=Number(s.getPropertyValue("--scroll-shadow-size")||14),n={"--top":r(e.scrollTop,0,l),"--bottom":r(e.scrollHeight-e.offsetHeight-e.scrollTop,0,l),"--left":r(e.scrollLeft,0,l),"--right":r(e.scrollWidth-e.offsetWidth-e.scrollLeft,0,l)};if(c){const i=e.getBoundingClientRect(),a=c.getBoundingClientRect();Object.assign(n,{top:r(i.top-a.top),bottom:r(a.bottom-i.bottom),left:r(i.left-a.left),right:r(a.right-i.right)})}for(const i in n)t.style.setProperty(i,`${n[i]}px`)}}function r(o,t=0,s){return o<t?t:o>s?s:o}function g(o){let t=null;return()=>{t||(t=requestAnimationFrame(()=>{o(),t=null}))}}"customElements"in window&&"ResizeObserver"in window&&customElements.define("scroll-shadow",b);export{b as ScrollShadowElement};
//# sourceMappingURL=components--scroll-shadow.js.map
