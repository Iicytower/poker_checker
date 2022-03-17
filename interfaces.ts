
export type Figure = 'highestCard' | 'pair' | 'twoPairs' | 'triples' | 'fullHouse' | 'fourOfAKind';

export interface Hand {

  originalValue: string,
  value: number,
  highestCardVerify: string,
  figure: '' | Figure

}
