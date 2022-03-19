import { availableCards } from "../constantValues";
import { Wins } from "../models";

export function compareGroup (firstHand:string[], secondHand: string[]): Wins {

  const { winner } = firstHand.reduce((acc, card, index) => {

    if(acc.changeCounter ) return acc;

    const cardFromfirstHandValue = availableCards.indexOf(card);
    const cardFromsecondHandValue = availableCards.indexOf(secondHand[index]);

    if (cardFromfirstHandValue < cardFromsecondHandValue){
      acc.winner = Wins.First;
      acc.changeCounter = true;
    }
    if (cardFromfirstHandValue > cardFromsecondHandValue){
      acc.winner = Wins.Second;
      acc.changeCounter = true;
    }
    return acc;

  }, {
    winner: Wins.Tie,
    changeCounter: false
  });

  return winner;

}