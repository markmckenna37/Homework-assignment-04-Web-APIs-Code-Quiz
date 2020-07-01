// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startBtn");
var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var questionEl = document.querySelector("#questions");
var button0 = document.querySelector("#btn0");
var button0 = document.querySelector("#btn1");
var button0 = document.querySelector("#btn2");
var button0 = document.querySelector("#btn3");
var resultPage= document.querySelector("#result");
var currentQuestion = 0;
var i = 0;
var index;
// Changed all of the questions/answers objects into an array of objects with question, answer PushSubscriptionOptions, and correct answer

var questions = [{
        question: "Which of these statements is NOT a correct way to iterate a variable by 1:",
        answer: ["A) i = i + 1", "B) i++", "C) i + i", "D) i += i"],
        correctAnswer: 2
    },
    {
        question: "Which of these choices is NOT a data type:",
        answer: ["A) string", "B) object", "C) boolean", "D) number"],
        correctAnswer: 1,
    }, {
        question: "Which statement is NOT considered a 'string':",
        answer: ["A) \"My name is Judge.\"", "B) \"1\"", "C) \"my name is\" + variable + \".\"", "D) 5000"],
        correctAnswer: 3,
    }, {
        question: "Which word can NOT be used to make a variable?:",
        answer: ["A) obj", "B) var", "C) const", "D) let"],
        correctAnswer: 0,
    }, {
        question: "Which of these data types would be considered truthy?:",
        answer: ["A) null", "B) 0", "C) NaN", "D) 1"],
        correctAnswer: 3,
    }, {
        question: "What HTML <tag> would you use to link your javascript file?:",
        answer: ["A) <meta>", "B) <script>", "C) <JS>", "D) <link>"],
        correctAnswer: 1
    }
]

// Set a timer starting at 75s and counts down by a the second
// establish a time variable, set it to 75
var timeLeft = 75;
// hide the quiz and result pages until the start button is pressed.
quizPage.style.display = "none";
result.style.display = "none";
// write a function to count down from by seconds from 75.
function countDown() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("OUT OF TIME")
        }
    }, 1000);
}
// function that hides HTML elements
function startQuiz() {
    startBtn.style.display = "none";
    quizPage.style.display = "block";
    countDown();
}

function giveQuestion() {
    for (var i = 0; i === questions.length; i++) {
        questionEl = questions[0].question
    }
    // for (var i = 0; i < questions.length; i++) {

    // }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if (el.matches("button")) {
            console.log("nutsack")
        }
        // if ((el.matches("button")) && (index !== 2)) {
        //     timeLeft -= 20;
        // }
    })
}
// function checkAnswer(num) {
//     if questions
// }






// include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect


// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);
// button0.addEventListener("click" checkAnswer())
// button1.addEventListener("click" checkAnswer())
// button2.addEventListener("click" checkAnswer())
// button3.addEventListener("click" checkAnswer())
// make a few variables that contain all of the questions and answers




// make a function that switches the content within the question field and answer buttons after a question is answered




// After the quiz is finished, load the high score and player's initial to local storage