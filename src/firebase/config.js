import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhn4qbQuYk7Q1KrHWYw-JSbiFRECUVSxk",
  authDomain: "mymoney-cbedf.firebaseapp.com",
  projectId: "mymoney-cbedf",
  storageBucket: "mymoney-cbedf.appspot.com",
  messagingSenderId: "624214955221",
  appId: "1:624214955221:web:e9f687d868f7fd15833e5c",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
