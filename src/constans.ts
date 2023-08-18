import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAJp-9YqRATOhq4MaZ87OJjUiG0WOvaYM0",
  authDomain: "refreshing-351c6.firebaseapp.com",
  projectId: "refreshing-351c6",
  storageBucket: "refreshing-351c6.appspot.com",
  messagingSenderId: "809573005358",
  appId: "1:809573005358:web:9c5f857cff0965ffb9c7bf",
  measurementId: "G-MN3VLYWNKT",
});
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
