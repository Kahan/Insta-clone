import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxqteWPo9fYG0mAe8L4DvtJv6rPtREr-M",
  authDomain: "insta-clone-7e90e.firebaseapp.com",
  databaseURL: "https://insta-clone-7e90e.firebaseio.com",
  projectId: "insta-clone-7e90e",
  storageBucket: "insta-clone-7e90e.appspot.com",
  messagingSenderId: "307085235861",
  appId: "1:307085235861:web:9e78d50a99cadcd1bd2d9c",
  measurementId: "G-WP654VW72B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { firebase, db, auth, storage };
