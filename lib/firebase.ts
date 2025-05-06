// lib/firebase.ts
"use client"

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyA5GziTjh8-IOAwcCIJkXTZ7a5UI-x2nc4",

  authDomain: "module-2de9e.firebaseapp.com",

  databaseURL: "https://module-2de9e-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "module-2de9e",

  storageBucket: "module-2de9e.firebasestorage.app",

  messagingSenderId: "1057858638384",

  appId: "1:1057858638384:web:38aea20c16f47729c9d3f5",

  measurementId: "G-82TFCBPBMC"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correctly export auth
const auth = getAuth(app);
export { auth };
