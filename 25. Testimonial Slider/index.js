const testimonial=[
    {
        username:"- Tannie R.",
        url: "https://t3.ftcdn.net/jpg/02/22/85/16/240_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
        text: "I am completely blown away. Dude, your stuff is the bomb!"
    },
    {
        username:"- Staci O.",
        url: "https://t3.ftcdn.net/jpg/01/97/11/64/240_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg",
        text: "They did exactly what you said it does. Great job, I will definitely be ordering again! I made back the purchase price in just 48 hours! We were treated like royalty."
    },
    {
        username:"- Ivor W.",
        url: "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        text: "I like them more and more each day because it makes my life a lot easier."
    },
    {
        username:"- Vivia A.",
        url: "https://t3.ftcdn.net/jpg/02/21/09/40/240_F_221094033_LkLRc4NBltZ4XgTiTtZthvv0JrJM4cvG.jpg",
        text: " They are great. I just can't get enough of them. I want to get a T-Shirt with their logo on it so I can show it off to everyone."
    },
    {
        username:"- Tina K.",
        url: "https://t4.ftcdn.net/jpg/04/95/15/79/240_F_495157971_zIhzjfx3yG1AsgYOTQS9Z6VHAsN0OJSI.jpg",
        text: "I STRONGLY recommend them to EVERYONE interested in running a successful online business! Thanks ya!"
    }
]

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const username=document.querySelector(".username");

let idx=0;
function updateTestimonial(){
    const curr=testimonial[idx];
    imgEl.src=curr.url;
    textEl.innerText=curr.text;
    username.innerText=curr.username;
    idx++;
    if(idx==testimonial.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },5000);
}
updateTestimonial();