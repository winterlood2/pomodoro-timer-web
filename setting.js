const input = document.getElementById('timer-minutes');
const btnSave = document.getElementById('btn-save');

const STORAGE_KEY = 'pomodoro-minutes';

// 저장된 값 불러와서 input에 반영
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) input.value = saved;

function validate() {
  const v = input.value;
  if (v === '') return false;
  const n = Number(v);
  return n >= 1 && n <= 60;
}

function updateSaveBtn() {
  btnSave.disabled = !validate();
}

input.addEventListener('input', updateSaveBtn);
updateSaveBtn();

btnSave.addEventListener('click', () => {
  if (!validate()) return;
  localStorage.setItem(STORAGE_KEY, input.value);
  alert(`타이머가 ${input.value}분으로 설정되었습니다.`);
});
