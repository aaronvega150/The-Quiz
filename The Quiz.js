const quizData = [
    {
        question: "What colors make up Orange?",
        choices: ["Blue and Red", "Blue and Green", "Red and Yellow"],
        correct: 2
    },
    {
        question: "What are the 3 Primary Colors?",
        choices: ["Red, Orange, and Green", "Red, Yellow, and Blue", "Purple, Orange, and Green"],
        correct: 1
    },
    {
        question: "How many Colors make up the Rainbow?",
        choices: ["6", "7", "8"],
        correct: 1
    },
    {
        question: "What colors are not part of the rainbow?",
        choices: ["Red", "Indigo", "White"],
        correct: 2
    },
    {
        question: "Which one of these are considered a neutural color?",
        choices: ["Red", "Green", "Grey"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

window.onload = loadQuestion;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = "";

    const questionData = quizData[currentQuestion];
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = questionData.question;

    quizContainer.appendChild(questionTitle);

    questionData.choices.forEach((choice, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz';
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        quizContainer.appendChild(label);
    });

    document.getElementById('next').style.display = 'none';
    document.getElementById('submit').style.display = 'inline';
    document.getElementById('error').style.display = 'none';
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById('error').style.display = 'block';
        return;
    }

    const answer = parseInt(selectedOption.value);

    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${quizData.length}</h2>`;

    if (score === quizData.length) {
        quizContainer.innerHTML += "<p>Great job!</p>";
    } else if (score >= quizData.length / 2) {
        quizContainer.innerHTML += "<p>Good effort, keep practicing!</p>";
    } else {
        quizContainer.innerHTML += "<p>Keep practicing, you'll get there!</p>";
    }

    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'none';
}
