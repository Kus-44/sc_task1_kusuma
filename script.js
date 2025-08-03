let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button text/icon based on mode
  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }
});
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;

    // Add to history
    const historyItem = document.createElement("li");
    historyItem.textContent = `${expression} = ${result}`;
    document.getElementById("historyList").prepend(historyItem);
  } catch {
    display.value = "Error";
  }
}
function playClickSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}
function appendValue(value) {
  display.value += value;
  playClickSound();
}