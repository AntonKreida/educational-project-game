const viewCard = {
  templateCard: (card) => {
    const template = `
        <div class="card-wrapper">
        <div class="card js-card" data-card="${card.suit}-${card.name}">
         <div class="card-front">
           <img class="card__img" src="./images/bg_card_real.png" alt="">
         </div>
        <div class="card-back">
          <img class="card__img" src="./images/${card.suit}-${card.name}.png" alt="">
        </div>
       </div>
      </div>`;

    return template;
  },

  renderCard: (field, cardList) => {
    field.innerHTML = '';
    const cards = cardList();

    cards.forEach((card) => {
      field.innerHTML += viewCard.templateCard(card);
    });
  },

  onFlipCards: (cards) => {
    cards.forEach((card) => {
      card.classList.add('flip');
    });
  },

  offFlipCards: (cards) => {
    cards.forEach((card) => {
      card.classList.remove('flip');
    });
  },
};

export default viewCard;
