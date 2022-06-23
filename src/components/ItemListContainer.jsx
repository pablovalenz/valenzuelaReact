import React, { Fragment, useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { productos } from '../mock/products';
import { Link, useParams } from "react-router-dom";    


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

  
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades`);
    }    

    return (
        <Fragment>
            <div className="container mx-auto mt-5">
            <br />
            <br />
            <ItemList items={products} />
            <Link to="/detalle">Link al detalle de producto</Link>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </Fragment>
    );
}

export default ItemListContainer;