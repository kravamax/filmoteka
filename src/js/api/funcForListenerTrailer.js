import { watchedButton, queueButton } from '../funcModal/modalCardMarkup';
import { getRefs } from '../../getRefs';
const { trailerButton } = getRefs();
import { libraryData } from '../funcModal/modalCardMarkup';
// import { modal } from '../modalCard';

import axios from 'axios';



const KEY = '067f291d21ed1c6d30bd9ade17d843cc';

async function fetchMovies(libraryData) {
  

const url = `https://api.themoviedb.org/3/movie/${libraryData.id}/videos?api_key=${KEY}&append_to_response=videos`;
  try {
    const response = await axios.get(url);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchMovies() {
  try {
    const response = await fetchMovies(libraryData);
    const link = await String('https://www.youtube.com/watch?v=' + response.results[0].key);

    await console.log(link);
  } catch (error) {
    console.error(error);
  }
}


export const forOpen = () => {
  document.querySelector('#watchedButton').addEventListener('click', watchedButton);
  document.querySelector('#queueButton').addEventListener('click', queueButton);
  document.querySelector('#trailerButton').addEventListener('click', onClickTrailerButton);
  console.log(document.querySelector('#trailerButton'));
};

export const forClose = () => {
  document.querySelector('#watchedButton').removeEventListener('click', watchedButton);
  document.querySelector('#queueButton').removeEventListener('click', queueButton);
  document.querySelector('#trailerButton').removeEventListener('click', onClickTrailerButton);
};

const modal__section = document.querySelector('.modal__section');
async function onClickTrailerButton() {
  searchMovies();
  console.log(modal__section);

  // modal__section.innerHTML = `<div>
  //     <a
  //       class="no_click play_trailer"
  //       href="${searchMovies()}"
  //       data-site="YouTube"
  //       data-id="j9Hjrs6WQ8M"
  //       data-title="Life Of Pi - Official Trailer"
  //     >
  //     </a>
  // </div>`;
  console.log(modal__section);
}