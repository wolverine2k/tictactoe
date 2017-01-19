var StartGame = function() {
  this.canvasWidth = 300;
  this.canvasHeight = 300;
  this.area = this.canvasWidth * this.canvasHeight;
  this.rects = [];
};


StartGame.prototype = {

  init: function () {
    this.rects = [
      { n: 1, x: 0, y: 0, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 2, x: this.canvasWidth / 3, y: 0, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 3, x: 2 *(this.canvasWidth / 3), y: 0, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 4, x: 0, y: this.canvasWidth / 3, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 5, x: this.canvasHeight / 3, y: this.canvasWidth / 3, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 6, x: 2 * (this.canvasHeight / 3), y: this.canvasWidth / 3, w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 7, x: 0, y: 2 *(this.canvasWidth / 3), w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 8, x: this.canvasHeight / 3, y: 2 *(this.canvasWidth / 3), w: this.area / 3, h: this.area / 3, v: -1 },
      { n: 9, x: 2 *(this.canvasHeight / 3), y: 2 *(this.canvasWidth / 3), w: this.area / 3, h: this.area / 3, v: -1 }
    ];

  },

  create: function () {
    game.add.sprite(0, 0, 'options-bg');
    game.add.sprite(0, 0, 'square');
  }
};

Phaser.Utils.mixinPrototype(StartGame.prototype, mixins);
