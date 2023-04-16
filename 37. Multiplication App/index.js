const quesEl=document.getElementById("ques");
const scoreEl=document.getElementById("score");
const inputEl=document.getElementById("answer");
const formEl=document.getElementById("form");

const num1=Math.round(Math.random()*10);
const num2=Math.round(Math.random()*10);

let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerHTML=`score: ${score}`;
quesEl.innerText=`What is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;

formEl.addEventListener("submit",()=>{
    if(inputEl.value==correctAns){
        score++;
    }else{
        score--;
    }
    localStorage.setItem("score",JSON.stringify(score));
});
