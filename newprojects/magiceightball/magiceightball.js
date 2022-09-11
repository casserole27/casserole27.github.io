//PART 1

let usernameInput = document.getElementById('submit-username');

let usernameGreeting = document.getElementById('greeting');

function showGreeting () {
  greeting.style.display = 'block';
  let userInput = document.getElementById('username-input').value;
  let greetingString = `Hello ${userInput}!`
  greeting.innerHTML = greetingString;
};

usernameInput.addEventListener('click', showGreeting);

//PART 2

let userQuestion = document.getElementById('submit-question');

let question = document.getElementById('question');
let answer = document.getElementById('answer');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber) {
  case 0 :
  eightBall = ('It is certain.');
  break;
  case 1 :
  eightBall = ('Heck no!');
  break;
  case 2 :
  eightBall = ('Make it so.');
  break;
  case 3 :
  eightBall = ('I predict you won\'t last the day.');
  break;
  case 4 :
  eightBall = ('It is decidedly so.');
  break;
  case 5 :
  eightBall = ('Inconceivable!!!');
  break;
  case 6 :
  eightBall = ('Signs point to yes.');
  break;
  case 7 :
  eightBall = ('Get outta here!');
  break;
  default :
  eightBall = ('Eightball unavailable.')
};

function showQuestion () {
  question.style.display = 'block';
  answer.style.display = 'block';
  let questionInput = document.getElementById('question-input').value;
  let userInput = document.getElementById('username-input').value;
  let questionString = `${userInput} asks, "${questionInput}"`;
  question.innerHTML = questionString;
  answer.innerHTML = `The eightball answers, "${eightBall}"`;
};

userQuestion.addEventListener('click', showQuestion);

//PART 3

let reset = document.getElementById('reset-info');

function resetInfo() {
  document.getElementById('username-input').value = '';
  document.getElementById('question-input').value = '';
  greeting.style.display = 'none';
  question.style.display = 'none';
  answer.style.display = 'none';
};

reset.addEventListener('click', resetInfo);


/*
//ORIGINAL CODE

let username = 'casserole27';

username ? console.log(`Hello ${username}!`) : console.log('Hello!');

//PART 1
//We want to type a username into an HTML form.
//When the user clicks "submit" on this form, JS reveals a greeting
//JS : event listener --> click --> reveal greeting 
//If it's a specific username, reveal 'hello username' ??
//Else reveal 'hello' ???

//function userGreeting => return `Hello ${username}!`
//when we click id="submit-username", run this function

let userQuestion = 'Will I receive a large sum of money?';
console.log(`${username} asks, "${userQuestion}"`)

//PART 2
//We want to type a question into a second HTML form
//When the user clicks this "submit",
//JS reveals the username and question
//JS reveals eightball's answer
//JS : event listener --> click --> reveal username, question, and answer

//function userQuestion => return `${username} asks, "${userQuestion}"`
//return eightball --> do we need a separate function for this?
//function within a function?
//when we click id="submit-question", run this function

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber) {
  case 0 :
  eightBall = ('It is certain.');
  break;
  case 1 :
  eightBall = ('Hell no!');
  break;
  case 2 :
  eightBall = ('Make it so.');
  break;
  case 3 :
  eightBall = ('I predict you won\'t last the day.');
  break;
  case 4 :
  eightBall = ('It is decidedly so.');
  break;
  case 5 :
  eightBall = ('Inconceivable!!!');
  break;
  case 6 :
  eightBall = ('Signs point to yes.');
  break;
  case 7 :
  eightBall = ('Get the eff outta here.');
  break;
  default :
  eightBall = ('Eightball unavailable.')
};

console.log(eightBall);

//PART 3
//JS resets the forms

*/
