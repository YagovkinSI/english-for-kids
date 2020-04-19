import speakText from './speakText.js';
import runGame from './runGame.js';

const gameButton = document.querySelector('.game-button');

export default function addGameButtonEventHandle(config) {      
    gameButton.addEventListener('click', function() {
        if (config.numberWord == 0) {
            gameButton.classList.add('game-button_color4');
            gameButton.innerHTML = 'Repeat word';
            runGame(config);
        }
        else
            speakText(config.getCurrentCard().en);
    })
}