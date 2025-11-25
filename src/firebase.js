// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvxmVrzngR_XBGZXzOzNyzFX5Li9bR3Y",
  authDomain: "teachers-app-e5769.firebaseapp.com",
  databaseURL: 'https://teachers-app-e5769-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "teachers-app-e5769",
  storageBucket: "teachers-app-e5769.firebasestorage.app",
  messagingSenderId: "713272371076",
  appId: "1:713272371076:web:cb3a6c17b4403062b41fd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=  getDatabase(app)