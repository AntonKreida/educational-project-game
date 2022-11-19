import { getCards } from '../model/model-card';
import { getMarkupField } from '../model/model-page';
import templateGamePages from '../view/template';

import controllerTimer from './controller-timer';

const controllerForm = {
  validateForm: (form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const { target } = event;
      const { elements } = target;

      if (!target.checkValidity) {
        return;
      }

      const inputs = Array.from(elements).filter((element) => element.name);

      inputs.forEach((input) => {
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
