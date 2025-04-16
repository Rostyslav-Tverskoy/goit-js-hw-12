import{a as x,S,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",v="49673705-a6e36a8adce307eb03930fb9e";async function u(s,r=1){const o={key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return await x.get(q,{params:o})}const p=document.querySelector(".load-more"),m=document.querySelector(".gallery"),h=document.querySelector(".loader"),M=new S(".gallery a");function f(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:b,downloads:w})=>`<li class="gallery-item">
    <a href="${a}">
    <img src="${o}"  width="360" height="200" alt="${e}" />
    </a>
    <ul class="info">
    <li class="litext">
    <p class="ptext">Likes</p>
    <p class="plink">${t}</p>
    </li>
    <li class="litext">
    <p class="ptext">Views</p>
    <p class="plink">${n}</p>
    </li>
    <li class="litext">
    <p class="ptext">Comments</p>
    <p class="plink">${b}</p>
    </li>
    <li class="litext">
    <p class="ptext">Downloads</p>
    <p class="plink">${w}</p>
    </ul>
    </li>`).join("");m.insertAdjacentHTML("beforeend",r),M.refresh()}function $(){m.innerHTML=""}function I(){h.classList.remove("hidden")}function P(){h.classList.add("hidden")}function g(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}const l=document.querySelector(".load-more");l.addEventListener("click",O);const R=document.querySelector(".form");R.addEventListener("submit",B);let y="",L="",i=1;async function B(s){s.preventDefault(),i=30;const r=s.target.elements["search-text"].value.trim();if(r===""){c.warning({message:"Please enter a search query!",position:"topRight"});return}L=r,I(),$(),d(),await u(r,i).then(o=>{if(o.data.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o.data.hits);const a=Math.ceil(o.data.totalHits/15);if(y=a,i<a){g();return}d()}).catch(o=>c.error({message:"Что то пошло не так",position:"topRight"})).finally(()=>P())}async function O(){i++,l.disabled=!0,l.classList.replace("load-more","loader");try{const s=await u(L,i);if(f(s.data.hits),l.classList.replace("loader","load-more"),l.disabled=!1,i<y){g();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"});return}d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{c.error({message:"Что то пошло не так",position:"topRight"})}}
//# sourceMappingURL=index.js.map
