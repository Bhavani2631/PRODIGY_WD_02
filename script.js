let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
  const hrs = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  const now = Date.now();
  elapsedTime = now - startTime;
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
