import React, { useState, createContext } from 'react'

//1- Importamos e iniciamos nuestro CreateContext
const CartContext = createContext();

//2- Defino mi provider
//named export
export function CartContextProvider( props ){

    const [cart, setCart] = useState([{item: "Item A", cant:2}, {item: "Item B", cant: 5}]);

    function addToCart(item, cant){
        setCart(item, cant);
    }

//3- pasamos al Provider el value para los componentes que consuman el context
//4- retornamos el context provider con el value
return <CartContext.Provider value={{ cart, otroValor: "Hola", addToCart }}>
    {props.children}
</CartContext.Provider>
}

export default CartContext