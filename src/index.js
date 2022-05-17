import './sass/main.scss';
import 'animate.css';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getRefs } from './js/getRefs';
const { header, content, footer, modalWindow } = getRefs();

import HeaderPage1 from './js/headerPage1/HeaderPage1';
import HeaderLib from './js/HeaderLib/HeaderLib';
import loadTrendMovies from './js/trend-movies';
import emptyLib from './js/emptyLib';
import footerMarkup from './js/footer';
import { searchMovies } from './js/search-movies-name';

import onClickSingUp from './js/FireBase/onClickSingUp';
import onClickSingIn from './js/FireBase/onClickSingIn';
import onClickLogOut from './js/FireBase/onClickLoqOut';

// ? Black Theme
import switcher from './js/blackTheme/blackTheme';
import blackThemeTeam from './js/blackTheme/blackThemeTeam';
import blackThemeBody from './js/blackTheme/blackThemeBody';
import blackThemeText from './js/blackTheme/blackThemeText';
import blackThemeEmpty from './js/blackTheme/blackThemeEmpty';
// ?

import scrollBtn from './js/scroll-btn';

import modalTeam from './js/modal-team';
// *
import handleButtonPage from './js/modalCard/funcModal/handleButtonPage/handleButtonPage';

// ----------------------------------
import { onAuthStateChanged } from 'firebase/auth';
import { pagination } from './js/trend-movies';
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

const trendButtons = document.querySelector('.header__top');

function onClickStateUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      user = userName();
      renderNavList(user);
      createMoreRefs();
      getLibr();

      logOut();
    } else {
      // User is signed out

      renderNavListNoUser();
      createMoreRefs();
      createNewUser();
      // ...
    }
  });
}
// -----Pagination
const containerP = document.getElementById('pagination');
const containerF = document.getElementById('pagination-find');

onClickHome();

function onClickHome() {
  trendButtons.classList.remove('invisible');
  pagination.reset();
  containerF.classList.add('invisible');
  header.innerHTML = HeaderPage1();
  renderFooter();
  const status = onClickStateUser();
  // const week = 'week';
  // const day = 'day';

  document.querySelector('.switch__checkbox').checked = JSON.parse(localStorage.getItem('toggle'));
  blackThemeBody();

  getLogo();

  containerP.classList.remove('invisible');
  // loadTrendMovies(1, week);

  onRenderMoviesToday();
  // search - movies - name
  const formEl = document.querySelector('.header-form');
  formEl.addEventListener('submit', searchMovies);
}
function createMoreRefs() {
  const renderMoviesWeek = document.querySelector('.header__btn--week');
  const renderMoviesToday = document.querySelector('.header__btn--day');
  renderMoviesWeek.addEventListener('click', onRenderMoviesWeek);
  renderMoviesToday.addEventListener('click', onRenderMoviesToday);
}

function onRenderMoviesWeek() {
  loadTrendMovies(1, 'week');
  const renderMoviesWeek = document.querySelector('.header__btn--week');
  const renderMoviesToday = document.querySelector('.header__btn--day');
  renderMoviesWeek.classList.add('btn-active');
  renderMoviesToday.classList.remove('btn-active');
}
function onRenderMoviesToday() {
  loadTrendMovies(1, 'day');
  const renderMoviesWeek = document.querySelector('.header__btn--week');
  const renderMoviesToday = document.querySelector('.header__btn--day');
  renderMoviesWeek.classList.remove('btn-active');
  renderMoviesToday.classList.add('btn-active');
}

function onClickLibrary() {
  header.innerHTML = HeaderLib();

  trendButtons.classList.add('invisible');

  containerP.classList.add('invisible');
  containerF.classList.add('invisible');
  renderFooter();

  document.querySelector('.switch__checkbox').checked = JSON.parse(localStorage.getItem('toggle'));
  blackThemeBody();

  let keyW = '';
  let keyQ = '';
  keyW = localStorage.getItem('currentUserWatched');
  const getArrayW = JSON.parse(localStorage.getItem(keyW));

  keyQ = localStorage.getItem('currentUserQueue');
  const getArrayQ = JSON.parse(localStorage.getItem(keyQ));

  if (getArrayQ) {
    if (getArrayQ.length !== 0) {
      onClickQueue();
    } else if (getArrayW) {
      if (getArrayW.length !== 0) {
        onClickWatched();
      } else {
        ifEmptyLib();
      }
    } else {
      ifEmptyLib();
    }
  } else if (getArrayW) {
    if (getArrayW.length !== 0) {
      onClickWatched;
    } else {
      ifEmptyLib();
    }
  } else {
    ifEmptyLib();
  }

  ////?
  blackThemeText();

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
  blackThemeEmpty();
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
  const keyW = localStorage.getItem('currentUserWatched');
  const getArrayW = JSON.parse(localStorage.getItem(keyW));
  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');

  watchet.classList.add('btn-active');
  queue.classList.remove('btn-active');
  if (getArrayW) {
    if (getArrayW.length === 0) {
      ifEmptyLib();
      return;
    } else {
      handleButtonPage(getArrayW);
      blackThemeText();
    }
  } else {
    ifEmptyLib();
  }
}

function onClickQueue() {
  const keyQ = localStorage.getItem('currentUserQueue');
  const getArrayQ = JSON.parse(localStorage.getItem(keyQ));
  const watchet = document.querySelector('.header__btn--watchet');
  const queue = document.querySelector('.header__btn--queue');

  queue.classList.add('btn-active');
  watchet.classList.remove('btn-active');
  if (getArrayQ) {
    if (getArrayQ.length === 0) {
      ifEmptyLib();
      return;
    } else {
      handleButtonPage(getArrayQ);
      blackThemeText();
    }
  } else {
    ifEmptyLib();
  }
}

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
  // ! --------------------------------
  document.querySelector('.switch__checkbox').addEventListener('change', switcher);
  // ! --------------------------------
  document.querySelector('.footer__link').addEventListener('click', renderModalTeam);
  // ! --------------------------------
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

// modalTeam
//const openTeam = document.querySelector('.footer__link');
//openTeam.addEventListener('click', renderModalTeam);

function renderModalTeam() {
  modalWindowTeam.innerHTML = modalTeam();

  const closeTeam = document.querySelector('.modal-team-close');
  closeTeam.addEventListener('click', closeModalTeam);
  function closeModalTeam(e) {
    modalWindowTeam.innerHTML = '';
  }
  window.addEventListener('keydown', closeModalHandler);

  // todo BLOK BLACK THEME
  blackThemeTeam();

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modalWindowTeam.innerHTML = '';
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
