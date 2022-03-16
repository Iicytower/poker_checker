
export type Cards = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
export type Figure = 'highestCard' | 'pair' | 'twoPairs' | 'triples' | 'fullHouse' | 'fourOfAKind';

export interface Hand {

  originalValue: string,
  value: number,
  highestCardVerify: string,
  figure: '' | Figure

}
