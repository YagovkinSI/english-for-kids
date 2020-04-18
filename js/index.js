import fillCards from "./functions/fillCards.js";
import addHamburgerEventHandle from "./functions/addHamburgerEventHandle.js";
import addCardEventHandle from "./functions/addCardEventHandle.js";
import Config from "./classes/Config.js";
import renderByConfig from "./functions/renderByConfig.js";
import fillSidebar from "./functions/fillSidebar.js";
import addSidebarEventHandle from "./functions/addSidebarEventHandle.js";

export const mainElement = document.querySelector('.main__grid');

window.onload = function() {
    //подцепить датасет
    const { cards, titleCards } = fillCards();
    
    //настроить конфигурацию
    const config = new Config(cards, titleCards);

    //заполнить страницу
    fillSidebar(config);
    renderByConfig(config, mainElement);

    //добавить динамику
    addHamburgerEventHandle();
    addCardEventHandle(config);
    addSidebarEventHandle(config);
};