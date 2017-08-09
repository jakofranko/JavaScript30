// Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

// Variables
let isClicking = false;

// Functions
function togglePlay() {
    if(video.paused)
        video.play();
    else
        video.pause();
}

function updateButton(e) {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    const amount = this.dataset.skip;
    video.currentTime += parseFloat(amount);
}

function trackClick(e) {
    if(e.type == "mousedown")
        isClicking = true;
    else if(e.type == "mouseup")
        isClicking = false;
}

function handleRangeUpdate(e) {
    if(e.type == 'mousemove' && isClicking)
        video[this.name] = this.value;
    else if(e.type == 'change')
        video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    if(e.type == 'click' || isClicking) {
        const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
}

function toggleFullscreen() {
    if(video.webkitRequestFullscreen)
        video.webkitRequestFullscreen();
    else if(video.mozRequestFullScreen)
        video.mozRequestFullScreen();
    else if(video.msRequestFullscreen)
        video.msRequestFullscreen();
    else if(video.requestFullscreen)
        video.requestFullscreen();
}

// Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => {
    range.addEventListener('mouseup', trackClick);
    range.addEventListener('mousedown', trackClick);
    range.addEventListener('mousemove', handleRangeUpdate);
    range.addEventListener('change', handleRangeUpdate);
});

progress.addEventListener('click', scrub);
progress.addEventListener('mouseup', trackClick);
progress.addEventListener('mousedown', trackClick);
progress.addEventListener('mousemove', scrub);

fullscreen.addEventListener('click', toggleFullscreen);