// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo86rsTraF8as27lhmlEDJkdnddq5U0ws",
  authDomain: "insta-d1a03.firebaseapp.com",
  projectId: "insta-d1a03",
  storageBucket: "insta-d1a03.appspot.com",
  messagingSenderId: "948454257280",
  appId: "1:948454257280:web:38cb3231175e1c51ddec65",
  measurementId: "G-P6FH75FVZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { firestore };
