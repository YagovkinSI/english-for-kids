import renderByConfig from './renderByConfig.js';
import speakText from './speakText.js';
import runGame from './runGame.js';
import createElement from './createElement.js';

const mainElement = document.querySelector('.main__grid');
const stackPoint = document.querySelector('.stack-point');

export default function addCardEventHandle(config) {
  mainElement.addEventListener('click', () => {
    onCardClick(config, event);
  });
}

function onCardClick(config, event) {
  let { target } = event;
  while (!target.classList.contains('main__item')) {
    if (target.classList.contains('main')) return;
    target = target.parentNode;
  }
  switch (config.page) {
    case 'menu':
      config.page = 'play';
      config.currentCategory = target.dataset.name;
      renderByConfig(config, mainElement);
      break;
    case 'play':
      switch (config.mode) {
        case 'train':
          speakText(target.dataset.name);
          target.firstChild.classList.toggle('card_flip');
          break;
        case 'play':
          if (config.numberWord == 0 || target.dataset.state == 'false') return;
          if (target.dataset.name == config.getCurrentCard().en) {
            speakText('yes');
            target.dataset.state = 'false';
            var marker = createElement('div', ['stack-point__marker', 'stack-point__marker_yes'], false);
            stackPoint.insertBefore(marker, stackPoint.firstChild);
            target.firstChild.classList.toggle('card_flip');
            runGame(config);
          } else {
            config.wrongCount++;
            var marker = createElement('div', ['stack-point__marker', 'stack-point__marker_no'], false);
            stackPoint.insertBefore(marker, stackPoint.firstChild);
            speakText('wrong');
          }
          break;
      }
      break;
  }
}
