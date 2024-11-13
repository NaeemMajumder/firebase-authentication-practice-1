// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZm-RHP6P56f1ufhBB-3KG0XvZd4NV5Wk",
  authDomain: "email-pass-firebase-practice.firebaseapp.com",
  projectId: "email-pass-firebase-practice",
  storageBucket: "email-pass-firebase-practice.firebasestorage.app",
  messagingSenderId: "101667071159",
  appId: "1:101667071159:web:07bb3fc1f08af3f9015932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;