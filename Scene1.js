class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image("background", "assets/images/background.png");
        this.load.image("Ship", "assets/images/ship.png");
        this.load.image("Ship2", "assets/images/ship2.png");
        this.load.image("Ship3", "assets/images/ship3.png");
    }
    create() {
        this.add.text(20, 20, "Loading game...");
        this.Scene.start("playGame");
    }
}