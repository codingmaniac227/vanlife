import React from 'react';
import {Link} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    );
};

export default Navbar;