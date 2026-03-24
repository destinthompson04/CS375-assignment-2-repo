const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const storyText = document.getElementById("story-text");
const choiceBtns = document.querySelectorAll(".choice-btn");

const quizBox = document.getElementById("quiz-box");
const answerBtns = document.querySelectorAll(".answer-btn");

const scoreDisplay = document.getElementById("score");
const finalScore = document.getElementById("final-score");

const hintBtn = document.getElementById("hint-btn");

let score = 0;

// Start game
startBtn.addEventListener("click", () => {
    startScreen.classList.remove("active");
    gameScreen.classList.add("active");
});

// Choice system
choiceBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (index === 0) {
            storyText.textContent = "The door opens... a quiz appears!";
            quizBox.classList.remove("hidden");
        } else {
            storyText.textContent = "You walk away and miss an opportunity...";
        }
    });
});

// Quiz answers
answerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "4") {
            score += 10;
            scoreDisplay.textContent = "Score: " + score;
        }

        // End game after answer (for now)
        gameScreen.classList.remove("active");
        endScreen.classList.add("active");
        finalScore.textContent = "Score: " + score;
    });
});

// Hint system
hintBtn.addEventListener("click", () => {
    alert("Hint: It's an even number 😉");
});

// Restart
restartBtn.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = "Score: 0";

    endScreen.classList.remove("active");
    startScreen.classList.add("active");
});