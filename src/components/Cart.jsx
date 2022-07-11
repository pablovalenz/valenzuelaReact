import React from 'react'
import { useContext } from 'react';
import CartContext from './CartContext' 
import { Link } from 'react-router-dom'
// import ItemCart from './ItemCart/itemCart';
import { createBuyOrder } from '../services/firestore'

const Cart = () => {
  const {cart, removeItem, clearCart, totalPrice} = useContext(CartContext);

 
function handleBuyOrder(){
  const dataOrder = {
    buyer: {
      name: "React 37070",
      phone: 1234567789,
      email: "react37070@coder.abc"
    },
    items: cart,
    total: totalPrice()
  }

  createBuyOrder(dataOrder).then ( (orderDataCreated) => {
    clearCart();
  })
  
}

  if (cart.length === 0){
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }
  //console.log(cart)
  return (
    <>
      {
        cart.map( (item) => (
          <div className="mb-5 py-3 card w-25" key={item.id}>
            <h3 className="text-3x1 text-gray-900 mt-2 font-medium title-font">
                {item.name}
            </h3>
            <h5>Precio U. $ {item.price}</h5>
            <img className="itemList-card-img" src={item.img} alt={item.name} width="200"/>
            <p>{item.description}</p>
            <p>Cantidad {item.quantity}</p>
            <p>SubTotal: ${item.quantity * item.price}</p>
            <hr />
            <br />
            
            <button style={{color:"red"}} onClick={() => removeItem(item.id)}>eliminar</button>

            
          </div>
        ))
      }
      <p>
        Total: {totalPrice()}
      </p>
      <button style={{color:"red"}} onClick={() => clearCart()}>vaciar carrito</button>
      <button style={{color:"green"}} onClick={ handleBuyOrder }>finalizar compra</button>


    </>
  );
};

export default Cart