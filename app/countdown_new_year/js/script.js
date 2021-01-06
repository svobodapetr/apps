window.onload = function() {

    let countdown = setInterval(initCountdown, 1000);
    
}

function initCountdown() {

    let now = new Date();
    let thisYear = new Date().getFullYear();
    let newYearsEve = new Date(`${thisYear} 12 31 23:59:59`);
    let daylightavingTimeCompensation = (newYearsEve.getTimezoneOffset() !== now.getTimezoneOffset());
    let eventDate = null;
    let hint = '';

    if (daylightavingTimeCompensation) {

        eventDate = new Date(`${thisYear} 12 31 22:59:59`);

        hint = `<p class="hint">Because of the practice of using Daylight Saving Time
            (summer time) you acctualy see -1 hour in the countdown.</p>`;

    }
    else {

        eventDate = new Date(`${thisYear} 12 31 23:59:59`);

    }

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remainingTime = eventTime - currentTime;

    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    let yearElement = document.getElementById('year');
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
    let hintElement = document.getElementById('hint');

    seconds %= 60;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    minutes %= 60;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    hours %= 24;
    hours = (hours < 10) ? '0' + hours : hours;

    yearElement.innerText = thisYear + 1;
    daysElement.innerText = days + ':';
    hoursElement.innerText = hours + ':';
    minutesElement.innerText = minutes + ':';
    secondsElement.innerText = seconds;
    hintElement.innerHTML = hint;

}