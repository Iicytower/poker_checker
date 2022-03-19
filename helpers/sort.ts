import { availableCards } from "../constantValues";

export function sortCards (hand: string[]): string[]{

  return hand.sort((card1: string, card2: string) => {

    const card1Index = availableCards.indexOf(card1);
    const card2Index = availableCards.indexOf(card2);

    return card1Index - card2Index;

  });

}