//import { buttonHandler}from './modalCard/modalCard'
import createsFilmCardMarkup from './card-markup';

import { buttonHandler } from './modalCard/modalCard';

import posterSizes from './poster-sizes';

export default function loadTrendMovies() {
  fetchTrendMovies().then(fetchTrendMoviesResponse);
}

const key = '067f291d21ed1c6d30bd9ade17d843cc';
const url = 'https://api.themoviedb.org/3/trending/movie/week';
const content = document.getElementById('content');
const pictureUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;

function fetchTrendMovies() {
  return fetch(`${url}?api_key=${key}`).then(response => {
    return response.json();
  });
}

function fetchTrendMoviesResponse(movies) {
  const moviesTrendList = createsFilmCardMarkup(movies, pictureUrl);
  insertList(moviesTrendList);

  document.querySelector('#movies').addEventListener('click', buttonHandler);
}

function insertList(moviesTrendList) {
  content.innerHTML = moviesTrendList;
}

// function news() {
//     const button = document.querySelector('#button-moda');
// button.addEventListener('click', handleOpen);

// function handleOpen() {
//     console.log('kdfb');
// }
// }
//  function getGenres() {
//       return  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`).then(response => {
//           return response.json().then(console.dir);
//       })
//   }

//  const movie = getGenres();
//   console.log(movie);

//  function getPictureSize() {
//       return  fetch(`https://api.themoviedb.org/3/configuration?api_key=${key}`).then(response => {
//           return response.json();
//       })
//   }

// if (!e.target.classList.contains('film-card')) {
//     console.log("НЕ ТУДА");
//     return;
//   } modal.open(e.target.dataset.source);
