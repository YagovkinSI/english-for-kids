const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

export default function sidebarMove() {
  hamburger.classList.toggle('hamburger_vertical');
  sidebar.classList.toggle('invisible');
}
