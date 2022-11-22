import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCYdvEoiSzztqxgJ9wLEFLlhlUlGCDPP68",
  authDomain: "lj-blogg.firebaseapp.com",
  projectId: "lj-blogg",
  storageBucket: "lj-blogg.appspot.com",
  messagingSenderId: "435397976723",
  appId: "1:435397976723:web:d5b01be381391a93cc2366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)