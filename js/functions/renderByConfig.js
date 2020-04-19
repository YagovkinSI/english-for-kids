import shuffleArray from './shuffleArray.js';
import createElement from './createElement.js';

const mainElement = document.querySelector('.main__grid');
const gameButton = document.querySelector('.game-button');
const stackPoint = document.querySelector('.stack-point');

export default function renderByConfig(config) {
  config.reset();
  switch (config.page) {
    case 'menu':
      renderCategories(config, mainElement);
      break;
    case 'play':
      switch (config.mode) {
        case 'train':
          renderTrain(config, mainElement);
          break;
        case 'play':
          renderPlay(config, mainElement);
          break;
      }
  }
}

function renderCategories(config, mainElement) {
  gameButton.classList.add('invisible');
  stackPoint.classList.add('invisible');
  mainElement.innerHTML = '';
  config.titleCards.forEach((titleCard) => {
    const el = renderCard(titleCard.category, titleCard.category, titleCard.img, false, true);
    mainElement.appendChild(el);
  });
}

function renderTrain(config, mainElement) {
  gameButton.classList.add('invisible');
  stackPoint.classList.add('invisible');
  mainElement.innerHTML = '';
  shuffleArray(config.cards);
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = renderCard(card.en, card.ru, card.img);
      mainElement.appendChild(el);
    }
  });
}

function renderPlay(config, mainElement) {
  gameButton.classList.remove('game-button_color4');
  gameButton.innerHTML = 'Start game';
  gameButton.classList.remove('invisible');
  stackPoint.innerHTML = '';
  stackPoint.classList.remove('invisible');
  mainElement.innerHTML = '';
  shuffleArray(config.cards);
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = renderCard(card.en, card.ru, card.img, true);
      mainElement.appendChild(el);
    }
  });
}

function renderCard(title, title_back, img, playMode = false, isMenu = false) {
  const el = createElement('div', ['main__item']);
  el.dataset.name = title;
  el.dataset.state = 'true';
  const card = createElement('div', ['card'], el);
  const front = createElement('div', ['card__side', 'card__side_front'], card);
  const front_img = createElement('img', ['card__image'], front);
  front_img.setAttribute('src', img);
  front_img.setAttribute('width', '100%');
  front_img.setAttribute('alt', title);
  if (!playMode) {
    const frontTitle = createElement('div', ['card__title'], front);
    frontTitle.innerText = title;
    if (isMenu) frontTitle.classList.add('card__title_category');
  }
  if (!playMode) {
    const back = createElement('div', ['card__side', 'card__side_back'], card);
    const back_img = createElement('img', ['card__image'], back);
    back_img.setAttribute('src', img);
    back_img.setAttribute('width', '100%');
    back_img.setAttribute('alt', title_back);
    const backTitle = createElement('div', ['card__title'], back);
    backTitle.innerText = title_back;
  } else {
    const back = createElement('div', ['card__side', 'card__side_back'], card);
  }
  return el;
}
