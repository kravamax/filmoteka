import './sass/main.scss';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getRefs } from './js/getRefs';
const { header, content, footer, modalWindow } = getRefs();

import HeaderPage1 from './js/headerPage1/HeaderPage1';
import HeaderLib from './js/HeaderLib/HeaderLib';
import loadTrendMovies from './js/trend-movies';
import footerMarkup from './js/footer';
import * as modalCard from './js/modalCard/modalCard';
import { searchMovies } from './js/search-movies-name';

import onClickSingUp from './js/FireBase/onClickSingUp';
import onClickSingIn from './js/FireBase/onClickSingIn';
import onClickLogOut from './js/FireBase/onClickLoqOut';
import onClickStateUser from './js/FireBase/onClickStateUSer';
// import './js/my-library-page';

import scrollBtn from './js/scroll-btn';

import modalTeam from './js/modal-team';

onClickHome();

renderFooter();

function onClickHome() {
  header.innerHTML = HeaderPage1();
  getLogo();
  getLibr();
  loadTrendMovies();
  createNewUser();
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

function createNewUser() {
  const singUp = document.querySelector('.singUp');
  singUp.addEventListener('click', onClickSingUp);

  const singIn = document.querySelector('.singIn');
  singIn.addEventListener('click', onClickSingIn);

  const singOut = document.querySelector('.singOut');
  singOut.addEventListener('click', onClickLogOut);

  const stateUser = document.querySelector('.stateUser');
  stateUser.addEventListener('click', onClickStateUser);
}

//=================================================================================================

// search - movies - name
const formEl = document.querySelector('.header-form');
formEl.addEventListener('submit', searchMovies);
renderModalTeam();

function renderModalTeam() {
  modalWindowTeam.innerHTML = modalTeam();
}