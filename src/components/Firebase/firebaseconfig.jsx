import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwKQ1my5HkPZDgw5I337SU4xSMC3I9B6U",
  authDomain: "e-commerce-58390-imonzon.firebaseapp.com",
  projectId: "e-commerce-58390-imonzon",
  storageBucket: "e-commerce-58390-imonzon.appspot.com",
  messagingSenderId: "89585536852",
  appId: "1:89585536852:web:454fec2a967c93fddb02c1"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
