import renderByConfig from './renderByConfig';
import sidebarMove from './sidebarMove';

const sidebarUl = document.querySelector('.sidebar__ul');
const mainElement = document.querySelector('.main__grid');

function onSidebarUlClick(config, event) {
  if (!event.target.classList.contains('sidebar__li')) { return; }
  const { category } = event.target.dataset;
  switch (category) {
    case 'menu':
      config.page = 'menu';
      config.currentCategory = '';
      renderByConfig(config, mainElement);
      break;
    case 'statistic':
      config.page = 'statistic';
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

export default function addSidebarEventHandle(config) {
  sidebarUl.addEventListener('click', () => {
    onSidebarUlClick(config, event);
  });
}
