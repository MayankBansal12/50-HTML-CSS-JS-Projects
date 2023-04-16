const tabs=document.querySelector(".tabs");
const btns=document.querySelectorAll(".button");
const contents=document.querySelectorAll(".content");

tabs.addEventListener("click",(event)=>{
    let id=event.target.getAttribute("data-id")
    btns.forEach((btn)=>{
        btn.classList.remove("live");
    })
    event.target.classList.add("live");
    contents.forEach((content)=>{
        content.classList.remove("live");
    })
    document.getElementById(id).classList.add("live");
});