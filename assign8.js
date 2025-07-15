// Wait for everything to load
window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

// YouTube Player API
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoFrame');
}

document.getElementById("toggleBtn").addEventListener("click", function () {
  const icon = this.querySelector("i");
  if (icon.classList.contains("fa-pause")) {
    player.pauseVideo();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  } else {
    player.playVideo();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  }
});

// Load YouTube Iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
