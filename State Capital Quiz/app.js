


const quizData = [
    {
        question: "What is the capital of Missouri?",
        correctAnswer: "Jefferson city"
    },
    {
        question: "What is the capital of Utah?",
        correctAnswer: "Salt Lake city"
    },
    {
        question: "What is the capital of Texas?",
        correctAnswer: "Austin"
    },
    {
        question: "What is the capital of Florida?",
        correctAnswer: "Tallahassee"
    }
];

let score = 0;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');
const finalScoreElement = document.getElementById('final-score');
const resultContainer2 = document.getElementById('result2');

function renderQuestions() {
    quizData.forEach((questionData, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        questionElement.innerHTML = `
            <p>${questionData.question}</p>
            <div class="input-container">
                <input type="text" id="answer${index}" placeholder="Your answer" oninput="checkAnswer(${index})">
            </div>
            <div id="feedback${index}" class="feedback"></div>
        `;

        quizContainer.appendChild(questionElement);
    });
}


function checkAnswer(questionIndex) {
    const userAnswer = document.getElementById(`answer${questionIndex}`).value.trim().toLowerCase();
    const feedbackElement = document.getElementById(`feedback${questionIndex}`);
    const correctAnswer = quizData[questionIndex].correctAnswer.toLowerCase();


    if (userAnswer === "") {
        feedbackElement.textContent = "";
        feedbackElement.classList.remove('correct', 'incorrect', 'empty');
        return;
    }

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
        score++;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer was: ${quizData[questionIndex].correctAnswer}`;
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }


    checkIfQuizFinished();
}


function checkIfQuizFinished() {
    const allAnswered = quizData.every((_, index) => {
        const answer = document.getElementById(`answer${index}`).value.trim();
        return answer !== "";
    });

    if (allAnswered) {
        showResult();
    }
}


function showResult() {
    quizContainer.style.display = 'none';
    if (score === quizData.length) {
        resultContainer.style.display = 'block';
    } else {
        resultContainer2.style.display = 'block';
    }
    finalScoreElement.textContent = `Your score: ${score}`;
}


renderQuestions();
