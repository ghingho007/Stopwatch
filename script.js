const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
        alert("AN HOUR HAS PASSED");
    }
    displayTimer();
}

function displayTimer() {
    const formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    timer.textContent = formattedTime;
}

let intervalId = null;

function start() {
    if (!intervalId) {
        intervalId = setInterval(updateTimer, 1000);
    }
}

function blocca() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetta() {
    minutes = 0;
    seconds = 0;
    hours = 0;
    displayTimer();

    blocca();
}