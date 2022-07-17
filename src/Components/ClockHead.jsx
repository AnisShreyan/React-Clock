import React from 'react';
import logo from './img/logo.png';

function ClockHead() {
    return (
        <>
            <div className='clockHead'>
                <div className='clock-boxes'><img src={logo} alt="React" className='reactLogo' /></div>
                <div className='clock-boxes' id='clock'>Clock</div>
            </div>
        </>
    )
}

export default ClockHead