import React from 'react'
import ItemCount from '../ItemCont/ItemCount'
import { onAdd } from './functions'



const itemDetail = ({productoInfo}) => {
    console.log(productoInfo.descripcion)
    return (
        <div className="card mb-3" style={{maxWidth: "1024px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={productoInfo.imagen} className="img-fluid rounded-start" alt="Imagen pruebas"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{productoInfo.titulo}</h5>
                        <p className="card-text">{productoInfo.descripcion}</p>
                        <p className="card-text">$ {productoInfo.valor}</p>
                        <div>
                            <ItemCount initial={1} stock={22} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default itemDetail