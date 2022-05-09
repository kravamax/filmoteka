//import modalAuth from './modalAuth';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {onAuthStateChanged } from "firebase/auth";



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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let mainKey = 0;
const key = "Key";


// const firebaseConfig = {
//   apiKey: 'AIzaSyA0Jg3owd7CYZ_lII5XL2NnspjHhLrMIPQ',
//   authDomain: 'filmoteka-it-people.firebaseapp.com',
//   projectId: 'filmoteka-it-people',
//   storageBucket: 'filmoteka-it-people.appspot.com',
//   messagingSenderId: '809306812153',
//   appId: '1:809306812153:web:98a43635dcd9e66607fc28',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default function onClickStateUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            //console.log(auth.signOut());
            mainKey = user.uid;
            console.log(uid);
            
            putKeyToLocal();
            // ...
        } else {
            // User is signed out
            console.log('No user');
            // ...
        }
    });
}

function putKeyToLocal() {
    localStorage.setItem("is-Signed-In", true);
    localStorage.setItem(key, mainKey);
    localStorage.setItem("state-user-Button", true);
}