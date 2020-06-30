// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startBtn");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var questionEl = document.querySelector("#question")

// making a vaiable for every question cause I don't know what else to do yet.
var Q1 = "Which of these statements is NOT a correct way to iterate a variable by 1:";
var Q2 = "Which of these choices is NOT a data type:";
var Q3 = "Which statement is NOT considered a 'string':";
var Q4 = "Which word can NOT be used to make a variable?:";
var Q5 = "Which of these data types would be considered truthy?:";
var Q6 = "What HTML <tag> would you use to link your javascript file?:";
// Set a timer starting at 75s and counts down by a the second
// establish a time variable, set it to 75
var timeLeft = 75;
// hide the answer buttons until the quiz is started
choicesEl.style.display = "none";
// write a function to count down from by seconds from 75.
function countDown() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft ;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            alert("OUT OF TIME")
        }
    }, 1000);
}
// function that hides HTML elements
function startQuiz() {
    startBtn.style.display = "none";
    choicesEl.style.display = "block";
    countDown();
}
// include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect
choicesEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        console.log("we in bidness");
    }
});
// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);

// make a few variables that contain all of the questions and answers
var answerOptions = {
    0 :  [
        "A) i = i + 1",
        "B) i++",
        "C) i + i",
        "D) i += i"
    ],
    1 : [
        "A) string",
        "B) object",
        "C) boolean",
        "D) number"
    ],
    2 : [
        "A) \"My name is Judge.\"",
        "B) \"1\"",
        "C) \"my name is\" + variable + \".\"",
        "D) 5000"
    ],
    3 : [
        "A) obj",
        "B) var",
        "C) const",
        "D) let"
    ] ,
    4 : [
        "A) null",
        "B) 0",
        "C) NaN",
        "D) 1"
    ],
    5 : [
        "A) <meta>",
        "B) <script>",
        "C) <JS>",
        "D) <link>"
    ],
}
var answers = {
    0 : 3,
    1 : 2,
    2 : 4,
    3 : 1,
    4 : 4,
    5 : 2
}

// make a function that switches the content within the question field and answer buttons after a question is answered
function giveQuestion() {
    for (i = 0; i < 6; i++)
    questionEl.textContent = questions[i];
}
// After the quiz is finished, load the high score and player's initial to local storage
console.log(answerOptions[2][2])

// gonna write my questions now cause I'm stuck

// Which of these statements is NOT a correct way to iterate a variable by 1:
// A i = i + 1
// 2) i++
// 3) i + i
// 4) i += i

// Which of these choices is NOT a data type:
// 1) string
// 2) object
// 3) boolean
// 4) number

// Which statement is NOT considered a "string":
// 1) "my name is judge"
// 2) "1"
// 3) "my name is" + variable + "."
// 4) 5000

// Which word can NOT be used to make a variable?:
// 1) obj 
// 2) var
// 3) const
// 4) let

// Which of these data types would be considered truthy?:
// 1) null 
// 2) 0
// 3) NaN
// 4) 1

// What HTML <tag> would you use to link your javascript file?:
// 1) <meta>
// 2) <script>
// 3) <JS>
// 4) <link>

// "A)"
// "B)"
// "C)"
// "D)"
