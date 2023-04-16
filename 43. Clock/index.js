const hourEl=document.querySelector(".hours");
const minuteEl=document.querySelector(".minutes");
const secondEl=document.querySelector(".seconds");

function update(){
    const currDate=new Date();
    const hour=currDate.getHours();
    const min=currDate.getMinutes();
    const sec=currDate.getSeconds();
    hourEl.style.transform=`rotate(${(hour/12)*360}deg)`
    minuteEl.style.transform=`rotate(${(min/60)*360}deg)`
    secondEl.style.transform=`rotate(${(sec/60)*360}deg)`
    setTimeout(update,1000);
}
update();