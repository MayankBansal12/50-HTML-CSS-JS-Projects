const magnifierEl=document.querySelector(".magnifier");
const searchContainerEl=document.querySelector(".search-container");

magnifierEl.addEventListener("click",()=>{
    searchContainerEl.classList.toggle("active");
});