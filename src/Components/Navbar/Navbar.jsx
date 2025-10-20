import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../../assets/user.png'
import { AuthContext } from '../../Context/AuthContext';
const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handelLogOut = () => {
        // console.log("clicked")
        logOut()
            .then(() => alert('sign out successfull'))
            .catch(error => alert(error.message))
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1'>

                {user?.displayName}
            </div>
            <div className='nav flex items-center gap-4 text-accent flex-1'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/carear'}>Carear</NavLink>
            </div>
            <div className='login-btn flex gap-4 items-center '>
                <img src={User} alt="" />
                {user ?
                    <button onClick={handelLogOut} className='btn btn-primary px-10 '> Log Out </button>
                    :
                    <Link to={'/auth/login'} className='btn btn-primary px-10 '> Login</Link>}



            </div>
        </div>
    );
};

export default Navbar;