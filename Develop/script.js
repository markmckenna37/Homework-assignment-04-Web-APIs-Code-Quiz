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
var initialText = document.querySelector("#initialText");
var scoreText = document.querySelector("#scoreText");
var playAgain = document.querySelector("#playAgain");
var feedback = document.querySelector("#feedback");
// global variables
var timerInterval;
var timeLeft = 75;
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
// hide the quiz and result pages until the start button is pressed.
quizPage.style.display = "none";
resultPage.style.display = "none";
// write a function to count down from by seconds from 75.
function countDown() {
    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
        }
        timeLeft--;
        timeEl.textContent = timeLeft;
    }, 1000);
}
// function that hides HTML elements, starts countdown and gives the current question via click event
function startQuiz() {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    countDown();
    giveQuestion(currentQuestion)
}
// function that gives current question and answer options. the current question is pulled from the questions array using the current question function
function giveQuestion(i) {
        if (currentQuestion === questions.length) {
            score = timeLeft;
            timeEl.textContent = "75";
            getScore();
            clearInterval(timerInterval);
            quizPage.style.display = "none";
            result.style.display = "block";
        }
        else {
        questionEl.textContent = questions[i].question
        button0.textContent = questions[i].answer[0]
        button1.textContent = questions[i].answer[1]
        button2.textContent = questions[i].answer[2]
        button3.textContent = questions[i].answer[3]
    }
}

// function that is triggered on click with each of the 4 buttons. each button corresponds to a number 0-4, 
// function checkAnswer(answer) {
//     // the number associated with each button is then compared to the correct answer of the current question, from the questions array 
function checkAnswer(num) {
    if ( num === questions[currentQuestion].correctAnswer) {
        feedback.style.display = "block";
        feedback.textContent = "Correct!";
        setTimeout(feedbackHide, 2000);
        currentQuestion++;
        giveQuestion(currentQuestion);
    }
    else { 
        feedback.style.display = "block";  
        feedback.textContent = "WRONG!";
        setTimeout(feedbackHide, 2000)    
        timeLeft -= 20
    }
}
function feedbackHide() {
    feedback.style.display = "none";
  }
// Now I need a function that stores the initials and final score of the user
function storeScore() {
    event.preventDefault(); 
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", JSON.stringify(score));
    getScore();
}
// and then display the local storage cache as a high score page
function getScore() {
    initialText.textContent = localStorage.getItem("initials");
    scoreText.textContent = JSON.parse(localStorage.getItem("score"));
}

// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);

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

submit.addEventListener("click", storeScore)
playAgain.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 75;
    resultPage.style.display = "none";
    startQuiz();
    
})
// make a few variables that contain all of the questions and answers




// make a function that switches the content within the question field and answer buttons after a question is answered




// After the quiz is finished, load the high score and player's initial to local storage