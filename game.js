
var userName= prompt('What is your name?');
    console.log(userName);
    alert('Hi, '+userName + '!!! Go ahead, make my day!!!');

var numbercorrect = 0;
var elOne = document.getElementById('one');
var elTwo = document.getElementById('two');
var elThree = document.getElementById('three');
var elResult = document.getElementById('results');

var imageOne = document.getElementById('imageone');
var imageTwo = document.getElementById('imagetwo');
var imageThree = document.getElementById('imagethree');

var q1 = new Array('Am I from Seattle?', 'Do I like dogs?', 'Do I have brown eyes?');
var answers = new Array('NO', 'N', 'YES', 'Y');
var response = new Array('Way to Go!', 'Oops, I am from North Carolina', 'Mamma Mia', 'I think you need glasses');

var imagepaths = new Array('<img src="img/LCthumbsup.png" alt="Thumbs Up!" title="Good Job, a lazy cat approves!" width="200" height="200" />' );

function question1() {
  var question1 = prompt(q1[0]);
  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    numbercorrect++;
    elOne.innerHTML = (response[0]);
    imageOne.innerHTML = (imagepaths[0]);
  } else {
    elOne.innerHTML = (response[1]);
  }
}

function question2() {
  var question2 = prompt(q1[1]);
  if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
    numbercorrect++;
    elTwo.innerHTML = (response[0]);
    imageTwo.innerHTML = (imagepaths[0]);
  } else {
    elTwo.innerHTML = (response[2]);
  }
}

function question3() {
  var question3 = prompt(q1[2]);
  if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3]) {
    numbercorrect++
    elThree.innerHTML = (response[0]);
    imageThree.innerHTML = (imagepaths[0]);
  } else {
    elThree.innerHTML = (response[3]);
  }
}

function resultfunc() {

elResult.innerHTML = (userName + ' got ' + numbercorrect + ' out of 3 questions correct ');

}

question1();

window.setTimeout(question2, 1000);
window.setTimeout(question3, 1000);
window.setTimeout(resultfunc, 1000);


/*elResult.innerHTML = ('<h1>' + userName + ' got ' + '<br />' + numbercorrect + ' out of 3 questions correct' + '</h1>' ); */

/*
console.log('Question 1 response:' + question1);
console.log('What I am testing in my "if" conditions:' + question1.toUpperCase());

console.log('Question 2 response:' + question2);
console.log('What I am testing in my "if" conditions:' + question2.toUpperCase());

console.log('Question 3 response:' + question3);
console.log('What I am testing in my "if" conditions:' + question3.toUpperCase());

alert('Your answer to Question 1 was ' + question1)
alert('Your answer to Question 2 was ' + question2)
alert('Your answer to Question 3 was ' + question3)

var imagepaths = new Array('<img src="cat.jpg" />');


*/
