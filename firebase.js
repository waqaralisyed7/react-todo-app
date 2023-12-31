// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiTuIrGeO0NDPSOD9hfXkhd7hDQ2MAKb8",
  authDomain: "react-todo-app-41965.firebaseapp.com",
  projectId: "react-todo-app-41965",
  storageBucket: "react-todo-app-41965.appspot.com",
  messagingSenderId: "668022652487",
  appId: "1:668022652487:web:4ff6a54eedc2d4bf1bbb62",
  measurementId: "G-428B92HWSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);