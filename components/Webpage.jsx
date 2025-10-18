import React from 'react';
import 'react-router-dom'
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import {Outlet} from "react-router-dom";

const Webpage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Webpage;