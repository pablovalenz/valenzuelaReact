import { useState, useEffect } from 'react';

function ItemCount ({ stock, initial, onAdd}) {

    const [count, setCount] = useState(parseInt(initial));

    const resta = () => {
        setCount(count -1);
    }

    const suma = () => {
        setCount(count +1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]) 

    
    return (
        <div>
            <button disabled={count <= 0} onClick={resta}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={suma}>+</button>
            <br />
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;