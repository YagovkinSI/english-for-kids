import fillCards from './functions/fillCards';
import addHamburgerEventHandle from './functions/addHamburgerEventHandle';
import addCardEventHandle from './functions/addCardEventHandle';
import Config from './classes/Config';
import renderByConfig from './functions/renderByConfig';
import fillSidebar from './functions/fillSidebar';
import addSidebarEventHandle from './functions/addSidebarEventHandle';
import addSwitchModeEventHandle from './functions/addSwitchModeEventHandle';
import addGameButtonEventHandle from './functions/addGameButtonEventHandle';

const mainElement = document.querySelector('.main__grid');

window.onload = function () {
  // подцепить датасет
  const { cards, titleCards } = fillCards();

  // настроить конфигурацию
  const config = new Config(cards, titleCards);

  // заполнить страницу
  fillSidebar(config);
  renderByConfig(config, mainElement);

  // добавить динамику
  addHamburgerEventHandle();
  addCardEventHandle(config);
  addSidebarEventHandle(config);
  addSwitchModeEventHandle(config);
  addGameButtonEventHandle(config);
};
