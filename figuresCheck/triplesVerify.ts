import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function triplesVerify(hand: string): Hand{
  const tripleRegex: RegExp = /(.)\1{2}/;

  const cardsFromHandSortted = hand.split('').sort().join('');

  const doesHandIsTriple = tripleRegex.test(cardsFromHandSortted);

  const [,,oneOfTheThreeCard] = cardsFromHandSortted;

  const indexOfOneOfTheThreeCard: number = cardsFromHandSortted.indexOf(oneOfTheThreeCard);

  const highestCards = (indexOfOneOfTheThreeCard === 0) ? cardsFromHandSortted.slice(3,5) : cardsFromHandSortted.slice(0,2);

  const [ card1, card2 ] = highestCards.split('');

  higherCard(card1, card2);

  const value: Hand = {
    originalValue: cardsFromHandSortted,
    value: 0,
    highestCardVerify: higherCard(card1, card2),
    figure: (doesHandIsTriple) ? 'triples' : '',
  }
  
  return value;
}