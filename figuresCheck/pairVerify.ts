import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function pairVerify(hand: string): Hand{
  const pairRegex: RegExp = /(.)\1{1}/;

  const [pair] = hand.match(pairRegex) ?? [];

  const highestCard = higherCard(hand.replace(pair, '').split(''));

  const doesHandIsPair = !!pair;

  const value: Hand = {
    originalValue: hand,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsPair) ? 'pair' : '',
  }
  
  return value;
}