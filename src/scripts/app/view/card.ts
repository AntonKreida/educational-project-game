import { cardType, getCardsType } from './type';

const viewCard = {
  templateCard: (card: cardType) => {
    const { suit, name } = card;
    const template = `
        <div class="card-wrapper">
        <div class="card js-card" data-card="${suit}-${name}">
         <div class="card-front">
           <img class="card__img" src="./images/bg_card_real.png" alt="">
         </div>
        <div class="card-back">
          <img class="card__img" src="./images/${suit}-${name}.png" alt="">
        </div>
       </div>
      </div>`;

    return template;
  },

  renderCard: (field: HTMLDivElement, cardList: getCardsType) => {
    field.innerHTML = '';
    const cards = cardList();

    cards.forEach((card: cardType) => {
      field.innerHTML += viewCard.templateCard(card);
    });
  },

  onFlipCards: (cards: HTMLDivElement[]) => {
    cards.forEach((card) => {
      card.classList.add('flip');
    });
  },

  offFlipCards: (cards: HTMLDivElement[]) => {
    cards.forEach((card) => {
      card.classList.remove('flip');
    });
  },
};

export default viewCard;
