import { higherCard } from "../helpers/higherCard";
import { Hand } from "../interfaces";

export function highestCardVerify(hand: string){
  
  const cardsFromHandSortted = hand.split('').sort();

  const highestCard = higherCard(cardsFromHandSortted);

  const value: Hand = {
    originalValue: cardsFromHandSortted.join(''),
    value: 0,
    highestCardVerify: highestCard,
    figure: 'highestCard',
  }
  
  return value;

}