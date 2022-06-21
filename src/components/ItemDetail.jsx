import React from 'react'

function ItemDetail({ item }) {
  return (
    <div>
        <h1>{item.name}</h1>
        <h5>$ {item.price}</h5>
        <img src={item.img} alt={item.name} width="200"/>
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail