// import Phaser from 'phaser'

var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'assets/sky.png');
  this.load.image('barbarian', 'assets/barbarian_only.png');
  // this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
  sky = this.add.image(0, 0, 'sky').setOrigin(0, 0);
  sky.setScale(3)

  // barbarian = this.add.image(400, 300, 'barbarian');
  barbarian = this.add.image(0, 0, 'barbarian').setOrigin(0, 0);

  barbarian.setScale(0.7)
}

function update ()
{
}


