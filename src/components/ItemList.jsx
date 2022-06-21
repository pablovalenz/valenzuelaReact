import React from 'react';
import Item from "./Item"

const ItemList = ({items}) => {
    return (
    <div className="d-flex flex-row flex-wrap justify-content-center card">
        {
            items.map((item)=>(
                <Item  key={item.id} item={item} />
            ))
        }
    </div>);  
}

export default ItemList;
