import createsFilmCardMarkup from './card-markup';
import blackThemeText from './blackTheme/blackThemeText';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
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

function fetchTrendMoviesResponse(movies) {
  // trendMovies = [...trendMovies, ...movies.results];

  const moviesTrendList = createsFilmCardMarkup(movies.results, pictureUrl);
  insertList(moviesTrendList);
  // page += 1;
  // console.log(page);
  document.querySelector('#content').addEventListener('click', buttonHandler);
  blackThemeText();
}

function insertList(moviesTrendList) {
  content.innerHTML = moviesTrendList;
}

// function scroll() {
//   const scroll = document.querySelector('.scroll');

//   const loadMoreScroll = entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         fetchTrendMovies(page).then(fetchTrendMoviesResponse);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(movies => {
//     loadMoreScroll(movies);
//   });

//   observer.observe(scroll);
// }

// function scroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   const total = 500;
//   if (scrollTop + clientHeight >= scrollHeight - 5 && (total === 0 || page * 20 < total)) {
//     console.log('in if');

//     page += 1;
//     console.log(page);
//     fetchTrendMovies(page).then(fetchTrendMoviesResponse);
//     console.log(10);
//     // fetchTrendMovies(page).then(console.log);
//   }
// }
// -----Pagination
const options = {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
};
const containerP = document.getElementById('pagination');
const pagination = new Pagination(containerP, options);

pagination.on('afterMove', ({ page }) => {
  loadTrendMovies(page);
});
