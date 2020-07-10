var startBtnEl = document.querySelector("#startBtn");
var nextQuestionEl = document.querySelector("#nextQuestion");
var questionEl = document.querySelector(".question");
var answerEl = document.getElementById("answersBtn");
var nextbtnEl = document.getElementById("next");
var submitEl = document.getElementById("submitQuiz");
var prevbtnEl = document.getElementById("previous");
var timeEl = document.querySelector(".timer");
var resultEl = document.querySelector(".textresult");
var secondsLeft = 10;
var ansBtnEl = document.getElementById("test");
var score = 0;

// start quiz
startBtnEl.addEventListener("click", startQuiz);

// show start button, timer turn on and show first question
function startQuiz() {
  score = 0;
  scoredivEl.classList.add("hide");
  submitEl.classList.add("hide");
  setTime(secondsLeft);
  i = 0;
  showNextQuestion(i);
  var startQuizEl = document.getElementById("startQuiz").classList.add("hide");
  startBtnEl.classList.add("hide");
  nextQuestionEl.classList.remove("hide");
}

// show each question and answers from questions object.

function showNextQuestion() {
  resultEl.textContent = "";
  resetBtn();
  if (i <= -1) {
    // if a customer clicks a lot previusle button, she/he always will see first question
    i = 0;
  }
  if (i <= questions.length - 1) {
    questionEl.textContent = questions[i].question;
    questions[i].answers.forEach((answers) => {
      var button = document.createElement("button");
      button.textContent = answers.text;
      answerEl.appendChild(button);
      if (answers.correct) {
        button.addEventListener("click", checkAnswer); // count score only for correct answer
      }
    });
  } else finishQuiz();
}

// create check answer function
function checkAnswer() {
  score++;
  resultEl.textContent = "correct!";
}

//show next question when click next button
nextbtnEl.addEventListener("click", nextQuiestion);
function nextQuiestion() {
  i++;
  resetBtn();
  showNextQuestion(i);
}
// show prev question
prevbtnEl.addEventListener("click", prevQuiestion);
function prevQuiestion() {
  i--;
  resetBtn();
  showNextQuestion(i);
}

// for every new question remove the button and then create again
function resetBtn() {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function finishQuiz() {
  secondsLeft = 0;
  nextQuestionEl.classList.add("hide");
  submitEl.classList.remove("hide");
  scoredivEl.classList.add("hide");
}

var submitBtnEl = document.querySelector(".submit");
submitBtnEl.addEventListener("click", submitQuiz);

var scoredivEl = document.getElementById("scoreQuiz");

var scoreEl = document.querySelector(".score");

function submitQuiz() {
  secondsLeft = 0;
  submitEl.classList.add("hide");
  scoreEl.textContent = "Your score is" + " " + score;
  scoredivEl.classList.remove("hide");
}

function setTime(secondsLeft) {
  secondsLeft = 10;
  timeEl.textContent = secondsLeft;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

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
