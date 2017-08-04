const keys = document.querySelectorAll('.key');

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0; // Rewinds the audio to beginning
  audio.play();

  // Animate the keys
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName != 'transform') return;
  this.classList.remove('playing');
}

// Add eventListeners
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);