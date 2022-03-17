import { highestCardVerify, pairVerify, twoPairsVerify, triplesVerify, fullHouseVerify, fourOfAKindVerify } from "./figuresCheck/index";
import { Hand } from "./interfaces";

export function handValue (hand: string): Hand {

  const fourOfAKind: Hand = fourOfAKindVerify(hand);
  if(fourOfAKind.figure === 'fourOfAKind') return fourOfAKind;

  const fullHouse: Hand = fullHouseVerify(hand);
  if(fullHouse.figure === 'fullHouse') return fullHouse;

  const triple: Hand = triplesVerify(hand);
  if(triple.figure === 'triples') return triple;

  const twoPairs: Hand = twoPairsVerify(hand);
  if(twoPairs.figure === 'twoPairs') return twoPairs;

  const pair: Hand = pairVerify(hand);
  if(pair.figure === 'pair') return pair;

  const highestCard: Hand = highestCardVerify(hand);
  return highestCard;

}