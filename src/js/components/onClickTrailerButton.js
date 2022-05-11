import { searchMovies } from '../api/fetchTrailer';

export default async function onClickTrailerButton() {
  searchMovies();

  console.log('onclickTrailerButton function');
}
