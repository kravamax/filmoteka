import allGenres from './genres';

export default function createsFilmCardMarkup(data, pictureUrl) {
  return data
    .map(({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
      let movieGenres = [];
      function getGenre() {
        genre_ids.map(genre => {
          allGenres.filter(oneGenre => {
            if (oneGenre.id === genre) {
              movieGenres.push(` ${oneGenre.name}`);
            }
          });
        });
        if (genre_ids.length >= 3) {
          movieGenres.splice(2, genre_ids.length - 1, ' other');
        }
      }

      getGenre();

      const date = release_date.slice(0, 4);

      return `
    <div id="${id}" class="film-card animate__animated animate__fadeIn">
      ${
        poster_path
          ? `<img id="${id}" src="${pictureUrl}${poster_path}" alt="${title}"/>`
          : `<img id="${id}"/>`
      }
        <h2 id="${id}" class="film-title">${title}</h2>
      <div id="${id}" class="film-info">
        <p id="${id}" class="film-info__genre">${movieGenres} | ${date}</p>
        <p id="${id}" class="film-info__rating">${vote_average}</p>
      </div>
    </div>`;
    })
    .join('');
}
