// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2HCF77m-RzLFYD2lKPRmL5OXTzKSXD-A",
  authDomain: "heartbreaktherapy-bf4d4.firebaseapp.com",
  projectId: "heartbreaktherapy-bf4d4",
  storageBucket: "heartbreaktherapy-bf4d4.appspot.com",
  messagingSenderId: "1011728309226",
  appId: "1:1011728309226:web:7aeb56f7fcf17c61c43093",
  measurementId: "G-7592M26CZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
