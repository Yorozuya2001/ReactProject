import { useState, useEffect } from 'react'
import { getFetch } from "./functions"
import ItemCount from '../ItemCont/ItemCount'
import ItemList from './itemList'
import Preloader from "./preloader"
import { onAdd } from './functions'


const ItemListContainer = ({ greeting }) => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <div className='d-flex flex-column align-items-center my-5'>
                <h1>{greeting}</h1>
                <>
                {
                    loading ? <Preloader /> : <ItemList id={productos} />
                }
                </>
                <ItemCount initial={1} stock={12} onAdd={onAdd} />
            </div>
        </>
    )
}

export default ItemListContainer