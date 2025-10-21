import React from 'react';
import {Outlet, useParams} from 'react-router-dom'

const AdminDashboard = () => {


    return (
        <>
            <div>
                AdminDashboard
            </div>
            <Outlet />
        </>
    );
};

export default AdminDashboard;