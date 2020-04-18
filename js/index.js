import fillCards from "./functions/fillCards.js";
import addHamburgerEventHandle from "./functions/addHamburgerEventHandle.js";
import Config from "./classes/Config.js";
import RenderByConfig from "./functions/renderByConfig.js";

export const mainElement = document.querySelector('.main__grid');

window.onload = function() {
    //подцепить датасет
    const { cards, titleCards } = fillCards();
    
    //настроить конфигурацию
    const config = new Config(cards, titleCards);

    //заполнить страницу
    RenderByConfig(config, mainElement);

    //добавить динамику
    addHamburgerEventHandle();
    mainElement.addEventListener('click', function() { 
        switch (config.page) {
            case 'menu':
              config.page = 'play';
              config.currentCategory = event.target.dataset.name;
              RenderByConfig(config, mainElement);
              break;
          }
    });
};