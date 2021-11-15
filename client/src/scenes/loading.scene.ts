export class LoadingScene extends Phaser.Scene {
    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            active: true,
            visible: true,
            key: 'LoadingScene',
          };

        super(sceneConfig);
    }
}