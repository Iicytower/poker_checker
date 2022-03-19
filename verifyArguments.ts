import { sortCards } from './helpers/sortCards';

export function verifyArguments(firstHand: string, secondHand: string): boolean {
  let result = true;

  const availableCharacters = /^[AKQJT98765432]{5}$/;

  if (!availableCharacters.test(firstHand)) {
    console.log('First hand is not correct poker hand');
    result = false;
  }

  if (!availableCharacters.test(secondHand)) {
    console.log('Second hand is not correct poker hand');
    result = false;
  }

  if (result) {
    const allCards = sortCards(`${firstHand}${secondHand}`.split(''));

    const counts: Record<string, number> = {};
    allCards.forEach(function (card) {
      counts[card] = (counts[card] || 0) + 1;
    });

    for (const item in counts) {
      if (counts[item] > 4) {
        console.log(
          `It's not possible that the deck contains ${counts[item]} ${item} cards.`,
        );
        result = false;
      }
    }
  }

  return result;
}
