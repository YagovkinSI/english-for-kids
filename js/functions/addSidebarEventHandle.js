import renderByConfig from "./renderByConfig.js";

const sidebar__ul = document.querySelector('.sidebar__ul');
const mainElement = document.querySelector('.main__grid');

export default function addSidebarEventHandle(config) {  
    sidebar__ul.addEventListener('click', function() { 
      onSidebarUlClick(config, event);
    });
  }
  
  function onSidebarUlClick (config, event)
  {
    if (!event.target.classList.contains('sidebar__li'))
      return;
    var category = event.target.dataset['category'];
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
    };
  }