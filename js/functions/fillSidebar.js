const sidebar = document.querySelector('.sidebar__ul');

export default function fillSidebar(config) {
    addMainMenu();
    addCategories(config); 
  }
  
  function addMainMenu() {
    var el = document.createElement('li');
    el.classList.add('sidebar__li');
    el.innerText = 'MENU';
    el.dataset['category'] = 'menu';
    sidebar.append(el);
  }
  
  function addCategories(config) {
    config.titleCards.forEach(titleCard => {
        var el = document.createElement('li');
        el.classList.add('sidebar__li');
        el.innerText = titleCard.category;
        el.dataset['category'] = titleCard.category;
        sidebar.append(el);
    });
  }
  