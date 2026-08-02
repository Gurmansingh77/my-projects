let pomoDoro = document.querySelector(".pomodoro");
let afterpomodoroclickinterface = document.querySelector(
    ".afterpomodoroclickinterface",
);
let closePomo = document.querySelector(".closepomo");
let playPauseBtn = document.querySelector(".pause");
let timer = document.querySelector(".timer");
let reset = document.querySelector('.reset')

let minutes = 25;
let seconds = 0;

pomoDoro.addEventListener("click", function () {
    afterpomodoroclickinterface.style.display = "flex";
});

closePomo.addEventListener("click", function () {
    afterpomodoroclickinterface.style.display = "none";
});

let isRunning = false;
let interval;

playPauseBtn.addEventListener("click", function () {

    if (!isRunning) {

        playPauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none" stroke="currentColor" stroke-width="1">
        <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z"></path>
        <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z"></path>
        </svg>`;

        isRunning = true;

        interval = setInterval(() => {
            if (seconds === 0 || seconds < 0) {
                minutes--
                seconds = 59
            } else {
                seconds--
            }
            let displayMinute = minutes
            if (minutes < 10) {
                displayMinute = `0${minutes}`
            }
            let displaySeconds = seconds;
            if (seconds < 10) {
                displaySeconds = `0${seconds}`;
            }
            timer.textContent = `${displayMinute}:${displaySeconds}`;
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval)
                isRunning = false;
                interval = null;
            }
        }, 1000);
    } else {

        playPauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
        height="32" color="#000000" fill="none" stroke="currentColor" stroke-width="1"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 2V22"></path>
        <path
        d="M7 7.5V16.497C7 16.9617 7 17.194 7.03843 17.3872C7.19624 18.1806 7.81644 18.8008 8.60982 18.9586C8.80302 18.997 9.03534 18.997 9.5 18.997C9.96466 18.997 10.197 18.997 10.3902 18.9586C11.1836 18.8008 11.8038 18.1806 11.9616 17.3872C12 17.194 12 16.9617 12 16.497V7.5C12 7.03534 12 6.80302 11.9616 6.60982C11.8038 5.81644 11.1836 5.19624 10.3902 5.03843C10.197 5 9.96466 5 9.5 5C9.03534 5 8.80302 5 8.60982 5.03843C7.81644 5.19624 7.19624 5.81644 7.03843 6.60982C7 6.80302 7 7.03534 7 7.5Z">
        </path>
        <path
        d="M16 10.5V13.497C16 13.9617 16 14.194 16.0384 14.3872C16.1962 15.1806 16.8164 15.8008 17.6098 15.9586C17.803 15.997 18.0353 15.997 18.5 15.997C18.9647 15.997 19.197 15.997 19.3902 15.9586C20.1836 15.8008 20.8038 15.1806 20.9616 14.3872C21 14.194 21 13.9617 21 13.497V10.5C21 10.0353 21 9.80302 20.9616 9.60982C20.8038 8.81644 20.1836 8.19624 19.3902 8.03843C19.197 8 18.9647 8 18.5 8C18.0353 8 17.803 8 17.6098 8.03843C16.8164 8.19624 16.1962 8.81644 16.0384 9.60982C16 9.80302 16 10.0353 16 10.5Z">
        </path>
        </svg>`;

        isRunning = false;
        clearInterval(interval);
    }

});

reset.addEventListener('click', function () {
    minutes = 25
    seconds = 0

    timer.textContent = "25:00"
    clearInterval(interval)
    interval = null
    isRunning = false

    playPauseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32"
        height="32" color="#000000" fill="none" stroke="currentColor" stroke-width="1"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 2V22"></path>
        <path
        d="M7 7.5V16.497C7 16.9617 7 17.194 7.03843 17.3872C7.19624 18.1806 7.81644 18.8008 8.60982 18.9586C8.80302 18.997 9.03534 18.997 9.5 18.997C9.96466 18.997 10.197 18.997 10.3902 18.9586C11.1836 18.8008 11.8038 18.1806 11.9616 17.3872C12 17.194 12 16.9617 12 16.497V7.5C12 7.03534 12 6.80302 11.9616 6.60982C11.8038 5.81644 11.1836 5.19624 10.3902 5.03843C10.197 5 9.96466 5 9.5 5C9.03534 5 8.80302 5 8.60982 5.03843C7.81644 5.19624 7.19624 5.81644 7.03843 6.60982C7 6.80302 7 7.03534 7 7.5Z">
        </path>
        <path
        d="M16 10.5V13.497C16 13.9617 16 14.194 16.0384 14.3872C16.1962 15.1806 16.8164 15.8008 17.6098 15.9586C17.803 15.997 18.0353 15.997 18.5 15.997C18.9647 15.997 19.197 15.997 19.3902 15.9586C20.1836 15.8008 20.8038 15.1806 20.9616 14.3872C21 14.194 21 13.9617 21 13.497V10.5C21 10.0353 21 9.80302 20.9616 9.60982C20.8038 8.81644 20.1836 8.19624 19.3902 8.03843C19.197 8 18.9647 8 18.5 8C18.0353 8 17.803 8 17.6098 8.03843C16.8164 8.19624 16.1962 8.81644 16.0384 9.60982C16 9.80302 16 10.0353 16 10.5Z">
        </path>
        </svg>`;
})







