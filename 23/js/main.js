const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


// Functions to be used with event listeners
function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
  const voiceOptions = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');

    voicesDropdown.innerHTML = voiceOptions;

  // We'll set the text after the voices load
  msg.text = document.querySelector('[name=text]').value;
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver)
    speechSynthesis.speak(msg);
}

function setOption() {
  console.log(this.name, this.value)
  msg[this.name] = this.value;
  toggle();
}

// Add event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
// Bind returns the function it's called on with the context (1st param) and
// parameters passed in bound to that function call. Neat!
stopButton.addEventListener('click', toggle.bind(null, false));