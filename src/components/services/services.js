import React from 'react';
import {FaMotorcycle, GiAutoRepair, GiCarBattery, GiDiagram} from "react-icons/all";

const Services = props => {

    const services = [
        {
            icon: <GiDiagram size={70}/>,
            title: 'Servicing',
            text: 'Routine servicing carried out to all makes and models of motorcycles and scooters.'
        },
        {
            icon: <GiCarBattery size={70}/>,
            title: 'Accessory Fitting',
            text: ' Accessories fitted to all types of motorcycles and scooters Heated grips, ' +
                'Crash bungs, screens, luggage, tail tidy\'s, lights exhausts'
        },
        {
            icon: <GiAutoRepair size={70}/>,
            title: 'Repairs',
            text: 'Motorcycle repair services, engine rebuilds, bodywork, chassis and electrical repairs carried out.'
        },
        {
            icon: <FaMotorcycle size={70}/>,
            title: 'Restorations',
            text: 'All types of motorcycle restorations under took, full rebuilds and mot preparation.'
        },
    ];


    return (
        <section id="services" className="section has-background-light">
            <div className="container">
                <h1 className="title has-text-centered">Our Services</h1>
                <div className="columns">
                    {services.map(service =>
                        <div className="column">
                            <div className="card" style={{height: '18em'}}>
                                <div className="card-header-icon">
                                    {service.icon}
                                </div>
                                <div className="card-header-title is-centered">
                                    {service.title}
                                </div>
                                <div className="card-content has-text-centered">
                                    <div className="content">
                                        {service.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};


export default Services;
