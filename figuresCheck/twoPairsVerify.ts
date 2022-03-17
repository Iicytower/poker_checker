import { higherCard } from "../helpers/higherCard";
import { TwoPairsHand } from "../interfaces";

export function twoPairsVerify(hand: string): TwoPairsHand {

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
  let firstCardFromPair: string = '';
  let secondCardFromPair: string = '';
  if (doesHandIsTwoPairs) {

    const regexToRemoveUnnecessaryCards = new RegExp(`[${pairsCards}]`, 'g');
    highestCard = hand.replace(regexToRemoveUnnecessaryCards, '');

    firstCardFromPair = higherCard(pairsCards.split(''));
    secondCardFromPair = pairsCards.replace(firstCardFromPair, '');

  }

  const value: TwoPairsHand = {
    originalValue: hand,
    value: 3,
    firstCardFromPair,
    secondCardFromPair,
    highestCardVerify: highestCard,
    figure: (doesHandIsTwoPairs) ? 'twoPairs' : '',
  }

  return value;
}