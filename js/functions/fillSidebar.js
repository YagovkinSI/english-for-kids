import createElement from './createElement.js';

const sidebar = document.querySelector('.sidebar__ul');

export default function fillSidebar(config) {
  addMainMenu();
  addCategories(config);
  addStatistic();
}

function addMainMenu() {
  const el = createElement('li', ['sidebar__li'], sidebar);
  el.innerText = 'MENU';
  el.dataset.category = 'menu';
}

function addCategories(config) {
  config.titleCards.forEach((titleCard) => {
    const el = createElement('li', ['sidebar__li'], sidebar);
    el.innerText = titleCard.category;
    el.dataset.category = titleCard.category;
  });
}

function addStatistic() {
  const el = createElement('li', ['sidebar__li'], sidebar);
  el.innerText = 'STATISTIC';
  el.dataset.category = 'statistic';
}
