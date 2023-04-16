const btnEl=document.getElementById("btn");
const ratingsEl=document.querySelectorAll(".ratings");
const container=document.querySelector(".container");

let selectedRating="";

ratingsEl.forEach((rating)=>{
    rating.addEventListener("click",(event)=>{
        removeActive();
        selectedRating=event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active") || event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating!==""){
        container.innerHTML=`<strong>Thanks for your Feedback!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <br>
        <strong>We will look to improve your services through your feedback.</strong>`; 
        container.style.color="darkcyan";
        container.style.padding="20px";
    }
});

function removeActive(){
    ratingsEl.forEach((rating)=>{
        rating.classList.remove("active");
    });
}