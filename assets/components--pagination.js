if(!customElements.get("pagination")){class s extends HTMLElement{constructor(){super();const t=this.dataset.section;this.button=this.querySelector(".load-more"),this.grid=document.querySelector("[data-id="+t+"]"),this.animations_enabled=document.body.classList.contains("animations-true")&&typeof gsap<"u",this.i=2}connectedCallback(){this.classList.contains("pagination-type--loadmore")&&this.loadMore(),this.classList.contains("pagination-type--infinite")&&this.infinite()}addUrlParam(t,i){var e=i+"="+this.i,n="?"+e;return t&&(n=t.replace(new RegExp("([?&])"+i+"[^&]*"),"$1"+e),n===t&&(n+="&"+e)),n}loadMore(){let t=this;this.button.addEventListener("click",function(){return t.loadProducts(),this.blur(),!1})}infinite(){let t=this;t.observer=new IntersectionObserver(function(i){i[0].intersectionRatio===1&&t.loadProducts()},{threshold:[0,1]}),t.observer.observe(t)}loadProducts(){let t=this,i=document.location.pathname+t.addUrlParam(document.location.search,"page");t.getAttribute("loading")||(t.i++,t.setAttribute("loading",!0),fetch(i).then(e=>e.text()).then(e=>{const n=e;t.renderProducts(n,i),dispatchCustomEvent("pagination:page-changed",{url:i})}))}renderProducts(t,i){let e=this,n=new DOMParser().parseFromString(t,"text/html").getElementById("product-grid");if(!n){e.observer&&e.observer.unobserve(e),e.removeAttribute("loading"),e.button&&e.button.classList.add("visually-hidden");return}let a=n.querySelectorAll(".column");for(var o=0;o<a.length;o++)this.grid.appendChild(a[o]);this.animations_enabled?(gsap.set(a,{opacity:0,y:30}),gsap.to(a,{duration:.5,y:0,opacity:1,stagger:.05,onComplete:function(){e.removeAttribute("loading"),typeof StampedFn.loadBadges<"u"&&StampedFn.loadBadges()}})):(e.removeAttribute("loading"),typeof StampedFn.loadBadges<"u"&&StampedFn.loadBadges())}}customElements.define("pagination-theme",s)}
//# sourceMappingURL=components--pagination.js.map
