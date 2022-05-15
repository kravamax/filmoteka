import createsFilmCardMarkup from './card-markup';
import blackThemeText from './blackTheme/blackThemeText';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { buttonHandler } from './modalCard/modalCard';

import posterSizes from './poster-sizes';
let page = 1;
export default function loadTrendMovies(page) {
  let signedIn = false;
  const isSignedIn = 'is-Signed-In';
  localStorage.setItem(isSignedIn, signedIn);
  if (localStorage.getItem('state-user-Button') === 'true') {
    localStorage.setItem(isSignedIn, 'true');
  }
  // scroll();

  fetchTrendMovies(page).then(fetchTrendMoviesResponse);
}

let trendMovies = [];
const key = '067f291d21ed1c6d30bd9ade17d843cc';
const url = 'https://api.themoviedb.org/3/trending/movie/week';
const content = document.getElementById('content');
const pictureUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;

function fetchTrendMovies(page) {
  return fetch(`${url}?api_key=${key}&page=${page}`).then(response => {
    return response.json();
  });
}

function fetchTrendMoviesResponse({ results, total_pages }) {
  const moviesTrendList = createsFilmCardMarkup(results, pictureUrl);
  insertList(moviesTrendList);

  document.querySelector('#content').addEventListener('click', buttonHandler);
  blackThemeText();
}

function insertList(moviesTrendList) {
  content.innerHTML = moviesTrendList;
}

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
};
const containerP = document.getElementById('pagination');
const pagination = new Pagination(containerP, options);

pagination.on('afterMove', ({ page }) => {
  loadTrendMovies(page);
});
