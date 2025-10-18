import React from 'react';
import {Link, Outlet} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link className='navbar-link' to="/host">Host</Link>
                    <Link className='navbar-link' to="/about">About</Link>
                    <Link className='navbar-link' to="/vans">Vans</Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar;