import renderByConfig from './renderByConfig.js';
import sidebarMove from './sidebarMove.js';

const sidebar__ul = document.querySelector('.sidebar__ul');
const mainElement = document.querySelector('.main__grid');

export default function addSidebarEventHandle(config) {
  sidebar__ul.addEventListener('click', () => {
    onSidebarUlClick(config, event);
  });
}

function onSidebarUlClick(config, event) {
  if (!event.target.classList.contains('sidebar__li')) { return; }
  const { category } = event.target.dataset;
  switch (category) {
    case 'menu':
      config.page = 'menu';
      config.currentCategory = '';
      renderByConfig(config, mainElement);
      break;
    default:
      config.page = 'play';
      config.currentCategory = category;
      renderByConfig(config, mainElement);
      break;
  }
  sidebarMove();
}
