import { getRefs } from './getRefs';
const { libraryButtons, buttonWatched, buttonQueue } = getRefs();

buttonMyLibrary.addEventListener('click', myLibraryPage);

buttonWatched.addEventListener('click', event => {
  getLibraryFilms(event, 'watched');
  buttonQueue.classList.remove('library-button-current');
  buttonWatched.classList.add('library-button-current');
});

buttonQueue.addEventListener('click', event => {
  getLibraryFilms(event, 'queue');
  buttonWatched.classList.remove('library-button-current');
  buttonQueue.classList.add('library-button-current');
});
