if(!customElements.get("background-video")){class o extends HTMLElement{constructor(){super(),this.tl=!1,this.splittext=!1,this.paused=!1,this.toggle=this.querySelector(".background-video__controls button")}connectedCallback(){let e=this;document.body.classList.contains("animations-true")&&typeof gsap<"u"&&this.prepareAnimations(),this.video_container=this.querySelector(".background-video__iframe"),this.video_container.querySelector("iframe")&&(this.video_container.querySelector("iframe").onload=function(){e.videoPlay()}),this.toggle&&this.toggle.addEventListener("click",this.setupControlEvents.bind(this))}disconnectedCallback(){document.body.classList.contains("animations-true")&&typeof gsap<"u"&&(this.tl.kill(),this.splittext.revert())}setupControlEvents(){this.paused?(this.videoPlay(),this.toggle&&this.toggle.classList.remove("paused")):(this.videoPause(),this.toggle&&this.toggle.classList.add("paused"))}videoPlay(){setTimeout(()=>{this.video_container.dataset.provider==="youtube"?this.video_container.querySelector("iframe").contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo",args:""}),"*"):this.video_container.dataset.provider==="vimeo"?this.video_container.querySelector("iframe").contentWindow.postMessage(JSON.stringify({method:"play"}),"*"):this.video_container.dataset.provider==="hosted"&&this.video_container.querySelector("video").play(),this.paused=!1},10)}videoPause(){setTimeout(()=>{this.video_container.dataset.provider==="youtube"?this.video_container.querySelector("iframe").contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:""}),"*"):this.video_container.dataset.provider==="vimeo"?this.video_container.querySelector("iframe").contentWindow.postMessage(JSON.stringify({method:"pause"}),"*"):this.video_container.dataset.provider==="hosted"&&this.video_container.querySelector("video").pause(),this.paused=!0},10)}prepareAnimations(){let e=this,i=0;e.tl=gsap.timeline({scrollTrigger:{trigger:e,start:"top center"}}),document.fonts.ready.then(function(){if(e.splittext=new SplitText(e.querySelectorAll("h3, p:not(.subheading)"),{type:"lines",linesClass:"line-child"}),e.mask=new SplitText(e.querySelectorAll("h3, p:not(.subheading)"),{type:"lines",linesClass:"line-parent"}),e.querySelector(".subheading")&&(e.tl.fromTo(e.querySelector(".subheading"),{opacity:0},{duration:.75,opacity:.6},0),i+=.5),e.querySelector("h3")){let t=.7+(e.querySelectorAll("h3 .line-child").length-1)*.05;e.tl.from(e.querySelectorAll("h3 .line-child"),{duration:t,yPercent:120,stagger:.05,rotation:"3deg"},0),i+=t}if(e.querySelector(".rte p")){let t=.7+(e.querySelectorAll("p .line-child").length-1)*.02;e.tl.set(e.querySelectorAll(".rte p"),{visibility:"visible"},0).from(e.querySelectorAll(".rte p .line-child"),{duration:t,yPercent:120,stagger:.02,rotation:"3deg"},0),i+=t}e.querySelector(".video-lightbox-modal__button")&&e.tl.fromTo(e.querySelector(".video-lightbox-modal__button"),{autoAlpha:0},{duration:.5,autoAlpha:1},i*.4)})}}customElements.define("background-video",o)}
//# sourceMappingURL=sections--background-video.js.map
