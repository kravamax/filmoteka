import "./css/styles.css";
import jBox from 'jbox';
import 'jbox/dist/jBox.all.css';
//npm install --save jbox

// ! куда то подцепить надо
const buttonEl = document.querySelector("#button-modal");


const modal = new jBox('Modal', {
  attach: '#button-modal',
  content: `<div class="modal">
  <div class="modal__button-container">
    <button type="button" class="modal__button">
    <svg class="modal__cross">
        <use href="../../images/modalCard/symbol-defs.svg#icon-modal_cross"></use>
      </svg>
    </button>
  </div>
     <div class="modal__section">
       <div class="modal__poster">
         <img class="modal__img" src=${"https://content.rozetka.com.ua/goods/images/big/177447689.jpg"} alt="movie_poster" />
       </div>
       <div class="modal__container">
         <h1 class="modal__title">Movie Name</h1>
         <div class="modal__information">
           <ul class="modal__item">
             <li class="modal__into"><p>Vote/Votes:</p></li>
             <li class="modal__into"><p>Popularity</p></li>
             <li class="modal__into"><p>Original title</p></li>
             <li class="modal__into"><p>Genre</p></li>
           </ul>
           <ul>
             <li class="modal__into modal__into--vote">
                 <span class="modal__vote">7.3</span> / <span class="modal__votes">1260</span>
             </li class="modal__into">
             <li class="modal__into"><p>100.2</p></li>
             <li class="modal__into"><p class="modal__origin">A FISTFUL OF LEAD</p></li>
             <li class="modal__into"><p>Western</p></li>
           </ul>
         </div>
         <h2 class="modal__subtitle">About</h2>
         <p class="modal__text">
           Four of the West’s most infamous outlaws assemble to steal a huge
           stash of gold from the most corrupt settlement of the gold rush
           towns. But not all goes to plan one is killed and the other three
           escapes with bags of gold hide out in the abandoned gold mine where
           they happen across another gang of three – who themselves were
           planning to hit the very same bank! As tensions rise, things go from
           bad to worse as they realise the bags of gold are filled with
           lead... they’ve been double crossed – but by who and how?
         </p>
         <div class="modal__buttons">
           <button class="button">Add to watched</button>
           <button class="button">Add to queue</button>
         </div>
       </div>
     </div>
   </div>`,
  closeButton: false,    
});

const buttonHandler = e => {
  e.preventDefault();
  modal.open();

  const modalButtonEl = document.querySelector(".modal__button");
  modalButtonEl.addEventListener("click", modalButtonHandler);
  console.log(modalButtonEl)
};

const modalButtonHandler = e => {
  e.preventDefault();
  modal.close();
};

buttonEl.addEventListener("click", buttonHandler);
