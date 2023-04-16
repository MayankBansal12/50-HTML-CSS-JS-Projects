const btn=document.querySelector(".btn");
const trailer=document.querySelector(".trailer");
const close=document.querySelector(".close-icon");
const iframe=document.querySelector("#video-player");

btn.addEventListener("click",()=>{
    trailer.classList.remove("active");
});

close.addEventListener("click",()=>{
    trailer.classList.add("active");
    // const player=new YT.Player(iframe);
    // player.pauseVideo();
    // Load the IFrame Player API asynchronously

let player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '5Peo-ivmupE',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'loop': 0,
      'rel': 0,
      'showinfo': 0
    }
});
// Call stopVideo() method on the player
player.stopVideo();
});
