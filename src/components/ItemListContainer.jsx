import React, { Fragment, useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { productos } from '../mock/products';


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        //apis, llamados al backEnd
        const traerProductos = new Promise ((res, rej)=>{
            setTimeout(() => {
                res(productos)
            }, 2000);
        });

        traerProductos.then((res) => {
            setProducts(res);
        })
    }, []);

    const arrayData = [
        {
          id: "1",
          name: "Mi producto",
          description: "El mejor producto de la tienda",
          stock: 9,
        },
        {
          id: "2",
          name: "Otro producto",
          description: "Otro mejor producto de la tienda",
          stock: 5,
        },
        {
            id: "3",
            name: "Otro producto mas",
            description: "Este ya no es tan bueno",
            stock: 5,
          },
          {
            id: "4",
            name: "Y otro",
            description: "Este es algo bueno",
            stock: 5,
          },
          {
            id: "5",
            name: "Si. otro más",
            description: "y este apesta",
            stock: 5,
          }
      ]

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades`);
    }    

    return (
        <Fragment>
            <br />
            { arrayData.map(item => {
                return (
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <hr /> <br />
                    </div>   
                ) 
            })
            }
            <br />
            <ItemList items={products} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Fragment>
    );
}

export default ItemListContainer;