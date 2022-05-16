import { watchedButton, queueButton, onTrailerButtonClick } from '../funcModal/modalCardMarkup';

export const forOpen = () => {
  document.querySelector('#watchedButton').addEventListener('click', watchedButton);
  document.querySelector('#queueButton').addEventListener('click', queueButton);
  document.querySelector('#trailerModal').addEventListener('click', onTrailerButtonClick);
};

export const forClose = () => {
  document.querySelector('#watchedButton').removeEventListener('click', watchedButton);
  document.querySelector('#queueButton').removeEventListener('click', queueButton);
  document.querySelector('#trailerModal').removeEventListener('click', onTrailerButtonClick);
};
