import { highestCardVerify, pairVerify, twoPairsVerify, triplesVerify, fullHouseVerify, fourOfAKindVerify } from "./figuresCheck/index";
import { Hand } from "./interfaces";
export function handValue (hand: string) {

  const fourOfAKind: Hand = fourOfAKindVerify(hand);

  console.log(fourOfAKind);

}