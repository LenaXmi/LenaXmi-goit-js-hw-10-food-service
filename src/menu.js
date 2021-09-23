import menuCardTpl from './templates/menu-card-template.hbs';
import menuItems from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menu = document.querySelector('.js-menu');
const toggle = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

function createMenuCardMarkup(menuItems) {
  return menuCardTpl(menuItems);
}

menu.insertAdjacentHTML('beforeend', createMenuCardMarkup(menuItems));

toggle.addEventListener('change', themeSwitchToggle);

saveSelectedTheme();

function themeSwitchToggle(e) {

  if (toggle.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
  }
}

function saveSelectedTheme() {

  const selectedTheme = localStorage.getItem('theme') === 'dark';
  if (selectedTheme) {
    toggle.checked = true;
    body.classList.add(Theme.DARK);
    }

  else {
      toggle.checked = false;
      body.classList.remove(Theme.DARK)
      body.classList.add(Theme.LIGHT)
    }
    
}


