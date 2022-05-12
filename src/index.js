import './sass/main.scss';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getRefs } from './js/getRefs';
const { header, content, footer, modalWindow } = getRefs();

import HeaderPage1 from './js/headerPage1/HeaderPage1';
import HeaderLib from './js/HeaderLib/HeaderLib';
import loadTrendMovies from './js/trend-movies';
import emptyLib from './js/emptyLib';
import footerMarkup from './js/footer';
import * as modalCard from './js/modalCard/modalCard';
import { searchMovies } from './js/search-movies-name';

import onClickSingUp from './js/FireBase/onClickSingUp';
import onClickSingIn from './js/FireBase/onClickSingIn';
import onClickLogOut from './js/FireBase/onClickLoqOut';

import scrollBtn from './js/scroll-btn';

import modalTeam from './js/modal-team';
// *
import handleButtonPage from './js/modalCard/funcModal/handleButtonPage/handleButtonPage';

// ----------------------------------
import { onAuthStateChanged } from 'firebase/auth';

import renderNavList from './js/FireBase/renderNavList';
import renderNavListNoUser from './js/FireBase/renderNavListNoUser';

const firebaseConfig = {
  apiKey: 'AIzaSyA0Jg3owd7CYZ_lII5XL2NnspjHhLrMIPQ',
  authDomain: 'filmoteka-it-people.firebaseapp.com',
  projectId: 'filmoteka-it-people',
  storageBucket: 'filmoteka-it-people.appspot.com',
  messagingSenderId: '809306812153',
  appId: '1:809306812153:web:98a43635dcd9e66607fc28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let keyL = 0;


function onClickStateUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      user = userName();
      renderNavList(user);
      getLibr();

      logOut();
    } else {
      // User is signed out

      renderNavListNoUser();
      createNewUser();
      // ...
    }
  });
}
// ----------------------------------
onClickHome();

renderFooter();

function onClickHome() {
  header.innerHTML = HeaderPage1();
  const status = onClickStateUser();

  getLogo();

  loadTrendMovies();
}
function onClickLibrary() {
  header.innerHTML = HeaderLib();
  
  keyL = localStorage.getItem('Key');
      const getArray = JSON.parse(localStorage.getItem(keyL));

  if (getArray) {
    
  if (getArray.length === 0) {
    ifEmptyLib();
  } else {
    onClickWatched();
  }
  }
  

  const user = userName();
  renderNavList(user);
  getLogo();
  getButtons();
  getHome();

  const logOutBtn = document.querySelector('.singOut');
  logOutBtn.addEventListener('click', () => {
    onClickLogOut();

    onClickStateUser();
    onClickHome();
  });
}

function getLibr() {
  const libr = document.querySelector('.library-link');

  libr.addEventListener('click', onClickLibrary);
  libr.classList.remove('item-current');
}

function getHome() {
  const home = document.querySelector('.home-link');

  home.addEventListener('click', onClickHome);
  home.classList.remove('item-current');
  userName();
}

function ifEmptyLib() {
  content.innerHTML = emptyLib();
  const backHome = document.querySelector('.header__btn--empty');
  backHome.addEventListener('click', e => {
    onClickStateUser();
    onClickHome();
  });
}

function getButtons() {
  const changePage = () => {
    const home = document.querySelector('.home-link');
    home.classList.remove('item-current');
    const libr = document.querySelector('.library-link');
    libr.classList.add('item-current');
  };
  changePage();

  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');
  watchet.addEventListener('click', onClickWatched);
  queue.addEventListener('click', onClickQueue);
}

function onClickWatched() {
  const keyW = localStorage.getItem('Key');
  const getArray = JSON.parse(localStorage.getItem(keyW));
  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');

  watchet.classList.add('btn-active');
  queue.classList.remove('btn-active');
  if (getArray.length === 0) {
    ifEmptyLib();
    return;
  }
  handleButtonPage(getArray);
}


function onClickQueue() {
  const keyQ = localStorage.getItem('Key!');
  const getArray = JSON.parse(localStorage.getItem(keyQ));
  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');

  queue.classList.add('btn-active');
  watchet.classList.remove('btn-active');
  if (getArray.length === 0) {
    ifEmptyLib();
    return;
  }
  handleButtonPage(getArray);
};

// ******************************************************

function getLogo() {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', onClickHome);
}

function logOut() {
  const logOutBtn = document.querySelector('.singOut');
  logOutBtn.addEventListener('click', () => {
    onClickLogOut();

    onClickStateUser();
  });
}
function userName() {
  const user = auth.currentUser;

  const to = user.email.search('@');
  const userName = user.email.substring(0, to);
  return userName;
}

function renderFooter() {
  footer.innerHTML = footerMarkup();
}

export function createNewUser() {
  const singUp = document.querySelector('.singUp');

  singUp.addEventListener('click', () => {
    onClickSingUp();
  });

  const singIn = document.querySelector('.singIn');

  singIn.addEventListener('click', () => {
    onClickSingIn();
  });
}

//=================================================================================================

// search - movies - name
const formEl = document.querySelector('.header-form');
formEl.addEventListener('submit', searchMovies);

// modalTeam
const openTeam = document.querySelector('.footer__link');

openTeam.addEventListener('click', renderModalTeam);

function renderModalTeam() {
  modalWindowTeam.innerHTML = modalTeam();

  const closeTeam = document.querySelector('.modal-team-close');
  closeTeam.addEventListener('click', closeModalTeam);
  function closeModalTeam(e) {
    modalWindowTeam.innerHTML = '';
  }
  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modalWindowTeam.innerHTML = '';
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
