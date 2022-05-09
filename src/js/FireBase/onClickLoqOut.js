import { initializeApp } from 'firebase/app';
import modalAuth from './modalAuth';
//import getModalData from './FireBase/getModalData';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { onAuthStateChanged } from 'firebase/auth';
import getModalData from './getModalData';
import closeModalAuth from './closeModalAuth';

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

export default function onClickLogOut() {
  localStorage.setItem('is-Signed-In', false);
  localStorage.setItem('state-user-Button', false);
  auth.signOut();
  alert('You are log out');
}
