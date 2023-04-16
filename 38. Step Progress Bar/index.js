const prevEl=document.getElementById("prev");
const nextEl=document.getElementById("next");
const stepsEl=document.querySelectorAll(".step");
const progressBar=document.querySelector(".progress-bar-front");

let currCheck=1;

prevEl.addEventListener("click",()=>{
    currCheck--;
    if(currCheck<1){
        currCheck=1;
    }
    updateStep();
});

nextEl.addEventListener("click",()=>{
    currCheck++;
    if(currCheck>stepsEl.length){
        currCheck=stepsEl.length;
    }
    updateStep();
});

function updateStep(){
    stepsEl.forEach((stepEl,idx)=>{
        if(idx<currCheck){
            stepEl.classList.add("checked");
            stepEl.innerHTML=`<i class="fa-solid fa-check"></i> <small>${idx===0?"Start": idx===stepsEl.length-1? "Final" : "Step:"+idx}</small>`;
        }else{
            stepEl.classList.remove("checked");
            stepEl.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        }
    })
    const checked=document.querySelectorAll(".checked");
    progressBar.style.width=((checked.length-1)/(stepsEl.length-1)*100)+"%";

    if(currCheck===1){
        prevEl.disabled=true;
    }else if(currCheck===stepsEl.length){
        nextEl.disabled=true;
    }else{
        prevEl.disabled=false;
        nextEl.disabled=false;
    }
}