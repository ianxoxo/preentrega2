
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "workshop-4ae76.firebaseapp.com",
  projectId: "workshop-4ae76",
  storageBucket: "workshop-4ae76.appspot.com",
  messagingSenderId: "994476975066",
  appId: "1:994476975066:web:7ce5dd0d292b1cae2f16e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)