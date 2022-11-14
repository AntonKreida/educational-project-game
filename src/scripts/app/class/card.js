class Card {
  constructor(element, getListCard) {
    this.element = element;
    this.data = getListCard();

    this.renderCard = this.renderCard.bind(this);

    this.renderCard(this.element);
    this.element.addEventListener('click', (event) => {
      const target = event.target.closest('.js-card');

      if (!target.classList.contains('js-card')) {
        return;
      }

      target.classList.add('active');
    });
  }

  renderCard(element) {
    element.innerHTML = '';

    this.data.forEach((item) => {
      element.innerHTML += Card.template(item);
    });
  }
}

Card.template = (card) => {
  return `
  <div class="card-wrapper" data-card="${card.suit}-${card.name}">
    <div class="card js-card">
     <div class="card-front">
       <img class="card__img" src="./images/bg_card_real.png" alt="">
     </div>
    <div class="card-back">
      <img class="card__img" src="./images/${card.suit}-${card.name}.png" alt="">
    </div>
   </div>
  </div>`;
};

export default Card;
