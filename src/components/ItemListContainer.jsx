import React, { Fragment, useState, useEffect } from 'react'
import ItemList from "./ItemList"
import { productos } from '../mock/products';
import { useParams } from "react-router-dom";    


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
        //apis, llamados al backEnd
        const traerProductos = new Promise ((res, rej)=>{
            setTimeout(() => {
                if(categoryId === undefined)
                    res(productos);
                else{
                    const itemFound = productos.filter(detalle => {
                        return detalle.category === categoryId;
                    })
                    res(itemFound);
                }    
            }, 2000);
        });

        traerProductos.then((res) => {
            setProducts(res);
        })
    }, [categoryId]);

  
       

    return (
        <Fragment>
            <div className="container mx-auto mt-5">
            <br />
            <br />
            <ItemList items={products} />
            </div>
        </Fragment>
    );
}

export default ItemListContainer;