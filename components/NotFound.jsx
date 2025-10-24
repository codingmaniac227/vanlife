import React from 'react'
import Button from '../components/Buttons'
import {ButtonContext} from "../App";
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <>
            <ButtonContext.Provider value={{ blackLongButton: true }}>
                <h1>Sorry, the page you were looking for was not found</h1>
                <Button.Long><Link to='/'>Return to home</Link></Button.Long>
            </ButtonContext.Provider>
        </>
    );
};

export default NotFound;

