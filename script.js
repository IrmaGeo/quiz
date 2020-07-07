// create object for QA.

var questions = [
  {
    q: "The sky is blue.",
    a: {
      1: "k",
      2: "l",
      3: "n",
      4: "p",
    },
    correctAnswer: "3",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "2",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "1",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "3",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "4",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "1",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "3",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "4",
  },
  {
    q: "There are 365 days in a year.",
    a: {
      1: "t",
      2: "p",
      3: "n",
      4: "d",
    },
    correctAnswer: "1",
  },
];
// create timer function
// create question show function
function showQuestions() {
  var output = [];
  var answer;
  for (i = 0; i < questions.length; i++) {
    answer = [];
    for (Number in questions[i].a) {
      //---- }
      output
        .push
        // ---
        ();
    }
  }
  return "text";
}

// create next and previous buttons functionality and show questions
// checked the answered and make sound regarding the answer, save user results
// show result when costumer request
// create flow: timer start, gave over conditions, questions appearing, save questions and answers result,

function generateQuiz() {
  showQuestions();
  console.log("run generateQuiz");
}

Btn = document.addEventListener("click", generateQuiz);
