
export type Figure = 'highestCard' | 'pair' | 'twoPairs' | 'triples' | 'fullHouse' | 'fourOfAKind';

export interface Hand {
  originalValue: string,
  value: number,
  highestCardVerify: string,
  figure: '' | Figure
}

export interface TwoPairsHand extends Hand {
  firstCardFromPair: string;
  secondCardFromPair: string;
}

export interface PairsHand extends Hand {
  pairsCard: string;
}