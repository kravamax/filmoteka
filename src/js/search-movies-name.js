import axios from 'axios';
import Notiflix from 'notiflix';
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
  content.innerHTML = '';

  query = event.currentTarget.elements.filmName.value.trim();
  if (query === '') {
    Notiflix.Notify.warning('Please, enter  the movie name and try again');
    return;
  }

  fetchMovies(query, page)
    .then(({ results }) => {
      if (results.length === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again',
        );
        return;
      }
      return results;
    })
    .then(renderMarkup);

  event.currentTarget.reset();
}

function renderMarkup() {
  const scroll = document.querySelector('.scroll');

  const loadMoreScroll = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && query !== '') {
        fetchMovies(query, page).then(results => {
          if (page > results.total_pages) {
            Notiflix.Notify.info("SWe're sorry, but you've reached the end of search results.");
            return;
          }
          page += 1;
          const searchList = createsFilmCardMarkup(results, picturesUrl);
          content.insertAdjacentHTML('beforeend', searchList);

          document.querySelector('#content').addEventListener('click', buttonHandler);
        });
      }
    });
  };

  const observer = new IntersectionObserver(loadMoreScroll);

  observer.observe(scroll);
}
