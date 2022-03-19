import { availableCards } from "../constantValues";
import { Wins } from "../models";

export function compareGroup (firstHand:string[], secondHand: string[]): Wins {

  const { winner } = firstHand.reduce((acc, card, index) => {

    if(acc.changeCounter ) return acc;

    const cardFromfirstHandValue = availableCards.indexOf(card);
    const cardFromsecondHandValue = availableCards.indexOf(secondHand[index]);

    if (cardFromfirstHandValue < cardFromsecondHandValue){
      acc.winner = Wins.first;
      acc.changeCounter = true;
    }
    if (cardFromfirstHandValue > cardFromsecondHandValue){
      acc.winner = Wins.second;
      acc.changeCounter = true;
    }
    return acc;

  }, {
    winner: Wins.tie,
    changeCounter: false
  });

  return winner;

}