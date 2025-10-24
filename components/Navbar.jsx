import React from 'react';
import {Link, NavLink} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {

    const styles = { textDecoration: "underline", color: "#161616", fontWeight: '700', fontSize: '1.10rem' };
    return (
        <>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav className="nav-links">
                    <NavLink style={({isActive}) => isActive ? styles : null} to="/host">Host</NavLink>
                    <NavLink style={({isActive}) => isActive ? styles : null} to="/about">About</NavLink>
                    <NavLink style={({isActive}) => isActive ? styles : null} to="/vans">Vans</NavLink>
                </nav>
            </header>
        </>
    );
};

export default Navbar;