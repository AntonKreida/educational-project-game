/* eslint-disable no-unused-vars */
import { getPatternCards } from '../model/model-card';
import '../model/window';

import controllerModal from './controller-modal';

interface controller {
  hasFlipCard: boolean;
  firstCard: HTMLElement | Element | null;
  secondCard: HTMLElement | Element | null;
  count: number;
  onFlipCard: (event: Event) => void;
  checkMatchCard: (firstCard: HTMLElement | null, secondCard: HTMLElement | null) => void;
  offFlipCard: () => void;
}
const controllerCard: controller = {
  hasFlipCard: false,
  firstCard: null,
  secondCard: null,
  count: 0,

  onFlipCard: (event: Event): void => {
    const target = event.target as HTMLElement;
    const card = target.closest('.js-card');

    if (card === null || !card.classList.contains('js-card')) {
      return;
    }

    card.classList.add('flip');

    if (!controllerCard.hasFlipCard) {
      controllerCard.hasFlipCard = true;
      controllerCard.firstCard = card;
      return;
    }

    controllerCard.secondCard = card;
    controllerCard.hasFlipCard = false;

    controllerCard.checkMatchCard(controllerCard.firstCard as HTMLElement, controllerCard.secondCard as HTMLElement);
  },

  checkMatchCard: (firstCard, secondCard) => {
    if (firstCard === null || secondCard === null) {
      return;
    }

    if (firstCard.dataset.card === secondCard.dataset.card) {
      controllerCard.count += 1;
      if (controllerCard.count === getPatternCards()) {
        window.globalStateApp.status = 'end';
        window.globalStateApp.result.status = 'win';
        controllerCard.count = 0;
        controllerModal.checkStatusGameResult();
      }
      return;
    }

    controllerCard.offFlipCard();
  },

  offFlipCard: () => {
    setTimeout(() => {
      window.globalStateApp.status = 'end';
      window.globalStateApp.result.status = 'lose';
      controllerCard.count = 0;
      controllerModal.checkStatusGameResult();
    }, 500);
  },
};

export default controllerCard;
