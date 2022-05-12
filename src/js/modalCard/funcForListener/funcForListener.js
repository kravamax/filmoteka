import { watchedButton, queueButton, onTrailerButtonClick } from '../funcModal/modalCardMarkup';

export const forOpen = () => {
  document.querySelector('#watchedButton').addEventListener('click', watchedButton);
  document.querySelector('#queueButton').addEventListener('click', queueButton);
  document.querySelector('#trailerButton').addEventListener('click', onTrailerButtonClick);
};

export const forClose = () => {
  document.querySelector('#watchedButton').removeEventListener('click', watchedButton);
  document.querySelector('#queueButton').removeEventListener('click', queueButton);
  document.querySelector('#trailerButton').removeEventListener('click', onTrailerButtonClick);
};
