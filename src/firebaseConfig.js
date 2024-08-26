import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4S63iwBuneuSKAIsYLQvNDKZVr8AgIY8",
    authDomain: "auth-test-119d0.firebaseapp.com",
    projectId: "auth-test-119d0",
    storageBucket: "auth-test-119d0.appspot.com",
    messagingSenderId: "65903422199",
    appId: "1:65903422199:web:1cc298d5b42942b63bc1f2",
    measurementId: "G-E324G4YDMJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);