import axios from 'axios';
import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import createsFilmCardMarkup from './card-markup';
import { buttonHandler } from './modalCard/modalCard';
import posterSizes from './poster-sizes';
import { getRefs } from './getRefs';
import blackThemeText from './blackTheme/blackThemeText';
const { content } = getRefs();

const URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = '067f291d21ed1c6d30bd9ade17d843cc';
const picturesUrl = `https://image.tmdb.org/t/p/${posterSizes.w342}`;
const containerP = document.getElementById('pagination');
const containerF = document.getElementById('pagination-find');
const trendButtons = document.querySelector('.header__top');
let oldQuery = '';
let query = '';
let page = 1;

async function fetchMovies(query, page) {
  const url = `${URL}?api_key=${KEY}&query=${query}&page=${page}`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function searchMovies(event) {
  event.preventDefault();

  trendButtons.classList.add('invisible');
  containerP.classList.add('invisible');
  containerF.classList.remove('invisible');
  content.innerHTML = '';

  query = event.currentTarget.elements.filmName.value.trim();
  if (query === '') {
    Notiflix.Notify.warning('Please, enter  the movie name and try again');
    return;
  }

  fetchMovies(query, page).then(({ results, total_pages }) => {
    if (results.length === 0) {
      Notiflix.Notify.warning(
        'Search result not successful. Enter the correct movie name and try again',
      );
      return;
    }
    const options = {
      totalItems: 1,
      itemsPerPage: 20,
      visiblePages: 5,
    };
    options.totalItems = total_pages * 20;

    const paginationF = new Pagination(containerF, options);
    if (oldQuery === query) {
      paginationF.reset();
    }
    oldQuery = query;
    paginationF.on('afterMove', ({ page }) => {
      fetchMovies(query, page).then(({ results }) => renderMarkup(results));
    });
    renderMarkup(results);
  });
  content.innerHTML = '';
  event.currentTarget.reset();
}

function renderMarkup(movies) {
  const searchList = createsFilmCardMarkup(movies, picturesUrl);
  content.innerHTML = searchList;

  content.addEventListener('click', buttonHandler);
  // todo add blackTheme
  blackThemeText();
}
