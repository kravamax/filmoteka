import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { onAuthStateChanged } from 'firebase/auth';
import modalAuth from './modalAuth';
import closeModalAuth from './closeModalAuth';
//import getModalData from './FireBase/getModalData';

import getModalData from './getModalData';
import onClickStateUser from './onClickStateUSer';
let uid = '';

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

export default function onClickSingIn() {
  modalWindow.innerHTML = modalAuth('Login');
  const form = document.querySelector('.login-form');
  const login__cls = document.querySelector('.modal__cross--reg');

  login__cls.addEventListener('click', () => {
    modalWindow.innerHTML = '';
  });
  closeModalAuth();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = getModalData(e);

    if (!user) {
      return;
    }
    //const form = document.querySelector('.login-form');

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        alert(`Enter ${user.email} successful`);
        modalWindow.innerHTML = '';

        onAuthStateChanged(auth, user => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            uid = user.uid;
            onClickStateUser();
            //console.log(auth.signOut());
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}
