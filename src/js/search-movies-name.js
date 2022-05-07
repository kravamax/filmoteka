const URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = '067f291d21ed1c6d30bd9ade17d843cc';

export function fetchMovies(name) {
  return fetch(`${URL}?api_key=${KEY}&query=${name}`).then(response => {
    if (!response.ok) {
      throw Error(`Error: ${response.status}`);
    }
   return response.json();
  });
}

// const picturesUrl = 'https://image.tmdb.org/t/p/w500';
// const formEl = document.querySelector('.header-form');
// const moviesEl = document.getElementById('movies');
// let inputValue = '';

// function renderMarkup(movies) {
//   const searchList = createsFilmCardMarkup(movies, picturesUrl);
//   moviesEl.insertAdjacentHTML('beforeend', searchList);
// }

// formEl.addEventListener('submit', searchMovies);

// function searchMovies(event) {
//   event.preventDefault();

//   inputValue = event.currentTarget.elements.filmName.value.trim();
//   if (inputValue === '') {
//     return;
//   }
//   fetchMovies(inputValue).then(renderMarkup);
// }
