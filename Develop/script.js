// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startBtn");
var questionEl = document.querySelector("#question")
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
// hide the answer buttons until the quiz is started
choicesEl.style.display = "none";
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
    choicesEl.style.display = "block";
    countDown();
}

function giveQuestion() {
    for (var i = 0; i < questions[i].answer.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.innerHTML = "<button>Choose</button> " + questions[i].answer[i];
    choicesEl.appendChild(li);
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

function giveQuestion2() {
    var li = document.getElementById("li");
    questionEl.textContent = questions.question2;
    for (var i = 0; i < 4; i++) {
        var li = document.getElementById("");
        li.textContent = "Choose " + questions.answer2[i];
    }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if ((el.matches("button")) && (index === 1)) {
            giveQuestion3();
        }
        if ((el.matches("button")) && (index !== 1)) {
            timeLeft -= 20;
        }
    })
}

function giveQuestion3() {
    for (var i = 0; i < 4; i++) {
        questionEl.textContent = questions.question3;
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.innerHTML = "<button>Choose</button> " + questions.answer3[i];
        choicesEl.appendChild(li);
    }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if ((el.matches("button")) && (index === 3)) {
            giveQuestion4();
        }
        if ((el.matches("button")) && (index !== 3)) {
            timeLeft -= 20;
        }
    })
}

function giveQuestion4() {
    for (var i = 0; i < 4; i++) {
        questionEl.textContent = questions.question4;
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.innerHTML = "<button>Choose</button> " + questions.answer4[i];
        choicesEl.appendChild(li);
    }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if ((el.matches("button")) && (index === 0)) {
            giveQuestion5();
        }
        if ((el.matches("button")) && (index !== 0)) {
            timeLeft -= 20;
        }
    })
}

function giveQuestion5() {
    for (var i = 0; i < 4; i++) {
        questionEl.textContent = questions.question5;
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.innerHTML = "<button>Choose</button> " + questions.answer5[i];
        choicesEl.appendChild(li);
    }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if ((el.matches("button")) && (index === 3)) {
            giveQuestion6();
        }
        if ((el.matches("button")) && (index !== 3)) {
            timeLeft -= 20;
        }
    })
}

function giveQuestion6() {
    for (var i = 0; i < 4; i++) {
        questionEl.textContent = questions.question6;
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.innerHTML = "<button>Choose</button> " + questions.answer6[i];
        choicesEl.appendChild(li);
    }
    choicesEl.addEventListener("click", function (event) {
        var el = event.target;
        var index = el.getAttribute("data-index");
        if ((el.matches("button")) && (index === 1)) {
            giveQuestion2();
        }
        if ((el.matches("button")) && (index !== 1)) {
            timeLeft -= 20;
        }
    })
}



// include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect


// need to make it so the start button disappears after starting the quiz
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", giveQuestion);

// make a few variables that contain all of the questions and answers




// make a function that switches the content within the question field and answer buttons after a question is answered




// After the quiz is finished, load the high score and player's initial to local storage