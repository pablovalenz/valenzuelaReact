// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyB9qfeHbRGt88VsQnv4gbmJSnD18qEmhzo",
  authDomain: "coderhouse37070-1d4c1.firebaseapp.com",
  projectId: "coderhouse37070-1d4c1",
  storageBucket: "coderhouse37070-1d4c1.appspot.com",
  messagingSenderId: "356808802080",
  appId: "1:356808802080:web:f38f93598efb4866c9e145"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirestore);

export function testDatabase(){
    console.log(appFirestore)
}

export function getItems(){
    const remerasCollection = collection(appFirestore, "remeras");

    const remerasSnapshot = getDocs(remerasCollection);

    remerasSnapshot.then( res => {
        console.log(res.docs[0].data());
    })
}

export default appFirebase