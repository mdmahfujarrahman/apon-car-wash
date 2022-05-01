import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetail = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState({})
    
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    },[])

    return (
        <div>
            <h2>welcome to details: {serviceId}</h2>
            <div className="text-center">
                <h2>Service name: {service.name}</h2>
                <img src={service.img} alt="img" />
                <p>{service.description}</p>
                <Link to="/checkout">
                    <button className="btn btn-primary">Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetail;