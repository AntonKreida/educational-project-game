import { getCards } from '../model/model-card';
import { getMarkupField } from '../model/model-page';
import '../model/window';
import templateGamePages from '../view/game-page';

import controllerTimer from './controller-timer';

const controllerRestartGame = {
  onButtonRestartGame: () => {
    templateGamePages.getTemplate(getCards, getMarkupField);
    window.globalStateApp.status = 'ready';
    controllerTimer.checkStatusGame();
  },
};

export default controllerRestartGame;
