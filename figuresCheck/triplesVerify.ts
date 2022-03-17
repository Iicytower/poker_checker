import { Hand } from "../models";

export function triplesVerify(hand: string): Hand{
  const tripleRegex: RegExp = /(.)\1{2}/;

  const doesHandIsTriple = tripleRegex.test(hand);

  const [,,highestCards] = hand;

  const value: Hand = {
    originalValue: hand,
    value: 2,
    highestCardVerify: highestCards,
    figure: (doesHandIsTriple) ? 'triples' : '',
  }
  
  return value;
}