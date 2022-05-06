import './sass/main.scss';

import { getRefs } from './js/getRefs';
const { header, content, footer } = getRefs();

import HeaderPage1 from './js/headerPage1/HeaderPage1';
import HeaderLib from './js/HeaderLib/HeaderLib';
import loadTrendMovies from './js/trend-movies';
import footerMarkup from './js/footer';
import * as modalCard from './js/modalCard/modalCard';

// import './js/my-library-page';

// const header = document.getElementById('header');
// const content = document.getElementById('content');
// const footer = document.getElementById('footer');
onClickHome();

renderFooter();
// header.innerHTML = HeaderPage1();
// getLogo();
// getLibr();
function onClickHome() {
  header.innerHTML = HeaderPage1();
  getLogo();
  getLibr();
  loadTrendMovies();
}
function onClickLibrary() {
  header.innerHTML = HeaderLib();
  content.innerHTML = '<h1>Library</h1>';
  getLogo();
  getButtons();
  getHome();
}

loadTrendMovies();

function getLibr() {
  const libr = document.querySelector('.library-link');
  libr.addEventListener('click', onClickLibrary);
  libr.classList.remove('item-current');
}

function getHome() {
  const home = document.querySelector('.home-link');
  home.addEventListener('click', onClickHome);
  home.classList.remove('item-current');
}

function getButtons() {
  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');
  watchet.addEventListener('click', () => {
    watchet.classList.add('btn-active');
    queue.classList.remove('btn-active');
    content.innerHTML = '<h1>watchet</h1>';
  });

  queue.addEventListener('click', () => {
    queue.classList.add('btn-active');
    watchet.classList.remove('btn-active');
    content.innerHTML = '<h1>queue</h1>';
  });
}

function onClickWatched() {}

function getLogo() {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', onClickHome);
}

function renderFooter() {
  footer.innerHTML = footerMarkup();
}