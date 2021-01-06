window.onload = () => {

    let startBtn = document.getElementById('start');

    startBtn.addEventListener('click', (event) => {

        event.preventDefault();

        let countDown = new CountDown();

        startBtn.innerText = 'Stop countdown';
        startBtn.classList.replace('bg-green', 'bg-orange');

    });

};

class CountDown {

    interval;
    dateValue = document.getElementById('date_picker').value;

    constructor() {

        this.startCountdown();

    }

    startCountdown() {

        if (typeof this.interval == 'number') {

            this.stopCountdown();

            return;

        }

        if (! this.validateDate() || this.dateValue === '') {

            alert('You can only set a date in the future.')

            return;

        }

        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        document.getElementById('date_text').innerHTML = `Time remaining until ${this.dateValue}`;

        this.interval = setInterval(() => {

            let dateDiff = this.getDateDiff();

            days.innerHTML = `${dateDiff.days ? `${dateDiff.days} ${dateDiff.days === 1 ? 'day' : 'days'}` : ''}`;
            hours.innerHTML = `${dateDiff.hours ? `${dateDiff.hours} ${dateDiff.hours === 1 ? 'hour' : 'hours'}` : ''}`;
            minutes.innerHTML = `${dateDiff.minutes} ${dateDiff.minutes === 1 ? 'minute' : 'minutes'}`;
            seconds.innerHTML = `${dateDiff.seconds} ${dateDiff.seconds === 1 ? 'second' : 'seconds'}`;

        }, 1000);

    }

    validateDate() {

        return (new Date(this.dateValue).getTime() > new Date().getTime());

    }

    stopCountdown() {

        clearInterval(this.interval);

        location.reload();

    }

    getDateDiff() {

        let targetDate = new Date(this.dateValue);
        let targetTime = targetDate.getTime();
        let timeNow = new Date().getTime();
        let timeDiff = (targetTime - timeNow);

        let msToDays = (1000 * 3600 * 24);
        let days = (timeDiff / msToDays);
        let hours = (days % 1 * 24);
        let minutes = (hours % 1 * 60);

        let diff = {};

        if (days > 0) diff.days = parseInt(timeDiff / msToDays);
        if (hours > 0) diff.hours = parseInt(days % 1 * 24);
        diff.minutes = parseInt(hours % 1 * 60);
        diff.seconds = parseInt(minutes % 1 * 60);

        targetDate.setHours(0);

        return diff;

    }

}