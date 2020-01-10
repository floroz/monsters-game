/**
 * https://stackoverflow.com/questions/20701586/dice-roll-in-javascript
 *
 */

export function diceRoll(): number {
  const diceNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  return diceNumber;
}
