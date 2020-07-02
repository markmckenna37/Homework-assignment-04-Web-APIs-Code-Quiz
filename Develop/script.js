// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var startBtn = document.querySelector("#startBtn");
var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var questionEl = document.querySelector("#questions");
var button0 = document.querySelector("#btn0");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var resultPage = document.querySelector("#result");
var submit = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var initialForm = document.querySelector("#scoreForm");
var initialText = document.querySelector("#initialText");
var scoreText = document.querySelector("#scoreText");
var playAgain = document.querySelector("#playAgain");
var losePlayAgain = document.querySelector("#losePlayAgain");
var losePage = document.querySelector("#losePage")
var feedback = document.querySelector("#feedback");
// global variables
var timerInterval;
var timeLeft = 75;
// variable from which our giveQuestion function pulls its value
var currentQuestion = 0;
var score = 0;
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
// hide the quiz, lose, and result pages until the start button is pressed.
quizPage.style.display = "none";
resultPage.style.display = "none";
losePage.style.display = "none";
// write a function to count down from by seconds from 75.
function countDown() {
    timerInterval = setInterval(function () {
        // if the timer runs out, the time interval is cleared, and the losing page is displayed
        if (timeLeft <= 1) {
            clearInterval(timerInterval);
            timeLeft = 0;
            quizPage.style.display = "none";
            losePage.style.display = "block";

        }
        // 1 is subtracted from our timer every second
        timeLeft--;
        timeEl.textContent = timeLeft;
    }, 1000);
}
// function triggerd by click event on the start button. sets quiz page display to visible, starts our countdown, and gives our first question
function startQuiz() {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    countDown();
    giveQuestion(currentQuestion)
}
// function that gives current question and answer options. 
function giveQuestion(i) {
    // if we exceed our total length of questions, our quiz page is hidden, results page is shown, and the store score function is called
    if (currentQuestion === questions.length) {
        score = timeLeft;
        timeEl.textContent = "75";
        storeScore();
        clearInterval(timerInterval);
        quizPage.style.display = "none";
        result.style.display = "block";
    }
    // otherwise, our next question is given after the current question variable is iterated
    else {
        questionEl.textContent = questions[i].question
        button0.textContent = questions[i].answer[0]
        button1.textContent = questions[i].answer[1]
        button2.textContent = questions[i].answer[2]
        button3.textContent = questions[i].answer[3]
    }
}

// function that is triggered on click with each of the 4 buttons. each button corresponds to a number 0-4, 
function checkAnswer(num) {
    if (num === questions[currentQuestion].correctAnswer) {
        // feedback is given if right or wrong
        feedback.style.display = "block";
        feedback.textContent = "Correct!";
        // after 1 second, a set timeout is used to hide the feedback text
        setTimeout(feedbackHide, 1000);
        currentQuestion++;
        giveQuestion(currentQuestion);
    } else {
        // feedback is given if right or wrong
        feedback.style.display = "block";
        feedback.textContent = "WRONG!";
        // after 1 second, a set timeout is used to hide the feedback text
        setTimeout(feedbackHide, 1000)
        // if wrong, 20  is subtracted from our time left variable 
        timeLeft -= 20
    }
}

function feedbackHide() {
    feedback.style.display = "none";
}
// Now I need a function that stores the initials and final score of the user
// function that locally stores the players initials obtained from the submit button, and score obtained from the time left variable
function storeScore() {
    event.preventDefault();
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", score);
    // calls the function to write our score to the HTML page
    getScore()
}
// function to write our score to the HTML page
function getScore() {
    initialText.textContent = localStorage.getItem("initials", initials.value)
    scoreText.textContent = JSON.parse(localStorage.getItem("score", score))
}





// click event for start button0, calls the startQuiz function
startBtn.addEventListener("click", startQuiz);
// click event the calls the check answer functions with the parameter 0-3 respectively
button0.addEventListener("click", function () {
    checkAnswer(0)
})
button1.addEventListener("click", function () {
    checkAnswer(1)
})
button2.addEventListener("click", function () {
    checkAnswer(2)
})
button3.addEventListener("click", function () {
    checkAnswer(3)
})
// button to submit our high score
submit.addEventListener("click", storeScore);
// event listener for play again button. resets variables, sets the correct displays and calls the start quiz function
playAgain.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    timeLeft = 75;
    resultPage.style.display = "none";
    losePage.style.display = "none";
    startQuiz();

})
// event listener for play again button. resets variables, sets the correct displays and calls the start quiz function
losePlayAgain.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    timeLeft = 75;
    losePage.style.display = "none";
    timeEl.textContent = "75";
    clearInterval(timerInterval);
    startQuiz();
})