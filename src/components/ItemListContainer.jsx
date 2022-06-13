import React, { Fragment } from 'react'
import ItemCount from "./ItemCount"


const ItemListContainer = (props) => {

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades`);
    }    

    return (
        <Fragment>
            <p>Saludos futura lista contenedora {props.saludo}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </Fragment>
    )
}

export default ItemListContainer;