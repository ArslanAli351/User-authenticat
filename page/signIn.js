import { auth, signInWithEmailAndPassword, signOut } from "./firebase.js";
let From = document.getElementById("from");

From.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    let email = event.target.children[0].value;
    let password = event.target.children[1].value;
    let result = await signInWithEmailAndPassword(auth, email, password);
    console.log("sin in user result");
  } catch (error) {
    console.log("user no found");
  }
});

//  ================ Logout ================
let logout = document.getElementById("logout_button");

logout.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    signOut(auth);
    console.log("logout");
  } catch (error) {
    console.log(error);
  }
});
