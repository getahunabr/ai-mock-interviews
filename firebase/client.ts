// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHxOwDtD5MCxDJGSOOX_ahhwQF5Iao5o",
  authDomain: "prepwise-cb630.firebaseapp.com",
  projectId: "prepwise-cb630",
  storageBucket: "prepwise-cb630.firebasestorage.app",
  messagingSenderId: "523866950502",
  appId: "1:523866950502:web:d3a001f585b1102b5fd6a7",
  measurementId: "G-MXPQHRPQKF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
