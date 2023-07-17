const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

video.addEventListener("click", togglevideo);
video.addEventListener("pause", videostatusbar);
video.addEventListener("play", videostatusbar);
video.addEventListener("timeupdate", showprogress);
progress.addEventListener("change", videoprogress);
stop.addEventListener("click",stopvideo)

function togglevideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function videostatusbar() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
//lets now deal with progress and time;
function showprogress() {
    progress.value = (video.currentTime / video.duration) * 100;

  //lets get in minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    if (mins < video.duration) {
      mins = "0" + String(mins);
    }
  }
  //lets get in seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    if (secs < video.duration) {
      secs = "0" + String(secs);
    }
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}
//this lets the progress be moved along with the video:
function videoprogress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
///stop video
function stopvideo(){
    video.currentTime=0;
    video.pause();
}
