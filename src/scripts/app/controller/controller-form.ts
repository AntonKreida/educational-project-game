import { getCards } from '../model/model-card';
import { getMarkupField } from '../model/model-page';
import templateGamePages from '../view/game-page';

import controllerTimer from './controller-timer';

const controllerForm = {
  validateForm: (form: HTMLFormElement) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const { elements } = target;

      if (!target.checkValidity) {
        return;
      }

      const inputs: Element[] = Array.from(elements).filter((element) => (element as HTMLInputElement).name);

      (inputs as HTMLInputElement[]).forEach((input) => {
        if (input.checked) {
          window.globalStateApp.lavel = input.value;
          window.globalStateApp.status = 'ready';
        }
      });

      templateGamePages.getTemplate(getCards, getMarkupField);
      controllerTimer.checkStatusGame();
    });
  },
};

export default controllerForm;
