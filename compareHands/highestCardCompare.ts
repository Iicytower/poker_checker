import { Wins, Hand } from "../models";
import { compareGroup } from "./compareGroup";

export function highestCardCompare(firstHand: Hand, secondHand: Hand): Wins{

  const result: Wins = compareGroup(
    firstHand.originalValue.split(''), 
    secondHand.originalValue.split('')
    );

  return result;

}