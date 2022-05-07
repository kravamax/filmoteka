import axios from 'axios';
import createsFilmCardMarkup from "./card-markup";
import posterSizes from './poster-sizes';

export default function searchMovies() {
  fetchMovies().then(searchMovies).then(renderMarkup);
}

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.headers.get["Content-Type"] = "application/json; charset=utf-8";

const KEY = "067f291d21ed1c6d30bd9ade17d843cc";

const formEl = document.querySelector('.header-form');
const contentEl = document.getElementById('#content');
const picturesUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;
let inputValue = '';

async function fetchMovies(query, page) {
  const url = `?api_key=${KEY}&query=${query}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

formEl.addEventListener('submit', searchMovies);

function searchMovies(event) {
  event.preventDefault();

  inputValue = event.currentTarget.elements.filmName.value.trim();
  if (inputValue === '') {
    return;
  }
  fetchMovies(inputValue).then(renderMarkup);
  contentEl.innerHTML = "";
  formEl.reset();
}

function renderMarkup(movies) {
  const searchList = createsFilmCardMarkup(movies, picturesUrl);
  contentEl.insertAdjacentHTML('beforeend', searchList);
}
