window.globalStateApp = {
  lavel: '',
  timeGame: '',
  status: {
    lavelGame: '',
    state: '',
    result: '',
  },
};

const cardDeck = {
  suits: ['diamonds', 'hearts', 'clubs', 'spades'],
  names: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],
};

const patternCards = {
  easy: 3,
  normal: 6,
  hard: 9,
};

const markupFields = {
  easy: 'easy',
  normal: 'normal',
  hard: 'hard',
};

export const getMarkupField = () => {
  const markups = Object.keys(markupFields);
  const markup = markups.find((element) => element === window.globalStateApp.lavel);
  const markupCards = markupFields[markup];

  return markupCards;
};

let cardsList = [];

// TODO: test function get list arr card for render;
const getRandomCards = (numberCards) => {
  for (let i = cardsList.length; i < numberCards; i += 1) {
    const randomIndexArrSuits = Math.floor(Math.random() * cardDeck.suits.length);
    const randomIndexArrName = Math.floor(Math.random() * cardDeck.names.length);

    const randomCardSuits = cardDeck.suits[randomIndexArrSuits];
    const randomCardName = cardDeck.names[randomIndexArrName];

    cardsList.push({ randomCardSuits, randomCardName });
  }

  cardsList = cardsList.reduce((item, index) => {
    if (!item.find((elem) => elem.randomCardName === index.randomCardName && elem.randomCardSuits === index.randomCardSuits)) {
      item.push(index);
    }
    return item;
  }, []);

  if (cardsList.length < numberCards) {
    getRandomCards(numberCards);
  }

  return cardsList;
};

// TODO: end function get list arr card for render;

const getCardsForPaly = (arrListCard) => {
  const cards = arrListCard;

  const playCards = cards.concat(cards);
  playCards.sort(() => Math.random() - 0.5);
  return playCards;
};

const getPlayCards = (func1, func2) => {
  return () => {
    const patterns = Object.keys(patternCards);
    const lavel = patterns.find((element) => element === window.globalStateApp.lavel);
    const numberCards = patternCards[lavel];

    return func2(func1(numberCards));
  };
};

export const getCards = getPlayCards(getRandomCards, getCardsForPaly);
