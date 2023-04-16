let btn=document.getElementById("btn");
let input=document.getElementById("input");
let errorEl=document.getElementById("errorMessage");
let gallery=document.getElementById("gallery");
async function fetchimage(){
    let value=input.value;
    if(value<1 || value>10){
        errorEl.style.display="block";
        errorEl.innerHTML="Can't load more than 10 images at a time";
        return;
    }
    try {
        const loading=`<img src="spinner.svg" />`;
        gallery.innerHTML=loading;
        btn.style.display="none";
        await fetch(`https://api.unsplash.com/photos?per_page=${value}&page=${Math.round(Math.random()*1000)}&client_id=eVB07gTxTriNGEQS_lkRm1lstROtIj_AQSoPIHLdZ9I`).then((res)=>res.json().then((data)=>{
            if(data){
                let imgs="";
                data.forEach((pic)=>{
                    imgs+=`<img src=${pic.urls.small} alt="image"/>`    
                });
                gallery.style.display="block";
                gallery.innerHTML=imgs;
                btn.style.display="block";
                errorEl.style.display="none";
            }
        }));
    }catch (error) {
        errorEl.innerText="Error Occured...Try Again later";   
        errorEl.style.display="block";
        btn.style.display="block";
        gallery.innerHTML="";
    }
}

btn.addEventListener("click",fetchimage);