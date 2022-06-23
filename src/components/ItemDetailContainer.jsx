import React, { Fragment, useState, useEffect } from 'react'
import { productos } from '../mock/products';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({saludo}) => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log("parametros:",id)

    useEffect(()=>{
        //apis, llamados al backEnd
        const traerProducto = new Promise ((res, rej)=>{
            setTimeout(() => {
                res(productos[id]);
            }, 2000);
        });

        traerProducto.then((res) => {
            setProduct(res);
        })
    }, []); 
    

    return (
        <Fragment>
            <div className="container mx-auto mt-5">
            <br />
            <div>{saludo}</div>
            <br />
            <ItemDetail item={product}/>
            </div>
        </Fragment>
    );
}

export default ItemDetailContainer;