import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function pairVerify(hand: string): Hand{
  const pairRegex: RegExp = /(.)\1{1}/;

  const cardsFromHandSortted = hand.split('').sort().join('');

  const [pair] = cardsFromHandSortted.match(pairRegex) ?? [];

  const highestCard = higherCard(cardsFromHandSortted.replace(pair, '').split(''));

  const doesHandIsPair = !!pair;

  const value: Hand = {
    originalValue: cardsFromHandSortted,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsPair) ? 'pair' : '',
  }
  
  return value;
}