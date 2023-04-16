const containerEl=document.querySelector(".image-container");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");

let x=0;
let timer;

prev.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();
});
next.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    containerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x=x+45;
        updateGallery();
    },3000);
}
updateGallery();