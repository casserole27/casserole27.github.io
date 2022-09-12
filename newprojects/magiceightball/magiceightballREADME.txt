This is a basic project from Codecademy's Learn JavaScript class.
https://www.codecademy.com/learn/introduction-to-javascript 
I am making the project my own by combining the JS with HTML and CSS
and adding functionality so users can play the actual game in a browser.

Process:

Semantic HTML file
>basic HTML file setup - doctype, head, etc
>added two forms, one for username input and one for question input
>added <p> placeholders for JS output

CSS file
>linked to HTML file
>display: none for <p> placeholders, JS will make them appear again
>I wanted this to look similar to an MS-DOS game, an older video game played
in the terminal, with high-contrast colors and chunky buttons. 
>I featured black and purple, like the actual magic eightball toy.
>I would love to feature an animation that mimics the functionality of the original toy.
>This is primarily a grid-based design: one column for smaller screens, two for larger. It is responsive. 
>I learned about the viewport and the HTML meta tag required to make media queries actually work.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
This tag is instructions to the browser for a page's dimensions and scaling.
Without it, a browser can sale down an entire web page to fit the screen!
It was a quick fix when we began viewing the web on phones and tablets.
I used this W3Schools article:
https://www.w3schools.com/css/css_rwd_viewport.asp

JS file
>copied my original code over from Codecademy.
>linked to HTML file
>everything that is logged to the console will be changed over to the result of specific DOM events
>I went through the file and wrote out the logic of the program.
HTML input --> JS takes that input and reveals desired results
>I divided the JS into three smaller, manageable parts:
PART 1 - I wrote a function to display a greeting when a user types and submits a username.
PART 2 - I wrote a function to display the question when a user types and submits a question,
and also to display the eightball's answer. The codes generates a random number that is
passed into a switch statement, which allows us to have a random string, or "answer"
when asking the eightball a question.
PART 3 - I wrote a function that resets the program.


//ORIGINAL CODE WITH LOGIC NOTES

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


