// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3mBJ5GqzQVerzfXZAPB4OefyOOlqJqpQ",
  authDomain: "hackathongdsc.firebaseapp.com",
  projectId: "hackathongdsc",
  storageBucket: "hackathongdsc.appspot.com",
  messagingSenderId: "522034567631",
  appId: "1:522034567631:web:48711315886d72c09bdaba",
  measurementId: "G-6LFF20XDG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;