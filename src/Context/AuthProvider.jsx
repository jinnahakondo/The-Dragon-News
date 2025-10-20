import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.Config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create account with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 
    const logOut = () => {
        return signOut(auth)
    }

    // update user profile

    const updateUserProfile = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    // set observer
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login,
        loading,
        updateUserProfile,
    }


    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;