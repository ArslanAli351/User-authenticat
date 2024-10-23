import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  onSnapshot,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firestore.js";
const Product_Name = document.getElementById("Product_Name");
const discription = document.getElementById("discription");
const price = document.getElementById("price");
const product_img = document.getElementById("file");
const button = document.getElementById("product_genrator");
const all_Product = document.getElementById("all_Product");
const myCollectionRef = collection(db, "All Product");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  let myFile = product_img.files[0];
  console.log("myFile", myFile);

  var storageRef = ref(storage, myFile.name);
  const img_Snapshot = await uploadBytes(storageRef, myFile);
  console.log("Upload file" + img_Snapshot);
  const url = await getDownloadURL(storageRef);
  console.log(url);
  const myProduct = {
    Product_Name: Product_Name.value,
    discription: discription.value,
    price: price.value,
    product_img: url,
    time: serverTimestamp(),
  };
  try {
    const docRef = await addDoc(myCollectionRef, myProduct);
    console.log("Document written with ID: ", docRef.id);
    event.target.resat();
  } catch (e) {
    console.log(db);
  }
});

// const querySnapshot = await getDocs(myCollectionRef);
// querySnapshot.forEach(element => {
//     const product=element.data()
//     console.log("product",product);
//     all_Product.innerHTML+=`
//      <div>
//         <h3>${product.Product_Name}</h3>
//         <h3>${product.discription}</h3>
//         <h3>${product.price}</h3>
// <img src="" alt="">
//       </div>
//     `
// });

// cut.addEventListener("click",()=>{
//   console.log("hello");

// })

onSnapshot(myCollectionRef, (data) => {
  all_Product.innerHTML = "";
  data.docs.forEach((element) => {
    const product = element.data();
    console.log("product", product);
    all_Product.innerHTML += `
         <div class="main">

                      <div class="Img_div" >
 <img id="dataBaseImg" src="${product.product_img}" alt="">  </div>

            <h3>${product.Product_Name}</h3>
            <h3>${product.discription}</h3>
            <h3>${product.pricedel}</h3>
          
          </div>
        `;
  });
});

function Home(){
  console.log("hello");
}
