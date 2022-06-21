import React, { Fragment, useState, useEffect } from 'react'
import { productos } from '../mock/products';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({saludo}) => {

    const [product, setProduct] = useState({})

    useEffect(()=>{
        //apis, llamados al backEnd
        const traerProducto = new Promise ((res, rej)=>{
            setTimeout(() => {
                res(productos[0])
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