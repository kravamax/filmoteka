export default function createsFilmCardMarkup(data) {
  return data
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      return `
    <div class="film-card">
      <img src="${poster_path}" alt="${title}"/>
        <h2 class="film-title">${title}</h2>
      <div class="film-info">
        <p class="film-info__genre">${genre_ids}</p>
        <p class="film-info__release-date">${release_date}</p>
        <p class="film-info__rating">${vote_average}</p>
      </div>
    </div>`;
    })
    .join('');
}
