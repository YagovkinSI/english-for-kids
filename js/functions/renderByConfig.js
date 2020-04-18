export default function renderByConfig(config, mainElement) {
  console.log(config);
  switch (config.mode) {
    case 'menu':
      renderCategories(config, mainElement);
      break;
    case 'train':
      renderTrain(config, mainElement);
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

function renderTrain(config, mainElement) {
  console.log(config.currentCategory);
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
