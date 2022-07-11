import React, { Fragment, useState, useEffect } from 'react'
// import { productos } from '../mock/products';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import PacmanLoader from 'react-spinners/PacmanLoader'
import { traerUnProducto } from '../services/firestore'


const ItemDetailContainer = ({saludo}) => {

    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    //console.log("parametros:",id)

    useEffect(() => {
        // //apis, llamados al backEnd
        // const traerProducto = new Promise ((res, rej) => {
        //     setTimeout(() => {
        //         let idNum = parseInt(id)
        //         const itemFound = productos.find ( detalle => {
        //             return detalle.id === parseInt(idNum);
        //         })
        //         res(itemFound);
        //         // res(productos[itemNum]);
        //     }, 2000);
        // });

        traerUnProducto(id)
        .then((res) => {
            setProduct(res);
            setIsLoading(false);
        });
    }, [id]); 
    

    return (
        <Fragment>
            <div className="container mx-auto mt-5">
            <br />
            <div>{saludo}</div>
            <br />
            {isLoading 
                ? <PacmanLoader color={"blue"}/>
                : <ItemDetail item={product}/>
            }
            
            </div>
            {/* <button onClick={exportDataToFirestore}>Prueba guardar item</button> */}
        </Fragment>
    );
}

export default ItemDetailContainer;