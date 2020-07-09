// DOM elements
var nextBtnEL = document.querySelector(".next");
var prevBtnEL = document.querySelector(".previous");
var submitBtnEL = document.querySelector(".submit");
var resultBtnEL = document.querySelector(".result");
var timeEl = document.querySelector(".timer");
var checkResultEL = document.querySelector(".checkResult");
var startEl = document.querySelector(".start");
var instEL = document.querySelector(".inst");
var questionEL = document.querySelector(".question");
var answer1EL = document.querySelector("#answer_1");
var answer2EL = document.querySelector("#answer_2");
var answer3EL = document.querySelector("#answer_3");
var answer4EL = document.querySelector("#answer_4");
var userEL = document.querySelector(".textLable");
var nameEL = document.querySelector("#UserName");
var scoreEL = document.querySelector(".score");
var gobackEl = document.querySelector(".goback");
var clearEL = document.querySelector(".clear");
var secondsLeft = 10;

// show - hide elements
startEl.onclick = function () {
  hideElements();
};
function hideElements() {
  startEl.style.display = "none";
  nextBtnEL.style.display = "block";
  prevBtnEL.style.display = "block";
  instEL.style.display = "none";
  timeEl.style.display = "block";
  i = 0;

  setTime();

  pushQuestion(i);
}

// create objects for questions
var questions = [
  {
    q: "quesrion1",
    a1: "a",
    a2: "b",
    a3: "c",
    a4: "d",
    correctAnswer: "a3",
  },

  {
    q: "There are questui2 days in a year.",
    a1: "e",
    a2: "f",
    a3: "j",
    a4: "h",
    correctAnswer: "a2",
  },
  {
    q: "There are question3 days in a year.",
    a1: "i",
    a2: "j",
    a3: "k",
    a4: "l",
    correctAnswer: "a1",
  },
];

//create timer function
function setTime() {
  var secondsLeft = 10;
  timeEl.textContent = secondsLeft + " seconds left";

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//handled functions

// // show questions

function pushQuestion() {
  var output = [];
  var answer;
  questionEL.innerHTML = questions[i].q;
  questionEL.style.display = "block";
  answer1EL.style.display = "block";
  answer2EL.style.display = "block";
  answer3EL.style.display = "block";
  answer4EL.style.display = "block";

  answer1EL.innerHTML = questions[i].a1;
  answer2EL.innerHTML = questions[i].a2;
  answer3EL.innerHTML = questions[i].a3;
  answer4EL.innerHTML = questions[i].a4;
}

nextBtnEL.onclick = function () {
  nextquestion();
};
function nextquestion() {
  if (i < questions.length - 1) {
    i++;
    pushQuestion(i);
  } else {
    i = questions.length - 1;
    questionEL.style.display = "none";
    answer1EL.style.display = "none";
    answer2EL.style.display = "none";
    answer3EL.style.display = "none";
    answer4EL.style.display = "none";
    nextBtnEL.style.display = "none";
    prevBtnEL.style.display = "none";
    submitBtnEL.style.display = "none";
    userEL.style.display = "block";
    nameEL.style.display = "block";
    submitBtnEL.style.display = "block";
  }
}

prevBtnEL.onclick = function () {
  prevQuestion();
};
function prevQuestion() {
  if (i > 0) {
    i--;
    pushQuestion(i);
  }
}

submitBtnEL.onclick = function () {
  calculateResult();
};

function calculateResult() {
  scoreEL.innerHTML = "Your score is----";
  scoreEL.style.display = "block";
  gobackEl.style.display = "block";
  clearEL.style.display = "block";
  startEl.style.display = "none";
  userEL.style.display = "none";
  nameEL.style.display = "none";
  submitBtnEL.style.display = "none";
  nameEL.innerHTML = "";
}
gobackEl.onclick = function () {
  goback();
};
function goback() {
  startEl.style.display = "block";
  scoreEL.style.display = "none";
  gobackEl.style.display = "none";
  clearEL.style.display = "none";
}
