document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
const questions = [
    { question: "Real Madrid har vunnit fler än 10 Champions League titlar.", answer: true },
    { question: "Cristiano Ronaldo har spelat för Real Madrid.", answer: true },
    { question: "Real Madrid grundades år 1930.", answer: false },
    { question: "Santiago Bernabeu är namnet på Real Madrids hemmaplan.", answer: true },
    { question: "När Real Madrid spelar hemmamatcher så spelar dom i blåfärgade hemmatröjor.", answer: false },
    { question: "Zinedine Zidane har varit tränare för Real Madrid.", answer: true },
    { question: "Ligan som Real Madrid spelar i heter LaLiga.", answer: true },
    { question: "Lionel Messi har spelat för Real Madrid.", answer: false },
    { question: "Karim Benzema har varit anfallare för Real Madrid.", answer: true },
    { question: "Real Madrid har aldrig förlorat en El Clasico match, det vill säga mot Barcelona.", answer: false }
];
let userAnswers = [];

function startQuiz() {
    document.getElementById('startQuizBtn').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';

    const quizContainer = document.getElementById('quizContainer');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <button onclick="answerQuestion(${index}, true)">Sant</button>
            <button onclick="answerQuestion(${index}, false)">Falskt</button>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function answerQuestion(index, answer) {
    userAnswers[index] = answer;
}

document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
