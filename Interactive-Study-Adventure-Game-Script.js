const mathEasyQuestions = [  // Easy Level Math Questions Array
     { question: "2 + 2", answer: "4", hint: "Start at 2 and count up 2 more." },
    { question: "5 * 3", answer: "15", hint: "Think of 5 + 5 + 5." },
    { question: "10 - 6", answer: "4", hint: "Start at 10 and count back 6 steps." },
    { question: "9 / 3", answer: "3", hint: "How many groups of 3 fit into 9?" },
    { question: "7 + 1", answer: "8", hint: "What comes right after 7?" },
    { question: "6 * 2", answer: "12", hint: "Think of 6 + 6." },
    { question: "15 - 5", answer: "10", hint: "Start at 15 and count back 5 steps." },
    { question: "8 + 7", answer: "15", hint: "Break 7 into 2 and 5. Add 8 + 2 first to make 10, then add the remaining 5." },
    { question: "12 / 4", answer: "3", hint: "How many groups of 4 make 12?" },
    { question: "3 * 4", answer: "12", hint: "Think of 3 + 3 + 3 + 3." }
];

const mathMediumQuestions = [ // Medium Level Math Questions Array
    { question: "12 + 15", answer: "27", hint: "Add 10 + 15 first, then add 2." },
    { question: "9 * 4", answer: "36", hint: "Think of 9 + 9 + 9 + 9." },
    { question: "20 - 7", answer: "13", hint: "Subtract 10 first, then add back 3." },
    { question: "16 / 4", answer: "4", hint: "How many groups of 4 fit into 16?" },
    { question: "25 + 6", answer: "31", hint: "Add 5 to get 30, then add 1 more." },
    { question: "18 - 9", answer: "9", hint: "Start at 18 and count back 9 steps." },
    { question: "7 * 5", answer: "35", hint: "Think of 7 + 7 + 7 + 7 + 7." },
    { question: "14 / 2", answer: "7", hint: "How many times does 2 go into 14?" },
    { question: "11 + 19", answer: "30", hint: "Break 19 into 10 + 9. Add 11 + 10 first, then add 9." },
    { question: "24 - 8", answer: "16", hint: "Start at 24 and count back 8 steps." }
];

const mathHardQuestions = [ // Hard Level Math Questions Array
    { question: "14 * 3", answer: "42", hint: "Break 14 into 10 + 4. Multiply 10 * 3 and 4 * 3, then add both." },
    { question: "50 - 18", answer: "32", hint: "Subtract 20 from 50, then add back 2." },
    { question: "36 / 6", answer: "6", hint: "How many groups of 6 make 36?" },
    { question: "19 + 27", answer: "46", hint: "Add 20 + 27 first, then subtract 1." },
    { question: "8 * 7", answer: "56", hint: "Think of 8 groups of 7." },
    { question: "45 / 5", answer: "9", hint: "How many groups of 5 in 45?" },
    { question: "27 - 9", answer: "18", hint: "Subtract 10 from 27, then add back 1." },
    { question: "12 * 4", answer: "48", hint: "Think of 12 + 12 + 12 + 12." },
    { question: "63 / 7", answer: "9", hint: "How many groups of 7 fit into 63?" },
    { question: "33 + 19", answer: "52", hint: "Add 33 + 10 = 43, then add 9." }
];

const readingEasyQuestions = [ // Easy Level Reading Questions Array
    {
        story: "Mia went to the park with her dog. She threw a ball, and the dog ran to get it. They played until it got dark.",
        questions: [
            { question: "Who went to the park?", answers: ["mia"], hint: "It is the girl's name." },
            { question: "What did the dog chase?", answers: ["ball", "a ball", "the ball"], hint: "It is something you throw." },
            { question: "Where did they go?", answers: ["park"], hint: "It is outside with grass." }
        ]
    },
    {
        story: "Jake studied for his test all night. The next day, he felt tired but ready. He passed the test with a good grade.",
        questions: [
            { question: "What did Jake study for?", answers: ["test", "a test", "his test"], hint: "It is something you take in school." },
            { question: "How did he feel?", answers: ["tired"], hint: "He did not sleep much." },
            { question: "What happened at the end?", answers: ["passed", "he passed", "passed the test", "he passed the test", "he got a good grade", "he got a good grade on his test"], hint: "Think about how Jake's test went." }
        ]
    },
    {
        story: "Lily went to the store with her mom. She picked out apples and bananas. They went home to make a snack.",
        questions: [
            { question: "Who did Lily go with?", answers: ["mom", "her mom"], hint: "It is a family member." },
            { question: "What fruit did she pick?", answers: ["apples and bananas", "she picked apples and bananas", "she picked out apples and bananas", "lily picked apples and bananas", "lily picked out apples and bananas"], hint: "They're both something you eat." },
            { question: "Where did they go after?", answers: ["home", "they went home", "they went home afterwards"], hint: "You live there." }
        ]
    }
];

const readingMediumQuestions = [ // Medium Level Reading Questions Array
    {
        story: "Jake studied all night for his test. He was tired but passed.",
        questions: [
            { question: "Why was Jake tired?", answers: ["he studied", "he was studying", "Jake was studying", "studied all night", "he studied all night", "Jake studied all night", "he was studying all night", "Jake was studying all night"], hint: "He stayed up." },
            { question: "What did he pass?", answers: ["test", "the test", "he passed his test", "he passed the test", "Jake passed the test", "Jake passed his test"], hint: "School exam." }
        ]
    },
    {
        story: "Tom forgot his umbrella when he left the house. It started raining while he was walking to school, and he got very wet.",
        questions: [
            { question: "Why did Tom get wet?", answers: ["tom forgot his umbrella when he left the house", "he forgot his umbrella when he left the house", "tom forgot his umbrella when he left his house", "he forgot his umbrella when he left his house", "tom forgot his umbrella", "he forgot his umbrella", "forgot umbrella"], hint: "Think about what he didn’t bring." },
            { question: "What was the weather like?", answers: ["it was raining", "it started raining", "it started to rain", "raining", "rainy", "rain"], hint: "Water fell from the sky." },
            { question: "Where was Tom going?", answers: ["school", "he was going to school", "tom was going to school", "he was walking to school", "tom was walking to school"], hint: "Students go here." }
        ]
    },
    {
        story: "Emma practiced the piano every day. At her recital, she played beautifully and everyone clapped for her.",
        questions: [
            { question: "Why did Emma play the piano well?", answers: ["she practiced", "emma practiced", "practiced every day", "emma practiced every day", "she practiced every day"], hint: "She did this daily." },
            { question: "What happened after she played?", answers: ["everyone clapped", "people clapped", "the people clapped", "they clapped", "audience clapped", "the audience clapped"], hint: "People showed they liked it." },
            { question: "What was the event called?", answers: ["recital", "the recital", "her recital", "emma's recital", "emmas recital"], hint: "A performance." }
        ]
    }
];

const readingHardQuestions = [ // Hard Level Reading Questions Array
    {
        story: "Noah trained for months to climb the mountain. Even when it was difficult, he kept going. At the top, he felt proud of himself.",
        questions: [
            { question: "How did Noah feel at the end?", answers: ["proud", "he felt proud", "he felt proud of himself", "noah felt proud", "noah felt proud of himself", "happy", "accomplished", "he felt accomplished", "noah felt accomplished"], hint: "Think about his emotions when he reached the top." },
            { question: "Why did Noah feel proud?", answers: ["he reached the top", "noah reached the top", "he reached the top of the mountain", "noah reached the top of the moutain", "he finished", "noah finished", "he made it", "noah made it", "he made it up the mountain", "noah made it up the mountain"], hint: "He completed his goal." },
            { question: "What does this story teach?", answers: ["never give up", "to never give up", "keep trying", "to keep trying", "to keep on trying", "continue trying", "to continue trying", "dont quit", "to not quit", "persistence", "to be persistent"], hint: "Keep trying even when it's hard." },
            { question: "How did Noah succeed?", answers: ["he kept going", "noah kept going", "he kept trying", "noah kept trying", "he was persistent", "noah was persistent"], hint: "He didn’t quit." }
        ]
    },
    {
        story: "Ava saw a lost puppy on the street. She took it home and cared for it until she found its owner. The owner was very thankful.",
        questions: [
            { question: "Why did Ava take the puppy?", answers: ["it was lost", "the puppy was lost", "because the puppy was lost", "the puppy was lost on the steet", "because the puppy was lost on the street"], hint: "It had no owner nearby." },
            { question: "What kind of person is Ava?", answers: ["kind", "helpful", "caring", "compassionate"], hint: "She helped someone." },
            { question: "What was the result?", answers: ["owner was thankful", "the owner was thankful", "owner was happy", "the owner was happy", "owner thanked her", "the owner thanked her", "owner was very thankful", "the owner was very thankful"], hint: "Someone appreciated her help." }
        ]
    }
];

const sustainabilityEasy = [ // Easy Level Sustainability Questions Array
    { question: "What does recycling mean?", answer: "reuse", hint: "To use again." }
];

const sustainabilityMedium = [ // Medium Level Sustainability Questions Array
    { question: "What is pollution?", answer: "dirty environment", hint: "Harms nature." }
];

const sustainabilityHard = [ // Hard Level Sustainability Questions Array
    { question: "What is renewable energy?", answer: "doesnt run out", hint: "Like solar power." }
];

// Game Variables:
// MATH SECTION:
let currentLevel = "easy";
let questions = mathEasyQuestions;
let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0; // High Score
// Timer for Hard Mode:
let timer;  // stores setInterval reference
let timeLeft = 15; // seconds per question

// READING/SUSTAINABILITY SECTION:
let readingMode = false;
let sustainabilityMode = false;
let currentPassageIndex = 0;

// 'Choose a Category' Selection:
function chooseCategory(category) {
    readingMode = false;
    sustainabilityMode = false;

    if (category === "reading") {
        readingMode = true;
    } else if (category === "sustainability") {
        sustainabilityMode = true;
    }

    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("levelScreen").style.display = "block";
}

// Timer Function - for Math:
function startTimer() {
    clearInterval(timer);
    timeLeft = 15; // seconds per question
    document.getElementById("timerText").textContent = "Time: " + timeLeft + "s";
    const feedback = document.getElementById("feedback");

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timerText").textContent = "Time: " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(timer);
            feedback.textContent = "Time's up! Moving to next question.";
            moveToNextQuestion();
        }
    }, 1000);
}

function moveToNextQuestion() {
    currentQuestionIndex++;

    // If there are more questions,
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("answerInput").value = "";
    } else { // else, End of game
        clearInterval(timer); // stop timer
        const feedback = document.getElementById("feedback");
        const hintText = document.getElementById("hintText");
        const questionText = document.getElementById("questionText");
        const answerInput = document.getElementById("answerInput");
        const timerText = document.getElementById("timerText");

        // Hide question and input
        questionText.textContent = "";
        answerInput.style.display = "none";
        timerText.textContent = "";
        hintText.textContent = "";

        // Hide buttons
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("hintButton").style.display = "none";

        // Show final score
        let finalMessage = "You finished all the questions! Final Score: " + score;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            finalMessage += " 🎉 New High Score!";
        }
        feedback.textContent = finalMessage;
    }
}

// Load Question:
function loadQuestion() {
    const questionText = document.getElementById("questionText");
    const hintText = document.getElementById("hintText");
    const timerText = document.getElementById("timerText");

    // Set the question text
    if (readingMode || sustainabilityMode) {
        questionText.textContent = questions[currentQuestionIndex].question || questions[currentQuestionIndex].questionText;
    } else {
        questionText.textContent = questions[currentQuestionIndex].question;
    }

    hintText.textContent = ""; // clear hint when new question loads

    // Start timer for Hard mode in any category
    if (currentLevel === "hard") {
        startTimer();
    } else {
        clearInterval(timer);
        timerText.textContent = "";
    }
}

// Set Level:
function setLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    updateScoreText();
    document.getElementById("feedback").textContent = "";
    document.getElementById("answerInput").value = "";

if (readingMode) { // reading mode
        let passage;

        if (level === "easy") passage = readingEasyQuestions[0];
        if (level === "medium") passage = readingMediumQuestions[0];
        if (level === "hard") passage = readingHardQuestions[0];

        questions = passage.questions;
        document.getElementById("storyText").textContent = passage.story;
    }

    else if (sustainabilityMode) { // sustainability mode
        if (level === "easy") questions = sustainabilityEasy;
        if (level === "medium") questions = sustainabilityMedium;
        if (level === "hard") questions = sustainabilityHard;

        document.getElementById("storyText").textContent = "";
    }

    else { // math mode
        if (level === "easy") questions = mathEasyQuestions;
        if (level === "medium") questions = mathMediumQuestions;
        if (level === "hard") questions = mathHardQuestions;

        document.getElementById("storyText").textContent = "";
    }

    score = 0; // reset score and feedback
    updateScoreText();
    document.getElementById("feedback").textContent = "";
    document.getElementById("answerInput").value = "";

    clearInterval(timer); // Clear timer if any
    document.getElementById("timerText").textContent = "";

    loadQuestion(); // Load the first question
}

// Start Game (from Menu):
function startGame(level) {
    setLevel(level);

    document.getElementById("levelScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
}

// Back to Menu:
function goToMenu() {
    document.getElementById("menuScreen").style.display = "block";
    document.getElementById("levelScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";

    clearInterval(timer);
    document.getElementById("feedback").textContent = "";
    document.getElementById("hintText").textContent = "";
    document.getElementById("answerInput").value = "";
    document.getElementById("timerText").textContent = "";
}

// Check answer:
function checkAnswer() {
    const userInput = document.getElementById("answerInput");
    const userAnswer = userInput.value.trim().toLowerCase(); // trim spaces and lowercase
    const feedback = document.getElementById("feedback");

    // input validation:
    if (userAnswer === "") { // if user does NOT enter anything in input
        feedback.textContent = "Please enter an answer.";
        return;
    }

    let isCorrect = false;

    if (readingMode) {
        // Reading questions: may have multiple acceptable answers (array)
        const correctAnswers = questions[currentQuestionIndex].answers || [questions[currentQuestionIndex].answer];
        // Check if user's input matches any correct answer (case-INsensitive)
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswer === correctAnswers[i].toLowerCase()) { // lowercase user's input
                isCorrect = true;
                break;
            }
        }
    } else {
        // Math or sustainability questions: single answer string
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase(); // lowercase user's input
        if (userAnswer === correctAnswer) {
            isCorrect = true;
        }
    }

    if (isCorrect) { // if user enters the CORRECT answer
            score++;
            updateScoreText();

        // If at the last question 
        if (currentQuestionIndex === questions.length - 1) {
            // End of Game: Hide question, hint and submit buttons, hint text, and timer
            document.getElementById("questionText").textContent = "";
            userInput.style.display = "none";
            document.getElementById("submitButton").style.display = "none";
            document.getElementById("hintButton").style.display = "none";
            document.getElementById("hintText").textContent = "";
            document.getElementById("timerText").textContent = "";
            
            // Show final score (and high score if beaten)
            let finalMessage = "You finished all the questions! Final Score: " + score;
            if (score > highScore) {
                highScore = score;
                localStorage.setItem("highScore", highScore);
                finalMessage += " 🎉 New High Score!";
            }
            feedback.textContent = finalMessage;
            return; // STOP here, do NOT continue to next question
        }

        // Not last question: move to next
        currentQuestionIndex++;
        userInput.value = "";
        feedback.textContent = "Correct!";
        loadQuestion();

    } else { // else, if user enters the WRONG answer
        feedback.textContent = "Wrong answer. Try again or use a hint.";
    }
}

// Hint function:
function showHint() {
    const hintText = document.getElementById("hintText");
    hintText.textContent = questions[currentQuestionIndex].hint;
}

// Update Score Text:
function updateScoreText() {
    let scoreText = document.getElementById("scoreText");
    if (!scoreText) { // If scoreText doesn't exist yet, create it above the question
        const gameScreen = document.getElementById("gameScreen");
        const p = document.createElement("p");
        p.id = "scoreText";
        p.textContent = "Score: " + score;
        gameScreen.insertBefore(p, document.getElementById("questionText"));
    } else {
        scoreText.textContent = "Score: " + score;
    }
}

// Event Listeners for Submit, Hint, and Enter Key 
document.addEventListener("DOMContentLoaded", function () {
    const answerInput = document.getElementById("answerInput");
    const submitButton = document.getElementById("submitButton");
    const hintButton = document.getElementById("hintButton");

    // Submit button click
    submitButton.addEventListener("click", function() {
        checkAnswer();
    });

    // Hint button click
    hintButton.addEventListener("click", function() {
        showHint();
    });

    // Enter key press
    answerInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
});
