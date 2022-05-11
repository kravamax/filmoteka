import { watchedButton, queueButton } from '../funcModal/modalCardMarkup';
import onClickTrailerButton from '../../components/onClickTrailerButton';

export const forOpen = () => {
  document.querySelector('#watchedButton').addEventListener('click', watchedButton);
  document.querySelector('#queueButton').addEventListener('click', queueButton);
  document.querySelector('#trailerButton').addEventListener('click', onClickTrailerButton);
};

export const forClose = () => {
  document.querySelector('#watchedButton').removeEventListener('click', watchedButton);
  document.querySelector('#queueButton').removeEventListener('click', queueButton);
  document.querySelector('#trailerButton').removeEventListener('click', onClickTrailerButton);
};
