const number = document.querySelector('.number');
const check_btn = document.querySelector('.check');
const check_num = document.querySelector('.guess');
const msge = document.querySelector('.message');
const inp_score = document.querySelector('.score');
const high_score = document.querySelector('.highscore');
const again = document.querySelector('.again');
const body = document.querySelector('body');
let guess = Math.floor(Math.random() * 20 + 1);
let score = 20;
highScore = 0;
let playing = true;
number.textContent = '?';
// guessnum();

check_btn.addEventListener('click', function () {
  if (playing) {
    let inp_num = Number(document.querySelector('.guess').value);

    if (!inp_num) {
      msge.textContent = 'no number';
    } else if (inp_num === guess) {
      msge.textContent = 'thats correct';
      body.style.backgroundColor = '#60b347';
      number.textContent = guess;
      playing = false;
      if (score > highScore) {
        highScore = score;
        high_score.textContent = highScore;
      }
    } else if (inp_num !== guess) {
      score--;
      inp_num > guess
        ? (msge.textContent = 'too high')
        : (msge.textContent = 'too low');

      if (score > 0) {
        inp_score.textContent = score;
      } else {
        msge.textContent = 'you lose';
      }
    }
  }
});
again.addEventListener('click', function () {
  score = 20;
  msge.textContent = 'start guessing....';
  inp_score.textContent = score;
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  check_num.value = '';
  playing = true;
  guess = Math.floor(Math.random() * 20 + 1);
});
