// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4LSHV0xYuymRoYajEKNc-Zxw1iKx59A",
  authDomain: "react-auth-tutorial-ce636.firebaseapp.com",
  projectId: "react-auth-tutorial-ce636",
  storageBucket: "react-auth-tutorial-ce636.appspot.com",
  messagingSenderId: "1076104079121",
  appId: "1:1076104079121:web:f3bc6024ea172f485e8eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);