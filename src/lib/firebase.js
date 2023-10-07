// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLhZraut8pNDAPLeLjR89xRd7_IIADqLk",
  authDomain: "dm-screen-aad43.firebaseapp.com",
  projectId: "dm-screen-aad43",
  storageBucket: "dm-screen-aad43.appspot.com",
  messagingSenderId: "16284131303",
  appId: "1:16284131303:web:02665854b5ffac986e6742",
          
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const db = getFirestore(app);
export default db;