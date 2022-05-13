import iconCross from '../../../images/modalCard/math-multiplication.svg';
import handleButtonPage from './handleButtonPage/handleButtonPage';
import changingButtonStyles from './changingButtonStyles/changingButtonStyles';
import axios from 'axios';
import jBox from 'jbox';

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
      console.log(localStorage.getItem(keyW));
    }
  }
}

if (!allKeysQueueArray === null) {
  for (let i = 0; i <= allKeysQueueArray.length; i += 1) {
    if (allKeysQueueArray[i] === keyQ) {
      // queueArr = currentQueueArr;
      currentQueueArr = JSON.parse(localStorage.getItem(keyQ));
      console.log(localStorage.getItem(keyQ));
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
 keyW = localStorage.getItem("currentUserWatched");
 keyQ = localStorage.getItem("currentUserQueue");


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
                <button class="button" id="watchedButton">${changingButtonStyles(keyW, libraryData, "watched")}</button>
                <button class="button" id="queueButton">${changingButtonStyles(keyQ, libraryData, "queue")} </button>
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
    return console.log('Please register or login to your profile');
  }

  if (JSON.parse(localStorage.getItem(keyW))) {
    console.log('First IF');
    let finder = [...JSON.parse(localStorage.getItem(keyW))];
    let libraryFilter = finder.find(elem => elem.id === libraryData.id);

    if (libraryFilter) {
      console.log('Second IF');
      finder.splice(finder.indexOf(libraryFilter), 1);

      currentWatchedArr = [...finder];
      localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
      document.querySelector("#watchedButton").textContent = `Add to watched`;

      const watched = document.querySelector('.header__btn--watchet');
      if (watched) {
        if (watched.classList.contains('btn-active')) {
          const getArray = JSON.parse(localStorage.getItem(keyW));
          if (getArray.length === 0) {
            document.querySelector(
              '#content',
            ).innerHTML = `<div class="empty-lib"><h1>Empty</h1></div>`;
            return;
          }
          handleButtonPage(getArray);
        }
      }
    } else {
      console.log('Second ELSE');
      finder.push(libraryData);

      currentWatchedArr = [...finder];
      localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
      document.querySelector("#watchedButton").textContent = `Remove from watched`;
    };
  }
  else if (JSON.parse(localStorage.getItem(keyW)) === null) {
    console.log('its in ELSE');
    currentWatchedArr = [];
    currentWatchedArr.push(libraryData);
    localStorage.setItem(keyW, JSON.stringify(currentWatchedArr));
    document.querySelector("#watchedButton").textContent = `Remove from watched`;
  }
  console.log(JSON.parse(localStorage.getItem(keyW)));
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
    return console.log('Please register or login to your profile');
  }

  if (JSON.parse(localStorage.getItem(keyQ))) {
    console.log('First IF Q');
    let finder = [...JSON.parse(localStorage.getItem(keyQ))];
    let libraryFilter = finder.find(elem => elem.id === libraryData.id);

    if (libraryFilter) {
      console.log('Second IF Q');
      finder.splice(finder.indexOf(libraryFilter), 1);

      currentQueueArr = [...finder];
      localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
      document.querySelector("#queueButton").textContent = `Add to queue`;


      const queue = document.querySelector('.header__btn--queue');
      if (queue) {
        if (queue.classList.contains('btn-active')) {
          const getArray = JSON.parse(localStorage.getItem(keyQ));
          if (getArray.length === 0) {
            document.querySelector(
              '#content',
            ).innerHTML = `<div class="empty-lib"><h1>Empty</h1></div>`;
            return;
          }
          handleButtonPage(getArray);
        }
      }
    } else {
      console.log('Second ELSE Q');
      finder.push(libraryData);

      currentQueueArr = [...finder];
      localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
      document.querySelector("#queueButton").textContent = `Remove from queue`;
    };
  }
  else if (JSON.parse(localStorage.getItem(keyQ)) === null) {
    console.log('its in ELSE Q');
    currentQueueArr = [];
    currentQueueArr.push(libraryData);
    localStorage.setItem(keyQ, JSON.stringify(currentQueueArr));
    document.querySelector("#queueButton").textContent = `Remove from queue`;
  }
  console.log(JSON.parse(localStorage.getItem(keyQ)));
};

// Trailer button

async function getTrailerKey() {
  const KEY = '067f291d21ed1c6d30bd9ade17d843cc';

  const url = `https://api.themoviedb.org/3/movie/${libraryData.id}/videos?api_key=${KEY}&append_to_response=videos`;
  try {
    const response = await axios.get(url);
    return await response.data.results[0].key;
  } catch (error) {
    console.error(error);
  }
}

export async function onTrailerButtonClick() {
  const youTubeKey = getTrailerKey();

  // console.log(youTubeKey);
  // openModal(youTubeKey);

  new jBox('Modal', {
    closeButton: true,
    overlay: true,
    attach: '#trailerModal',
    onOpen() {
      document.querySelector('#jBox1').style.opacity = 0;
    },
    onClose() {
      document.querySelector('#jBox1').style.opacity = 1;
    },
    content: `<iframe class="modal-trailer__container"
  src="https://www.youtube.com/embed/${youTubeKey}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  ></iframe>`,
  });
}

// function openModal(youTubeKey) {
//   new jBox('Modal', {
//     closeButton: true,
//     overlay: true,
//     attach: '#trailerModal',
//     onOpen() {
//       document.querySelector('#jBox1').style.opacity = 0;
//     },
//     onClose() {
//       document.querySelector('#jBox1').style.opacity = 1;
//     },
//     content: `<iframe class="modal-trailer__container"
//   src="https://www.youtube.com/embed/${youTubeKey}"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
//   ></iframe>`,
//   });
// }
