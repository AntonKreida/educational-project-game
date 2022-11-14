import Card from '../class/card.js';
import { getCards, getMarkupField } from '../model/index';

const templateMainControl = (mainInner) => {
  mainInner.innerHTML = `
    <div class="main__control control">
       <div class="timer">
        <div class="timer__text">
         <p class="text">min</p>
         <p class="text">sec</p>
        </div>
        <div class="timer__time time">
         <span class="js-time">00.00</span>
        </div>
       </div>
  
      <button class="button">Начать заново</button>
    </div>`;
};

const templateGamePages = () => {
  const main = document.querySelector('.js-main');
  main.classList.add('main-page');

  const mainInner = document.querySelector('.js-main-inner');
  mainInner.innerHTML = '';
  mainInner.classList.add('main__inner-game-page');
  templateMainControl(mainInner);

  const mainField = document.createElement('div');
  mainField.classList.add('main__field', 'field', `${getMarkupField()}`);
  mainInner.appendChild(mainField);

  // eslint-disable-next-line no-unused-vars
  const card = new Card(mainField, getCards);
};

export default templateGamePages;
