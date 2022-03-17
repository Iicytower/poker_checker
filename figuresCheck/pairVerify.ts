import { higherCard } from "../helpers/higherCard";
import { PairsHand } from "../models";

export function pairVerify(hand: string): PairsHand{
  const pairRegex: RegExp = /(.)\1{1}/;

  const [pair] = hand.match(pairRegex) ?? [];

  const highestCard = higherCard(hand.replace(pair, '').split(''));

  const value: PairsHand = {
    originalValue: hand,
    value: 4,
    highestCardVerify: highestCard,
    pairsCard: (pair) ? pair.slice(0,1) : '',
    figure: (pair) ? 'pair' : '',
  }
  
  return value;
}