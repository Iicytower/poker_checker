import { highestCardVerify, pairVerify, twoPairsVerify, triplesVerify, fullHouseVerify, fourOfAKindVerify } from "./figuresCheck/index";
import { Hand } from "./interfaces";

export function handValue (hand: string): Hand {

  const cardsFromHandSortted = hand.split('').sort().join('');

  const fourOfAKind: Hand = fourOfAKindVerify(cardsFromHandSortted);
  if(fourOfAKind.figure === 'fourOfAKind') return fourOfAKind;

  const fullHouse: Hand = fullHouseVerify(cardsFromHandSortted);
  if(fullHouse.figure === 'fullHouse') return fullHouse;

  const triple: Hand = triplesVerify(cardsFromHandSortted);
  if(triple.figure === 'triples') return triple;

  const twoPairs: Hand = twoPairsVerify(cardsFromHandSortted);
  if(twoPairs.figure === 'twoPairs') return twoPairs;

  const pair: Hand = pairVerify(cardsFromHandSortted);
  if(pair.figure === 'pair') return pair;

  const highestCard: Hand = highestCardVerify(cardsFromHandSortted);
  return highestCard;

}