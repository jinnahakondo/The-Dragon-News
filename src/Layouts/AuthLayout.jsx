import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <div className='w-11/12 mx-auto'>
                <header className=' py-5'>
                    <Navbar />
                </header>
                <main className='py-5'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;