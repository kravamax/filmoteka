import axios from 'axios';
// import { render } from 'sass';
import createsFilmCardMarkup from './card-markup';
import { buttonHandler } from './modalCard/modalCard';
import posterSizes from './poster-sizes';
import { getRefs } from './getRefs';
const { content } = getRefs();

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';

const KEY = '067f291d21ed1c6d30bd9ade17d843cc';

const picturesUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;
let query = '';
let page = 1;

async function fetchMovies(query, page) {
  const url = `?api_key=${KEY}&query=${query}&page=${page}`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function searchMovies(event) {
  event.preventDefault();
  page = 1;
  query = event.currentTarget.elements.filmName.value.trim();
  // if (inputValue === '') {
  //   return;
  // }
  content.innerHTML = '';
  return fetchMovies(query, page).then(renderMarkup);
}

function renderMarkup(movies) {
  const searchList = createsFilmCardMarkup(movies, picturesUrl);
  content.insertAdjacentHTML('beforeend', searchList);
}
