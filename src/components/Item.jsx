import React from 'react'

const Item = ({item}) => {

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
            <hr />
            <br />
            
        </div>
    );
};

export default Item