if(!customElements.get("free-shipping")){class s extends HTMLElement{constructor(){super()}connectedCallback(){let i=this.querySelector(".free-shipping--text span"),e=parseInt(this.dataset.cartTotal,10),t=Math.round(parseInt(this.dataset.minimum,10)*(Shopify.currency.rate||1)),n=1;if(this.remainingText=this.querySelector(".free-shipping--text-remaining"),this.fullText=this.querySelector(".free-shipping--text-full"),e<t){if(n=e/t,i){let r=t-e,l=window.theme.settings.money_with_currency_format||"${{amount}}";i.innerHTML=formatMoney(r,l)}this.remainingText.style.display="block",this.fullText.style.display="none"}else this.remainingText.style.display="none",this.fullText.style.display="block";this.style.setProperty("--percentage",n)}}customElements.define("free-shipping",s)}
//# sourceMappingURL=components--free-shipping.js.map
