
import { auth,createUserWithEmailAndPassword,onAuthStateChanged} from "./firebase.js";

let From=document.getElementById("from");

From.addEventListener("submit",async(event)=>{
    try {
      event.preventDefault()
    let email=event.target.children[0].value;
    let password=event.target.children[1].value;
     let result=await createUserWithEmailAndPassword(auth,email, password);
     console.log(result);
    } catch (error) {
      console.log(error);
      
    }
     })
  
     onAuthStateChanged(auth ,(user) => {
      if (user) {
        console.log("User hy"+user);
        
      } else {
        // window.location=(`../index.html`)
        
      }
    })