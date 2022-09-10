//ORIGINAL CODE

let username = 'casserole27';

username ? console.log(`Hello ${username}!`) : console.log('Hello!');

//We want to type a username into an HTML form.
//When the user clicks "submit" on this form, JS reveals a greeting
//JS : event listener --> click --> reveal greeting 
//If it's a specific username, reveal 'hello username'
//Else reveal 'hello' ???

//function userGreeting => return `Hello ${username}!`
//when we click id="submit-username", run this function

let userQuestion = 'Will I receive a large sum of money?';
console.log(`${username} asks, "${userQuestion}"`)

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

//JS resets the forms


