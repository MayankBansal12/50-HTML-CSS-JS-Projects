const date=new Date();

const dayEl=document.querySelector(".day");
const monthEl=document.querySelector(".month");
const dateEl=document.querySelector(".date");
const yearEl=document.querySelector(".year");

dayEl.innerText=date.toLocaleString("en",{
    weekday:"long"
});
monthEl.innerText=date.toLocaleString("en",{
    month:"long"
});

yearEl.innerText=date.getFullYear();
dateEl.innerText=date.getDate();