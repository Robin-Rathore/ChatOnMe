import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {

  apiKey: "AIzaSyC3Tw_LWqmtp6ms5NFE6LNbT6SMbeWOYb0",

  authDomain: "chatonme-163bc.firebaseapp.com",

  projectId: "chatonme-163bc",

  storageBucket: "chatonme-163bc.appspot.com",

  messagingSenderId: "859010540112",

  appId: "1:859010540112:web:ab4b3f82a6938335c2a755"

};

// measurementId: "G-NKV0H19C4J"
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()