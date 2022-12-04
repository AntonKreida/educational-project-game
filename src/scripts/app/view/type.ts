export type cardType = {
  suit: string;
  name: string;
};

export type getCardsType = {
  (): cardType[];
};

export type getMarkupFieldType = {
  (): string | never[];
};
