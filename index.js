let guess = document.getElementById("userGuess");
let check = document.getElementById("checkBtn");
let reset = document.getElementById("resetBtn");
let msg = document.getElementById("message");
let attemptCount = document.getElementById("attempts");
let toggle = document.getElementById("toggle");
let body = document.body;
let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = Number(guess.value);
    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        guess.value = "";
        return;
    }
    attempts++;
    attemptCount.innerText = `Attempts: ${attempts}`;
    if (userGuess === number) {
        msg.innerText = "🎉 Correct! You guessed the number!";
        msg.classList.add("success");
        guess.disabled = true;
        check.disabled = true;
    } else {
        msg.innerText = userGuess > number ? "📉 Too high! Try again." : "📈 Too low! Try again.";
        msg.classList.add("error");
    }
}

// Add this event listener for the check button
check.addEventListener("click", function() {
    checkGuess();
});

guess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        check.click(); 
    }
});

reset.addEventListener("click", function () {
    number = Math.floor(Math.random() * 100) + 1;
    guess.value = "";
    guess.disabled = false;
    check.disabled = false;
    msg.innerText = "";
    attempts = 0;
    attemptCount.innerText = `Attempts: ${attempts}`;
    msg.classList.remove("success", "error");
});

toggle.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        toggle.innerText = "Dark Mode";
    } else {
        document.body.classList.add("dark-mode");
        toggle.innerText = "Normal Mode";
    }
});


