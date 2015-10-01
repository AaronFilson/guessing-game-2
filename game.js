
var userName= prompt('What is your name?');
    console.log(userName);
    alert('Hi, '+userName + '!!! Go ahead, make my day!!!');

var numbercorrect = 0;

var question1 = prompt('Am I from Seattle?');
if (question1.toUpperCase() === "NO" || question1.toUpperCase() === "N") {
  numbercorrect++;
  alert ('Way to Go!');
} 
else {
  alert('Oops, I am from North Carolina');
}

var question2 = prompt('Do I like dogs?');
if (question2.toUpperCase() === "YES" || question2.toUpperCase() === "Y") {
  numbercorrect++;
  alert ('Way to Go!');
} else {
  alert('Mamma Mia');
}
var question3 = prompt('Do I have brown eyes?');
if (question3.toUpperCase() === "YES" || question3.toUpperCase() === "Y") {
  numbercorrect++
  alert('Way to Go!');
} else {
  alert('I think you need glasses');
}

alert(userName + ' got ' + numbercorrect + ' out of 3 questions correct ');

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
*/
