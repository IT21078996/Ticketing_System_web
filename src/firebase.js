// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxMeEquvRqLYMHSWRf-23FJrPhVhhFfus",
  authDomain: "bushub-29406.firebaseapp.com",
  projectId: "bushub-29406",
  storageBucket: "bushub-29406.appspot.com",
  messagingSenderId: "264802098002",
  appId: "1:264802098002:web:72397088656fbb586c788b",
  measurementId: "G-YELQ1YBZTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

export { app };
export { firestore };