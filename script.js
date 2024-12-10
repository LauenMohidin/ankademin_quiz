document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
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
let userAnswers = new Array(questions.length).fill(null);

function startQuiz() {
    document.getElementById('startQuizBtn').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';

    const quizContainer = document.getElementById('quizContainer');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionText);

        const trueButton = document.createElement('button');
        trueButton.textContent = 'Sant';
        trueButton.addEventListener('click', () => answerQuestion(index, true));
        questionElement.appendChild(trueButton);

        const falseButton = document.createElement('button');
        falseButton.textContent = 'Falskt';
        falseButton.addEventListener('click', () => answerQuestion(index, false));
        questionElement.appendChild(falseButton);

        quizContainer.appendChild(questionElement);
    });

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Avsluta Quiz';
    finishButton.addEventListener('click', finishQuiz);
    quizContainer.appendChild(finishButton);
}

function answerQuestion(index, answer) {
    userAnswers[index] = answer;

    const questionElement = document.querySelectorAll('.question')[index];
    const feedback = document.createElement('p');
    if (answer === questions[index].answer) {
        feedback.textContent = "Rätt svar!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Fel svar!";
        feedback.style.color = "red";
    }
    questionElement.appendChild(feedback);

    const buttons = questionElement.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

function finishQuiz() {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            correctAnswers++;
        }
    });

    const percentage = (correctAnswers / questions.length) * 100;
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';  

    const resultMessage = document.createElement('p');

    if (percentage < 50) {
        resultMessage.textContent = `Underkänt - Du fick ${correctAnswers} av ${questions.length} rätt.`;
        resultMessage.style.color = 'red';
    } else if (percentage <= 75) {
        resultMessage.textContent = `Bra - Du fick ${correctAnswers} av ${questions.length} rätt.`;
        resultMessage.style.color = 'orange';
    } else {
        resultMessage.textContent = `Riktigt bra jobbat - Du fick ${correctAnswers} av ${questions.length} rätt.`;
        resultMessage.style.color = 'green';
    }

    quizContainer.appendChild(resultMessage);
}

document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}