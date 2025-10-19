import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.Config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // create account with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out 
    const logOut = () => {
        return signOut(auth)
    }


    // set observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login,
    }


    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;