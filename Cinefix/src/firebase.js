// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ1sQqCPXYFIv-FM1En6UFJi5lpiGqoVg",
  authDomain: "cinefix-lab.firebaseapp.com",
  projectId: "cinefix-lab",
  storageBucket: "cinefix-lab.firebasestorage.app",
  messagingSenderId: "351399809714",
  appId: "1:351399809714:web:85558352ac7064bbf1efab",
  measurementId: "G-75XS6MN8S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);