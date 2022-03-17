import { Hand } from "../interfaces";

export function twoPairsVerify(hand: string): Hand {
  const cardsFromHandSortted = hand.split('').sort().join('');

  const { pairsCards, pairsFound } = cardsFromHandSortted.split('').reduce((acc, card) => {

    if (acc.counter.indexOf(card) > -1) {
      acc.pairsCards += card;
      acc.pairsFound++;
    }
    acc.counter += card;
    return acc;

  }, {
    counter: '',
    pairsCards: '',
    pairsFound: 0
  });

  const doesHandIsTwoPairs = (pairsFound === 2); 

  let highestCard: string = '';
  if (doesHandIsTwoPairs) {

    const regexToRemoveUnnecessaryCards = new RegExp(`[${pairsCards}]`, 'g');
    highestCard = cardsFromHandSortted.replace(regexToRemoveUnnecessaryCards, '');

  }

  const value: Hand = {
    originalValue: cardsFromHandSortted,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsTwoPairs) ? 'twoPairs' : '',
  }

  return value;
}