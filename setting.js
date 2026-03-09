const input = document.querySelector("#timer-input");
const saveBtn = document.querySelector(".btn-save");

const saved = localStorage.getItem("timerMinutes");
if (saved !== null) {
  input.value = saved;
}

function validate() {
  const val = input.value;
  if (val === "") {
    saveBtn.disabled = true;
    return;
  }
  const num = Number(val);
  saveBtn.disabled = num < 1 || num > 60;
}

input.addEventListener("input", validate);
validate();

saveBtn.addEventListener("click", function () {
  const num = Number(input.value);
  localStorage.setItem("timerMinutes", num);
  location.href = "index.html";
});
