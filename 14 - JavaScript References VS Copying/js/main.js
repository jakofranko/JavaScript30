// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'jake';
let name2 = name;
console.log(name, name2);
name = 'jacob';
console.log(name, name2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[4] = 'Lux';

console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[4] = 'Bo Diggit';
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[4] = 'Jimmy';
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[4] = 'Flaggon';
console.log(players, team4);

const team5 = Array.from(players);
team5[4] = 'Do Goody';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
const person = {
    name: 'Jack',
    age: 80
};
console.log(person);
// with Objects

// and think we make a copy:
const captain = person;
captain.age = 99;
console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 1000 });
console.log(person, captain2);

// We will hopefully soon see the object ...spread
// const captain3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const car = {
    make: 'honda',
    model: 'civic',
    year: 1997,
    features: {
        ac: true,
        lights: false
    }
};
console.log(car);
const car2 = Object.assign({}, car, { year: 1999 });
console.log(car, car2);
car2.features.ac = false;
console.log(car, car2);
// Poor man's deep clone of an object
car3 = JSON.parse(JSON.stringify(car));
car3.features.ac = true;
console.log(car, car2, car3);