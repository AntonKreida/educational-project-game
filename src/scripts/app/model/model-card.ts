import { cardDeckType, patternCardsType, cardsListType } from './type';

const cardDeck: cardDeckType = {
  suits: ['diamonds', 'hearts', 'clubs', 'spades'],
  names: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],
};

const patternCards: patternCardsType = {
  easy: 3,
  normal: 6,
  hard: 9,
};

let cardsList: cardsListType[] = [];

export const getPatternCards = (): number | never[] => {
  const patterns = Object.keys(patternCards);
  const pattern = patterns.find((item) => item === window.globalStateApp.lavel);
  if (!pattern) {
    return [];
  }

  const patternGame = patternCards[pattern];
  return patternGame;
};

const getRandomCards = (numberCards: number | never[]): cardsListType[] => {
  cardsList = [];

  for (let i = cardsList.length; i < numberCards; i += 1) {
    const randomIndexSuits: number = Math.floor(Math.random() * cardDeck.suits.length);
    const randomIndexNames: number = Math.floor(Math.random() * cardDeck.names.length);

    const suit: string = cardDeck.suits[randomIndexSuits];
    const name: string = cardDeck.names[randomIndexNames];

    cardsList.push({ suit, name });
  }

  cardsList = cardsList.reduce((result: cardsListType[], item: cardsListType) => {
    if (!result.find((elem) => elem.name === item.name && elem.suit === item.suit)) {
      result.push(item);
    }

    return result;
  }, []);

  if (cardsList.length < numberCards) {
    getRandomCards(numberCards);
  }

  return cardsList;
};

const getSortCardsDeck = <Type>(arrListCard: Type[]): Type[] => {
  const cards = arrListCard;
  const playCards = cards.concat(cards);

  playCards.sort(() => Math.random() - 0.5);

  return playCards;
};

const getCardsPlay = (funcPattern: typeof getPatternCards, funcRandom: typeof getRandomCards, funcSort: typeof getSortCardsDeck) => {
  return () => {
    return funcSort(funcRandom(funcPattern()));
  };
};

export const getCards = getCardsPlay(getPatternCards, getRandomCards, getSortCardsDeck);
