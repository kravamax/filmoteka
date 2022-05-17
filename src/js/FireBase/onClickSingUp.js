import { initializeApp } from 'firebase/app';
import modalAuth from './modalAuth';
import Notiflix from 'notiflix';
//import getModalData from './FireBase/getModalData';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { onAuthStateChanged } from 'firebase/auth';
import getModalData from './getModalData';
import closeModalAuth from './closeModalAuth';
import onClickStateUser from './onClickStateUSer';
import blackThemeLogin from '../blackTheme/blackThemeLogin';

const firebaseConfig = {
  apiKey: 'AIzaSyA0Jg3owd7CYZ_lII5XL2NnspjHhLrMIPQ',
  authDomain: 'filmoteka-it-people.firebaseapp.com',
  projectId: 'filmoteka-it-people',
  storageBucket: 'filmoteka-it-people.appspot.com',
  messagingSenderId: '809306812153',
  appId: '1:809306812153:web:98a43635dcd9e66607fc28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Notiflix.Notify.merge({
//  width: '320px',
//   fontSize: '18px',
//   zindex: 10002,
//   timeout: 1500,
//   pauseOnHover: false,
//   clickToClose: true,
//   backOverlay: true,

//   warning: {
//     background: 'rgba(0,0,0,0.8)',
//     textColor: '#FF6B08',
//     notiflixIconColor: '#FF6B08',
//     backOverlayColor: 'rgba(0,0,0,0.4)',
//   },
// });
export default function onClickSingUp() {
  modalWindow.innerHTML = modalAuth('Register', 'Sign up');
  const login__cls = document.querySelector('.modal__cross--reg');

  login__cls.addEventListener('click', () => {
    modalWindow.innerHTML = '';
  });
  blackThemeLogin();
  const form = document.querySelector('.login-form');

  closeModalAuth();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = getModalData(e);

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(userCredential => {
        const user = userCredential.user;

        modalWindow.innerHTML = '';
        // console.log(user);
        onClickStateUser();
        // ...
      })
      .catch(error => {
        Notiflix.Notify.warning('That user is already registered. Enter other login');
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    //   .finally(console.log(onClickStateUser()));
  });
}
