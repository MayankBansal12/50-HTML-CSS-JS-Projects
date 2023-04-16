
const payment=document.querySelector(".payment");
function calculateLoan(){
    payment.innerHTML="Loading...";
    const amt=document.getElementById("amount").value;
    const rate=document.getElementById("rate").value;
    const time=document.getElementById("time").value;
    const int=(amt*rate*0.01)/time;
    payment.innerHTML=`Monthly Payment: ${((amt/time)+int).toFixed(2)}`;
    
}

let inputs=document.querySelectorAll("input");
inputs.forEach((input)=>{
    input.addEventListener("change",calculateLoan);
});