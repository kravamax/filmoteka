import axios from 'axios';
import createsFilmCardMarkup from "./card-markup";
import { buttonHandler } from './modalCard/modalCard';
import posterSizes from './poster-sizes';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.headers.get["Content-Type"] = "application/json; charset=utf-8";

const KEY = "067f291d21ed1c6d30bd9ade17d843cc";

const contentEl = document.getElementById('#content');
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

function searchMovies(event) {
  event.preventDefault();
  page = 1;
  query = event.currentTarget.elements.filmName.value.trim();
  if (inputValue === '') {
    return;
  }
  contentEl.innerHTML = "";
  fetchMovies(query).then(renderMarkup);
}

function renderMarkup(movies) {
  const searchList = createsFilmCardMarkup(movies, picturesUrl);
  contentEl.innerHTML('beforeend', searchList);
}


export { searchMovies };