// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVA3ioHbPf0tIA2bJ7MpO8X_LfPzfsRwE",
  authDomain: "linkedin-clone-6de22.firebaseapp.com",
  projectId: "linkedin-clone-6de22",
  storageBucket: "linkedin-clone-6de22.appspot.com",
  messagingSenderId: "641131543746",
  appId: "1:641131543746:web:91710e14ff496370868f5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
