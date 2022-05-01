import React from "react";
import useServices from "../../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services] = useServices()
    return (
        <div id="services" className="container">
            <h1 className="services-title mt-5 text-primary text-center">
                Our Services
            </h1>
            <div className="services-container">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
