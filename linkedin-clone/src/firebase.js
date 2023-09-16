import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcePB-nDO3n5dEGxvHwOO3W0lRdOLg-BI",
    authDomain: "linkedin-clone-24443.firebaseapp.com",
    databaseURL: "https://linkedin-clone-24443-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-24443",
    storageBucket: "linkedin-clone-24443.appspot.com",
    messagingSenderId: "347896503358",
    appId: "1:347896503358:web:c55d6fbf9e9e5856c6856f",
    measurementId: "G-PFBGNV94NW"
  };



const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };