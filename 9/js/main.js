// clearing
console.clear();

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', 'poop');

// Styled
console.log('%cI am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;');

// Table
console.table(dogs);

// warning!
console.warn("WHAT THE");

// Error :|
console.error('FUDGE!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Viewing DOM Elements
console.log(p); // Actual DOM element
console.dir(p); // Shows DOM element attributes

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`); // The same string used to start must be used to end the group/time
  console.groupCollapsed(`${dog.name}`); // The same string used to start must be used to end the group/time
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7 } in dog years`);
  console.groupEnd(`${dog.name}`); // The same string used to start must be used to end the group/time
});

// counting
console.count('Foo');
console.count('Foo');
console.count('Bar');
console.count('Bar');
console.count('Baz');
console.count('Bar');
console.count('Foo');
console.count('Bar');
console.count('Bar');
console.count('Foo');
console.count('Baz');
console.count('Foo');

// timing
console.time('Fetching GitHub User Data took'); // The same string used to start must be used to end the group/time
fetch('https://api.github.com/users/jakofranko')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching GitHub User Data took'); // The same string used to start must be used to end the group/time
    console.log(data);
  });