const barEl=document.querySelector(".fa-bars");
const menuEl=document.querySelector(".list-menu");

barEl.addEventListener("click",()=>{
    menuEl.classList.toggle("show-menu");
})