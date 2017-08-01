const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const sixteenthCenturyInventors = inventors.filter(inventor => {
  return inventor.year < 1600 && inventor.year > 1499;
});
console.log("// 1. Filter the list of inventors for those who were born in the 1500's");
console.table(sixteenthCenturyInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const firstAndLastNames = inventors.map(inventor => {
  return {first: inventor.first, last: inventor.last};
});
const firstAndLastNamesAlt = inventors.map(inventor => {
  return `${inventor.first} ${inventor.last}`;
});
console.log("// 2. Give us an array of the inventors' first and last names");
console.table(firstAndLastNames);
console.log(firstAndLastNamesAlt);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// alt method -> inventors.sort((a, b) => a.year > b.year ? 1 : -1);
const inventorsByBirthYear = inventors.sort((a, b) => {
  if(a.year < b.year)
    return -1;
  else if(a.year > b.year)
    return 1;
  else
    return 0;
});
console.log('// 3. Sort the inventors by birthdate, oldest to youngest');
console.table(inventorsByBirthYear);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorYears = inventors.reduce((last, currentInventor) => {
  return last + (Number(currentInventor.passed) - Number(currentInventor.year));
}, 0);
console.log('// 4. How many years did all the inventors live?');
console.log(inventorYears);

// 5. Sort the inventors by years lived
const inventorsByAge = inventors.sort((a, b) => {
  var aAge = a.passed - a.year;
  var bAge = b.passed - b.year;
  if(aAge < bAge)
    return -1;
  else if(aAge > bAge)
    return 1;
  else
    return 0;
});
console.log('// 5. Sort the inventors by years lived');
console.table(inventorsByAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Run these in the console of the above wikipedia page ^^
// const category = document.querySelectorAll('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // You can call query selector on any DOM element!
// const deBoulevards = links.map(street => street.includes('de'));
// const bouls = links.map(link => link.textContent);
// console.log("// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name");


// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastName = people.sort((a, b) => {
  var alastName = a.split(", ")[0]; // or [aLast, aFirst] = a.split(", ");
  var blastName = b.split(", ")[0]; // or [bLast, bFirst] = b.split(", ");

  // Can directly compare last names, since they are all capitalized the same way
  return alastName > blastName ? 1 : -1
});
console.log('// 7. sort Exercise');
console.log(peopleByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log('// 8. Reduce Exercise');
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const occurances = data.reduce((map, thing) => {
  if(!map[thing]) map[thing] = 0;
  map[thing]++;
  return map;
}, {});
console.log(occurances);