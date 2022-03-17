import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function highestCardVerify(hand: string){
  
  const cardsFromHand = hand.split('');

  const highestCard = higherCard(cardsFromHand);

  const value: Hand = {
    originalValue: cardsFromHand.join(''),
    value: 0,
    highestCardVerify: highestCard,
    figure: 'highestCard',
  }
  
  return value;

}