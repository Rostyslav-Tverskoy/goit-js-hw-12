import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, hideLoader, showLoader } from "./js/render-functions";
import { hideLoadMoreButton } from "./js/render-functions";
import { showLoadMoreButton } from "./js/render-functions";


const loadMore = document.querySelector(".load-more");
loadMore.addEventListener("click", handleLoadMore);
const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);
let currentImages = "";
let currentQuery = "";
let page = 1;
 async function handleSubmit(event) {
    page=1;
    event.preventDefault();
    const query = event.target.elements["search-text"].value.trim();
    currentQuery = query;
    showLoader();
    clearGallery();


    await getImagesByQuery(query, page).then((response) => {
        if(response.data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            })
            return;
        }
        
        createGallery(response.data.hits);
        
        const totalImages = response.data.totalHits / 15;
        currentImages = totalImages;
        if(page <= totalImages) {
            showLoadMoreButton();
            return;  
        }
        hideLoadMoreButton();
        
    }
        )
        .catch((error) => iziToast.error({
            message:"Что то пошло не так",
            position: "topRight"
        }))
        .finally(() => hideLoader())
        return query;
    
}




async function handleLoadMore() {
    page++
    loadMore.disabled = true;
    try {
      const data = await getImagesByQuery(currentQuery, page);
      createGallery(data.data.hits);
      loadMore.disabled = false;
      if(page<=currentImages){
        showLoadMoreButton();
        const galleryItem = document.querySelector(".gallery-item");
        const cardHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy ({
            left: 0,
            top: cardHeight * 3,
            behavior: "smooth"
        })
        return;  
      } 
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight"
      })  
    }
    catch(error) {
        iziToast.error({
            message:"Что то пошло не так",
            position: "topRight"
        })
    }
    
}
