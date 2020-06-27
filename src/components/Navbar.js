import React from 'react';
import {Link} from "react-router-dom"
import Logo from "../logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <Link to="/">
                <img src={Logo} alt="store" className="navbar-brand"/> 
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5 ">
                    <Link to="/" className="nav-link">
                        THE STORE 
                    </Link>
                </li>
            </ul>

            <Link to="/cart" className="ml-auto">
                <button className="btn btn-outline-light btn-sm">
                    <i class="fas fa-cart-plus"></i> Cart
                </button>
            </Link>
        </nav>  
    )
}





export default Navbar;