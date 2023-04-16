const counterEl=document.querySelectorAll(".counter");
let interval;
let currData=1;
counterEl.forEach((counter)=>{
    const data=counter.getAttribute("data");
    counter.innerHTML="0";
    increaseCounter();
    function increaseCounter(){
        let currNum=counter.innerHTML;
        let increment=Math.floor(data/15);
        currNum=+currNum+increment;
        counter.innerHTML=currNum;
        if(currNum<data){
            setTimeout(increaseCounter,50);
        }else{
            counter.innerHTML=data;
        }
    }
});