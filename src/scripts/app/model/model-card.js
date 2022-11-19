const cardDeck = {
  suits: ['diamonds', 'hearts', 'clubs', 'spades'],
  names: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],
};

const patternCards = {
  easy: 3,
  normal: 6,
  hard: 9,
};

let cardsList = [];

export const getPatternCards = () => {
  const patterns = Object.keys(patternCards);
  const pattern = patterns.find((item) => item === window.globalStateApp.lavel);
  const patternGame = patternCards[pattern];

  return patternGame;
};

const getRandomCards = (numberCards) => {
  for (let i = cardsList.length; i < numberCards; i += 1) {
    const randomIndexSuits = Math.floor(Math.random() * cardDeck.suits.length);
    const randomIndexNames = Math.floor(Math.random() * cardDeck.names.length);

    const suit = cardDeck.suits[randomIndexSuits];
    const name = cardDeck.names[randomIndexNames];

    cardsList.push({ suit, name });
  }

  cardsList = cardsList.reduce((curObj, item) => {
    if (!curObj.find((elem) => elem.name === item.name && elem.suit === item.suit)) {
      curObj.push(item);
    }

    return curObj;
  }, []);

  if (cardsList.length < numberCards) {
    getRandomCards(numberCards);
  }

  return cardsList;
};

const getSortCardsDeck = (arrListCard) => {
  const cards = arrListCard;
  const playCards = cards.concat(cards);

  playCards.sort(() => Math.random() - 0.5);

  return playCards;
};

const getCardsPlay = (funcPattern, funcRandom, funcSort) => {
  return () => {
    return funcSort(funcRandom(funcPattern()));
  };
};

export const getCards = getCardsPlay(getPatternCards, getRandomCards, getSortCardsDeck);
