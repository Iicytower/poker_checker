import { availableCards } from "../constantValues";

export function higherCard (card1: string, card2: string): string {

  const card1Value = availableCards.indexOf(card1);
  const card2Value = availableCards.indexOf(card2);

  return (card1Value > card2Value) ? card2 : card1;


}