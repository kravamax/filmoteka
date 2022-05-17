import { modalCardMarkup } from './funcModal/modalCardMarkup';
import { forOpen, forClose } from './funcForListener/funcForListener';
import movieById from './funcModal/movieById';
import blackThemeModal from '../blackTheme/blackThemeModal';

import jBox from 'jbox';
import 'jbox/dist/jBox.all.css';
// ? npm install --save jbox

export const modal = new jBox('Modal', {
  createOnInit: false,
  closeButton: false,
  fade: 350,
  onOpen() {
    document.querySelector('.modal__button').addEventListener('click', modalButtonHandler);
    forOpen();
    blackThemeModal();
  },
  onClose() {
    document.querySelector('.modal__button').removeEventListener('click', modalButtonHandler);
    forClose();
  },
});

export const buttonHandler = e => {
  e.preventDefault();

  if (
    e.target.id === 'content' ||
    e.target.className === 'header__btn header__btn--empty btn-active' ||
    e.target.className === 'empty__text'
  ) {
    return;
  }

  movieById(e.target.id).then(response => {
    modal.setContent(modalCardMarkup(response.data));
    modal.open();
  });
};

export const modalButtonHandler = e => {
  e.preventDefault();
  modal.close();
};
