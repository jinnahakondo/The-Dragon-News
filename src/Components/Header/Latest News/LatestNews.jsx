import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>

            <Marquee pauseOnHover={true} speed={50}>
                <div className='flex gap-5'>
                    <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aliquam laboriosam, eos nostrum ipsa modi dolore molestias? Explicabo, eius aperiam.</p><p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aliquam laboriosam, eos nostrum ipsa modi dolore molestias? Explicabo, eius aperiam.</p>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;