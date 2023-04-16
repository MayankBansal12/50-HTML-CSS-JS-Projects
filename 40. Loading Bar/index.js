const countEl=document.querySelector(".counter");
const barEl=document.querySelector(".loading-bar-front");

let idx=0;
updateNum();
console.log(countEl+" "+barEl)

function updateNum(){
    countEl.innerText=idx+"%";
    barEl.style.width=idx+"%";
    idx++;
    if(idx<101){
        setTimeout(updateNum,10);
    }
}
