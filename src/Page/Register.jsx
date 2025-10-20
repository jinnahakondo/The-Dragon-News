import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const { createUser, updateUserProfile, setUser } = use(AuthContext);
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ name, photoUrl, email, password })
        createUser(email, password)
            .then(res => {
                const user = res.user;
                updateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl })
                    }).catch((error) => {
                        console.log(error.message);
                        setUser(user)
                    });
                navigate('/')
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='grid place-items-center min-h-screen' >
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handelRegister}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' required className="input bg-base-200" placeholder="Name" />
                            {/* photo  */}
                            <label className="label">Photo Url</label>
                            <input type="text" name='photoUrl' required className="input bg-base-200" placeholder="phot url" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' required className="input bg-base-200" placeholder="Email" />
                            {/* password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' required className="input bg-base-200" placeholder="Password" />
                            <div className='flex items-center gap-2 mt-4'>
                                <input type="checkbox" required className="checkbox checkbox-sm" /> <p>Accept out terms & condition</p>
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;