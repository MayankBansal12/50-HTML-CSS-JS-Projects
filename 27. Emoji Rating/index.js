const colorsArray=["red","orange","lightblue","lightgreen","green"];

const emojisEl=document.querySelectorAll(".emoji-container i");
const starsEl=document.querySelectorAll(".review i");

updateRating(4);

starsEl.forEach((starEl,index)=>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl,idx)=>{
        if(idx<index+1){
            starEl.classList.add("active");
        }else{
            starEl.classList.remove("active");
        }
    });
    emojisEl.forEach((emojiEl)=>{
        emojiEl.style.transform=`translateX(-${index*50}px)`;
        emojiEl.style.color=colorsArray[index];
    });
}