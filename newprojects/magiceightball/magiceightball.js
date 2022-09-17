//PART 1
// TODO display username greeting

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
// TODO display question and answer

let userQuestion = document.getElementById('submit-question');

let question = document.getElementById('question');
let answer = document.getElementById('answer');



function showQuestion () {
  question.style.display = 'block';
  answer.style.display = 'block';
  let questionInput = document.getElementById('question-input').value;
  let userInput = document.getElementById('username-input').value;
  let questionString = `${userInput} asks, "${questionInput}"`;
  question.innerHTML = questionString;

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

  answer.innerHTML = `The eightball answers, "${eightBall}"`;
};

userQuestion.addEventListener('click', showQuestion);

//PART 3
// TODO reset form

let reset = document.getElementById('reset-info');

function resetInfo() {
  document.getElementById('username-input').value = '';
  document.getElementById('question-input').value = '';
  greeting.style.display = 'none';
  question.style.display = 'none';
  answer.style.display = 'none';
};

reset.addEventListener('click', resetInfo);


 