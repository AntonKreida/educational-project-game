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

const templateCard = (field) => {
  const data = getCards();
  field.innerHTML = '';

  // TODO: test function render cards
  // eslint-disable-next-line array-callback-return
  data.map((card) => {
    field.innerHTML += `
      <div class="card-wrapper">
       <div class="card">
        <div class="card-front">
          <img class="card__img" src="./images/bg_card_real.png" alt="">
        </div>
        <div class="card-back">
          <img class="card__img" src="./images/${card.randomCardSuits}-${card.randomCardName}.png" alt="">
        </div>
       </div>
      </div>
    `;
  });
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

  templateCard(mainField);
};

export default templateGamePages;
