const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['the', 'an', 'a'];
const bandsList = document.getElementById('bands');

function getFirstWithoutArticle(str) {
  let split = str.split(' ');
  return articles.includes(split[0].toLowerCase()) ? split[1] : split[0];
}

bands.sort((curr, next) => getFirstWithoutArticle(curr) < getFirstWithoutArticle(next) ? -1 : 1);

bands.forEach(band => {
  const li = document.createElement('li');
  li.innerText = band;
  bandsList.append(li);
});

// Wes's solution
// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }

// const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// document.querySelector('#bands').innerHTML =
//   sortedBands
//     .map(band => `<li>${band}</li>`)
//     .join('');