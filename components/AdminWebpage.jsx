import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminWebpage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    );
};

export default AdminWebpage;