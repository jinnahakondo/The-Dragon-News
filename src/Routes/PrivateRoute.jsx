import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location)
    if (loading) {
        return <Loading />
    }
    if (user && user.email) {
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login' />
};

export default PrivateRoute;