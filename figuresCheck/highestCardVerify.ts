import { higherCard } from '../helpers/higherCard';
import { Hand } from '../models';

export function highestCardVerify(hand: string){
  
  const cardsFromHand = hand.split('');

  const highestCard = higherCard(cardsFromHand);

  const value: Hand = {
    originalValue: cardsFromHand.join(''),
    value: 5,
    highestCardVerify: highestCard,
    figure: 'highestCard',
  }
  
  return value;

}