# Homework-assignment-04-Web-APIs-Code-Quiz
Homework assignment no. 4

github link: https://github.com/markmckenna37/Homework-assignment-04-Web-APIs-Code-Quiz
live link: https://markmckenna37.github.io/Homework-assignment-04-Web-APIs-Code-Quiz/

for this homework assignment we were tasked with creating a Javascript quiz using JavaScript API and HTML DOM

I accomplished this by creating an array of objects to represent my questions, answer options (strings) and the correct answer (a number). Then, I made a for loop to iterate through the length of the object array and pull out the respective question and 4 answer options.
Using DOM, I would target HTML elements to insert the corresponding question to the page, with 4 buttons representing your answer options. the questions are decided through an iterated variable called "currentQuestion"

When the start button is clicked, a click event function is called to both start a timer (set at 75) and to give us our questions/answers. 
Each button is linked to a click event, which calls a function "checkAnswer" with the parameter 0-3. if the number matches the currentQuestion answer value (which is also a number) the next question is then given.
Once the user is finished with the entire length of the questions array, the results screen is shown. There, the user has the option to enter their initials. The user's initials and score are then stored to local storage, and added to the high score list on the results page. The "play again" calls a function that resets variables and starts the quiz over.