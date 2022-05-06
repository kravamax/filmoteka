import modalCardMarkup from './funcModal/modalCardMarkup';
import watchedButton from './funcModal/watchedButton';
import queueButton from './funcModal/queueButton';
import jBox from 'jbox';
import 'jbox/dist/jBox.all.css';
// ? npm install --save jbox

// ! куда то подцепить надо
//const buttonEl = document.querySelector("#button-modal");
let filmId;

export const modal =  new jBox('Modal', {
  //attach: '#movies',
  content: modalCardMarkup(),
  closeButton: false,
  onOpen() {
    document.querySelector(".modal__button").addEventListener("click", modalButtonHandler);
    document.querySelector("#watchedButton").addEventListener("click", watchedButton);
    document.querySelector("#queueButton").addEventListener("click", queueButton);
  },
  onClose() {
    document.querySelector(".modal__button").removeEventListener("click", modalButtonHandler);
    document.querySelector("#watchedButton").removeEventListener("click", watchedButton);
    document.querySelector("#queueButton").removeEventListener("click", queueButton);
  }
});

export const buttonHandler = e => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return 
  }
  filmId = e.target.id
  console.log(filmId)
  modal.open();
};

export const modalButtonHandler = e => {
  e.preventDefault();
  console.log(filmId)
  modal.close();
};

//buttonEl.addEventListener("click", buttonHandler);