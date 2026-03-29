

const overlay = document.getElementById('overlay');
const audio = document.getElementById('background-audio');
const video = document.getElementById('background-video');
let audioStarted = false;

overlay.addEventListener('click', () => {
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    audio.play();
    video.play();
    audioStarted = true;
  }, 500);
});





