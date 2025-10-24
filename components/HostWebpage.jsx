import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import '/styles/hostnavbar.css'

const HostWebpage = () => {

    const styles = { textDecoration: "underline", color: "#161616", fontWeight: '700', fontSize: '1.10rem' }
    return (
        <>
            <nav className="host-nav">
                <NavLink style={({isActive}) => isActive ? styles : null } end to='.'>Dashboard</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null } to="income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null } to="vans">Vans</NavLink>
                <NavLink style={({isActive}) => isActive ? styles : null } to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default HostWebpage;