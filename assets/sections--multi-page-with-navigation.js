if(!customElements.get("multi-page-with-navigation")){class i extends HTMLElement{constructor(){super()}connectedCallback(){this.buttons=Array.from(this.querySelectorAll(".multi-page-with-navigation--button")),this.pages=Array.from(this.querySelectorAll(".multi-page-with-navigation--page")),this.buttons.forEach((t,e)=>{t.addEventListener("click",()=>{this.buttonClick(t,e)})})}buttonClick(t,e){[].forEach.call(this.buttons,function(l){l.classList.remove("active")}),t.classList.add("active");let o=getComputedStyle(document.documentElement).getPropertyValue("--header-height"),a=this.pages[e].getBoundingClientRect().top+window.scrollY-parseInt(o,10)-20;window.scrollTo({top:a,left:0,behavior:"smooth"})}}customElements.define("multi-page-with-navigation",i)}
//# sourceMappingURL=sections--multi-page-with-navigation.js.map
