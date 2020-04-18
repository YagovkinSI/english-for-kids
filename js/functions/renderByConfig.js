const mainElement = document.querySelector('.main__grid');

export default function renderByConfig(config) {
  switch (config.page) {
    case 'menu':
      renderCategories(config, mainElement);
      break;
    case 'play':
      switch(config.mode) {
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
  mainElement.innerHTML = '';
  config.titleCards.forEach((titleCard) => {
    const el = renderCard(titleCard.category, titleCard.category, titleCard.img);
    mainElement.appendChild(el);
  });
}

function renderTrain(config, mainElement) {
  mainElement.innerHTML = '';
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = renderCard(card.en, card.ru, card.img);
      mainElement.appendChild(el);
    }
  });
}

function renderPlay(config, mainElement) {
  mainElement.innerHTML = '';
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = renderCard(card.en, card.ru, card.img, true);
      mainElement.appendChild(el);
    }
  });
}

function createElement(obj, classes, parrent) {  
  const el = document.createElement(obj);  
  if (classes)
    classes.forEach(c => {
      el.classList.add(c);
    })
  if (parrent)
    parrent.appendChild(el);
  return el;
}

function renderCard(title, title_back, img, playMode = false) {
  const el = createElement('div', ['main__item']);
  el.dataset.name = title;
  const card = createElement('div', ['card'], el);
  const front = createElement('div', ['card__side', 'card__side_front'], card);
  const front_img = createElement('img', ['card__image'], front);
  front_img.setAttribute('src', img);
  front_img.setAttribute('width', '100%');
  front_img.setAttribute('alt', title);
  if (!playMode) {
    const frontTitle = createElement('div', ['card__title'], front);
    frontTitle.innerText = title; 
  } 
  const back = createElement('div', ['card__side', 'card__side_back'], card);
  const back_img = createElement('img', ['card__image'], back);
  back_img.setAttribute('src', img);
  back_img.setAttribute('width', '100%');
  back_img.setAttribute('alt', title_back);
  if (!playMode) {
    const backTitle = createElement('div', ['card__title'], back);
    backTitle.innerText = title_back;
  } 
  return el;
}
