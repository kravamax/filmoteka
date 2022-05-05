import modalCardMarkup from './funcModal/modalCardMarkup';
import jBox from 'jbox';
import 'jbox/dist/jBox.all.css';
// ? npm install --save jbox

// ! куда то подцепить надо
const buttonEl = document.querySelector("#button-modal");

const modal = new jBox('Modal', {
  attach: '#button-modal',
  content: modalCardMarkup,
  closeButton: false,    
});

const buttonHandler = e => {
  e.preventDefault();
  modal.open();

  const modalButtonEl = document.querySelector(".modal__button");
  modalButtonEl.addEventListener("click", modalButtonHandler);
};

const modalButtonHandler = e => {
  e.preventDefault();
  modal.close();
};

buttonEl.addEventListener("click", buttonHandler);