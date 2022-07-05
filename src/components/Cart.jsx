import React from 'react'
import { useContext } from 'react';
import CartContext from './CartContext' 

const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(CartContext)
  //console.log(cart)
  return (
    <div>
      {
        cart.map( (item) => (
          <div className="mb-5 py-3 card w-25" key={item.id}>
            <h3 className="text-3x1 text-gray-900 mt-2 font-medium title-font">
                {item.name}
            </h3>
            <h5>$ {item.price}</h5>
            <img className="itemList-card-img" src={item.img} alt={item.name} width="200"/>
            <p>{item.description}</p>
            <hr />
            <br />
            <button style={{color:"red"}} onClick={() => removeItem(item.id)}>eliminar</button>

            
        </div>
        ))
      }
      <button style={{color:"red"}} onClick={() => clearCart()}>vaciar carrito</button>

    </div>
  );
};

export default Cart