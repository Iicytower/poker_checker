import { availableCards } from "../constantValues";

export function higherCard (cards: string[]): string {

  return cards.reduce((acc, card) => {

    const card1Value = availableCards.indexOf(acc);
    const card2Value = availableCards.indexOf(card);
  
    return (card1Value > card2Value) ? card : acc;

  });

}