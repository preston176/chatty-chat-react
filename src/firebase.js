// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_gTnQgyWt3h-rsG3wQACQxONYgh-r7Y0",
    authDomain: "chatty-app-react-3076c.firebaseapp.com",
    projectId: "chatty-app-react-3076c",
    storageBucket: "chatty-app-react-3076c.appspot.com",
    messagingSenderId: "794733566792",
    appId: "1:794733566792:web:d33f95eed9eda817fb717d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;