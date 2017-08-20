const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const update = document.querySelector('.update');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    update.style.opacity = Number(update.style.opacity) ? 0 : 1;
}, (err) => {
    console.error(err);
    alert('The compass will no worky till you allow that');
});