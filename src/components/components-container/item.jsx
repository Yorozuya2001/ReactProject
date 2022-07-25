
const item = ({producto},keyProduct) => {
    

    return (
        <div key={keyProduct} className="col-sm-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
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

export default item