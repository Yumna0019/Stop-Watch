let timer = document.querySelector(".timer");
let startBtn = document.querySelector(".start");
let restartBtn = document.querySelector(".restart");
let lapBtn = document.querySelector(".lap");
let lapBox = document.querySelector(".lap_box");

let interval;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTimer, 10);
    isRunning = true;
    startBtn.style.backgroundColor = "#d92027";
    startBtn.textContent = "Stop";
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    startBtn.style.backgroundColor = ""; 
    startBtn.textContent = "Start";
}

function resetTimer() {
    clearInterval(interval);
    timer.innerHTML = `<span class="min">00 :</span><span class="sec">00 .</span><span class="min">00</span>`;
    elapsedTime = 0;
    lapBox.innerHTML = ""; 
    isRunning = false;
    startBtn.style.backgroundColor = ""; 
    startBtn.textContent = "Start";
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    let min = String(minutes).padStart(2, "0");
    let sec = String(seconds).padStart(2, "0");
    let msec = String(milliseconds).padStart(2, "0");

    timer.innerHTML = `<span class="min">${min} :</span><span class="sec">${sec} .</span><span class="min">${msec}</span>`;
}

function addLap() {
    if (isRunning) {
        let lapTime = document.createElement("li");
        lapTime.textContent = timer.textContent;
        lapTime.classList.add("lap_item");
        lapBox.appendChild(lapTime);
    }
}

startBtn.addEventListener("click", function () {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

restartBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);
