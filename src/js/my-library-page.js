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

function getLibraryFilms(event = new Event('default'), libraryPage = 'watched') {
  const savedData = localStorage.getItem(libraryPage.toLowerCase());
  const parsedData = JSON.parse(savedData); //IDs of movies

  movieGalleryElement.innerHTML = '';

  const isGalleryEmpty = !parsedData || parsedData.length === 0;
  emptyLibraryMessage.classList.toggle('visually-hidden', !isGalleryEmpty);

  if (l) {
  }
}

function myLibraryPage(event) {
  movieGalleryElement.innerHTML = '';
  getLibraryFilms(event, 'watched');
  buttonQueue.classList.remove('library-button-current');
  buttonWatched.classList.add('library-button-current');
}

// Добавление и удаление
const buttonAddToWatched = document.querySelector('.watchedButton');
const buttonAddToQueue = document.querySelector('.queueButton');
if (watchedArray.includes(movieForRendering.id)) {
  buttonAddToWatched.textContent = 'Delete from watched';
  buttonAddToWatched.addEventListener('click', deleteWatchedFilm);
} else {
  buttonAddToWatched.textContent = 'Add to watched';
  buttonAddToWatched.addEventListener('click', saveWatchedFilm);
}

if (queueArray.includes(movieForRendering.id)) {
  buttonAddToQueue.textContent = 'Delete from queue';
  buttonAddToQueue.addEventListener('click', deleteQueueFilm);
} else {
  buttonAddToQueue.textContent = 'Add to queue';
  buttonAddToQueue.addEventListener('click', saveFilmToQueue);
}

function deleteWatchedFilm(event) {
  for (let i = 0; i < watchedArray.length; i++) {
    if (watchedArray[i] === movieForRendering.id) {
      watchedArray.splice(i, 1);
    }
  }
  localStorage.setItem('watched', JSON.stringify(watchedArray));

  event.currentTarget.removeEventListener('click', deleteWatchedFilm);
  event.currentTarget.addEventListener('click', saveWatchedFilm);
  event.currentTarget.textContent = 'Add to watched';
  Notiflix.Notify.success(`Deleted ${movieForRendering.title} from watched`, notiflixOverride);
}

function saveWatchedFilm(event) {
  for (const filmID of watchedArray) {
    if (filmID === movieForRendering.id) {
      return;
    }
  }
  watchedArray.push(movieForRendering.id);
  localStorage.setItem('watched', JSON.stringify(watchedArray));

  event.currentTarget.removeEventListener('click', saveWatchedFilm);
  event.currentTarget.addEventListener('click', deleteWatchedFilm);
  event.currentTarget.textContent = 'Delete from watched';
  Notiflix.Notify.success(`Added ${movieForRendering.title} to watched`, notiflixOverride);
}

function deleteQueueFilm(event) {
  for (let i = 0; i < queueArray.length; i++) {
    if (queueArray[i] === movieForRendering.id) {
      queueArray.splice(i, 1);
    }
  }
  localStorage.setItem('queue', JSON.stringify(queueArray));

  event.currentTarget.removeEventListener('click', deleteQueueFilm);
  event.currentTarget.addEventListener('click', saveFilmToQueue);
  event.currentTarget.textContent = 'Add to queue';
  Notiflix.Notify.success(`Deleted ${movieForRendering.title} from queue`, notiflixOverride);
}

function saveFilmToQueue(event) {
  for (const filmID of queueArray) {
    if (filmID === movieForRendering.id) {
      return;
    }
  }
  queueArray.push(movieForRendering.id);
  localStorage.setItem('queue', JSON.stringify(queueArray));

  event.currentTarget.removeEventListener('click', saveFilmToQueue);
  event.currentTarget.addEventListener('click', deleteQueueFilm);
  event.currentTarget.textContent = 'Delete from queue';
  Notiflix.Notify.success(`Added ${movieForRendering.title} to queue`, notiflixOverride);
}
