// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, query, where, doc, collection} from "firebase/firestore" 

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
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
    console.log(appFirestore)
}

export async function getItems(){
    const remerasCollection = collection(appFirestore, "remeras");

    const remerasSnapshot = await getDocs(remerasCollection);

    let respuesta = remerasSnapshot.docs.map( doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })  

    return respuesta;
}

export async function traerProductosDeCategoria(idcategory){
    const remerasCollection = collection(appFirestore, 'remeras');

    const q = query(remerasCollection, where("category", "==", idcategory));

    const remerasSnapshot = await getDocs(q);

    let respuesta = remerasSnapshot.docs.map( doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    }) 

    return respuesta;
}

export async function traerUnProducto(id){
    // const remerasCollection = collection(appFirestore, "remeras");
    const docref = doc(appFirestore, "remeras", id);

    const docSnapshot = await getDoc(docref);

    return { id: docSnapshot.id, ...docSnapshot.data()};
}

export default appFirebase