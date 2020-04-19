import speakText from './speakText';
import runGame from './runGame';

const gameButton = document.querySelector('.game-button');

export default function addGameButtonEventHandle(config) {
  gameButton.addEventListener('click', () => {
    if (config.numberWord === 0) {
      gameButton.classList.add('game-button_color4');
      gameButton.innerHTML = 'Repeat word';
      runGame(config);
    } else { speakText(config.getCurrentCard().en); }
  });
}
