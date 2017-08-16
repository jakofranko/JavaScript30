const timeNodes = document.querySelectorAll('[data-time]');

// Convert to array
const times = Array.from(timeNodes);

// Get the time codes...
// Split them into minutes and seconds...
// Add up all the seconds...
// Get the total seconds for all videos...
const seconds = times
.map(time => time.dataset.time)
.map(timeCode => {
  const [mins, secs] = timeCode.split(':').map(parseFloat); // Super neat way to convert to numbers!!!
  return (mins * 60) + secs;
})
.reduce((total, vidSeconds) => total + vidSeconds);

// Get the total hours, minutes and seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log("Total video time:");
console.log(`Hours: ${hours}, Minutes: ${mins}, Seconds: ${secondsLeft}`);