import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "./item"
import  Preloader  from "./preloader"

const itemList = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos);
    return (
        <div className="container mb-5">
            <div className="row justify-content-evenly">
                {
                    loading ? <Preloader/> :
                        productos?.map(
                            producto =>
                                <div key={producto.id} className="col-sm-4 d-flex justify-content-center">
                                    <div  className="card" style={{ width: "18rem" }}>
                                        <img src={producto.imagen} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.titulo}</h5>
                                            <p className="card-text">$ {producto.valor}</p>
                                            <a href="#" className="btn btn-primary">Ver Detalles</a>
                                        </div>
                                    </div>
                                </div>
                        )
                }
            </div>
        </div>
    )
}

export default itemList
