// Global Variables
const body = document.querySelector('body');
const menu = document.getElementById('js-menu');
const nav = document.getElementById('js-nav');
const cart = nav.nextElementSibling.nextElementSibling;
const search = nav.nextElementSibling;
const header = document.querySelector('header');
const mediaQuery = window.matchMedia('(min-width: 45.9375em)');

// Array of Colours
const colours = ['#000', 'rgba(0, 0, 0, 0.8)'];
const [black, blackOpacity] = colours;

// Toggle Menu
const toggleMenu = () => {
  menu.classList.toggle('is-active');

  if (menu.classList.contains('is-active')) {
    nav.style.animation = 'slideDownNav 500ms ease-in-out forwards';
    header.style.backgroundColor = black;
    cart.style.visibility = 'hidden';
    search.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    nav.style.animation = 'slideUpNav 500ms ease-in-out forwards';
    header.style.backgroundColor = blackOpacity;
    cart.style.visibility = 'visible';
    search.style.display = 'none';
    body.style.overflow = 'auto';
  }
};

// Media query
const render = mquery => {
  if (mquery.matches) {
    nav.style.height = 'initial';
    search.style.display = 'block';
  } else {
    nav.style.height = '0';
    search.style.display = 'none';
  }
};
render(mediaQuery);

// Event Listener
menu.addEventListener('click', toggleMenu);
mediaQuery.addEventListener('change', render);
