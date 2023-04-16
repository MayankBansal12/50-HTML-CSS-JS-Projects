let btn=document.querySelector(".btn");
let container=document.querySelector(".anime-container");
let animepic=document.querySelector(".anime-pic");
let animename=document.querySelector(".anime-name");

async function fetchimage(){
    try {
        btn.disabled=true;
        btn.innerHTML="Loading...";
        animename.innerHTML="Updating...";   
        animepic.src="spinner.svg";
        let response=await fetch("https://api.catboys.com/img");
        let url=await response.json();
        container.style.display="block";
        animepic.src=url.url;
        animename.innerHTML=url.artist;   
        btn.disabled=false; 
        btn.innerHTML="Generate";
    } catch (error) {
        container.style.display="block";
        animename.innerHTML="Error...please try again";
        animepic.src="";
        btn.disabled=false; 
        btn.innerHTML="Generate";
    }
}
btn.addEventListener("click",fetchimage);