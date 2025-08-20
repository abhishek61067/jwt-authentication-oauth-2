// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOsM5pqpsG6qtA8lxtu-qa_9baJ8dwQ_g",
  authDomain: "oauth-3bac7.firebaseapp.com",
  projectId: "oauth-3bac7",
  appId: "1:1004038744918:web:93336e870ba20154a0c4f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
