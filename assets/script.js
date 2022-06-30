console.log("hello there!")

// readme: ACceptance Crit
// pseudo code, global scope first, then functions, and so on. 
// once you get a feature to work, stop, think if you can make it BETTER.  Might be more efficient. don't get too far ahead of yourself - don't get ot step 5 and realize step 2 was a mistake. 

// TODO: Start Quiz button that changes both the .main-text section display and the .quiz-display to the next page. AND starts the Timer
var startBtn = document.querySelector("#start-quiz")

startBtn.addEventListener("click", function(){

        quizTime();
        startQuiz();  
        // correctAnswer();  
})


// TODO: Timer in top left corner that 1. starts when the Start Quiz button is clicked 2. counts down from like 75 seconds 3. drops 10 sec for every wrong answer. Logs a LOSS when it reaches 0, if the quiz is still going.
// web API folder
var timerEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function quizTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's Up!");
            //change the HTML Quiz Section back to Landing Page status. maybe onclick from alert??
        }
    }, 1000); 
}


// TODO: Answer buttons: 4 each, 1 correct, that saves & displays Correct! on next page, 3 incorrect that save & display Incorrect! on next page. Every button clears Main content and loads the next question's Main content, until the LAST question, which leads to the Finshed Quiz Page.



//this code changes the landing page title to the quiz questions - now we need arrays of strings containing the questions and another with the answers.  

var question = [
    "1.&lt;main&gt;, &lt;header&gt;, and &lt;section&gt; are examples of:",
   
    "2.True or False: Code within the &lt;head&gt; tag does not display in the browser window.", 

    "3. An image tag in HTML needs:", 

    "4. When should you commit to GitHub?", 

    "5. If HTML is the structure of a house, and JavaScript is like the creative/interactive homeowner, what is the CSS?"];

var answers = [
    //this will be an array of the different buttons for answers - each element will be a set of 4 answer buttons, 1 correct/3 incorrect.
]

function startQuiz() {
    for (var i = 0; i < question.length; i++){
    document.getElementById("titleQuestion").textContent = question[i];
    }
}



//****The game is over when *all questions are answered OR the timer reaches 0 */

// for the FINISHED QUIZ PAGE:
// TODO: Display h2 All Done
// TODO: Display p Your final Score is __. and fills in the blank
// TODO: Submit button saves user initials and score in local storage

// for the HIGH SCORES PAGE:

// TODO: Display h2 HIGH SCORES

// TODO: somehow display high scores?? in order from highest to lowest??

// TODO: button to Go Back - leads to Landing Page

// TODO: button to Clear High Scores