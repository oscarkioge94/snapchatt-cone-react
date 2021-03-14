import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8rW_TrgobeOMJUjz1KanCG2XjXzYD9r4",
    authDomain: "snapchat-clone-7818b.firebaseapp.com",
    projectId: "snapchat-clone-7818b",
    storageBucket: "snapchat-clone-7818b.appspot.com",
    messagingSenderId: "67613800249",
    appId: "1:67613800249:web:84828e30507208d640dae8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};
