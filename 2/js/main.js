const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

function setDate() {
  // Get time units
  const now     = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours   = now.getHours();

  // Calculate degrees
  // The second-hand will tick 60 times before it starts again
  const secondsDegrees = ((seconds / 60) * 360) + 90;

  // As will the minutes
  const minutesDegrees = ((minutes / 60) * 360) + 90;

  // But there will only be 12 hours before the hour hand starts again
  const hoursDegrees = ((hours / 12) * 360) + 90;

  // If about to reset to 0, then quickly remove the transition, else put it back
  if(secondsDegrees == 90)
    secondHand.style.transition = 'none';
  else
    secondHand.style.transition = 'all 0.05s';
  if(minutesDegrees == 90)
    minuteHand.style.transition = 'none';
  else
    minuteHand.style.transition = 'all 0.05s';
  if(hoursDegrees == 90)
    hourHand.style.transition = 'none';
  else
    hourHand.style.transition = 'all 0.05s';

  // Set the appropriate styles
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform   = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);