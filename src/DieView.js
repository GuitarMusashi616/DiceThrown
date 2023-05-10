export default class DieView {
  constructor(scene, x, y, index, onClick) {
    this.sprite = scene.add.sprite(x, y, '1').setInteractive();
    this.sprite.setOrigin(0.5, 0.5);
    this.sprite.setScale(0.5);
    this.sprite.index = index;
    this.sprite.on('pointerdown', onClick);
  }

  setFace(value) {
    this.sprite.setTexture(String(value));
  }

  setLocked(locked) {
    this.sprite.setTint(locked ? 0xff0000 : 0xffffff);
  }
}
