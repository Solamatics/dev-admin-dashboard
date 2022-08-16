import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dev-admin-98e9a.firebaseapp.com",
  projectId: "dev-admin-98e9a",
  storageBucket: "dev-admin-98e9a.appspot.com",
  messagingSenderId: "825878335029",
  appId: "1:825878335029:web:40582e409c26ac87b12b7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
