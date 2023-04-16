let inputEl=document.querySelector("input");
let errorEl=document.querySelector(".error");
let resultEl=document.querySelector(".weight");

let errorTime,resultTime;
function getWeight(){
    if(inputEl.value<0 || isNaN(inputEl.value)){
        errorEl.innerText="Not a number";
        resultEl.innerText="";
        clearTimeout(errorTime);
        clearTimeout(resultTime);
        errorTime=setTimeout(()=>{
            errorEl.innerText="";
            inputEl.value="";
            resultEl.innerText="";
        },2000);
    }else{
        errorEl.innerText="";
        resultEl.innerHTML=(inputEl.value/2.2).toFixed(2);
        clearTimeout(errorTime);
        clearTimeout(resultTime);
        resultTime=setTimeout(()=>{
            resultEl.innerHTML="";
            inputEl.value="";
        },10000);
    }
}

inputEl.addEventListener("input",getWeight);
