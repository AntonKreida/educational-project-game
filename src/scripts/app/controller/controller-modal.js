import { getModalWindow } from '../model/model-page';
import '../model/window';
import viewModel from '../view/modal';

import controllerReturn from './controller-return';

const controllerModal = {
  checkStatusGameResult: () => {
    const body = document.querySelector('.js-body');
    body.classList.add('no-scroll');
    const timeEnd = document.querySelector('.js-time');
    window.globalStateApp.result.resultTimeGame = timeEnd.textContent;
    const { resultTimeGame, status } = window.globalStateApp.result;
    if (status === 'win' || status === 'lose') {
      viewModel.renderModal(getModalWindow(), resultTimeGame);

      controllerReturn.returnIndexPage();
    }
  },
};

export default controllerModal;
