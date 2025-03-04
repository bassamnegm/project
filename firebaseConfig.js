
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAh3HG9eQ32gxUfZP8SGKwWhQWFSsXQs80",
    authDomain: "day-4-79971.firebaseapp.com",
    projectId: "day-4-79971",
    storageBucket: "day-4-79971.firebasestorage.app",
    messagingSenderId: "644197524085",
    appId: "1:644197524085:web:0e396818b44808f49b4e3c",
    measurementId: "G-DSGHEL2PSY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;