import { verifyArguments } from './verifyArguments';
import { handValue } from './handValue';
import { compareHands } from './compareHands';

function main (firstArg: string, secondArg: string): void{

  // const [ firstArg, secondArg ] = process.argv.slice(2);

  const firstHand = firstArg.toUpperCase()
  const secondHand = secondArg.toUpperCase()
  
  if (!verifyArguments(firstHand, secondHand)){
    console.log('Please send the arguments again');
    process.exit(1);
  }
  
  const firstHandValue = handValue(firstHand);
  
  const secondHandValue = handValue(secondHand);

  const result = compareHands(firstHandValue, secondHandValue);

  console.log(result);
  
}
