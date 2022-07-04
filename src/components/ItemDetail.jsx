import React, {useState, useContext} from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'
import CartContext from './CartContext'



const ItemDetail = ({ item }) => {

  // importamos el value del context
  const {addToCart, cart, isInCart} = useContext(CartContext)

  const [cant, setCant] = useState(0)

  const [isAddedToCart, setAddedToCart] = React.useState(false);


  const onAdd = (quantity) => {
    setCant(`Agregaste ${quantity} unidades`);
    setAddedToCart(true);
    addToCart(item, quantity)
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
      { isInCart(item.id) && <button>{item.name}Quitar del carrito</button> }
         
    </div>
  )
}

export default ItemDetail