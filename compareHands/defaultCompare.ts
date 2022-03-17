import { higherCard } from '../helpers/higherCard';
import { Hand, Wins } from '../models';

export function defaultCompare (firstHand: Hand, secondHand: Hand): Wins {

  if(firstHand.highestCardVerify === secondHand.highestCardVerify){
    return Wins.tie;
  }

  const highestCard = higherCard([firstHand.highestCardVerify, secondHand.highestCardVerify])

  return (firstHand.highestCardVerify === highestCard) ? Wins.first : Wins.second;
}