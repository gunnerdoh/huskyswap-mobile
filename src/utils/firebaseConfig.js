import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwtu8gPlyVeNuScupS4ZWmgYYfe40x7ns",
  authDomain: "huskyswap-237c0.firebaseapp.com",
  projectId: "huskyswap-237c0",
  storageBucket: "huskyswap-237c0.appspot.com",
  messagingSenderId: "493294037363",
  appId: "1:493294037363:web:16ff68d021616cd3a23d06",
  measurementId: "G-8RCCXELHKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics, storage, onAuthStateChanged };