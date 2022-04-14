import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    let { serviceId } = useParams();


    return (
        <div>
            <h2>welcome to details: {serviceId}</h2>
        </div>
    );
};

export default ServicesDetail;