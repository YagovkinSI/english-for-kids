export default function renderByConfig(config, mainElement) {
  switch (config.page) {
    case 'menu':
      renderCategories(config, mainElement);
      break;
    case 'play':
      renderPlay(config, mainElement);
      break;
  }
}

function renderCategories(config, mainElement) {
  mainElement.innerHTML = '';
  config.titleCards.forEach((titleCard) => {
    const el = renderCard(titleCard.category, titleCard.category);
    mainElement.appendChild(el);
  });
}

function renderPlay(config, mainElement) {
  mainElement.innerHTML = '';
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = renderCard(card.en, card.ru);
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

function renderCard(title, title_back) {
  const el = createElement('div', ['main__item']);
  el.dataset.name = title;
  const card = createElement('div', ['card'], el);
  const front = createElement('div', ['flip', 'flip_front'], card);
  const frontTitle = createElement('div', ['card__title'], front);
  frontTitle.innerText = title;  
  const back = createElement('div', ['flip', 'flip_back'], card);
  const backTitle = createElement('div', ['card__title'], back);
  backTitle.innerText = title_back;
  return el;
}
