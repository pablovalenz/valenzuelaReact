import { useContext } from 'react';
import carri from '../assets/carri.png';
import CartContext from './CartContext';
import { Link } from 'react-router-dom'


function CartWidget() {

    const stylesImg = {
        width: '50px',
        heigth: '50px',
      }

    const {cart} = useContext(CartContext)  
    let itemsInCart = 0;

    cart.map( (item ) => {
        itemsInCart = itemsInCart + item.quantity;
    })


    return (
        <div>
            <div className="itemsInCart">
                {itemsInCart}
            </div>
            
            <Link to='./cart'><img style={stylesImg} src={carri}/></Link>
        </div>
    )
}

export default CartWidget;