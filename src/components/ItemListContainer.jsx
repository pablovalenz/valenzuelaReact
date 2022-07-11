import React, { Fragment, useState, useEffect } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";    
import { getItems, traerProductosDeCategoria } from '../services/firestore';


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    

    useEffect(()=>{
    
      if(categoryId) {
      
      traerProductosDeCategoria(categoryId)
        .then((res) => {
            setProducts(res);
        })
        .catch((error) => {
            console.log(error);
        });
      } else {
        getItems()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
      }
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