import Notiflix from 'notiflix';
import iconCross from '../../../images/modalCard/math-multiplication.svg';
import handleButtonPage from './handleButtonPage/handleButtonPage';
import changingButtonStyles from './changingButtonStyles/changingButtonStyles';
import blackThemeEmpty from '../../blackTheme/blackThemeEmpty';
import jBox from 'jbox';

Notiflix.Notify.init({});
Notiflix.Notify.merge({
  width: '320px',
  fontSize: '18px',
  zindex: 10002,
  // timeout: 500,
  clickToClose: true,
  //backOverlay: true,

  warning: {
    background: 'rgba(0,0,0,0.8)',
    textColor: '#FF6B01',
    notiflixIconColor: '#FF6B01',
    // backOverlayColor: 'rgba(0,0,0,0.4)',
  },
});

Notiflix.Notify.merge({
  success: {
    background: 'rgba(0,0,0,0)',
    textColor: '#FF6B01',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: '#FF6B01',
    //backOverlayColor: 'rgba(0,0,0,0.0)',
  },
});

let libraryData = null;
let keyW;
let keyQ;
let currentWatchedArr = [];
let currentQueueArr = [];

////////////////////////////////////////////
const allKeysWatchedArray = JSON.parse(localStorage.getItem('allKeysWatched'));
const allKeysQueueArray = JSON.parse(localStorage.getItem('allKeysQueue'));

if (!allKeysWatchedArray === null) {
  for (let i = 0; i <= allKeysWatchedArray.length; i += 1) {
    if (allKeysWatchedArray[i] === keyW) {
      currentWatchedArr = JSON.parse(localStorage.getItem(keyW));
      // console.log(localStorage.getItem(keyW));
    }
  }
}

if (!allKeysQueueArray === null) {
  for (let i = 0; i <= allKeysQueueArray.length; i += 1) {
    if (allKeysQueueArray[i] === keyQ) {
      // queueArr = currentQueueArr;
      currentQueueArr = JSON.parse(localStorage.getItem(keyQ));
      // console.log(localStorage.getItem(keyQ));
    }
  }
}

/////////////////////////////////////////////////////////////

export const modalCardMarkup = data => {
  const {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = data;

  libraryData = data;
  keyW = localStorage.getItem('currentUserWatched');
  keyQ = localStorage.getItem('currentUserQueue');

  return `<div class="modal">
        <div class="modal__button-container">
            <button type="button" class="modal__button">
                <svg class="modal__cross">
                    <use href="${iconCross}#Layer_1"></use>
                </svg>
            </button>
        </div>
        <div class="modal__section">
        <div class="modal__poster">
            <img class="modal__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie_poster" />
        </div>
        <div class="modal__container">
            <h1 class="modal__title">${title}</h1>
            <div class="modal__information">
                <ul class="modal__item">
                    <li class="modal__into"><p>Vote/Votes:</p></li>
                    <li class="modal__into"><p>Popularity</p></li>
                    <li class="modal__into"><p>Original title</p></li>
                    <li class="modal__into"><p>Genre</p></li>
                </ul>
                <ul>
                    <li class="modal__into modal__into--vote">
                        <span class="modal__vote">${vote_average}</span>/<span class="modal__votes">${vote_count}</span>
                    </li class="modal__into">
                    <li class="modal__into info"><p>${popularity}</p></li>
                    <li class="modal__into info"><p class="modal__origin">${original_title}</p></li>
                    <li class="modal__into info"><span>${genres.map(
                      ({ name }) => ' ' + name,
                    )}</span></li>
                </ul>
            </div>
            <h2 class="modal__subtitle">About</h2>
            <p class="modal__text">${overview}</p>
            <div class="modal__buttons">
                <button class="button" id="watchedButton">${changingButtonStyles(
                  keyW,
                  libraryData,
                  'watched',
                )}</button>
                <button class="button" id="queueButton">${changingButtonStyles(
                  keyQ,
                  libraryData,
                  'queue',
                )} </button>
                <button class="button" id="trailerModal">Trailer</button>
            </div>
        </div>
    </div>
</div>`;
};

// todo WATCHED BUTTON

export const watchedButton = e => {
  keyW = localStorage.getItem('currentUserWatched');

  if (
    localStorage.getItem('is-Signed-In') === 'false' ||
    localStorage.getItem('state-user-Button') === 'false' ||
    keyW === null
  ) {
    Notiflix.Notify.warning('Please sign in or register to your profile');
    return;
  }

  if (JSON.parse(localStorage.getItem(keyW))) {
    // console.log('First IF');
    let finder = [...JSON.parse(localStorage.getItem(keyW))];
    let libraryFilter = finder.find(elem => elem.id === libraryData.id);

    if (libraryFilter) {
      // console.log('Second IF');
      Notiflix.Notify.success(`Movie removed successfully!`);
      finder.splice(finder.indexOf(libraryFilter), 1);

      currentWatchedArr = [...finder];
      localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
      document.querySelector('#watchedButton').textContent = `Add to watched`;

      const watched = document.querySelector('.header__btn--watchet');
      if (watched) {
        if (watched.classList.contains('btn-active')) {
          const getArray = JSON.parse(localStorage.getItem(keyW));
          if (getArray.length === 0) {
            document.querySelector(
              '#content',
            ).innerHTML = `<div class="empty-lib"><h1 class="empty__text">You've removed all movies</h1></div>`;
            blackThemeEmpty();
            return;
          }
          handleButtonPage(getArray);
        }
      }
    } else {
      Notiflix.Notify.success(`You've just added movie to watched library!`);
      // console.log('Second ELSE');
      finder.push(libraryData);

      currentWatchedArr = [...finder];
      localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
      document.querySelector('#watchedButton').textContent = `Remove from watched`;
    }
  } else if (JSON.parse(localStorage.getItem(keyW)) === null) {
    // console.log('its in ELSE');
    currentWatchedArr = [];
    currentWatchedArr.push(libraryData);
    localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
    document.querySelector('#watchedButton').textContent = `Remove from watched`;
    Notiflix.Notify.success(`You've just added your first movie to watched library!`);
  }
  // console.log(JSON.parse(localStorage.getItem(keyW)));
};

// todo QUEUE BUTTON
//export const queueButton = e => {
//  console.log("QUEUE")
//}queueArr

export const queueButton = e => {
  keyQ = localStorage.getItem('currentUserQueue');

  if (
    localStorage.getItem('is-Signed-In') === 'false' ||
    localStorage.getItem('state-user-Button') === 'false' ||
    keyQ === null
  ) {
    Notiflix.Notify.warning('Please sign in or register to your profile');
    return;
  }

  if (JSON.parse(localStorage.getItem(keyQ))) {
    // console.log('First IF Q');
    let finder = [...JSON.parse(localStorage.getItem(keyQ))];
    let libraryFilter = finder.find(elem => elem.id === libraryData.id);

    if (libraryFilter) {
      Notiflix.Notify.success(`Movie removed successfully!`);
      // console.log('Second IF Q');
      finder.splice(finder.indexOf(libraryFilter), 1);

      currentQueueArr = [...finder];
      localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
      document.querySelector('#queueButton').textContent = `Add to queue`;

      const queue = document.querySelector('.header__btn--queue');
      if (queue) {
        if (queue.classList.contains('btn-active')) {
          const getArray = JSON.parse(localStorage.getItem(keyQ));
          if (getArray.length === 0) {
            document.querySelector(
              '#content',
            ).innerHTML = `<div class="empty-lib"><h1 class="empty__text">You've removed all movies</h1></div>`;
            blackThemeEmpty();
            return;
          }
          handleButtonPage(getArray);
        }
      }
    } else {
      Notiflix.Notify.success(`You've just added movie to queue!`);
      // console.log('Second ELSE Q');
      finder.push(libraryData);

      currentQueueArr = [...finder];
      localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
      document.querySelector('#queueButton').textContent = `Remove from queue`;
    }
  } else if (JSON.parse(localStorage.getItem(keyQ)) === null) {
    // console.log('its in ELSE Q');
    currentQueueArr = [];
    currentQueueArr.push(libraryData);
    localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
    document.querySelector('#queueButton').textContent = `Remove from queue`;
    Notiflix.Notify.success(`You've just added your first movie to queue!`);
  }
  // console.log(JSON.parse(localStorage.getItem(keyQ)));
};

// Trailer button
const trailerModal = new jBox('Modal', {
  closeButton: true,
  overlay: true,
  animation: { open: 'zoomIn', close: 'zoomOut' },
  fade: 350,
  attach: '#trailerModal',
  content: `<div class="modal-trailer__container"></div>`,
  onOpen() {
    document.querySelector('#jBox2').style.opacity = 0;
    const border = [...document.querySelectorAll('.jBox-content')];
    border[1].classList.add('jBox-container-border');
  },
  onClose() {
    // trailerModal.animate('fadein', {});
    document.querySelector('#jBox2').style.opacity = 1;
  },
});

export function onTrailerButtonClick() {
  const KEY = '067f291d21ed1c6d30bd9ade17d843cc';
  const url = `https://api.themoviedb.org/3/movie/${libraryData.id}/videos?api_key=${KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      return data.results[0].key;
    })
    .then(openTrailerModal)
    .catch(console.log);
}

function openTrailerModal(youTubeKey) {
  trailerModal.open();

  document.querySelector(
    '.modal-trailer__container',
  ).innerHTML = `<iframe class="modal-trailer__container"
    src="https://www.youtube.com/embed/${youTubeKey}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>`;
}
