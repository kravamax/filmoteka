export function getRefs() {
  return {
    header: document.getElementById('header'),
    content: document.getElementById('content'),
    footer: document.getElementById('footer'),

    libraryButtons: document.querySelector('.header__btn-cont'),
    buttonWatched: document.querySelector('.header__btn--watchet'),
    buttonQueue: document.querySelector('.header__btn--queue'),
    modalWindow: document.querySelector('#modalWindow'),

    buttonTrailer: document.querySelector('#trailerButton'),
  };
}

//   import in files
// import { getRefs } from './js/getRefs';
// const { link1, link2, link3 } = getRefs();
