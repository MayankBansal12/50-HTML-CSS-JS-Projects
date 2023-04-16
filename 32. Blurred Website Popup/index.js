const containerEl=document.querySelector(".website-container");
const btnEl=document.querySelector(".btn");

const popup=document.querySelector(".popup-container");
const close=document.querySelector(".close-btn");

btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popup.classList.remove("active");
})

close.addEventListener("click",()=>{
    popup.classList.add("active");
    containerEl.classList.remove("active");
})