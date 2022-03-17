export function verifyArguments(firstHand: string, secondHand: string): boolean {

  let result = true;

  if(!(firstHand && secondHand)){
    console.log('There is no arguments');
    result = false;
  }

  const availableCharacters = /^[AKQJT98765432]{5}$/;

  if (!availableCharacters.test(firstHand)) {
    console.log('First hand is not correct poker hand');
    result = false;
  }

  if (!availableCharacters.test(secondHand)) {
    console.log('Second hand is not correct poker hand');
    result = false;
  }

  return result;

}