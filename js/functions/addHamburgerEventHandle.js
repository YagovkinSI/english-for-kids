import sidebarMove from "./sidebarMove.js";

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

export default function addHamburgerEventHandle() {
  hamburger.addEventListener('click', sidebarMove);
  sidebar.addEventListener('animationend', onSidebarAnimationend);
}

function onSidebarAnimationend() {
  const isSidebarShow = sidebar.classList.contains('animation_to-left');
  if (isSidebarShow) {
    sidebar.classList.remove('animation_to-left');
    sidebar.classList.add('invisible');
  } else {
    sidebar.classList.remove('animation_from-left');
  }
}
