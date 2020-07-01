// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startBtn");
var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var questionEl = document.querySelector("#questions");
var button0 = document.querySelector("#btn0");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var resultPage= document.querySelector("#result");
var currentQuestion = 0;
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
// function that hides HTML elements, starts countdown and gives the current question via click event
function startQuiz() {
    startBtn.style.display = "none";
    quizPage.style.display = "block";
    countDown();
    giveQuestion()
}
// function that gives current question and answer options. the current question is pulled from the questions array using the current question function
function giveQuestion() {
        questionEl.textContent = questions[currentQuestion].question
        button0.textContent = questions[currentQuestion].answer[0]
        button1.textContent = questions[currentQuestion].answer[1]
        button2.textContent = questions[currentQuestion].answer[2]
        button3.textContent = questions[currentQuestion].answer[3]
}

// function that is triggered on click with each of the 4 buttons. each button corresponds to a number 0-4, 
function checkAnswer(answer) {
    // the number associated with each button is then compared to the correct answer of the current question, from the questions array
 if (answer === questions[currentQuestion].correctAnswer){
    console.log("woooow it works")
}
}





// include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect


// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);
button0.addEventListener("click", checkAnswer(0))
button1.addEventListener("click", checkAnswer(1))
button2.addEventListener("click", checkAnswer(2))
button3.addEventListener("click", checkAnswer(3))
// make a few variables that contain all of the questions and answers




// make a function that switches the content within the question field and answer buttons after a question is answered




// After the quiz is finished, load the high score and player's initial to local storage