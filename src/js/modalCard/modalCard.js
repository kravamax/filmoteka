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
  onOpen() {
    document.querySelector(".modal__button").addEventListener("click", modalButtonHandler);
    document.querySelector("#watchedButton").addEventListener("click", watched);
    document.querySelector("#queueButton").addEventListener("click", queue);
  },
  onClose() {
    document.querySelector(".modal__button").removeEventListener("click", modalButtonHandler);
    document.querySelector("#watchedButton").removeEventListener("click", watched);
    document.querySelector("#queueButton").removeEventListener("click", queue);
  }
});

const buttonHandler = e => {
  e.preventDefault();
  console.log(document.querySelector(".modal__button"))
  modal.open();
  console.log(document.querySelector(".modal__button"))
};

const modalButtonHandler = e => {
  e.preventDefault();
  modal.close();
  console.log(document.querySelector(".modal__button"))
  
};

const watched = e => {
  console.log("watched")
}

const queue = e => {
  console.log("queue")
}

buttonEl.addEventListener("click", buttonHandler);