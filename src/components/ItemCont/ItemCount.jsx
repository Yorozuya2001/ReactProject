import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        count < stock && setCount(count + 1);
    }

    const handleQuit = () => {
        count > 1 && setCount(count - 1);
    }

    const handleAddToCart = () => {
        onAdd(count)
    }
    return (
        <div className='card w-25'>
            <div className='d-flex justify-content-between align-items-center'>
                <button className='buttonCount' onClick={handleQuit}>-</button>
                <label>{count}</label>
                <button className='buttonCount' onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className='buttonCountLarge' onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount