import renderByConfig from './renderByConfig';

const switchMode = document.querySelector('.switch-mode');
const switchMode1 = document.querySelector('.switch-mode__mode_1');
const switchMode2 = document.querySelector('.switch-mode__mode_2');

function changeMode(config) {
  switch (config.mode) {
    case 'train':
      config.mode = 'play';
      break;
    case 'play':
      config.mode = 'train';
      break;
  }
  switchMode1.classList.toggle('switch-mode__mode_active');
  switchMode2.classList.toggle('switch-mode__mode_active');
  renderByConfig(config);
}

export default function addSwitchModeEventHandle(config) {
  switchMode.addEventListener('click', () => { changeMode(config); });
}
