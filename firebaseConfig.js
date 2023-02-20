// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMu3xhFOA-CoIKJn6-XAlIMJHp0Mm2Ojg",
    authDomain: "test-4b9db.firebaseapp.com",
    projectId: "test-4b9db",
    storageBucket: "test-4b9db.appspot.com",
    messagingSenderId: "739920805747",
    appId: "1:739920805747:web:b0647284745284fcf5cf06",
    measurementId: "G-ESNZ8W8WBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, app };
