import React from 'react';
import { NavLink } from 'react-router';
import User from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1'></div>
            <div className='nav flex items-center gap-4 text-accent flex-1'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/carear'}>Carear</NavLink>
            </div>
            <div className='login-btn flex gap-4 items-center '>
                <img src={User} alt="" />
                <button className='btn btn-primary px-10 '> Login</button>
            </div>
        </div>
    );
};

export default Navbar;