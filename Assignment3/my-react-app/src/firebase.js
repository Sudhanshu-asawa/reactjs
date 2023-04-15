// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm0znAaN4VTagQGV9cOqLhvpmB0ab3urQ",
  authDomain: "assign3-e7821.firebaseapp.com",
  projectId: "assign3-e7821",
  storageBucket: "assign3-e7821.appspot.com",
  messagingSenderId: "621210078260",
  appId: "1:621210078260:web:90596a06e2a58033f30e61",
  measurementId: "G-3CJN82PLD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};