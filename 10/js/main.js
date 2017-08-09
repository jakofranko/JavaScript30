// My solution
// const items = document.querySelectorAll('.item');

// var shiftPressed = false;
// var checkedFirst = false;
// var clickedFirst = false;
// var stop = false;

// // Listeners
// items.forEach(item => item.addEventListener('click', handleClick));
// document.addEventListener('keydown', e => {
//   if(e.key == 'Shift')
//     shiftPressed = true;
// });
// document.addEventListener('keyup', e => {
//   if(e.key == 'Shift')
//     shiftPressed = false;
// });

// function handleClick(e) {
//   if(shiftPressed) {
//     debugger;
//     // Get index of clicked item
//     let index = false;
//     items.forEach((item, i) => {
//       if(this === item)
//         index = i;
//     });

//     // Now that we know the index of the clicked item, loop through all the items
//     // and if we encounter a checked box before encountering the index, begin checking
//     // until the index is reached. If the clicked item is reached before a checked box 
//     // is reach, begin checking until an already checked checkbox is reached
//     items.forEach((item, i) => {
//       let checkbox = item.querySelector('input');
//       // Start
//       if(i === index && checkedFirst === false && checkedFirst === false)
//         clickedFirst = true;
//       if(checkbox.checked && clickedFirst === false && clickedFirst === false)
//         checkedFirst = true;

//       // Stop
//       if(checkedFirst && i > index)
//         stop = true;
//       if(clickedFirst && checkbox.checked && i !== index)
//         stop = true;

//       if(!stop && !(checkedFirst === false && clickedFirst === false))
//         checkbox.checked = true;

//     });

//   }
// }

// Wes's solution (slightly optimized and annotated by me)
const checkboxes = document.querySelectorAll('[type=checkbox]');
let lastChecked;

function handleCheck(e) {
  debugger;
  let inBetween = false;
  // Only do this if we are holding the shift key AND are checking
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(box => {
      // If the lastChecked is on top, box will === lastChecked and
      // inBetween set to true. Then, when we hit the checkbox that triggered
      // this event (the one we most recently clicked), it will set it to false.
      // This works the other way too: if lastChecked is on the bottom,
      // box will === this first, set inBetween to true, then when it 
      // encounters lastChecked (on the bottom), it will switch it to false.
      if(box === this || box === lastChecked)
        inBetween = !inBetween; // Reverse the value

      if(inBetween)
        box.checked = true;
    });
  }

  // Set lastChecked
  if(this.checked)
    lastChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', handleCheck));