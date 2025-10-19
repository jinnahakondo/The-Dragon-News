import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const { login } = use(AuthContext);
    const haneSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })
        login(email, password)
            .then(user => console.log(user.user))
            .catch(error => console.log(error.message))
    }
    return (
        <div className='grid place-items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-10'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={haneSignIn}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input bg-base-200" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input bg-base-200" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Log in</button>
                        </fieldset>
                    </form>
                    <h5 className='text-center font-semibold pt-5'>Dont’t Have An Account ?<Link to='/auth/register'><span className='text-secondary'> Register</span></Link></h5>
                </div>
            </div>
        </div>
    );
};

export default Login;