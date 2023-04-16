const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

const newYearTime=new Date("Jan 1,2024 00:00:00").getTime();

function updateCount(){
    const currTime=new Date().getTime();
    const gap=newYearTime-currTime;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/second);

    dayEl.innerText=d;
    hourEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;

    setTimeout(updateCount,1000);
}
updateCount();