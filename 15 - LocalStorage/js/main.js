const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const addItems = document.querySelector('.add-items');
const clearButton = document.querySelector('.clear');
const selectButton = document.querySelector('.select');
const deleteButton = document.querySelector('.delete');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
e.preventDefault() // prevent the page from loading

const text = this.querySelector('[name=item]').value;
const item = {
  text,
  done: true
};
items.push(item);
populateList(items, itemsList);
localStorage.setItem('items', JSON.stringify(items));
this.reset(); // Blanks out the form
}

function populateList(plates = [], platesList) {
platesList.innerHTML = plates.map((plate, i) => {
  return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
      <label for="item${i}">${plate.text}</label>
    </li>
  `;
}).join('');
}

function toggleDone(e) {
console.log(e.target);
// If we don't check that the target we are clicking matches what we are looking for,
// the click event will 'bubble up' through all the elements that the input is nested in.
// We only want to act on the checkbox.
if(!e.target.matches('input')) return;
const el = e.target;
const index = el.dataset.index;
items[index].done = !items[index].done;
localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);
}

function clearAll(e) {
items.forEach(item => {
  item.done = false;
});
localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);
}
function selectAll(e) {
items.forEach(item => {
  item.done = true;
});
localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);
}
function deleteAll(e) {
var length = items.length;
for(var i = 0; i < length; i++) { // clear out all the items
  items.pop();
}

localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearButton.addEventListener('click', clearAll);
selectButton.addEventListener('click', selectAll);
deleteButton.addEventListener('click', deleteAll);

populateList(items, itemsList);