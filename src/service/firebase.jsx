// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//   apiKey: import.meta.env.VITE_API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyAUGHdUo2bbd-l2r5UK3f6WTVyNcAB0XrY",
  authDomain: "coder-flex-81795-jm.firebaseapp.com",
  projectId: "coder-flex-81795-jm",
  storageBucket: "coder-flex-81795-jm.firebasestorage.app",
  messagingSenderId: "373448309347",
  appId: "1:373448309347:web:62efdb47d1f92ebd685656",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
