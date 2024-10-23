import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js"; 
 import {
  getFirestore,
  collection,
  addDoc ,
  serverTimestamp ,
  getDocs ,
  doc,
  onSnapshot ,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqnlfaBKJKrDo4RYYhBEjC-XeZ0Spysdg",
  authDomain: "p-data-e43c1.firebaseapp.com",
  projectId: "p-data-e43c1",
  storageBucket: "p-data-e43c1.appspot.com",
  messagingSenderId: "338887672848",
  appId: "1:338887672848:web:34fe0acc923d6a8814b695"
};
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

// img ==========================
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

var storage = getStorage(app);

export { db, collection, addDoc  ,serverTimestamp,getDocs,doc,onSnapshot ,

  storage, ref, uploadBytes, getDownloadURL ,
  

};

















