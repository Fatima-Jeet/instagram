// firebaseConfig.js
"use client";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_L9moHzCDn3JFlQ31jjZOeZxgMPC54c",
  authDomain: "insta-f4e09.firebaseapp.com",
  projectId: "insta-f4e09",
  storageBucket: "insta-f4e09.appspot.com",
  messagingSenderId: "1045342155435",
  appId: "1:1045342155435:web:1033ac31547a85a995fdee",
  measurementId: "G-FPNZ5WL73K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
//const analytics = getAnalytics(app);

export { firestore };
