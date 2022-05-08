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
import { fetchMovies } from './js/search-movies-name';

import modalAuth from './js/FireBase/modalAuth';
import getModalData from './js/FireBase/getModalData';
// import './js/my-library-page';
// Your web app's Firebase configuration
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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const header = document.getElementById('header');
// const content = document.getElementById('content');
// const footer = document.getElementById('footer');
onClickHome();

renderFooter();
// header.innerHTML = HeaderPage1();
// getLogo();
// getLibr();
function onClickHome() {
  
  if(document.querySelector('#test').classList.contains("pressed")) {
    document.querySelector('#test').classList.remove("pressed");
  }
  
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
fetchMovies();

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
  const singIn = document.querySelector('.singIn');
  singIn.addEventListener('click', () => {
    modalWindow.innerHTML = modalAuth();
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const user = getModalData(e);
      console.log(user);
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          alert(`Register ${user.email} successful`);
          modalWindow.innerHTML = '';
          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    });
  });
}
