import createsFilmCardMarkup from './card-markup';

import { buttonHandler } from './modalCard/modalCard';

import posterSizes from './poster-sizes';

export default function loadTrendMovies() {
  let signedIn = false;
  const isSignedIn = "is-Signed-In";
  localStorage.setItem(isSignedIn, signedIn);
  if(localStorage.getItem("state-user-Button") === "true") {
    localStorage.setItem(isSignedIn, "true");
  }

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

  document.querySelector('#content').addEventListener('click', buttonHandler);
}

function insertList(moviesTrendList) {
  content.innerHTML = moviesTrendList;
}