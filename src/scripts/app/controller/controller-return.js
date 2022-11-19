import '../model/window';
import viewIndex from '../view/index-page';
import viewHandlersPage from '../view/view';

const controllerReturn = {
  returnIndexPage: () => {
    const body = document.querySelector('.js-body');
    const modal = document.querySelector('.js-modal');
    const button = modal.querySelector('.js-button');

    button.addEventListener('click', () => {
      body.removeChild(modal);
      window.globalStateApp.status = 'lobby';
      viewIndex.getTemplate();
      viewHandlersPage.lobbyForm();
    });
  },
};

export default controllerReturn;
