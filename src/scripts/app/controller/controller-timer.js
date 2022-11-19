import '../model/window';
import viewCard from '../view/card';
import viewTimer from '../view/timer';

import controllerCard from './controller-card';

const controllerTimer = {
  checkStatusGame: () => {
    const timerMin = document.querySelector('.js-min');
    const timerSec = document.querySelector('.js-sec');
    const cards = document.querySelectorAll('.js-card');
    const field = document.querySelector('.js-field');
    const button = document.querySelector('.js-button');

    if (window.globalStateApp.status === 'ready') {
      viewTimer.onTimerRev(timerSec);
      viewCard.onFlipCards(cards);
    }

    const checkStatusStartGame = setInterval(() => {
      if (window.globalStateApp.status === 'game') {
        viewTimer.onStopwatch(timerMin, timerSec);
        viewCard.offFlipCards(cards);
        button.removeAttribute('disabled');
        field.addEventListener('click', controllerCard.onFlipCard);
        clearInterval(checkStatusStartGame);
      }
    }, 1000);

    const checkStatusEndGame = setInterval(() => {
      if (window.globalStateApp.status === 'end') {
        field.removeEventListener('click', controllerCard.onFlipCard);
        clearInterval(checkStatusEndGame);
      }
    }, 1000);
  },
};

export default controllerTimer;
