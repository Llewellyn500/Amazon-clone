import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBG4Dp0HHjCt435q7NSpe1AABJfhw8PXjE",
  authDomain: "e-clone-f33a0.firebaseapp.com",
  databaseURL: "https://e-clone-f33a0.firebaseio.com",
  projectId: "e-clone-f33a0",
  storageBucket: "e-clone-f33a0.appspot.com",
  messagingSenderId: "567449758288",
  appId: "1:567449758288:web:202964b9779e1bb6cdff55",
  measurementId: "G-EXTJ85BWKW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};