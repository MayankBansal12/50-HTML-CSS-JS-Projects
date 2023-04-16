const celsiusEl=document.getElementById("celsius");
const fahrenheitEl=document.getElementById("fahrenheit");
const kelvinEl=document.getElementById("kelvin");

function computeTemp(event){
    const currValue=+event.target.value;
    switch (event.target.name) {
        case "celsius":
            fahrenheitEl.value=((currValue*1.8)+32).toFixed(2);
            kelvinEl.value=(currValue+273.32).toFixed(2);
            break;

        case "fahrenheit":
        celsiusEl.value=((currValue-32)/1.8).toFixed(2);
        kelvinEl.value=((currValue-32)/1.8+273.32).toFixed(2);
        break;

        case "kelvin":
            celsiusEl.value=(currValue-273.32).toFixed(2);
            fahrenheitEl.value=((currValue-273.32)*1.8+32).toFixed(2);
            break;

        default:
            break;
    }
}