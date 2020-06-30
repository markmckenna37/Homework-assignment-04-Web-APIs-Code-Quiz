// establish querySelected variables from document
var timeEl = document.querySelector("#timeLeft");
var choicesEl = document.querySelector("#choices");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
// Set a timer starting at 75s and counts down by a the second
// establish a time variable, set it to 75
var timeLeft = 75;

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

// include an if statement to subtract 20 seconds from the timer if the question quiz question is answered incorrectly

// set all of the buttons up with a dynamic click event that tracks whether the answer is correct of incorrect
choicesEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        console.log("we in bidness");
    }
});
// make a function that switches the content within the question field and answer buttons after a question is answered

// After the quiz is finished, load the high score and player's initial to local storage