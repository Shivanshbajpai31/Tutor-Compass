import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCg5vXwJ03ydvkgUdZZnvNzzYShHdaWLeM",
  authDomain: "tutorcompass-ba125.firebaseapp.com",
  projectId: "tutorcompass-ba125",
  storageBucket: "tutorcompass-ba125.appspot.com",
  messagingSenderId: "289326435634",
  appId: "1:289326435634:web:6b5804320dd88f3f995b2b",
  measurementId: "G-T5VFTNWBF4"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
export {auth,googleProvider};