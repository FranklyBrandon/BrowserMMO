import Phaser from 'phaser';
import { LoadingScene } from "./scenes/loading.scene";
import { LoginScene } from "./scenes/login.scene";
import { PlayScene } from "./scenes/play.scene";

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
            scene: [LoadingScene, LoginScene, PlayScene]
        };

        new Phaser.Game(config);
    }
}