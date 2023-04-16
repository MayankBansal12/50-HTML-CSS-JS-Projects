const btnEl=document.querySelector(".btn");
const alertEl=document.querySelector(".alert-container");
const inputEl=document.querySelector("#input");
const copyEl=document.querySelector("i");

btnEl.addEventListener("click",()=>{
    generate();
});

function generate(){
    let chars="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-{}[]?";
    let password="";
    let passlen=15;
    for(let i=0;i<passlen;i++){
        const randomNo=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNo,randomNo+1);
    }
    inputEl.value=password;
}


copyEl.addEventListener("click",()=>{
    // inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    alertEl.classList.add("active");
    setTimeout(()=>{
        alertEl.classList.remove("active");
    },2000)
});