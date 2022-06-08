import carri from '../assets/carri.png';


function CartWidget() {

    const stylesImg = {
        width: '50px',
        heigth: '50px',
      }

    return (
        <div>
            <img style={stylesImg} src={carri}/>
        </div>
    )
}

export default CartWidget;