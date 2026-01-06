const guess = document.getElementById("userGuess");
const check = document.getElementById("checkBtn");
const reset = document.getElementById("resetBtn");
const msg = document.getElementById("message");
const attemptCount = document.getElementById("attempts");
const toggle = document.getElementById("toggle");
const container = document.querySelector(".container");

let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

/* =====================
   Helpers
===================== */
function showError(text) {
  msg.textContent = text;
  msg.className = "error";
  container.classList.add("shake");
  setTimeout(() => container.classList.remove("shake"), 400);
}

function showSuccess(text) {
  msg.textContent = text;
  msg.className = "success";
  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 25; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.setProperty("--x", Math.random());
    confetti.style.setProperty("--y", Math.random());
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
  }
}

/* =====================
   Game Logic
===================== */
check.addEventListener("click", () => {
  const userGuess = Number(guess.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    showError("❌ Enter a number between 1 and 100");
    return;
  }

  attempts++;
  attemptCount.textContent = `Attempts: ${attempts}`;

  if (userGuess === number) {
    showSuccess("🎉 Correct! You guessed it!");
    guess.disabled = true;
    check.disabled = true;
  } else if (userGuess > number) {
    showError("📉 Too high! Try again.");
  } else {
    showError("📈 Too low! Try again.");
  }
});

guess.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check.click();
});

reset.addEventListener("click", () => {
  number = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guess.value = "";
  guess.disabled = false;
  check.disabled = false;
  msg.textContent = "";
  msg.className = "";
  attemptCount.textContent = "Attempts: 0";
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});
