export default function createsFilmCardMarkup(data, pictureUrl) {
 
  return data.results
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      let movieGenres = [];
      function getGenre() {  
        genre_ids.map( genre => {
          allGenres.filter( oneGenre => {
            if(oneGenre.id === genre) {
              movieGenres.push(` ${oneGenre.name}`);
            }
          });
        })
      }
      
      getGenre();

      const date = release_date.slice(0, 4);
      return `
    <div class="film-card">
      <img src="${pictureUrl}${poster_path}" alt="${title}"/>
        <h2 class="film-title">${title}</h2>
      <div class="film-info">
        <p class="film-info__genre">${movieGenres}</p>
        <p class="film-info__release-date">${date}</p>
        <p class="film-info__rating">${vote_average}</p>
      </div>
    </div>`;
    })
    .join('');
}

const allGenres = [
  {id: 28, name: "Action"},
  {id: 12, name: "Adventure"},
  {id: 16, name: "Animation"},
  {id: 35, name: "Comedy"},
  {id: 80, name: "Crime"},
  {id: 99, name: "Documentary"},
  {id: 18, name: "Drama"},
  {id: 10751, name: "Family"},
  {id: 14, name: "Fantasy"},
  {id: 36, name: "History"},
  {id: 27, name: "Horror"},
  {id: 10402, name: "Music"},
  {id: 9648, name: "Mystery"},
  {id: 10749, name: "Romance"},
  {id: 878, name: "Science Fiction"},
  {id: 10770, name: "TV Movie"},
  {id: 53, name: "Thriller"},
  {id: 10752, name: "War"},
  {id: 37, name: "Western"},
];


