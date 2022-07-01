# quiz
Coding quiz web app to demonstrate JavaScript, HTML, and CSS principles.

## Description
  
  This is an interactive quiz web app that utilizes JavaScript, HTML, and CSS.  The purpose of this project is to demonstrate comprehension and proficiency in all three languages, with an emphasis on JavaScript.  
  
  The potential real-world problem it would solve is helping programmers test their coding knowledge.  
  
  Although I wasn't able to complete the entire project, I was able to employ the following concepts to varying degrees of success:
  
    - time increments for the game timer
    - HTML built from scratch
    - JavaScript to alter HTML code
    - classes and Ids for custom styling
    - wireframing via Excalidraw
    - pseudo-coding
    - event listeners that trigger multiple functions
    - functions
    - global variables
    - arrays
    - object arrays
    - for loops

While writing the code for this app, I was able to add many of these concepts to my repetoire for the first time, and am very excited to employ them more competently in future projects.  

## Code Intention

Although I am generally happy with the code written here, considering time restraints and inexperience, there are sections of code that I attempted that didn't work, and would like to acknowledge them here. Any and all advice is welcome!

I was not able to correctly utilize the for loop to populate my page with the quiz questions and answers.  Although I was able to alter the HTML with that code block using .innerHTML, the page would only ever populate with the last element or object in the array.  I could not find why the for loops wouldn't work, and would appreciate any debugging advice!

My intention was to create two arrays: one for questions and one for answers.  The for loops were meant to cycle through both arrays, displaying corresponding text.  i.e. Question 1 and the answers for Question 1.  Then, I would have used either .innerHTML or .textContent to update the HTML elements and display one question, and populate a set of buttons beneath it. I would have also used .innerHTML to update the quiz section for each question.  

I realized, once I had the first array and for loop written, that both populating the answer buttons and coding for correct and incorrect answers would be difficult with the above arrays.  

I found out that many of my cohort members were utilizing an array of objects to store their questions and answers in the same code block, and possibly using a for loop to iterate through the array.  Inspired by them, I also tried writing an array of objects to see if that would be more practical to populate the buttons.  In this case, I wasn't able to access the individual key value pairs via indexes. 

In the future, I might try using a display property and toggle between hidden and shown, instead of using .innerHTML and .textContent. 

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

Installation should only require visiting the following URL in a web browser: 

https://kglinoga.github.io/quiz/

## Usage

To use this web app, simply visit the above URL in your browser and click the Start button when you are ready to play!  A question and a list of answers will display, and a timer will count down from 100.  
![Screen Shot 2022-06-30 at 6 41 53 PM](https://user-images.githubusercontent.com/28368622/176806008-bc54299d-22fa-4eb6-a964-8e90ec3f9e2c.png)
Landing page

![Screen Shot 2022-06-30 at 6 42 04 PM](https://user-images.githubusercontent.com/28368622/176806016-6b2304d1-c9ae-4a9f-8a42-0d8df2fc768d.png)
Question page


## Credits

To create this project I utilized Excalidraw to create the wireframe.  I also asked our class TA's to give me feedback on the wireframe and pseudo-code to ensure that I was on the right track.  
