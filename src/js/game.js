// Game state
let gameState = {
    currentQuestion: 0,
    score: 0,
    questions: [],
    answered: false,
    correctAnswer: 0
};

const TOTAL_QUESTIONS = 20;
const MIN_NUM = 1;
const MAX_NUM1 = 10;
const MAX_NUM2 = 5;

// Initialize game
function initGame() {
    gameState = {
        currentQuestion: 0,
        score: 0,
        questions: [],
        answered: false,
        correctAnswer: 0
    };

    // Generate questions
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const num1 = Math.floor(Math.random() * (MAX_NUM1 - MIN_NUM + 1)) + MIN_NUM;
        const num2 = Math.floor(Math.random() * (MAX_NUM2 - MIN_NUM + 1)) + MIN_NUM;
        const correctAnswer = num1 + num2;

        // Generate 3 different answer choices
        const choices = new Set([correctAnswer]);
        while (choices.size < 3) {
            const randomChoice = Math.floor(Math.random() * (correctAnswer + 10)) + 1;
            if (randomChoice !== correctAnswer && randomChoice > 0) {
                choices.add(randomChoice);
            }
        }

        const choicesArray = Array.from(choices).sort(() => Math.random() - 0.5);

        gameState.questions.push({
            num1,
            num2,
            correctAnswer,
            choices: choicesArray
        });
    }

    displayQuestion();
}

// Display current question
function displayQuestion() {
    if (gameState.currentQuestion >= TOTAL_QUESTIONS) {
        showResults();
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];
    gameState.correctAnswer = question.correctAnswer;
    gameState.answered = false;

    // Update question display
    document.getElementById('num1').textContent = question.num1;
    document.getElementById('num2').textContent = question.num2;
    document.getElementById('currentQuestion').textContent = gameState.currentQuestion + 1;

    // Update choices
    question.choices.forEach((choice, index) => {
        document.getElementById(`choice${index}`).textContent = choice;
    });

    // Clear feedback
    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';

    // Reset button styles
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    // Update progress
    updateProgress();
}

// Check answer
function checkAnswer(choiceIndex) {
    if (gameState.answered) return;

    gameState.answered = true;

    const question = gameState.questions[gameState.currentQuestion];
    const selectedAnswer = question.choices[choiceIndex];
    const isCorrect = selectedAnswer === gameState.correctAnswer;

    // Update score
    if (isCorrect) {
        gameState.score++;
    }

    // Show feedback and highlight
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.choice-btn');

    if (isCorrect) {
        feedback.textContent = '✅ Đúng rồi!';
        feedback.className = 'feedback show-correct';
        buttons[choiceIndex].classList.add('correct');
    } else {
        feedback.textContent = '❌ Chưa đúng, hãy thử lại!';
        feedback.className = 'feedback show-wrong';
        buttons[choiceIndex].classList.add('wrong');

        // Highlight correct answer
        const correctChoiceIndex = question.choices.indexOf(gameState.correctAnswer);
        buttons[correctChoiceIndex].classList.add('correct');
    }

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Move to next question after delay
    setTimeout(() => {
        gameState.currentQuestion++;
        displayQuestion();
    }, 1500);
}

// Update progress bar
function updateProgress() {
    const progress = (gameState.currentQuestion / TOTAL_QUESTIONS) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress);
}

// Show results
function showResults() {
    const percentage = (gameState.score / TOTAL_QUESTIONS) * 100;

    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalPercentage').textContent = Math.round(percentage);
}

// Restart game
function restartGame() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    initGame();
}

// Start game on page load
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});
