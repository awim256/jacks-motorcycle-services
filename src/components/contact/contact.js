import React, {useState} from 'react';
import {BiConversation, BsFillPersonFill, FaEnvelope, FaPhoneAlt, FiClock, GrMap} from "react-icons/all";

const Contact = props => {


    const [form, setForm] = useState({name: '', phone: '', email: '', message: ''});

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({...form, [key]: value});
    };

    const onSubmit = () => {
        console.log(form);
    };

    const onCancel = () => {
        setForm({name: '', phone: '', email: '', message: ''})
    };

    return (
        <section id="contact" className="section is-fullheight-with-navbar">
            <div className="container">
                <div className="columns">
                    <div className="column pr-6">
                        <h1 className="title">Contact Us</h1>
                        <p className="is-size-5">Get in touch with the professionals at AutoService Group for quality
                            services at competitive prices.</p>
                        <div className="notification">
                            <div className="columns">
                                <div className="column is-flex is-align-items-center is-hidden-touch">
                                    <GrMap size={40}/>
                                </div>
                                <div className="column is-four-fifths">
                                    <h5 className="is-size-5 is-bold has-text-black">Address:</h5>
                                    <p>
                                        98a Gracehill Road, Ballymoney,
                                        <br/>
                                        BT53 8JD, United Kingdom
                                    </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-flex is-align-items-center is-hidden-touch">
                                    <FiClock size={40}/>
                                </div>
                                <div className="column is-four-fifths">
                                    <h5 className="is-size-5 is-bold has-text-black">Business Hours:</h5>
                                    <p>
                                        Monday - Friday: 10:00 AM - 6:00 PM
                                        Saturday: 10:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-flex is-align-items-center is-hidden-touch">
                                    <BiConversation size={40}/>
                                </div>
                                <div className="column is-four-fifths">
                                    <h5 className="is-size-5 is-bold has-text-black">Call Us:</h5>
                                    <p>
                                        Phone: 07473 906365
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="column is-three-fifths">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control has-icons-left">
                                <input className="input"
                                       name="name"
                                       type="text"
                                       placeholder="Name"
                                       value={form.name}
                                       onChange={onChange}
                                />
                                <span className="icon is-small is-left">
                            <BsFillPersonFill/>
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Phone</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone"
                                    onChange={onChange}
                                    value={form.phone}
                                    required/>
                                <span className="icon is-small is-left">
                                <FaPhoneAlt/>
                            </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={onChange}
                                    value={form.email}
                                    required/>
                                <span className="icon is-small is-left">
                                <FaEnvelope/>
                            </span>
                            </div>
                            {false &&
                            <p className="help is-danger">This email is invalid</p>
                            }
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                            <textarea
                                className="textarea"
                                name='message'
                                placeholder="Your Message"
                                onChange={onChange}
                                value={form.message}
                            ></textarea>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" onClick={onSubmit}>Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light" onClick={onCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;
