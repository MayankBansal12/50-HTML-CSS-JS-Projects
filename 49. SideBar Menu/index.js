const barEl=document.querySelector(".fa-bars");
const close=document.querySelector(".fa-xmark");
const sidebar=document.querySelector(".sidebar");

barEl.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
})

close.addEventListener("click",()=>{
    sidebar.classList.remove("active");
})