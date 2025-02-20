// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRIO54dCvWXJpEusIZ55RYCk-sKTkT0e4",
  authDomain: "email-password-authentic-30848.firebaseapp.com",
  projectId: "email-password-authentic-30848",
  storageBucket: "email-password-authentic-30848.firebasestorage.app",
  messagingSenderId: "440569762785",
  appId: "1:440569762785:web:93fc280acf559d629438a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);