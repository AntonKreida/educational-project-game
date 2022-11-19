const viewCard = {
  templateCard: (card) => {
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
