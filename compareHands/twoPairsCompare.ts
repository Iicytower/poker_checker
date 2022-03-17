import { higherCard } from '../helpers/higherCard';
import { TwoPairsHand, Wins } from '../models';

export function twoPairsCompare (firstHand: TwoPairsHand, secondHand: TwoPairsHand): Wins {

  if(firstHand.firstCardFromPair !== secondHand.firstCardFromPair){
    const firstCardWiner = higherCard([firstHand.firstCardFromPair, secondHand.firstCardFromPair])
    return (firstHand.firstCardFromPair === firstCardWiner) ? Wins.first : Wins.second;
  }

  if(firstHand.secondCardFromPair !== secondHand.secondCardFromPair){
    const secondCardWiner = higherCard([firstHand.secondCardFromPair, secondHand.secondCardFromPair])
    return (firstHand.secondCardFromPair === secondCardWiner) ? Wins.first : Wins.second;
  }

  if(firstHand.highestCardVerify !== secondHand.highestCardVerify){
    const highestCard = higherCard([firstHand.highestCardVerify, secondHand.highestCardVerify])
    return (firstHand.highestCardVerify === highestCard) ? Wins.first : Wins.second;
  }

  return Wins.tie;
  
}