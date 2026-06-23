const timeDisplay = document.querySelector(".timer-time");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

const STORAGE_KEY = "pomodoro-minutes";

function getTotalSeconds() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const minutes = saved ? Number(saved) : 25;
  return minutes * 60;
}

let remaining = getTotalSeconds();
let intervalId = null;

timeDisplay.textContent = formatTime(remaining);

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function tick() {
  if (remaining <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }
  remaining--;
  timeDisplay.textContent = formatTime(remaining);
}

btnStart.addEventListener("click", () => {
  if (intervalId !== null) return;
  intervalId = setInterval(tick, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  remaining = getTotalSeconds();
  timeDisplay.textContent = formatTime(remaining);
});
