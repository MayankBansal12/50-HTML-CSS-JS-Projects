const imgEl=document.getElementById("bg-image");

window.addEventListener("scroll",update);

function update(){
    imgEl.style.opacity= 1-(window.scrollY/800);
    imgEl.style.backgroundSize= 160-(window.scrollY/12)+"%";
}