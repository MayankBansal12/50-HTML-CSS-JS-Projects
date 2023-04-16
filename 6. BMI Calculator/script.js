const btn=document.querySelector(".btn");

function computeBMI(){
    const heightValue=document.getElementById("height").value/100;
    const weightValue=document.getElementById("weight").value;
    const bmiEl=document.getElementById("bmi");
    const value=weightValue/(heightValue*heightValue);
    bmiEl.value=value;
    const weightCond=document.getElementById("weight-condition");

    if(value<18.5){
        weightCond.innerText="Weight Condition: UnderWeight";
        
    }else if(value>=18.5 && value<=24.9){
        weightCond.innerText="Weight Condition: Normal Weight";
        
    }else if(value>=25 && value<=29.9){
        weightCond.innerText="Weight Condition: OverWeight";
    }else if(value>=30){
        weightCond.innerText="Weight Condition: Obesity";
    }
}

btn.addEventListener("click",computeBMI);