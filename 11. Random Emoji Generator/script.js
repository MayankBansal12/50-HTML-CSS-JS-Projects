const btn=document.getElementById("btn");
const emoji_name=document.getElementById("emoji_name");

const APIkey="b2ddd8d708836e4043e403a02bfb561a9607a1ca";
const url=`https://emoji-api.com/emojis?access_key=${APIkey}`;

async function generateEmoji(){
    btn.innerText="::::";
    emoji_name.innerText="Loading";
    try {
        const response=await fetch(url);
        const data= await response.json();
        const num=Math.floor(Math.random()*2694);
        const obj=data[num];
        btn.innerText=obj.character;
        emoji_name.innerText=obj.unicodeName;
    } catch (error) {
        btn.innerText="Click";
        emoji_name.innerText="Error Occured. Try again..";
    }
}

btn.addEventListener("click",generateEmoji);