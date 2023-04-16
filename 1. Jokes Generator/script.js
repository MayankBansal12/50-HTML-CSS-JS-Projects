// API key of API Ninja
const APIkey="PVSRFnqrn/I38I0D6V1NYA==P6A4noPSWLCzIArK";
const options={
    method:"GET",
    headers:{
        'X-Api-Key':APIkey,
    },
};

let btn=document.getElementById("btn");
let joke=document.querySelector(".joke");

// The api url required (Jokes API)
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Function updating the Joke 
async function getJoke(){
    try {
        joke.innerText="Updating...";
        btn.disabled=true;
        btn.innerText="Loading...";
        const response=await fetch(apiURL,options);
        const data=await response.json();
        joke.innerHTML=data[0].joke;
        btn.disabled=false;
        btn.innerText="Tell me a joke";    
    } catch (error) {
        joke.innerHTML="Error occured...Try again later";
        btn.disabled=false;
        btn.innerText="Tell me a joke"; 
    }
}

// Adding the behaviour for the button
btn.addEventListener("click",getJoke);