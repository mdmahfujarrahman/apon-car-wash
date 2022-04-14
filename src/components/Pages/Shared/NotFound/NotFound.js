import React from 'react';
import laizy from '../../../../images/laizy.jpg'

const NotFound = () => {
    return (
        <div className="justify-content-center">
            <h2 className="text-primary text-center">Mechanic is sleeping</h2>
            <img className="justify-content-center" src={laizy} alt="" />
        </div>
    );
};

export default NotFound;