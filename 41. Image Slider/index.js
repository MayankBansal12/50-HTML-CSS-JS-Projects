const imageEl=document.querySelector(".image-container");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const imgEls=document.querySelectorAll("img");

let timeout;
let currimg=1;
prev.addEventListener("click",()=>{
    currimg--;
    clearTimeout(timeout);
    updateImg();
});

next.addEventListener("click",()=>{
    currimg++;
    clearTimeout(timeout);
    updateImg();
});

function updateImg(){
    if(currimg>imgEls.length-1){
        currimg=1;
    }else if(currimg<1){
        currimg=imgEls.length-1;
    }
    imageEl.style.transform=`translateX(-${(currimg-1)* 500}px)`;
    timeout=setTimeout(()=>{
        currimg++;
        updateImg();
    },5000);
}
updateImg();