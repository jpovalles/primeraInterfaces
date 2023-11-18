// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgQlb5wq60so6YlsuZq4dBIS3IYRWpbAI",
  authDomain: "sportstore-da753.firebaseapp.com",
  projectId: "sportstore-da753",
  storageBucket: "sportstore-da753.appspot.com",
  messagingSenderId: "140851542813",
  appId: "1:140851542813:web:70f0509e6b6f3a84d6bff4",
  measurementId: "G-PKKTMM176S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};