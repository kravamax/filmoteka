const content = document.querySelector('#content');

const handleWatchedPage = (array) => {
    content.innerHTML = '';

    if (localStorage.getItem('is-Signed-In') === 'false') {
        content.innerHTML = `<h1>You're not signed in</h1>`;
        return;
    };

    createMarkUp(array);
    content.innerHTML = createMarkUp(array);
};


const createMarkUp = arg => {
    return arg
        .map(({ id, poster_path, genres, title, release_date, vote_average }) => {
            const date = release_date.slice(0, 4);

            if (genres.length >= 3) {
                genres.splice(2, genres.length - 1, { name: ' other' });
            };

            return `<div class="film-card">
                        <img id="${id}" src="https://image.tmdb.org/t/p/w342${poster_path}" alt="${title}"/>
                            <h2 class="film-title">${title}</h2>
                        <div class="film-info">
                            <p class="film-info__genre"> ${genres.map(({ name }) => ' ' + name)} | ${date}</p>
                            <p class="film-info__rating">${vote_average}</p>
                        </div>
                    </div>`;
        }).join("");
};

export default handleWatchedPage;