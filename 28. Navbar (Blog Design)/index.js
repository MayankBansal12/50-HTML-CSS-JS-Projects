const bottomEl=document.querySelector(".bottom-container");
const navbarEl=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});