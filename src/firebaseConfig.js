import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7eVm6XkimspN4OmQNSMsCVqBlLVwb4UM",
    authDomain: "blog-app-bb9ee.firebaseapp.com",
    projectId: "blog-app-bb9ee",
    storageBucket: "blog-app-bb9ee.appspot.com",
    messagingSenderId: "1035474377273",
    appId: "1:1035474377273:web:b7c444a9c08a5d8b744be8",
    measurementId: "G-7NF0LB0D1T"
};

const app = initializeApp(firebaseConfig);

// CONNECTIONS
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
