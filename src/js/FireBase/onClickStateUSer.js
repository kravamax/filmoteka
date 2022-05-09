//import modalAuth from './modalAuth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import renderNavList from './renderNavList';
import renderNavListNoUser from './renderNavListNoUser';
import { createNewUser } from '../../index';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function onClickStateUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
    }
  });
}

function putKeyToLocal() {
  localStorage.setItem('is-Signed-In', true);
  localStorage.setItem(key, mainKey);
  localStorage.setItem('state-user-Button', true);
}
