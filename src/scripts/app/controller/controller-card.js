import { getPatternCards } from '../model/model-card';
import '../model/window';

const controllerCard = {
  hasFlipCard: false,
  firstCard: null,
  secondCard: null,
  count: 0,

  onFlipCard: (event) => {
    const target = event.target.closest('.js-card');

    if (!target.classList.contains('js-card')) {
      return;
    }

    target.classList.add('flip');

    if (!controllerCard.hasFlipCard) {
      controllerCard.hasFlipCard = true;
      controllerCard.firstCard = target;
      return;
    }

    controllerCard.secondCard = target;
    controllerCard.hasFlipCard = false;

    controllerCard.checkMatchCard(controllerCard.firstCard, controllerCard.secondCard);
  },

  checkMatchCard: (firstCard, secondCard) => {
    if (firstCard.dataset.card === secondCard.dataset.card) {
      controllerCard.count += 1;
      if (controllerCard.count === getPatternCards()) {
        window.globalStateApp.status = 'end';
        window.globalStateApp.result.status = 'win';
      }
      return;
    }

    controllerCard.offFlipCard(controllerCard.firstCard, controllerCard.secondCard);
  },

  offFlipCard: () => {
    setTimeout(() => {
      window.globalStateApp.status = 'end';
      window.globalStateApp.result.status = 'lose';
    }, 500);
  },
};

export default controllerCard;
