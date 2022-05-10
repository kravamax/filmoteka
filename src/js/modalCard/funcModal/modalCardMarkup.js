import iconCross from '../../../images/modalCard/math-multiplication.svg';
import handleWatchedPage from "./handleWatchedPage/handleWatchedPage";
import changingButtonStyles from "./changingButtonStyles/changingButtonStyles";

let keyL = 0;
let libraryData = null;
let libraryMass = [];
keyL = localStorage.getItem("Key");

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
                <button class="button" id="watchedButton">${changingButtonStyles(keyL, libraryData)}</button>
                <button class="button is-hidden" id="removeButton">Remove</button>
                <button class="button" id="queueButton">Add to queue</button>
            </div>
        </div>
    </div>
</div>`;
};

export const watchedButton = e => {
  if (localStorage.getItem("is-Signed-In") === "false" || localStorage.getItem("state-user-Button" === "false")) {
    console.log("Please register or login to your profile");
    return;
  }

  keyL = localStorage.getItem('Key');

  if (keyL === null) {
    console.log("Please register or login to your profile");
    return;
  };

  if (JSON.parse(localStorage.getItem(keyL))) {
    console.log('First IF');
    let finder = [...JSON.parse(localStorage.getItem(keyL))];
    let libraryFilter = finder.find(elem => elem.id === libraryData.id);

    if (libraryFilter) {
      console.log('Second IF');
      const position = finder.indexOf(libraryFilter);
      finder.splice(position, 1);
      libraryMass = [...finder];
      localStorage.setItem(keyL, JSON.stringify(libraryMass));
      document.querySelector("#watchedButton").textContent = "Add";

      if (document.querySelector('#test').classList.contains('pressed')) {
        handleWatchedPage(e, keyL);
      };
    }
    else {
      console.log('Second ELSE');
      finder.push(libraryData);
      libraryMass = [...finder];
      localStorage.setItem(keyL, JSON.stringify(libraryMass));
      document.querySelector("#watchedButton").textContent = "Remove";
    };
  }
  else if (JSON.parse(localStorage.getItem(keyL)) === null) {
    console.log('its in ELSE');
    libraryMass.push(libraryData);
    localStorage.setItem(keyL, JSON.stringify(libraryMass));
    document.querySelector("#watchedButton").textContent = "Remove";
  }

  console.log(JSON.parse(localStorage.getItem(keyL)));
};

export const queueButton = e => {
  localStorage.removeItem(keyL);
  console.log(JSON.parse(localStorage.getItem(keyL)));
};

document.querySelector('#test').addEventListener('click', (e) =>  handleWatchedPage(e, keyL));