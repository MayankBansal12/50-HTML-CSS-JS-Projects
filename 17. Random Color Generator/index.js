const containerEl=document.querySelector(".container");
for(let i=0;i<30;i++){
    const colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    let color="#"+randomColor();
    colorContainerEl.style.backgroundColor=color; 
    colorContainerEl.innerHTML=`${color}`;
}

function randomColor(){
    const chars="0123456789abcdef";
    let colorCode="";
    const codeLength=6;
    for(let i=0;i<codeLength;i++){
        let no=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(no,no+1);
    }
    return colorCode;
}