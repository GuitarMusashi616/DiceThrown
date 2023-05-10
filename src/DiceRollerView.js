import DieView from './DieView';

export default class DiceRollerView {
  constructor(scene, diceRoller) {
    this.diceRoller = diceRoller;
    this.diceViews = [];

    for (let i = 0; i < 6; i++) {
      const dieView = new DieView(scene, 100 + i * 100, 300, i, () => {
        const dieResult = this.diceRoller.getDiceResults()[i];
        if (dieResult.locked) {
          this.diceRoller.unlockDie(i);
        } else {
          this.diceRoller.lockDie(i);
        }
        this.updateDieView(i);
      });
      this.diceViews.push(dieView);
    }

    this.rollButton = scene.add.sprite(400, 500, 'rollButton').setInteractive();
    this.rollButton.setOrigin(0.5, 0.5);
    this.rollButton.setScale(0.5);
    this.rollButton.on('pointerdown', () => {
      this.diceRoller.rollDice();
      this.updateDiceViews();
    });
  }

  updateDieView(index) {
    const dieResult = this.diceRoller.getDiceResults()[index];
    const dieView = this.diceViews[index];
    dieView.setFace(dieResult.value);
    dieView.setLocked(dieResult.locked);
  }

  updateDiceViews() {
    for (let i = 0; i < this.diceViews.length; i++) {
      this.updateDieView(i);
    }
  }
}
