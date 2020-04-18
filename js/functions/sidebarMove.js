const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

export default function sidebarMove() {
    const isSidebarShow = !sidebar.classList.contains('invisible');
    if (isSidebarShow) {
      hamburger.classList.remove('hamburger_vertical');
      sidebar.classList.add('animation_to-left');
    } else {
      hamburger.classList.add('hamburger_vertical');
      sidebar.classList.add('animation_from-left');
      sidebar.classList.remove('invisible');
    }
  }