import controllerRestartGame from '../controller/controller-restart';

import viewCard from './card';

const templateMainControl = (mainInner) => {
  const mainControl = document.createElement('div');
  mainControl.classList.add('main__control', 'control');
  mainInner.appendChild(mainControl);

  const timerContainer = document.createElement('div');
  timerContainer.classList.add('timer');
  mainControl.appendChild(timerContainer);

  const timerText = document.createElement('div');
  timerText.classList.add('timer__text');
  timerContainer.appendChild(timerText);

  const textMin = document.createElement('p');
  const textSec = document.createElement('p');
  textMin.classList.add('text');
  textSec.classList.add('text');
  textMin.textContent = 'min';
  textSec.textContent = 'sec';
  timerText.appendChild(textMin);
  timerText.appendChild(textSec);

  const timer = document.createElement('div');
  timer.classList.add('timer__time', 'time');
  timerContainer.appendChild(timer);

  const content = document.createElement('p');
  content.classList.add('js-time');
  timer.append(content);

  const spanMin = document.createElement('span');
  spanMin.classList.add('js-min');
  spanMin.textContent = '00';
  content.append(spanMin);

  content.append('.');

  const spanSec = document.createElement('span');
  spanSec.classList.add('js-sec');
  spanSec.textContent = '00';
  content.append(spanSec);

  const button = document.createElement('button');
  button.classList.add('button', 'js-button');
  button.setAttribute('disabled', 'disabled');
  button.textContent = 'Начать заново';
  button.addEventListener('click', controllerRestartGame.onButtonRestartGame);
  mainControl.appendChild(button);
};

const templateGamePages = {
  template: (funcListCard, funcMarkup) => {
    const main = document.querySelector('.js-main');
    main.classList.add('main-page');

    const mainInner = document.querySelector('.js-main-inner');
    mainInner.innerHTML = '';
    mainInner.classList.add('main__inner', 'main__inner-game-page');
    templateMainControl(mainInner);

    const mainField = document.createElement('div');
    mainField.classList.add('main__field', 'field', `${funcMarkup()}`, 'js-field');
    mainInner.appendChild(mainField);

    viewCard.renderCard(mainField, funcListCard);
  },

  getTemplate: (funcListCard, funcMarkup) => {
    return templateGamePages.template(funcListCard, funcMarkup);
  },
};

export default templateGamePages;
