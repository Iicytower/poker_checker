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
  console.log('firstHandValue', firstHandValue);
  
  const secondHandValue = handValue(secondHand);
  console.log('secondHandValue', secondHandValue);
  
}
  
console.log('4444T', '33JJ3', ' \n ');
main('4444T', '33JJ3'); 

console.log('TTTT4', '4TTT4', ' \n ');
main('TTTT4', '4TTT4'); 
