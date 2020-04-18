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
    const el = document.createElement('div');
    el.classList.add('main__item');
    el.classList.add('category');
    el.dataset.name = titleCard.category;
    mainElement.appendChild(el);
  });
}

function renderPlay(config, mainElement) {
  mainElement.innerHTML = '';
  config.cards.forEach((card) => {
    if (card.category == config.currentCategory) {
      const el = document.createElement('div');
      el.classList.add('main__item');
      el.classList.add('category');
      el.dataset.name = card.category;
      mainElement.appendChild(el);
    }
  });
}
