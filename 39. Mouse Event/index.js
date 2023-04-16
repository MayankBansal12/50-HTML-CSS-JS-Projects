const mouseX=document.getElementById("mouseX");
const mouseY=document.getElementById("mouseY");

window.addEventListener("mousemove",(event)=>{
    mouseX.innerHTML=`${event.clientX}`;
    mouseY.innerHTML=`${event.clientY}`;
});