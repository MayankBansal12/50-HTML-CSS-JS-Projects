const hourEl=document.getElementById("hours");
const minEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.querySelector("#am span");

const bodyEl=document.querySelector("body");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    hourEl.innerText=h<10?"0"+h:h;
    minEl.innerText=m<10?"0"+m:m;
    secondEl.innerText=s<10?"0"+s:s;
    ampmEl.innerHTML=ampm;
    setTimeout(updateClock,1000);
}
updateClock();