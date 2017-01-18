var GameMenu = function() {
  this.startWithX = true;
};


GameMenu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 260
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "3D Tic Tac Toe", {
      font: 'bold 60pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    if (music.name !== "dangerous" && playMusic) {
      music.stop();
      music = game.add.audio('dangerous');
      music.loop = true;
      music.play();
    }
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);

    this.addMenuOption(this.startWithX ? 'Start As X' : 'Start As O', function (target) {
      this.startWithX = !this.startWithX;
      target.text = this.startWithX ? 'Start As X' : 'Start As O';
    });

    this.addMenuOption('One Player', function () {
      game.state.start("SinglePlayer");
    });
    this.addMenuOption('Two Player', function () {
      game.state.start("TwoPlayers");
    });
  },

  pressButtonX: function () {
      this.startWithX = true;
  },

  pressButtonO: function () {
      this.startWithX = false;
  },
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
