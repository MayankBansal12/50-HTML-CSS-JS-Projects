let wordtitle=document.getElementById("word-title");
let meaning=document.getElementById("meaning");
let audio=document.getElementById("audio");
let info=document.getElementById("info-text");
let meaning_container=document.getElementById("meaning-container");

async function fetchAPI(word){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const result=await fetch(url).then((res)=>res.json());
        meaning_container.style.display="none";
        info.style.display="block";
        info.innerHTML=`Searching meaning of "${word}"`;
        if(result.title){
            wordtitle.innerHTML=word;
            meaning.innerHTML="N/A";
            audio.style.display="none";
        }else{
            audio.style.display="inline-flex";
            wordtitle.innerHTML=result[0].word;
            meaning.innerHTML=result[0].meanings[0].definitions[0].definition;
            audio.src=result[0].phonetics[1].audio;    
        }
        meaning_container.style.display="block";
        info.style.display="none";
    } catch (error) {
        try{
            const result=await fetch(url).then((res)=>res.json());
            audio.style.display="inline-flex";
            wordtitle.innerHTML=result[0].word;
            meaning.innerHTML=result[0].meanings[0].definitions[0].definition;
            meaning_container.style.display="block";
            info.style.display="none";
            audio.src="";
        }catch(error){
            info.style.display="block";
            console.log(error);
            info.innerHTML="Error Occured..Try again pal";
        }
    }
    
}

let input=document.getElementById('inputWord');
input.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value);
    }
});