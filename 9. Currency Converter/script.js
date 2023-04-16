const currencyFirstEl=document.getElementById("currency-first");
const currencySecondEl=document.getElementById("currency-second");
const worthFirstEl=document.getElementById("worth-first");
const worthSecondEl=document.getElementById("worth-second");
const exchangeRateEl=document.getElementById("exchange-rate");


function updateRate(){
    const apiURL=`https://v6.exchangerate-api.com/v6/d7b854451afce790da8f8db8/latest/${currencyFirstEl.value}`;
    worthSecondEl.value="";
    fetch(apiURL).then(res=>res.json()).then(data=>{
        const rate=data.conversion_rates[currencySecondEl.value];
        worthSecondEl.value=(rate*worthFirstEl.value).toFixed(2);
        exchangeRateEl.innerText=`1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
    });
}
updateRate();
currencyFirstEl.addEventListener("change",updateRate);
currencySecondEl.addEventListener("change",updateRate);
worthFirstEl.addEventListener("input",updateRate);