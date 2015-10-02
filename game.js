/*
Game.js
10-2-2015

This is a guessing game program written by Nkiru for the B34 Code Fellows Seattle Bootcamp.
This runs in a browser, and asks the user to enter their name, and play a guessing game.
The input taken has limited error correction in accepting upper or lower case, either no or yes and n or y. The user is rewarded with an image displayed for correct answers.


*/

//Ask for user's name
var userName = prompt('What is your name?');
console.log(userName);
alert('Hi, '+ userName + '!!! Go ahead, make my day!!!');

//Declaring variables for later use.
var numbercorrect = 0;
var elOne = document.getElementById('one');
var elTwo = document.getElementById('two');
var elThree = document.getElementById('three');
var elResult = document.getElementById('results');

var imageOne = document.getElementById('imageone');
var imageTwo = document.getElementById('imagetwo');
var imageThree = document.getElementById('imagethree');

//Arrays to hold the strings used in functions
var q1 = new Array('Am I from Seattle?', 'Do I like dogs?', 'Do I have brown eyes?');
var answers = new Array('NO', 'N', 'YES', 'Y');
var response = new Array('Way to Go!', 'Oops, I am from North Carolina', 'Mamma Mia', 'I think you need glasses');

//an array of images to display
var imagepaths = new Array('<img src="img/LCthumbsup.png" alt="Thumbs Up!" title="Good Job, a lazy cat approves!" width="200" height="200" />' );

//Start of the functions section of the program.
function question1() {
  var question1 = prompt(q1[0]);
  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    numbercorrect++;
    elOne.innerHTML = (response[0]);
    elOne.className = ('correct');
    imageOne.innerHTML = (imagepaths[0]);
  } else {
    elOne.innerHTML = (response[1]);
    elOne.className = ('incorrect');
  }
}

function question2() {
  var question2 = prompt(q1[1]);
  if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
    numbercorrect++;
    elTwo.innerHTML = (response[0]);
    elTwo.className = ('correct');
    imageTwo.innerHTML = (imagepaths[0]);
  } else {
    elTwo.innerHTML = (response[2]);
    elTwo.className = ('incorrect');
  }
}

function question3() {
  var question3 = prompt(q1[2]);
  if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3]) {
    numbercorrect++
    elThree.innerHTML = (response[0]);
    elThree.className = ('correct');
    imageThree.innerHTML = (imagepaths[0]);
  } else {
    elThree.innerHTML = (response[3]);
    elThree.className = ('incorrect');
  }
}

function resultfunc() {

elResult.innerHTML = (userName + ' got ' + numbercorrect + ' out of 3 questions correct.');

}

//Calling the functions to run the guts of the program.
question1();

window.setTimeout(question2, 1000); //timeouts necessary to allow the images to load.
window.setTimeout(question3, 1000);
window.setTimeout(resultfunc, 4000);

