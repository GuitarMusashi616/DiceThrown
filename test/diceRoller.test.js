const assert = require('assert');
const DiceRoller = require('../src/diceRoller');

function testRollDice() {
  const diceRoller = new DiceRoller();
  assert.strictEqual(diceRoller.numberOfRolls, 0);

  diceRoller.rollDice();
  assert.strictEqual(diceRoller.numberOfRolls, 1);
}

function testLockAndUnlockDie() {
  const diceRoller = new DiceRoller();
  diceRoller.rollDice();
  diceRoller.lockDie(0);
  assert.strictEqual(diceRoller.getDiceResults()[0].locked, true);

  diceRoller.unlockDie(0);
  assert.strictEqual(diceRoller.getDiceResults()[0].locked, false);
}

function testResetNumberOfRolls() {
  const diceRoller = new DiceRoller();
  diceRoller.rollDice();
  diceRoller.rollDice();
  diceRoller.resetRolls();
  assert.strictEqual(diceRoller.numberOfRolls, 0);
}

testRollDice();
testLockAndUnlockDie();
testResetNumberOfRolls();
