import { higherCard } from '../helpers/higherCard';
import { Wins, PairsHand } from '../models';
import { compareGroup } from './compareGroup';

export function pairsCompare (firstHand: PairsHand, secondHand: PairsHand): Wins {

  if(firstHand.pairsCard !== secondHand.pairsCard){
    const pairCardWiner = higherCard([firstHand.pairsCard, secondHand.pairsCard])
    return (firstHand.pairsCard === pairCardWiner) ? Wins.First : Wins.Second;
  }

  const result = compareGroup(
    firstHand.originalValue.replace(new RegExp(`${firstHand.highestCardVerify}`, 'g'), '').split('')
    , secondHand.originalValue.replace(new RegExp(`${secondHand.highestCardVerify}`, 'g'), '').split('')
    )

  return result;
  
}