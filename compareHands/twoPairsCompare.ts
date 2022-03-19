import { higherCard } from '../helpers/higherCard';
import { TwoPairsHand, Wins } from '../models';

export function twoPairsCompare (firstHand: TwoPairsHand, secondHand: TwoPairsHand): Wins {

  if(firstHand.firstCardFromPair !== secondHand.firstCardFromPair){
    const firstCardWiner = higherCard([firstHand.firstCardFromPair, secondHand.firstCardFromPair])
    return (firstHand.firstCardFromPair === firstCardWiner) ? Wins.First : Wins.Second;
  }

  if(firstHand.secondCardFromPair !== secondHand.secondCardFromPair){
    const secondCardWiner = higherCard([firstHand.secondCardFromPair, secondHand.secondCardFromPair])
    return (firstHand.secondCardFromPair === secondCardWiner) ? Wins.First : Wins.Second;
  }

  if(firstHand.highestCardVerify !== secondHand.highestCardVerify){
    const highestCard = higherCard([firstHand.highestCardVerify, secondHand.highestCardVerify])
    return (firstHand.highestCardVerify === highestCard) ? Wins.First : Wins.Second;
  }

  return Wins.Tie;
  
}