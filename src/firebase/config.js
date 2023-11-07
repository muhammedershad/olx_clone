import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAduqCxthJSaJTUJYkglxVrtqlilEyznCY",
    authDomain: "olx---clone2.firebaseapp.com",
    projectId: "olx---clone2",
    storageBucket: "olx---clone2.appspot.com",
    messagingSenderId: "924081854216",
    appId: "1:924081854216:web:d902410898bda3f171febd",
    measurementId: "G-D0NNL6GX52"
};
  
export default firebase.initializeApp(firebaseConfig);
