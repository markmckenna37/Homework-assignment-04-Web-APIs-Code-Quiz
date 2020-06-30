// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startBtn");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var questionEl = document.querySelector("#question")
var buttonValue = -1;
var i = 0;
var questions = {
    question1 : "Which of these statements is NOT a correct way to iterate a variable by 1:",
    answer1 : ["A) i = i + 1", "B) i++", "C) i + i", "D) i += i"],
    correctAnswer1 : 2,
    question2 : "Which of these choices is NOT a data type:",
    answer2 : ["A) string", "B) object", "C) boolean", "D) number"],
    correctAnswer2 : 1,
    question3 : "Which statement is NOT considered a 'string':",
    answer3 : ["A) \"My name is Judge.\"", "B) \"1\"", "C) \"my name is\" + variable + \".\"", "D) 5000"],
    correctAnswer3 : 3,
    question4 : "Which word can NOT be used to make a variable?:",
    answer4 : ["A) obj", "B) var", "C) const", "D) let"],
    correctAnswer4 : 0,
    question5 : "Which of these data types would be considered truthy?:",
    answer5 : ["A) null", "B) 0", "C) NaN", "D) 1"],
    correctAnswer5 : 3,
    question6 : "What HTML <tag> would you use to link your javascript file?:",
    answer6 : ["A) <meta>", "B) <script>", "C) <JS>", "D) <link>"],
    correctAnswer6 : 1
}


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
function giveQuestion1() {
    for (var i = 0; i < questions.answer1.length; i++){ 
    questionEl.textContent = questions.question1;   
    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.innerHTML = "<button>Choose</button> " + questions.answer1[i];
    choicesEl.appendChild(li);
    }
}

for (var i = 0; i < questions.answer1.length; i++){ 
console.log(questions.answer3[i]);}

    // include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect


// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", giveQuestion1);

// make a few variables that contain all of the questions and answers




// make a function that switches the content within the question field and answer buttons after a question is answered


    

// After the quiz is finished, load the high score and player's initial to local storage
