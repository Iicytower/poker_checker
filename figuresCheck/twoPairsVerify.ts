import { Hand } from "../interfaces";

export function twoPairsVerify(hand: string): Hand {

  const { pairsCards, pairsFound } = hand.split('').reduce((acc, card) => {

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
    highestCard = hand.replace(regexToRemoveUnnecessaryCards, '');

  }

  const value: Hand = {
    originalValue: hand,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsTwoPairs) ? 'twoPairs' : '',
  }

  return value;
}