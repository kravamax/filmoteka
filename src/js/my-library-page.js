import refs from './refs'

refs.buttonMyLibrary.addEventListener('click', myLibraryPage);

refs.buttonWatched.addEventListener('click', (event) => {
  getLibraryFilms(event, "watched");
  refs.buttonQueue.classList.remove('library-button-current');
  refs.buttonWatched.classList.add('library-button-current');
});


refs.buttonQueue.addEventListener('click', (event) => {
  getLibraryFilms(event, "queue");
  refs.buttonWatched.classList.remove('library-button-current');
  refs.buttonQueue.classList.add('library-button-current');
});