import React from 'react';
import Navbar from '../components/pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/pages/Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto py-8'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;