window.onload = function() {
    var game = new Phaser.game();
}
var config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2]
}
var game = new Phaser.Game(config);
