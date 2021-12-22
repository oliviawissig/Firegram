// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbnfGDmCxEjzYqgUTtkCJqZaf9oxg4fD4",
  authDomain: "firegram-d8be0.firebaseapp.com",
  projectId: "firegram-d8be0",
  storageBucket: "firegram-d8be0.appspot.com",
  messagingSenderId: "1068130104910",
  appId: "1:1068130104910:web:d38dc469ce7917e1c3351f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };