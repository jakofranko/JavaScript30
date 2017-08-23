const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countdown;

function timer(seconds) {
    // Clear existing timers
    clearInterval(countdown);
    const now = Date.now();
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then);


    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // Check if we should stop
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes}`;
}

function startTimer() {
    const seconds = this.dataset.time;
    timer(seconds);
}

function handleSubmit(e) {
    e.preventDefault();
    const mins = this.minutes.value; // this is the form, and minutes is an input nested in the form with a name of 'minutes'
    timer(mins * 60); // convert minutes to seconds (what timer accepts)
}

buttons.forEach(button => button.addEventListener('click', startTimer));

// If an element has a name, you can get to it via document[name]!!
document.customForm.addEventListener('submit', handleSubmit);