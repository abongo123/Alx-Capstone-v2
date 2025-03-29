
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { applyActionCode, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDVO421L8os1sBQ8be970Bzgc3-3i2p_18",
  authDomain: "stevemind-mental-health-app.firebaseapp.com",
  projectId: "stevemind-mental-health-app",
  storageBucket: "stevemind-mental-health-app.firebasestorage.app",
  messagingSenderId: "46007730808",
  appId: "1:46007730808:web:b106fcc2e700773d88a38d",
  measurementId: "G-CLEMMC089M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db =getFirestore(app)

export { auth, db}