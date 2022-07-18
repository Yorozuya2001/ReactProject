import React from 'react';
import { GiAerodynamicHarpoon } from "react-icons/gi";
import CardWidget from '../Carrito/CartWidget';

const Navbar = () => {
    return (
        <header>
            <nav className="navCustom navbar navbar-expand-lg navbar-light">
                <div className="container-fluid align-items-center">
                    <GiAerodynamicHarpoon />
                    <a className="logoText mx-2" href="#">Aerodynamic Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Acerca de nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CardWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar