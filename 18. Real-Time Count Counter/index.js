const textAreaEl=document.querySelector("textarea");
const totalChar=document.querySelector(".total-counter");
const remChar=document.querySelector(".remaining-counter");
let text;
const charsAllowed=100;
totalChar.innerHTML=0;
remChar.innerHTML=charsAllowed;

textAreaEl.addEventListener("input",()=>{
    let length=textAreaEl.value.length;
    // if(length>charsAllowed){
    //     textAreaEl.value=text;
    //     return;
    // }
    // if(length==charsAllowed){
    //     text=textAreaEl.value;
    // }
    totalChar.innerHTML=length;
    remChar.innerHTML=charsAllowed-length;
});