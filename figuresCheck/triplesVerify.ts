import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function triplesVerify(hand: string): Hand{
  const tripleRegex: RegExp = /(.)\1{2}/;

  const doesHandIsTriple = tripleRegex.test(hand);

  const [,,oneOfTheThreeCard] = hand;

  const indexOfOneOfTheThreeCard: number = hand.indexOf(oneOfTheThreeCard);

  const highestCards = (indexOfOneOfTheThreeCard === 0) ? hand.slice(3,5) : hand.slice(0,2);

  const value: Hand = {
    originalValue: hand,
    value: 0,
    highestCardVerify: higherCard(highestCards.split('')),
    figure: (doesHandIsTriple) ? 'triples' : '',
  }
  
  return value;
}