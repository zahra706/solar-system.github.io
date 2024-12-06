// Liste des questions
const questions = [
    { question: "Quelle est la plus grande planète du système solaire ?", options: ["Terre", "Jupiter", "Saturne", "Mars"], answer: "Jupiter", difficulty: "facile" },
    { question: "Quel est le nom du satellite naturel de la Terre ?", options: ["Lune", "Phobos", "Io", "Titan"], answer: "Lune", difficulty: "facile" },
    { question: "Combien de planètes dans le système solaire ?", options: ["7", "8", "9", "10"], answer: "8", difficulty: "facile" },
    { question: "Qui a découvert la planète Uranus ?", options: ["Galilée", "Newton", "William Herschel", "Kepler"], answer: "William Herschel", difficulty: "moyen" },
    { question: "Quelle est la composition principale de l'atmosphère de Neptune ?", options: ["Oxygène", "Hydrogène", "Méthane", "Azote"], answer: "Méthane", difficulty: "difficile" }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedDifficulty = "facile";
let filteredQuestions = [];

// Charger les questions basées sur la difficulté
function loadQuestions() {
    filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Charger une question
function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ''; 

    if (currentQuestionIndex < filteredQuestions.length) {
        const questionObj = filteredQuestions[currentQuestionIndex];

        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${questionObj.question}</p>
            <ul class="answers">
                ${questionObj.options.map(option => `
                    <li>
                        <input type="radio" name="answer" value="${option}"> ${option}
                    </li>
                `).join('')}
            </ul>
        `;

        quizContainer.appendChild(questionElement);
    } else {
        showResults();
    }
}

// Vérifier la réponse actuelle
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === filteredQuestions[currentQuestionIndex].answer) {
        score++;
    }
}

// Passer à la question suivante
function nextQuestion() {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Afficher le résultat
function showResults() {
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("quiz-controls").style.display = 'none';
    const resultElement = document.getElementById("result");
    resultElement.style.display = 'block';
    document.getElementById("score").textContent = `Votre score : ${score} sur ${filteredQuestions.length}`;
}

// Changer la difficulté
function changeDifficulty() {
    selectedDifficulty = document.getElementById("difficulty").value;
    document.getElementById("result").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    document.getElementById("quiz-controls").style.display = 'block';
    loadQuestions();
}

// Recommencer le quiz
function restartQuiz() {
    loadQuestions();
    document.getElementById("result").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    document.getElementById("quiz-controls").style.display = 'block';
}

// Initialisation
window.onload = loadQuestions;
