import renderByConfig from "./renderByConfig.js";
import speakText from "./speakText.js";

const mainElement = document.querySelector('.main__grid');

export default function addCardEventHandle(config) {  
  mainElement.addEventListener('click', function() { 
    onCardClick(config, event);
 });
}

function onCardClick (config, event)
{
  var target = event.target;
  while (!target.classList.contains('main__item'))
  {
    if (target.classList.contains('main'))
      return;
    target = target.parentNode;
  }
  switch (config.page) {
    case 'menu':
      config.page = 'play';
      config.currentCategory = target.dataset.name;
      renderByConfig(config, mainElement);
      break;
    case 'play':   
      switch (config.mode) {
        case 'train':
          speakText(target.dataset.name)
          target.firstChild.classList.toggle('card_flip'); 
          break;
        case 'play':
          break;
      }        
      break;
  };
}
