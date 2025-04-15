import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css'; 
const loadMore = document.querySelector(".load-more");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
    const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
    <a href="${largeImageURL}">
    <img src="${webformatURL}"  width="360" height="200" alt="${tags}" />
    </a>
    <ul class="info">
    <li class="litext">
    <p class="ptext">Likes</p>
    <p class="plink">${likes}</p>
    </li>
    <li class="litext">
    <p class="ptext">Views</p>
    <p class="plink">${views}</p>
    </li>
    <li class="litext">
    <p class="ptext">Comments</p>
    <p class="plink">${comments}</p>
    </li>
    <li class="litext">
    <p class="ptext">Downloads</p>
    <p class="plink">${downloads}</p>
    </ul>
    </li>`).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();

}

export function clearGallery() {
    gallery.innerHTML = "";
}
    

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}

export function showLoadMoreButton() {
    loadMore.classList.remove("hidden");
}

export function hideLoadMoreButton() {
    loadMore.classList.add("hidden");
}

let page = "lalala"