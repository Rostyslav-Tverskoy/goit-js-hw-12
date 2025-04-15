import{a as w,S,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",v="49673705-a6e36a8adce307eb03930fb9e";async function d(s,r=1){const o={key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return await w.get(q,{params:o})}const u=document.querySelector(".load-more"),p=document.querySelector(".gallery"),m=document.querySelector(".loader"),M=new S(".gallery a");function f(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:b,downloads:x})=>`<li class="gallery-item">
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
    <p class="plink">${x}</p>
    </ul>
    </li>`).join("");p.insertAdjacentHTML("beforeend",r),M.refresh()}function $(){p.innerHTML=""}function I(){m.classList.remove("hidden")}function B(){m.classList.add("hidden")}function h(){u.classList.remove("hidden")}function g(){u.classList.add("hidden")}const c=document.querySelector(".load-more");c.addEventListener("click",R);const O=document.querySelector(".form");O.addEventListener("submit",P);let y="",L="",i=1;async function P(s){i=1,s.preventDefault();const r=s.target.elements["search-text"].value.trim();return L=r,I(),$(),await d(r,i).then(o=>{if(o.data.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o.data.hits);const a=o.data.totalHits/15;if(y=a,i<=a){h();return}g()}).catch(o=>l.error({message:"Что то пошло не так",position:"topRight"})).finally(()=>B()),r}async function R(){i++,c.disabled=!0;try{const s=await d(L,i);if(f(s.data.hits),c.disabled=!1,i<=y){h();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*3,behavior:"smooth"});return}g(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{l.error({message:"Что то пошло не так",position:"topRight"})}}
//# sourceMappingURL=index.js.map
