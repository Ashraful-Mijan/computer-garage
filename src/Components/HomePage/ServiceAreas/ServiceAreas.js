import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ServiceInfo from '../ServiceInfo/ServiceInfo';


const ServiceAreas = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div id="service" className="my-5 py-5">
            <Navbar></Navbar>
            <div className="text-center mt-5 pb-5">
                <h1 style={{ fontSize: "65px" }}>Services We Provide</h1>
            </div>

            <div className="row d-flex  justify-content-center">
                {
                    services.map(service => <ServiceInfo service={service}  ></ServiceInfo>)
                }
            </div>
        </div>

    );
};

export default ServiceAreas;