const { it, expect, describe } = require('@jest/globals');
const { getRandomCards } = require('../scripts/app/model/model-card');

describe('test function get random deck cards', () => {
  const testCase = {
    suitsExtends: ['diamonds', 'hearts', 'clubs', 'spades'],
    namesExtends: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],
  };

  it(`should get random deck cards for ease, normal, hard level`, () => {
    const patternsCards = [3, 6, 9];

    patternsCards.forEach((pattern) => {
      const arr = getRandomCards(pattern);

      const resultName = arr.map((item) => {
        return item.name;
      });

      const resultSuits = arr.map((item) => {
        return item.suit;
      });

      expect(testCase.namesExtends).toEqual(expect.arrayContaining(resultName));
      expect(testCase.suitsExtends).toEqual(expect.arrayContaining(resultSuits));
    });
  });
});
