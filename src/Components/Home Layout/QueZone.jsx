import React from 'react';
import Class from '../../assets/class.png'
import Swimming from '../../assets/swimming.png'
import PlayGround from '../../assets/playground.png'

const QueZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'> Que Zone</h2>
            <div className='w-full space-y-5'>
                <img src={Swimming} className='w-full' />
                <img src={Class} className='w-full' />
                <img src={PlayGround} className='w-full' />
            </div>
        </div>
    );
};

export default QueZone;