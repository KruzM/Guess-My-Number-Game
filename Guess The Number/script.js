'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayTextCont = function (type, message) {
  document.querySelector(type).textContent = message;
};
const displayStyle = function (type, variable, message) {
  document.querySelector(type).style[variable] = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    displayTextCont('.message', '⛔ No number! ');
  }
  //   When guess is correct == Wins
  else if (guess === secretNumber) {
    displayTextCont('.number', secretNumber);
    displayTextCont('.message', '🎉 Correct Number!');
    displayStyle('body', 'backgroundColor', '#60b347');
    displayStyle('.number', 'width', '30rem');

    if (score > highscore) {
      highscore = score;
      displayTextCont('.highscore', highscore);
    }
  }
  // When Guess is Wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayTextCont(
        '.message',
        guess > secretNumber ? '👆 Too High!' : '👇 Too Low!'
      );
      score--;
      displayTextCont('.score', score);
    } else {
      displayTextCont('.message', 'You lost the game!');
      displayTextCont('.score', 0);
      displayTextCont('.number', secretNumber);
      displayStyle('body', 'backgroundColor', '#FF0000');
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayTextCont('.message', 'Start guessing...');
    displayStyle('body', 'backgroundColor', '#222');
    displayStyle('.number', 'width', '15rem');
    displayTextCont('.score', score);
    displayTextCont('.number', '?');
    document.querySelector('.guess').value = '';
  });
});
