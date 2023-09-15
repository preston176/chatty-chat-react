// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOBKGhIQfFpNSWXdKVtr0nKD1s960LE50",
    authDomain: "whatsapp-clone-cf67a.firebaseapp.com",
    projectId: "whatsapp-clone-cf67a",
    storageBucket: "whatsapp-clone-cf67a.appspot.com",
    messagingSenderId: "130063218903",
    appId: "1:130063218903:web:f3b184757dbb654c069892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);