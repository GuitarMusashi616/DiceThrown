// import Phaser from 'phaser'

// import DiceRoller from 'src/DiceRoller';
// import DiceRollerView from 'src/DiceRollerView';

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
// const diceRoller = new DiceRoller();
// let diceRollerView;

function preload ()
{
  this.load.image('sky', 'assets/sky.png');
  this.load.image('1', 'assets/1.png');
  this.load.image('2', 'assets/2.png');
  this.load.image('3', 'assets/3.png');
  this.load.image('4', 'assets/4.png');
  this.load.image('5', 'assets/5.png');
  this.load.image('6', 'assets/6.png');
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

  // diceRollerView = new DiceRollerView(this, diceRoller);
}

function update ()
{
}


