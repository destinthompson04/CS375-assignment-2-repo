/**
 * Stores the quiz question data categorized by difficulty.
 * @type {Object<string, Array<{q: string, answers: string[], correct: string, hint: string}>>}
 */
export const questions = {
    easy: [
        { q: "2+2?", answers: ["3","4","5"], correct: "4", hint: "Even number" },
        { q: "3+1?", answers: ["4","5","6"], correct: "4", hint: "Same as 2+2" },
        { q: "5-2?", answers: ["2","3","4"], correct: "3", hint: "Odd" },
        { q: "1+1?", answers: ["1","2","3"], correct: "2", hint: "Smallest even" },
        { q: "6-1?", answers: ["4","5","6"], correct: "5", hint: "Half of 10" }
    ],
    medium: [],
    hard: []
};

/**
 * This retrieves a specific question based on difficulty and index.
 * @param {string} difficulty - The chosen difficulty level ( 'easy', 'medium', 'hard').
 * @param {number} index - The array index of the question to retrieve.
 * @returns {{q: string, answers: string[], correct: string, hint: string}} The question object.
 * @throws {Error} Throws an error if the difficulty array or question index is undefined.
 */
export function getQuestion(difficulty, index) {
    if (!questions[difficulty] || !questions[difficulty][index]) {
        throw new Error("Invalid difficulty or question index.");
    }
    return questions[difficulty][index];
}