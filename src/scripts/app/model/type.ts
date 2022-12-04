// MODEL CARDS
export type cardDeckType = {
  suits: string[];
  names: string[];
};

export type patternCardsType = {
  [index: string]: number;
};

export type cardsListType = {
  suit: string;
  name: string;
};

// MODEL PAGES

export type markupType = {
  [index: string]: string;
};
