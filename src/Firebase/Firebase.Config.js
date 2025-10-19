// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSFm8qkGLdvnCaHnrx1CTw1edZkWqCcVM",
    authDomain: "dragon-news-c69fb.firebaseapp.com",
    projectId: "dragon-news-c69fb",
    storageBucket: "dragon-news-c69fb.firebasestorage.app",
    messagingSenderId: "662937474951",
    appId: "1:662937474951:web:034be16d94a2565a9fe522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);