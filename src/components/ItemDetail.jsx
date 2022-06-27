import React from 'react';
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'

function ItemDetail({ item }) {

  const [isAddedToCart, setAddedToCart] = React.useState(false);

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades`);
    setAddedToCart(true);
} 

  return (
    <div>
        <h1>{item.name}</h1>
        <h5>$ {item.price}</h5>
        <img src={item.img} alt={item.name} width="200"/>
        <p>{item.description}</p>
      {
        isAddedToCart ?
        "Añadido"
        :
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      }
      <br />
      <Link to="/cart" type="button" className="btn btn-primary">Finalizar compra</Link>
         
    </div>
  )
}

export default ItemDetail