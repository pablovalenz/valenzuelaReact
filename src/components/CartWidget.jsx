import { useContext } from 'react';
import carri from '../assets/carri.png';
import CartContext from './CartContext';


function CartWidget() {

    const stylesImg = {
        width: '50px',
        heigth: '50px',
      }

    const {cart} = useContext(CartContext)  
    let itemsInCart = 0;

    cart.map((item)=>{
        itemsInCart = itemsInCart + item.quantity;
    })

    return (
        <div>
            <div className="itemsInCart">
                {itemsInCart}
            </div>
            <img style={stylesImg} src={carri}/>
        </div>
    )
}

export default CartWidget;