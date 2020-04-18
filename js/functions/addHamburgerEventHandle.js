const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

export default function addHamburgerEventHandle() {
  hamburger.addEventListener('click', onClickHamburger);
  sidebar.addEventListener('animationend', onSidebarAnimationend);
}

function onClickHamburger() {
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

function onSidebarAnimationend() {
  const isSidebarShow = sidebar.classList.contains('animation_to-left');
  if (isSidebarShow) {
    sidebar.classList.remove('animation_to-left');
    sidebar.classList.add('invisible');
  } else {
    sidebar.classList.remove('animation_from-left');
  }
}
