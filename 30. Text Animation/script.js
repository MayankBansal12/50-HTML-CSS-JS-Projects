const containerEl=document.querySelector(".container");

const careers=["Student","Web Developer","Freelancer","Learner","Writer","Artist"];

let charIdx=0;
let currIdx=0;

function update(){
    charIdx++;
    containerEl.innerHTML=`<h1>I am ${careers[currIdx].slice(0,1)==='A'?"an":"a"} ${careers[currIdx].slice(0,charIdx)}</h1>`
    if(charIdx===careers[currIdx].length){
        charIdx=0;
        currIdx++;
    }
    if(currIdx===careers.length){
        currIdx=0;
    }
    setTimeout(update,300);
}

update();