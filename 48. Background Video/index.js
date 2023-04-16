const video=document.querySelector(".background");
const btn=document.querySelector(".btn");
const fa=document.querySelector(".fa-solid");

btn.addEventListener("click",()=>{
    if(fa.classList.contains("fa-play")){
        fa.classList.remove("fa-play");
        video.play();
        fa.classList.add("fa-pause");
    }else{
        fa.classList.add("fa-play");
        video.pause();
        fa.classList.remove("fa-pause");
    }
})