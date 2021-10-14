import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className="container" id="service">
            <h2 className="text-center fw-bold fst-italic my-5">Our Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-3 ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;