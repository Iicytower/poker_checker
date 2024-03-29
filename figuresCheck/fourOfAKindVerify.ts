import { Hand } from '../models';

export function fourOfAKindVerify(hand: string): Hand {

  const fourOfKindRegex: RegExp = /(.)\1{3}/;

  const doesHandIsFourOfAKind = fourOfKindRegex.test(hand);

  const [,,highestCard] = hand.split('');

  const value: Hand = {
    originalValue: hand,
    value: 0,
    highestCardVerify: highestCard,
    figure: (doesHandIsFourOfAKind) ? 'fourOfAKind' : '',
  }
  
  return value;
}