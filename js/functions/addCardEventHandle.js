import renderByConfig from "./renderByConfig.js";

const mainElement = document.querySelector('.main__grid');

export default function addCardEventHandle(config) {  
  mainElement.addEventListener('click', function() { 
    onCardClick(config, event);
 });
}

function onCardClick (config, event)
{
  switch (config.page) {
    case 'menu':
      config.page = 'play';
      config.currentCategory = event.target.dataset.name;
      renderByConfig(config, mainElement);
      break;
  };
}
