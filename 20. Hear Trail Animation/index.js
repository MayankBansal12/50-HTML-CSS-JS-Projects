const bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
    console.log(event.offsetX);
    console.log(event.offsetY);
    const spanEl=document.createElement("span");
    spanEl.style.left=event.offsetX+"px";
    spanEl.style.top=event.offsetY+"px";
    const size=Math.random()*100;
    spanEl.style.width=size+"px";
    spanEl.style.height=size+"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);
});