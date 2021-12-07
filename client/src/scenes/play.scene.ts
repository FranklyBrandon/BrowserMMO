import Phaser from 'phaser';

export class PlayScene extends Phaser.Scene {
    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            active: false,
            visible: true,
            key: 'PlayScene',
          };

        super(sceneConfig);
    }
}