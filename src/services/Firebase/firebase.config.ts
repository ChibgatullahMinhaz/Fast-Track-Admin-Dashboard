// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbwcXtb6b8h70nMibEuhgDCTiYrI2YWLY",
  authDomain: "fast-truck-1321c.firebaseapp.com",
  projectId: "fast-truck-1321c",
  storageBucket: "fast-truck-1321c.firebasestorage.app",
  messagingSenderId: "1075148865955",
  appId: "1:1075148865955:web:c87a4a314652bc736c1a16",
  measurementId: "G-N0FLDTLXPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);