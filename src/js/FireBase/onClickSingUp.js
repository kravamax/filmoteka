import { initializeApp } from 'firebase/app';
import modalAuth from './modalAuth';

//import getModalData from './FireBase/getModalData';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { onAuthStateChanged } from 'firebase/auth';
import getModalData from './getModalData';
import closeModalAuth from './closeModalAuth';
import onClickStateUser from './onClickStateUSer';

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

export default function onClickSingUp() {
  modalWindow.innerHTML = modalAuth('Register');
  const login__cls = document.querySelector('.modal__cross--reg');

  login__cls.addEventListener('click', () => {
    modalWindow.innerHTML = '';
  });
  const form = document.querySelector('.login-form');

  closeModalAuth();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = getModalData(e);

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(userCredential => {
        const user = userCredential.user;
        alert(`Register ${user.email} successful`);
        modalWindow.innerHTML = '';
        // console.log(user);
        onClickStateUser();
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    //   .finally(console.log(onClickStateUser()));
  });
}
