import { Hand } from "../interfaces";

export function fourOfAKindVerify(hand: string): Hand {

  const fourOfKindRegex: RegExp = /(.)\1{3}/;

  const cardsFromHandSortted = hand.split('').sort().join('');

  const doesHandIsFourOfAKind = fourOfKindRegex.test(cardsFromHandSortted);

  const [,,oneOfTheFourCard] = cardsFromHandSortted;

  const indexOfStartTheFourCard: number = cardsFromHandSortted.indexOf(oneOfTheFourCard);

  const highestCard: string = (indexOfStartTheFourCard === 0) ? cardsFromHandSortted[4] : cardsFromHandSortted[0];

  const value: Hand = {
    originalValue: cardsFromHandSortted,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsFourOfAKind) ? 'fourOfAKind' : '',
  }
  
  return value;
}