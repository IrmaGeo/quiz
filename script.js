var startBtnEl = document.querySelector("#startBtn");
var nextQuestionEl = document.querySelector("#nextQuestion");
var questionEl = document.querySelector(".question");
var answerEl = document.getElementById("answersBtn");
var nextbtnEl = document.getElementById("next");
var submitEl = document.getElementById("submitQuiz");
var prevbtnEl = document.getElementById("previous");
var timeEl = document.querySelector(".timer");
var correctAnswers = [1, 2, 3];
var secondsLeft = 10;

// start quiz
startBtnEl.addEventListener("click", startQuiz);
function startQuiz() {
  scoredivEl.classList.add("hide");
  submitEl.classList.add("hide");
  setTime(secondsLeft);
  i = 0;
  // timer();
  showNextQuestion(i);
  var startQuizEl = document.getElementById("startQuiz").classList.add("hide");
  startBtnEl.classList.add("hide");
  nextQuestionEl.classList.remove("hide");
}

function showNextQuestion() {
  resetBtn();
  if (i <= -1) {
    i = 0;
  }
  if (i <= questions.length - 1) {
    questionEl.textContent = questions[i].question;
    questions[i].answers.forEach((answers) => {
      var button = document.createElement("button");
      button.textContent = answers.text;
      answerEl.appendChild(button);
      if (answers.correct) {
        // create correct answers array
      }
      button.addEventListener("onclick", correctAnswer);
    });
  } else {
    finishQuiz();
  }
}

function correctAnswer(e) {
  // checked if this button is in correct answers array
}

function setStatusClass(element, correct) {}

nextbtnEl.addEventListener("click", nextQuiestion);
function nextQuiestion() {
  i++;
  resetBtn();
  showNextQuestion(i);
}
function resetBtn() {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}
prevbtnEl.addEventListener("click", prevQuiestion);
function prevQuiestion() {
  i--;
  resetBtn();
  showNextQuestion(i);
}
function resetBtn() {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

// start TimeRanges======

function finishQuiz() {
  secondsLeft = 0;
  nextQuestionEl.classList.add("hide");
  submitEl.classList.remove("hide");
  scoredivEl.classList.add("hide");
}

var submitBtnEl = document.querySelector(".submit");
submitBtnEl.addEventListener("click", submitQuiz);

var scoredivEl = document.getElementById("scoreQuiz");

console.log(scoredivEl);

var scoreEl = document.querySelector(".score");

function submitQuiz() {
  secondsLeft = 0;
  submitEl.classList.add("hide");
  scoreEl.textContent = "Your score is" + " " + correctAnswers.length;
  console.log(scoredivEl);
  scoredivEl.classList.remove("hide");
}
// // click next question======
// push next question
// hide start Element

// // click answers=======
// check answers and push/remove/update answers string

function setTime(secondsLeft) {
  var secondsLeft = 10;
  timeEl.textContent = secondsLeft;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0 {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

// // submit--> calculate======
// calculate correct answers
// // clear
// clear answers string

// goback=======
var goBackBtnEl = document
  .getElementById("goback")
  .addEventListener("click", startQuiz);

var questions = [
  {
    question: "what is your name?",
    answers: [
      { text: "nino", correct: true },
      { text: "koba", correct: false },
      { text: "giorgi", correct: false },
      { text: "tamari", correct: false },
    ],
  },
  {
    question: "what is your last name?",
    answers: [
      { text: "giorgadze", correct: false },
      { text: "levanidze", correct: true },
      { text: "kobaidze", correct: false },
      { text: "shubitidze", correct: false },
    ],
  },
  {
    question: "what is your favorite color?",
    answers: [
      { text: "blue", correct: false },
      { text: "yello", correct: false },
      { text: "green", correct: true },
      { text: "purple", correct: false },
    ],
  },
];
