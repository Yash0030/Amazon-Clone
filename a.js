const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const resultText = document.getElementById('resultText');
const options = document.querySelectorAll('.option-btn');

let currentQuestion = 0;

const questions = {
    easy: [
        { question: "What is 5 + 3?", answer: 8 },
        { question: "What is 2 + 4?", answer: 6 }
    ],
    medium: [
        { question: "What is 12 - 4?", answer: 8 },
        { question: "What is 15 - 9?", answer: 6 }
    ],
    hard: [
        { question: "What is 3 * 4?", answer: 12 },
        { question: "What is 18 / 2?", answer: 9 }
    ]
};

let currentLevel = 'easy';

document.getElementById('levelSelect').addEventListener('change', function() {
    currentLevel = this.value;
    resetQuiz();
});

function checkAnswer(answer) {
    const correctAnswer = questions[currentLevel][currentQuestion].answer;
    if (answer === correctAnswer) {
        resultText.textContent = "Correct!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Wrong!";
        resultText.style.color = "red";
    }
    resultElement.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions[currentLevel].length) {
        questionElement.textContent = questions[currentLevel][currentQuestion].question;
        resultElement.classList.add('hidden');
    } else {
        resultText.textContent = "You completed all questions!";
        document.querySelector('.next-btn').style.display = 'none';
    }
}

function resetQuiz() {
    currentQuestion = 0;
    questionElement.textContent = questions[currentLevel][currentQuestion].question;
    resultElement.classList.add('hidden');
    document.querySelector('.next-btn').style.display = 'inline-block';
}
