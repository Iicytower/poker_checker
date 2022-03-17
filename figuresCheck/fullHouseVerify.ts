import { Hand } from '../models';

export function fullHouseVerify(hand: string){
  const regexMatch2: RegExp = /(.)\1{1}/;
  const regexMatch3: RegExp = /(.)\1{2}/;

  const firstPieceV1 = hand.slice(0,2);
  const secondPieceV1 = hand.slice(2,5);

  const firstPieceV2 = hand.slice(0,3);
  const secondPieceV2 = hand.slice(3,5);

  const doesMatchV1Pattern = regexMatch2.test(firstPieceV1) && regexMatch3.test(secondPieceV1);
  const doesMatchV2Pattern = regexMatch3.test(firstPieceV2) && regexMatch2.test(secondPieceV2);

  const highestCard = (doesMatchV1Pattern) ? hand[hand.length-1] : hand[0];

  const value: Hand = {
    originalValue: hand,
    value: 1,
    highestCardVerify: highestCard,
    figure: (doesMatchV1Pattern || doesMatchV2Pattern) ? 'fullHouse' : '',
  }
  
  return value;
}