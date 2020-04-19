import renderByConfig from './renderByConfig.js';

const switch_mode = document.querySelector('.switch-mode');
const switch_mode_1 = document.querySelector('.switch-mode__mode_1');
const switch_mode_2 = document.querySelector('.switch-mode__mode_2');

export default function addSwitchModeEventHandle(config) {
  switch_mode.addEventListener('click', () => { changeMode(config); });
}

function changeMode(config) {
  switch (config.mode) {
    case 'train':
      config.mode = 'play';
      break;
    case 'play':
      config.mode = 'train';
      break;
  }
  switch_mode_1.classList.toggle('switch-mode__mode_active');
  switch_mode_2.classList.toggle('switch-mode__mode_active');
  renderByConfig(config);
}
