import Phaser from 'phaser';
import { hideElement, showElement } from '../utils/DOM.utils';

export class LoginScene extends Phaser.Scene {

    private readonly loginPanel: HTMLElement;
    private readonly playButton: HTMLElement;

    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            active: false,
            visible: true,
            key: 'LoginScene',
          };

        super(sceneConfig);

        this.loginPanel = document.getElementById('loginPanel');
        this.playButton = document.getElementById('playButton');

        this.playButton.addEventListener('click', () => this.OnPlayButton());
    }

    create() {
        console.log('Login Scene created');
        showElement(this.loginPanel);
    }

    private OnPlayButton() {
        hideElement(this.loginPanel);
    }
}