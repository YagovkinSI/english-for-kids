import shuffleArray from './shuffleArray';
import speakText from './speakText';
import renderByConfig from './renderByConfig';

const stackPoint = document.querySelector('.stack-point');

export default function runGame(config) {
  if (config.numberWord === 0) {
    shuffleArray(config.cards);
    config.gameDeck = [];
    config.cards.forEach((card) => {
      if (card.category === config.currentCategory) { config.gameDeck.push(card); }
    });
  }
  config.numberWord += 1;
  if (config.numberWord > config.gameDeck.length) {
    const text = config.wrongCount === 0
      ? 'Congratulation! No wrong!'
      : `Game over! Wrong count - ${config.wrongCount}.`;
    speakText(text);
    stackPoint.innerHTML = text;
    config.reset();
    config.page = 'menu';
    setTimeout(() => renderByConfig(config), 3000);
  } else { speakText(config.getCurrentCard().en); }
}
