import React from 'react';
import CartContext from '../CartContext';

const ItemCart = ({ item }) => {
const { removeItem } = CartContext();
    return (
        <div className='itemCart'>
            <img src={item.image} alt={item.name}></img>
            <div>
                <p>Titulo: {item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio u.: {item.price}</p>
                <p>SubTotal: ${item.quantity * item.price}</p>
                <button onClick={() => removeItem(item.id)} >Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart