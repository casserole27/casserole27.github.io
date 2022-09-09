let username = 'casserole27';

username ? console.log(`Hello ${username}!`) : console.log('Hello!');

let userQuestion = 'Will I receive a large sum of money?';
console.log(`${username} asks, "${userQuestion}"`)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0 :
  eightBall = ('It is certain');
  break;
  case 1 :
  eightBall = ('Heck no!');
  break;
  case 2 :
  eightBall = ('Make it so');
  break;
  case 3 :
  eightBall = ('I predict you won\'t last the day');
  break;
  case 4 :
  eightBall = ('It is decidedly so');
  break;
  case 5 :
  eightBall = ('Inconceivable!!!');
  break;
  case 6 :
  eightBall = ('Signs point to yes');
  break;
  case 7 :
  eightBall = ('Get the eff outta here');
  break;
  default :
  eightBall = ('Eightball unavailable')
}

console.log(eightBall);