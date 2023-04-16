const btnEl=document.getElementById("btn");
const author=document.querySelector(".author");
const quote=document.querySelector(".quote");

async function getQuote(){
    author.innerText="Loading...";
    quote.innerText="Updating..";
    btnEl.innerHTML="Loading";
    btnEl.disabled=true;
    try {
        const api_url ="https://type.fit/api/quotes";
        const response=await fetch(api_url);
        const data=await response.json();
        const no=Math.floor(Math.random()*1642);
        if(data[no].author==null){
            author.innerText="~Not Available";
        }else
            author.innerText="~"+data[no].author;
        quote.innerText=data[no].text;
    } catch (error) {
        quote.innerText="Error...Try again will ya?"
        author.innerText="....";
    }
    btnEl.innerHTML="Get Quote";
    btnEl.disabled=false;
}

btnEl.addEventListener("click",getQuote);