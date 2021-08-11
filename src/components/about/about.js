import React from 'react';
import {BsGearWideConnected, BsWrench} from "react-icons/all";
import bikeRepair from '../../assets/images/bikeRepair.jpeg';

const About = props => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h1 className="title has-text-centered">About</h1>
                <div className="pt-6"/>
                <div className="columns">
                    <div className="column">
                        <figure className="image ">
                            <img src={bikeRepair}/>
                        </figure>
                    </div>
                    <div className="column pl-6">
                        <h2 className="title">We are Qualified & Professional</h2>
                        <p className="is-size-5">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even.
                        </p>
                        <div className="pt-6">
                            <div className="columns">
                                <div className="column is-3 has-text-centered is-hidden-touch">
                                    <BsGearWideConnected size={70} className="icon-overflow"/>
                                </div>
                                <div className="column is-9">
                                    <p className="is-size-5">
                                        High Quality Service by injected humour,
                                        or randomised words which don't look even slightly believable If you are going
                                    </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-3 has-text-centered is-hidden-touch">
                                    <BsWrench size={70} className="icon-overflow"/>
                                </div>
                                <div className="column is-9">
                                    <p className="is-size-5">
                                        Best Price in Market by injected humour,
                                        or randomised words which don't look even slightly believable If you are going
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.propTypes = {};

export default About;
