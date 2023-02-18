// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJnO9GWZto0oCDDAlGJo-wO22JYfelXGQ",
  authDomain: "fir-laptopversion.firebaseapp.com",
  projectId: "fir-laptopversion",
  storageBucket: "fir-laptopversion.appspot.com",
  messagingSenderId: "378856626337",
  appId: "1:378856626337:web:2fb2e8eb836d8fd768b8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);