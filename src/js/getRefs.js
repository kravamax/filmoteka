// export function getRefs() {
//   return {
//     buttonMyLibrary: document.querySelector(''),
//     buttonWatched: document.querySelector(''),
//     buttonQueue: document.querySelector(''),
//   };
// }

//   import in files
// import { getRefs } from '../getRefs';
// const { link1, link2, link3 } = getRefs();
const refs = {
  libraryButtons: document.querySelector('.header__btn-cont'),
  buttonWatched: document.querySelector('.header__btn--watchet'),
  buttonQueue: document.querySelector('.header__btn--queue'),
}
