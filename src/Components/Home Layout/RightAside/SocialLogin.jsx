import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Log in with</h2>
            <div className='flex flex-col gap-4'>

                {/* Google */}
                <button className="btn bg-white text-black border-[#e5e5e5] btn-outline hover:bg-secondary hover:text-white">
                    <FcGoogle />
                    Login with Google
                </button>

                {/* GitHub */}
                <button className="btn bg-white text-black border-[#e5e5e5]  hover:bg-secondary hover:text-white">
                    <FaGithub />
                    Login with GitHub
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;