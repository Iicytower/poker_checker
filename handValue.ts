import { highestCardVerify, pairVerify, twoPairsVerify, triplesVerify, fullHouseVerify, fourOfAKindVerify } from "./figuresCheck/index";
import { Hand } from "./interfaces";

export function handValue (hand: string): Hand {

  const fourOfAKind: Hand = fourOfAKindVerify(hand);
  const fullHouse: Hand = fullHouseVerify(hand);

  if(fourOfAKind.figure === 'fourOfAKind') return fourOfAKind;
  if(fullHouse.figure === 'fullHouse') return fullHouse;

}