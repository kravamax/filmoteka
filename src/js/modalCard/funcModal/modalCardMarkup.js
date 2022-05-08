import { modal } from '../modalCard/';
const content = document.querySelector('#content');
let keyL = null;
let libraryData = null;
let libraryMass = [];


export const modalCardMarkup = (data, key) => {
    keyL = key
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
                    <use  href="/math-multiplication.cfd95509.svg#Layer_1"></use>
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
                <button class="button" id="watchedButton">Add to watched</button>
                <button class="button is-hidden" id="removeButton">Remove</button>
                <button class="button" id="queueButton">Add to queue</button>
            </div>
        </div>
    </div>
</div>`;
};



export const watchedButton = e => {
    // import func
    //console.log(JSON.parse(localStorage.getItem(keyL)) === null)



    if (JSON.parse(localStorage.getItem(keyL))) {
        console.log("First IF");
        let finder = [...JSON.parse(localStorage.getItem(keyL))];
        let OPS = finder.find(elem => elem.id === libraryData.id);
        //console.log(OPS);

        if (OPS) {
            console.log("Second IF");
            const position = finder.indexOf(OPS);
            console.log("position: ", position);
            finder.splice(position, 1);
            libraryMass = [...finder];
            localStorage.setItem(keyL, JSON.stringify(libraryMass));
            modal.close();

            if(watchedPage.classList.contains("pressed")) {
                handleWatchedPage();
            }
            
        }
        else {
            console.log("Second ELSE");
            finder.push(libraryData);
            libraryMass = [...finder];
            localStorage.setItem(keyL, JSON.stringify(libraryMass));
            modal.close();
            
        }
    }
    else if(JSON.parse(localStorage.getItem(keyL)) === null) {
        console.log("its in ELSE");
        console.log(JSON.parse(localStorage.getItem(keyL)));
        libraryMass.push(libraryData);
       
        localStorage.setItem(keyL, JSON.stringify(libraryMass));
        modal.close();
    }

  console.log(JSON.parse(localStorage.getItem(keyL)));
};

export const queueButton = e => {
    localStorage.removeItem(keyL);
    console.log(JSON.parse(localStorage.getItem(keyL)));
    
};

const watchedPage = document.querySelector('#test');
watchedPage.addEventListener('click', handleWatchedPage);

function handleWatchedPage() {
    watchedPage.classList.add("pressed");

    console.log("!!!");
    console.log(libraryMass);

    content.innerHTML = '';

    createMarkUp(libraryMass);
    content.innerHTML = createMarkUp(libraryMass);
}
function createMarkUp(arg) {
    return arg
    .map(({ id, poster_path, genres, title, release_date, vote_average }) => {
        const date = release_date.slice(0, 4);

        if(genres.length >= 3){
            genres.splice(2, genres.length-1, {name: " other"});
          }

        return `
    <div class="film-card">
      <img id="${id}" src="https://image.tmdb.org/t/p/w342${poster_path}" alt="${title}"/>
        <h2 class="film-title">${title}</h2>
      <div class="film-info">
        <p class="film-info__genre"> ${genres.map(({ name }) => ' ' + name, )} | ${date}</p>
        <p class="film-info__rating">${vote_average}</p>
      </div>
    </div>`;
    })
    .join('');
}

