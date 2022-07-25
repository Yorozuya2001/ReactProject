import { getFetch } from "./functions"
import { useEffect, useState } from "react"
import Preloader from "./preloader"
import ItemDetail from "./itemDetail"
const itemDetailContainer = ({id}) => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)


useEffect (() =>{
    getFetch(id)
    .then(respuesta => setProducto(respuesta))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
},[])

    return (
            <div className='d-flex flex-column align-items-center my-5'>
                    {
                        loading ? <Preloader /> : <ItemDetail productoInfo = {producto} />
                    }
            </div>
        
    )
}

export default itemDetailContainer