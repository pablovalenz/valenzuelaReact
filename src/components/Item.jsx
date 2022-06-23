import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    const urlDetalle = `/detalle/${item.id}`

    const styles = {
        width: "380px",
        margin: "20px 15px",
        padding: "10px 20px",
    };

    return (
        <div className="card w-25" style={styles} key={item.id}>
            <h3 className="text-3x1 text-gray-900 mt-2 font-medium title-font" style={styles}>
                {item.name}
            </h3>
            <h5>$ {item.price}</h5>
            <img src={item.img} alt={item.name} width="200"/>
            <p>{item.description}</p>
            <Link to={urlDetalle}>
                <button>Ver detalle</button>
            </Link>
            <hr />
            <br />
            
        </div>
    );
};

export default Item