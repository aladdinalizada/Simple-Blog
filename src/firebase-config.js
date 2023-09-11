// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwFCXON0zxbX2bmrOh_S_0jCtSgLFE5ac",
  authDomain: "blogbroject.firebaseapp.com",
  projectId: "blogbroject",
  storageBucket: "blogbroject.appspot.com",
  messagingSenderId: "314807776947",
  appId: "1:314807776947:web:36d4e32c9ef88c568da2c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// exporting the firestore database, auth and provider
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
