import { Hand, PairsHand, TwoPairsHand, Wins } from "./models";
import { defaultCompare, twoPairsCompare, pairsCompare } from "./compareHands/index"

type AllowedHands = Hand | PairsHand | TwoPairsHand;

export function compareHands(firstHand: AllowedHands, secondHand: AllowedHands) {

  if(firstHand.value < secondHand.value){
    return Wins.first;
  }

  if(firstHand.value > secondHand.value){
    return Wins.second;
  }

  const { figure } = firstHand;

  // console.log('firstHand ', firstHand);
  // console.log('secondHand ', secondHand);

  switch (figure) {
    case 'fourOfAKind':
      return defaultCompare(firstHand, secondHand);
      break;
    case 'fullHouse':
      return defaultCompare(firstHand, secondHand);
      break;
    case 'triples':
      return defaultCompare(firstHand, secondHand);
      break;
    case 'twoPairs':
      //@ts-ignore TODO
      return twoPairsCompare(firstHand, secondHand);
      break;
    case 'pair':
      //@ts-ignore TODO
      return pairsCompare(firstHand, secondHand);
      break;
    case 'highestCard':
      return defaultCompare(firstHand, secondHand);
      break;
    default:
      return Wins.tie;
      break;
  }
}