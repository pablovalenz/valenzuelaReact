// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, query, where, doc, collection, setDoc, addDoc, Timestamp } from "firebase/firestore" 

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

export async function exportDataToFirestore(){
    const productos = [
        {
            id: 0,
            name: 'Remera Blanca',
            price: 200,
            stock: 4,
    
            img: './img/remera.jpg',
            category: 'remeras',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
        {
            id: 1,
            name: 'Otra Reme',
            price: 800,
            stock: 4,
    
            img: './img/remera.jpg',
            category: 'remeras',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
        {
            id: 2,
            name: 'Gorra 1',
            price: 200,
            stock: 4,
    
            img: './img/gorra.png',
            category: 'gorras',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
        {
            id: 3,
            name: 'Gorra 2',
            price: 200,
            stock: 4,
    
            img: './img/gorra2.jpg',
            category: 'gorras',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
        {
            id: 4,
            name: 'Remera 5',
            price: 200,
            stock: 4,
    
            img: './img/remera.jpg',
            category: 'pantalones',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
        {
            id: 5,
            name: 'Remera 6',
            price: 200,
            stock: 4,
     
            img: './img/remera.jpg',
            category: 'pantalones',
            description: 'lorem ipsun ipsum lorem ipsum lorem impsun lkhjsdf kjdfñasddfj paadysdt patys y jamon',
        },
    ];

    const remerasCollection = collection(appFirestore, "remeras");

    productos.forEach( item => {
        const newDoc = doc(remerasCollection);

        setDoc(newDoc, item).then( res =>{
            console.log("Documento guardado: ", newDoc.id)
        })
        .catch((error => console.log("error obteniendo datos: ", error)))
    })
    
}

export async function createBuyOrder(dataOrder){
    const orderCollectionRef = collection(appFirestore, "orders");
    const dateTimestamp = Timestamp.now();
    const dataOrderWithDate = {
        buyer: dataOrder.buyer,
        items: dataOrder.items,
        total: dataOrder.total,
        date: dateTimestamp
    }
    const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);
    console.log("added", orderCreated.id);

    return orderCreated;
}

export default appFirebase