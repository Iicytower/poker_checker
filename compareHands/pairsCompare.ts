import { higherCard } from "../helpers/higherCard";
import { Wins, PairsHand } from "../models";

export function pairsCompare (firstHand: PairsHand, secondHand: PairsHand): Wins {

  if(firstHand.pairsCard !== secondHand.pairsCard){
    const pairCardWiner = higherCard([firstHand.pairsCard, secondHand.pairsCard])
    return (firstHand.pairsCard === pairCardWiner) ? Wins.first : Wins.second;
  }

  if(firstHand.highestCardVerify !== secondHand.highestCardVerify){
    const highestCard = higherCard([firstHand.highestCardVerify, secondHand.highestCardVerify])
    return (firstHand.highestCardVerify === highestCard) ? Wins.first : Wins.second;
  }

  return Wins.tie;
  
}