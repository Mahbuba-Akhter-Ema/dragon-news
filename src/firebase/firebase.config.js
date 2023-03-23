// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAE1AzH8NXP52ih2fwdRSQPOphxrSv4E",
  authDomain: "dragon-news-b17f9.firebaseapp.com",
  projectId: "dragon-news-b17f9",
  storageBucket: "dragon-news-b17f9.appspot.com",
  messagingSenderId: "1086369462215",
  appId: "1:1086369462215:web:fcdf98568d733a0cc4cbe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;