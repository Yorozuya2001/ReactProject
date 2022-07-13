import carritoSvg from '../../assets/carrito-de-compras.svg'
import './carrito.css'

const Carrito = () => {
    return (
        <img src={carritoSvg} alt="carrito" className='carritoStatus' />
    )
}

export default Carrito