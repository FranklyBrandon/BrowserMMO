export class LoginScene extends Phaser.Scene {
    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            active: false,
            visible: true,
            key: 'LoginScene',
          };

        super(sceneConfig);
    }
}