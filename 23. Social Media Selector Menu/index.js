const menuEl=document.querySelector(".menu");
const socialEl=document.querySelector(".social-icons");
const icon=document.querySelector(".menu i");
const listEl=document.querySelectorAll(".social-icons li");
const menuText=document.querySelector(".menu p");

menuEl.addEventListener("click",()=>{
    icon.classList.toggle("rotate");
    socialEl.classList.toggle("hide");
});

listEl.forEach((list)=>{
    list.addEventListener("click",()=>{
        menuText.innerHTML=list.innerHTML;
        socialEl.classList.add("hide");
        icon.classList.remove("rotate");
    });
});
