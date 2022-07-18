import React from 'react'
import ItemCount from '../ItemCont/ItemCount'

const ItemListContainer = ({ greeting }) => {
    const onAdd = (value) => {
        console.log(`Cantidad del producto: ${value}`);
    }


    return (
        <>
            <div className='d-flex flex-column align-items-center my-5'>
            <h1>{greeting}</h1>
            <ItemCount initial = {1} stock = {12} onAdd = {onAdd}/>
            </div>
        </>
    )
}

export default ItemListContainer