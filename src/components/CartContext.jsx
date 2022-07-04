import React, { useState, createContext } from 'react'

//1- Importamos e iniciamos nuestro CreateContext. El contexto
export const CartContext = createContext();

//2- Defino mi provider
//named export
export function CartContextProvider( props ){

    const [cart, setCart] = useState([]);

    //funcion para agreagar al carrito
    const addToCart = (item, quantity)=> {
        if (isInCart(item.id)) {
            //sumar catidad
            console.log('ya esta en el carrito');
        }else{
            // console.log(item, quantity)
        setCart([...cart,{...item, quantity }]);
        }
        
    };

    //funcion para verificar si el producto ya esta en el carrito
    const isInCart = (id) =>{
        //some devuelve true o false
        return cart.some((item) =>item.id === id)
    }

    //funcion para calcular $ del carrito

    //funcionn para calcular el total de unidades que tengo en el carrito y mostrarlas en el cartWidget

    //funcion para eliminar items del carrito

    //funcion para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

//3- pasamos al Provider el value para los componentes que consuman el context
//4- retornamos el context provider con el value
return <CartContext.Provider value={{ cart, otroValor: "Hola", addToCart, clearCart, isInCart }}>
    {props.children}
</CartContext.Provider>
}

export default CartContext