export const modalCardMarkup = (data) => {
    const { poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview } = data
    return `<div class="modal">
        <div class="modal__button-container">
            <button type="button" class="modal__button">
                <svg class="modal__cross">
                    <use  href="/math-multiplication.a4f41856.svg#Layer_1"></use>
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
                    <li class="modal__into info"><span>${genres.map(({ name }) => " " + name)}</span></li>
                </ul>
            </div>
            <h2 class="modal__subtitle">About</h2>
            <p class="modal__text">${overview}</p>
            <div class="modal__buttons">
                <button class="button" id="watchedButton">Add to watched</button>
                <button class="button" id="queueButton">Add to queue</button>
            </div>
        </div>
    </div>
</div>`};


export const watchedButton = e => {
    console.log(e.currentTarget)
};

export const queueButton = e => {
    console.log(e.currentTarget)
};

