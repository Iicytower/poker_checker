import { Hand } from "../interfaces";

export function fullHouseVerify(hand: string){
  const regexMatch2: RegExp = /(.)\1{1}/;
  const regexMatch3: RegExp = /(.)\1{2}/;

  const cardsFromHandSortted = hand.split('').sort().join('');

  const firstPieceV1 = cardsFromHandSortted.slice(0,2);
  const secondPieceV1 = cardsFromHandSortted.slice(2,5);

  const firstPieceV2 = cardsFromHandSortted.slice(0,3);
  const secondPieceV2 = cardsFromHandSortted.slice(3,5);

  const doesMatchV1Pattern = regexMatch2.test(firstPieceV1) && regexMatch3.test(secondPieceV1);
  const doesMatchV2Pattern = regexMatch3.test(firstPieceV2) && regexMatch2.test(secondPieceV2);

  const highestCard = (doesMatchV1Pattern) ? cardsFromHandSortted[cardsFromHandSortted.length-1] : hand[0];

  const value: Hand = {
    originalValue: cardsFromHandSortted,
    value: 1,
    highestCardVerify: highestCard,
    figure: (doesMatchV1Pattern || doesMatchV2Pattern) ? 'fullHouse' : '',
  }
  
  return value;
}