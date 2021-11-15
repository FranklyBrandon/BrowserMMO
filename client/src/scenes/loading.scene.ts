import Phaser from 'phaser';

export class LoadingScene extends Phaser.Scene {

    private loadingText: Phaser.GameObjects.Text;

    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            // Set active to true by default because it is the first scene to run
            active: true,
            visible: true,
            key: 'LoadingScene',
          };

        super(sceneConfig);
    }

    // Called by the Phaser runtime before the scene is started
    preload() {
        this.loadingText = this.add.text(150, 150, 'Loading...',  { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#000000' })
    }

    // Called by the Phaser runtime as the scene is started
    create() {
        // The 'create' method is called after the 'preload' method in Phaser's internal scene management.
        // Move to next scene when 'create' gets called because the loading has been completed in 'preload'
        console.log('Loading Scene created');
        this.game.scene.start('LoginScene');
        this.game.scene.stop('LoadingScene');
        this.loadingText.destroy();
    }
}