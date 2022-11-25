import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
             <Navbar/>
             <Outlet/>
        </div>
    );
};

export default DashBoardLayout;