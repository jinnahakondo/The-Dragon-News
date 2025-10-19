import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';
import QueZone from '../QueZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin />
            <FindUs />
            <QueZone />
        </div>
    );
};

export default RightAside;