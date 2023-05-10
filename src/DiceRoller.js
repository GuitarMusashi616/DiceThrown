/**
 * @typedef {Object} IDiceRoller
 * @property {number} numberOfRolls - The number of rolls made during the turn
 * @property {function} rollDice - Roll the dice
 * @property {function} getDiceResults - Get the results of the dice roll
 * @property {function} lockDie - Lock a die at a specific index
 * @property {function} unlockDie - Unlock a die at a specific index
 * @property {function} resetRolls - Reset the number of rolls
 */

export default class DiceRoller {
  constructor() {
    this.numberOfRolls = 0;
    this.dice = Array(5).fill({ value: 1, locked: false });
  }

  rollDice() {
    if (this.numberOfRolls < 3) {
      this.dice = this.dice.map(
        (die) => (!die.locked ? { value: Math.floor(Math.random() * 6) + 1, locked: false } : die)
      );
      this.numberOfRolls++;
    }
  }

  getDiceResults() {
    return this.dice;
  }

  lockDie(dieIndex) {
    if (this.dice[dieIndex]) {
      this.dice[dieIndex].locked = true;
    }
  }

  unlockDie(dieIndex) {
    if (this.dice[dieIndex]) {
      this.dice[dieIndex].locked = false;
    }
  }

  resetRolls() {
    this.numberOfRolls = 0;
  }
}

module.exports = DiceRoller;
