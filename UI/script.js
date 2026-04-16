import { getQuestion } from './question-data.js';
import { gameState, checkAnswerLogic, resetGame } from './game-state.js';
import { switchScreen } from './ui-controller.js';

// DOM Elements
const startBtn = document.getElementById("start-btn");
const difficultyBtns = document.querySelectorAll(".difficulty-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const difficultyScreen = document.getElementById("difficulty-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const triesEl = document.getElementById("tries");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const finalScore = document.getElementById("final-score");
const finalCorrect = document.getElementById("final-correct");
const hintBtn = document.getElementById("hint-btn");

// Start -> Difficulty
startBtn.onclick = () => {
    switchScreen(startScreen, difficultyScreen);
};

// Select Difficulty
difficultyBtns.forEach(btn => {
    btn.onclick = () => {
        gameState.difficulty = btn.dataset.level;
        switchScreen(difficultyScreen, gameScreen);
        loadQuestion();
    };
});

function loadQuestion() {
    const q = getQuestion(gameState.difficulty, gameState.currentQuestion);

    questionEl.textContent = q.q;
    answersEl.innerHTML = "";
    gameState.triesLeft = 3;
    gameState.usedHint = false;

    triesEl.textContent = "Tries left: " + gameState.triesLeft;
    progressText.textContent = `Question ${gameState.currentQuestion + 1} / 5`;
    progressBar.style.width = (gameState.currentQuestion / 5) * 100 + "%";

    q.answers.forEach(ans => {
        let btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => handleAnswerClick(ans, q.correct);
        answersEl.appendChild(btn);
    });
}

function handleAnswerClick(answer, correct) {
    const isCorrect = checkAnswerLogic(answer, correct);

    if (isCorrect || gameState.triesLeft === 0) {
        nextQuestion();
    } else {
        triesEl.textContent = "Tries left: " + gameState.triesLeft;
    }

    scoreEl.textContent = "Score: " + gameState.score;
}

function nextQuestion() {
    gameState.currentQuestion++;

    if (gameState.currentQuestion === 5) {
        endGame();
    } else {
        loadQuestion();
    }
}

// Hint
hintBtn.onclick = () => {
    const q = getQuestion(gameState.difficulty, gameState.currentQuestion);
    alert(q.hint);
    gameState.usedHint = true;
};

// End Game
function endGame() {
    switchScreen(gameScreen, endScreen);
    finalScore.textContent = "Total Score: " + gameState.score;
    finalCorrect.textContent = "Correct Answers: " + gameState.correctAnswers + "/5";
}

// Restart
restartBtn.onclick = () => {
    resetGame();
    scoreEl.textContent = "Score: 0";
    switchScreen(endScreen, startScreen);
};