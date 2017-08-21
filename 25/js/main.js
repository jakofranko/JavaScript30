const divs = document.querySelectorAll('div');

function logText(e) {
  // e.stopPropagation(); // stop bubbling
  console.log(this.classList.value);
}

// When events are fired, the browser detects where the event occurred, and drills down into the DOM
// until it finds the specific element that has the listener attached. This process of drilling down
// is called the 'capture,' and events can be specified to occur on capture if desired. Once the element
// is found, the event will trigger on that element, and then bubble up on through each parent element
divs.forEach(div => div.addEventListener('click', logText)); // By default happens on the bubble up

document.body.addEventListener('click', logText, {
  capture: true // Means that the event will be triggered when it is 'captured' instead of on the 'bubble up'
});

document.querySelector('button').addEventListener('click', () => console.log('Clicked!!!'), {
  once: true // will unbind the event listener after the event is fired once
});