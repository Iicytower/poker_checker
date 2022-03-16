export function verifyArguments(firstHand: string, secondHand: string): boolean {

  let result = true;

  if(!(firstHand && secondHand)){
    console.log('There is no arguments');
    result = false;
  }

  const availableCharacters = /^[AKQJ098765432]{5}$/

  if (result && !availableCharacters.test(firstHand)) {
    console.log('First hand is not correct poker hand');
    result = false;
  }

  if (result && !availableCharacters.test(secondHand)) {
    console.log('Second hand is not correct poker hand');
    result = false;
  }

  return result;

}