let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function printTime() {
  elapsedTime = Date.now() - startTime;
  display.textContent = timeToString(elapsedTime);
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime; // preserve elapsed time if restarted
    timerInterval = setInterval(printTime, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  if (elapsedTime > 0) {
    const li = document.createElement('li');
    li.textContent = timeToString(elapsedTime);
    laps.appendChild(li);
  }
}

// Event Listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
