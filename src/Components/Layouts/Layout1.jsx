import React from 'react';
import Navbar from '../NewsComp/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout1(props) {
    return (
        <>
            <Navbar/>
            <Outlet/>
            
        </>
    );
}

export default Layout1;