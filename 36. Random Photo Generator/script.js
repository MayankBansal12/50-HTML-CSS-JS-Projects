const containerEl=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");
let imgNum;

btnEl.addEventListener("click",()=>{
    imgNum=10;
    for(let i=0;i<imgNum;i++){
        addImages();
    }
});

function addImages(){
    const img=document.createElement("img");
    img.src=`https://picsum.photos/300/?random=${Math.floor(Math.random()*200000)}`
    containerEl.appendChild(img);
}