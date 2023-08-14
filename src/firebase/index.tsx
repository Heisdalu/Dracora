import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDaWva0QdCx6AFmAaBpfutg7_btWkpR-M",
  authDomain: "dracora-583bc.firebaseapp.com",
  projectId: "dracora-583bc",
  storageBucket: "dracora-583bc.appspot.com",
  messagingSenderId: "784146128223",
  appId: "1:784146128223:web:d3623d23e14b2cc17a2aea",
  measurementId: "G-C3DP03J2PR",
};

// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);

// const analytics = getAnalytics(app);
