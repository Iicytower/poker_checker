import { PairsHand, TwoPairsHand, Wins, AllowedHands } from './models';
import {
  defaultCompare,
  twoPairsCompare,
  pairsCompare,
  highestCardCompare,
} from './compareHands/index';

export function compareHands(firstHand: AllowedHands, secondHand: AllowedHands): Wins {
  if (firstHand.value < secondHand.value) return Wins.First;

  if (firstHand.value > secondHand.value) return Wins.Second;

  const { figure } = firstHand;

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
      return twoPairsCompare(<TwoPairsHand>firstHand, <TwoPairsHand>secondHand);
      break;
    case 'pair':
      return pairsCompare(<PairsHand>firstHand, <PairsHand>secondHand);
      break;
    case 'highestCard':
      return highestCardCompare(firstHand, secondHand);
      break;
    default:
      return Wins.Tie;
      break;
  }
}
