import { getRefs } from '../getRefs';
const { trailerButton } = getRefs();
import { libraryData, modalCardMarkup } from '../modalCard/funcModal/modalCardMarkup';
// import { modal } from '../modalCard';

import axios from 'axios';

// const KEY = '067f291d21ed1c6d30bd9ade17d843cc';
// const data = libraryData;
// const url = `https://api.themoviedb.org/3/movie/${libraryData.id}/videos?api_key=${KEY}&append_to_response=videos`;

export async function searchMovies() {
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     console.error(error);
  //   }
  console.log('message from searchMovies');
  await console.log(modalCardMarkup());
}

// function fetchMovies() {
//     return fetch()
// }

// export async function searchMovies() {
//   try {
//     const response = await fetchMovies(libraryData);

//     return response.results[0].key;
//   } catch (error) {
//     console.error(error);
//   }
// }
