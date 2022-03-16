import { verifyArguments } from './verifyArguments';
import { handValue } from './handValue';

function main (firstArg: string, secondArg: string){

  // const [ firstArg, secondArg ] = process.argv.slice(2);

  const firstHand = firstArg.toUpperCase()
  const secondHand = secondArg.toUpperCase()
  
  if (!verifyArguments(firstHand, secondHand)){
    console.log('Please send the arguments again');
    process.exit(1);
  }
  
  const firstHandValue = handValue(firstHand);
  // const secondHandValue = handValue(secondHand);


  console.log(firstHandValue);
  // console.log(secondHandValue);
  
}
  
main('4444T', 'T547J'); 
main('TTTT4', '4TTT4'); 