import { onAuthStateChanged } from 'firebase/auth';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA0Jg3owd7CYZ_lII5XL2NnspjHhLrMIPQ',
  authDomain: 'filmoteka-it-people.firebaseapp.com',
  projectId: 'filmoteka-it-people',
  storageBucket: 'filmoteka-it-people.appspot.com',
  messagingSenderId: '809306812153',
  appId: '1:809306812153:web:98a43635dcd9e66607fc28',
};

import renderNavList from './renderNavList';
import renderNavListNoUser from './renderNavListNoUser';
import { createNewUser } from '../../index';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let mainKey = 0;
const keyW = "Key";
const keyQ = "Key!"
export default function onClickStateUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user;
      console.log(uid.email)
      mainKey = user.uid;
      putKeyToLocal();
    }
  });
}

function putKeyToLocal() {
  localStorage.setItem('is-Signed-In', true);
  localStorage.setItem(keyW, mainKey);
  localStorage.setItem(keyQ, mainKey + "!");
  localStorage.setItem('state-user-Button', true);
}
