import { verifyArguments } from './verifyArguments';
import { handValue } from './handValue';
import { compareHands } from './compareHands';
import { Wins } from './models';

function main(firstArg: string, secondArg: string): Wins {
  if (!firstArg || !secondArg) {
    console.log(`You don't send the arguments.`);
    process.exit(1);
  }

  const firstHand = firstArg.toUpperCase();
  const secondHand = secondArg.toUpperCase();

  if (!verifyArguments(firstHand, secondHand)) {
    console.log('Please send the arguments again.');
    process.exit(1);
  }

  const firstHandValue = handValue(firstHand);

  const secondHandValue = handValue(secondHand);

  const result = compareHands(firstHandValue, secondHandValue);

  return result;
}

const [firstArg, secondArg] = process.argv.slice(2);

console.log(main(firstArg, secondArg));
