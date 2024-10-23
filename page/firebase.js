import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqnlfaBKJKrDo4RYYhBEjC-XeZ0Spysdg",
  authDomain: "p-data-e43c1.firebaseapp.com",
  projectId: "p-data-e43c1",
  storageBucket: "p-data-e43c1.appspot.com",
  messagingSenderId: "338887672848",
  appId: "1:338887672848:web:34fe0acc923d6a8814b695",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
