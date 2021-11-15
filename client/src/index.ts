import Phaser from 'phaser';
import { LoadingScene } from "./scenes/loading.scene";
import { LoginScene } from "./scenes/login.scene";
import { PlayScene } from "./scenes/play.scene";

// Start the Phaser game when the window loads. The entry point of the game will become
// the 'Loading Scene' which is specified in the Phaser configuration below
window.onload = () => {
    new BroswerMMOGame();
};

export class BroswerMMOGame {
    constructor() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const config = {
            type: Phaser.AUTO,
            width,
            height,
            backgroundColor: '#444445',
            physics: {
                default: 'arcade',
                arcade: {
                  debug: false,
                },
            },
            // The 'Loading Scene' will be the entry point of the game 
            // because it is the only scene set to active by default in the 'LoadingScene' constructor
            scene: [LoadingScene, LoginScene, PlayScene]
        };

        new Phaser.Game(config);
    }
}