class Card {
  constructor(element, getListCard) {
    this.element = element;
    this.data = getListCard();
    this.hasFlipCard = false;
    this.firstCard = null;
    this.secondCard = null;

    this.renderCard = this.renderCard.bind(this);
    this.onFlipCard = this.onFlipCard.bind(this);

    this.renderCard(this.element);
    this.element.addEventListener('click', this.onFlipCard);
  }

  renderCard(field) {
    field.innerHTML = '';

    this.data.forEach((item) => {
      field.innerHTML += Card.template(item);
    });
  }

  onFlipCard(event) {
    const target = event.target.closest('.js-card');

    if (!target.classList.contains('js-card')) {
      return;
    }

    target.classList.add('flip');

    // TODO: Тест логики условия проверки совпадения, который уйдет в controller-card связывая это с моделью
    if (!this.hasFlipCard) {
      this.hasFlipCard = true;
      this.firstCard = target;
      return;
    }

    this.secondCard = target;
    this.hasFlipCard = false;

    this.checkMatchCard();
  }

  checkMatchCard() {
    if (this.firstCard.dataset.card === this.secondCard.dataset.card) {
      return;
    }

    this.unFlipCard();
  }

  unFlipCard() {
    setTimeout(() => {
      this.firstCard.classList.remove('flip');
      this.secondCard.classList.remove('flip');
    }, 500);
  }
}

Card.template = (card) => {
  return `
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
};

export default Card;
