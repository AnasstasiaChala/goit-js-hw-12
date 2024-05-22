import{a as L,S as b,i as n}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h=t=>t.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:f})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${a}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes"><span class="text-body">Likes:</span> <span class="quantity">${e}</span></small>
        <small class="text-body-views"><span class="text-body">Views:</span> <span class="quantity">${r}</span></small>
        <small class="text-body-comments"><span class="text-body">Comments:</span> <span class="quantity">${i}</span></small>
        <small class="text-body-downloads"><span class="text-body">Dowloads:</span> <span class="quantity">${f}</span></small>
    </div>
 
    </li>
`).join(""),w="https://pixabay.com/api/",E="43896740-362a21d10e9d41ec216c05f15",p=async(t,s=1,o=15)=>{const a=new URLSearchParams({key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:o});try{const e=await L.get(`${w}?${a}`);if(e.status!==200)throw new Error(e.statusText);return e.data}catch(e){throw console.log(e),e}},l=document.querySelector(".js-gallery"),x=document.querySelector(".js-search-form"),c=document.querySelector(".js-load-more"),m=document.querySelector(".js-loader");let u=1,d="";const y=15;let g=new b(".js-gallery a");async function P(t){if(t.preventDefault(),d=t.target.elements.searchKeyword.value.trim(),d===""){l.innerHTML="",t.target.reset(),n.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}u=1,l.innerHTML="",c.classList.add("is-hidden"),m.classList.remove("is-hidden");try{const s=await p(d,u,y);s.totalHits===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(l.innerHTML=h(s.hits),g.refresh(),c.classList.remove("is-hidden"))}catch(s){console.log(s),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{t.target.reset(),m.classList.add("is-hidden")}}async function v(){u+=1,m.classList.remove("is-hidden"),c.classList.add("is-hidden");try{const t=await p(d,u,y);if(t.hits.length===0)n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"red"});else{const s=h(t.hits);l.insertAdjacentHTML("beforeend",s),g.refresh(),c.classList.remove("is-hidden");const{height:o}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch(t){console.error(t),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:2e3})}finally{m.classList.add("is-hidden")}}x.addEventListener("submit",P);c.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
