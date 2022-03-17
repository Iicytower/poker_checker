import { Hand } from "../interfaces";

export function fourOfAKindVerify(hand: string): Hand {

  const fourOfKindRegex: RegExp = /(.)\1{3}/;

  const doesHandIsFourOfAKind = fourOfKindRegex.test(hand);

  const [,,oneOfTheFourCard] = hand;

  const indexOfStartTheFourCard: number = hand.indexOf(oneOfTheFourCard);

  const highestCard: string = (indexOfStartTheFourCard === 0) ? hand[4] : hand[0];

  const value: Hand = {
    originalValue: hand,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsFourOfAKind) ? 'fourOfAKind' : '',
  }
  
  return value;
}