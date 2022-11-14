// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgAaMg8OECIyav_B-KUfOLzrR4KC3t1A",
  authDomain: "headcase-6796b.firebaseapp.com",
  projectId: "headcase-6796b",
  storageBucket: "headcase-6796b.appspot.com",
  messagingSenderId: "235435124938",
  appId: "1:235435124938:web:372e592a2812c01bd1ac33",
  measurementId: "G-X67EWG3508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);