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
const scroll = document.querySelector('.scroll');
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

  query = event.currentTarget.elements.filmName.value.trim();
  if (query === '') {
    // Notiflix.Notify.warning(
    //   'Please, enter  the movie name and try again',
    // );
    console.log('Please, enter  the movie name and try again');
    return;
  }

  fetchMovies(query, page).then(({ results }) => {
    if (results.length === 0) {
      // Notiflix.Notify.failure(
      //   'Search result not successful. Enter the correct movie name and try again',
      // );
      console.log('Search result not successful. Enter the correct movie name and try again');
      return;
    }
    renderMarkup({ results });
  });
  
  content.innerHTML = '';
  event.currentTarget.reset();
}

const loadMoreScroll = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && query !== '') {
      fetchMovies(query, page).then(({ results }) => {
        page += 1;
        renderMarkup({ results });
      });
    }
  });
};

const observer = new IntersectionObserver(loadMoreScroll);

observer.observe(scroll);

function renderMarkup(movies) {
  const searchList = createsFilmCardMarkup(movies, picturesUrl);
  content.insertAdjacentHTML('beforeend', searchList);

  content.addEventListener('click', buttonHandler);
}
