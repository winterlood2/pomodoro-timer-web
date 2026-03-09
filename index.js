function getInitialSeconds() {
  const saved = localStorage.getItem("timerMinutes");
  return (saved !== null ? Number(saved) : 25) * 60;
}

let remainingSeconds = getInitialSeconds();
let intervalId = null;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  document.querySelector(".time").textContent =
    formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) return;

  intervalId = setInterval(function () {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getInitialSeconds();
  updateDisplay();
}

updateDisplay();

document.querySelector(".btn-start").onclick = startTimer;
document.querySelector(".btn-stop").onclick = stopTimer;
document.querySelector(".btn-reset").onclick = resetTimer;
