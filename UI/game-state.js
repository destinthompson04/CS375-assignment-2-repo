/**
 * Represents the current state of the game session.
 * @type {{score: number, correctAnswers: number, currentQuestion: number, triesLeft: number, usedHint: boolean, difficulty: string}}
 */
export const gameState = {
    score: 0,
    correctAnswers: 0,
    currentQuestion: 0,
    triesLeft: 3,
    usedHint: false,
    difficulty: "easy"
};

/**
 * Processes an answer, updating the score and tries accordingly.
 * @param {string} selectedAnswer - The answer string chosen by the player.
 * @param {string} correctAnswer - The actual correct answer string.
 * @returns {boolean} Returns true if the answer is correct, false otherwise.
 */
export function checkAnswerLogic(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        gameState.correctAnswers++;
        if (gameState.usedHint) {
            gameState.score += 1;
        } else {
            gameState.score += 2;
        }
        return true;
    } else {
        gameState.triesLeft--;
        return false;
    }
}

/**
 * Resets the core game state variables to their default starting values.
 * @returns {void}
 */
export function resetGame() {
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.currentQuestion = 0;
    gameState.triesLeft = 3;
    gameState.usedHint = false;
}