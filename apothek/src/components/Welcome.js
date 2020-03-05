import React, { useContext } from 'react';
import userAgeContext from '../contexts/userAgeContext';

const Welcome = () => {
    const usrOfAge = useContext(userAgeContext);
    console.log(usrOfAge);

    return (
        <div id="Welcome">
            <img
                src={ require('../assets/logo.png') }
                alt="Company Logo"
                className="logo"
            />
            <div className="of-age-container">
                <h2>ARE YOU OVER 21?</h2>
                <div className="btn-container">
                    <button className="yes-btn" onClick={ usrOfAge[1] }>Yes</button>
                    <button className="no-btn" onClick={ usrOfAge[2] }>No</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;