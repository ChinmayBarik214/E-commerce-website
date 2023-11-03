import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCilsA12tdHqZGXaYVnkni2LC7O7UVIC64",
    authDomain: "clone-144d5.firebaseapp.com",
    projectId: "clone-144d5",
    storageBucket: "clone-144d5.appspot.com",
    messagingSenderId: "867553648152",
    appId: "1:867553648152:web:5ae55fdc7dffc667062d6d",
    measurementId: "G-516VWD5K41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};