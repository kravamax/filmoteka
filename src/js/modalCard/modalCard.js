import { modalCardMarkup } from "./funcModal/modalCardMarkup";
import { forOpen, forClose } from "./funcForListener/funcForListener";
import movieById from "./funcModal/movieById";
import jBox from 'jbox';
import 'jbox/dist/jBox.all.css';
// ? npm install --save jbox

const key = "KEY"

export const modal = new jBox('Modal', {
  createOnInit: false,
  closeButton: false,
  onOpen() {
    document.querySelector('.modal__button').addEventListener('click', modalButtonHandler);
    forOpen();
  },
  onClose() {
    localStorage.removeItem(key);
    document.querySelector('.modal__button').removeEventListener('click', modalButtonHandler);
    forClose();
  },
});

export const buttonHandler = e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  movieById(e.target.id).then(response => {
    modal.setContent(modalCardMarkup(response.data))
    modal.open();

  })
};

export const modalButtonHandler = e => {
  e.preventDefault();
  modal.close();
};

