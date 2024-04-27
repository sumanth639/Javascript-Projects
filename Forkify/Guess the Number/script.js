'use strict';

let secnumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is not input
  if (!guess) {
    displayMessage('🚫 Enter a Number!');
  }
  // when guess is correct
  else if (guess === secnumber) {
    displayMessage('🎉 Correct Number!!');
    displayNumber(guess);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.btn').style.backgroundColor = '#a0d191';
    document.querySelector('.guess').style.backgroundColor = '#a0d191';
    document.querySelector('.check').style.backgroundColor = '#a0d191';
    document.querySelector('.number').style.width = '30rem';

    displayNumber(secnumber);
    confetti();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when Guess is wrong
  else if (guess !== secnumber) {
    if (score > 1) {
      displayMessage(guess > secnumber ? '📈 Too High' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤯 You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is greater than 20
  if (guess > 20) {
    displayMessage('🚫 Enter a Smaller Number!)');
  }

  // when guess is less than 0
  if (guess < 0) {
    displayMessage('🚫 Enter a Larger Number!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let secnumber = Math.floor(Math.random() * 20 + 1);
  displayNumber(secnumber);
  let score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#f7ee98';
  document.querySelector('.btn').style.backgroundColor = '#faf3bb';
  document.querySelector('.guess').style.backgroundColor = '#faf3bb';
  document.querySelector('.check').style.backgroundColor = '#faf3bb';
  document.querySelector('.guess').value = null;

  document.querySelector('.number').style.width = '15rem';
});
