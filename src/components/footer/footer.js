import React from 'react';
import {FaFacebook, FaFacebookMessenger} from "react-icons/all";
import {Link} from "react-router-dom";

const Footer = props => {


    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered pt-6">
                    <div className="columns">
                        <div className="column">
                            <div>
                                <img src="https://via.placeholder.com/150"/>
                                <p className="pt-3">
                                    Simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's.
                                </p>
                                <FaFacebook size={20}/>
                                &nbsp;&nbsp;&nbsp;
                                <FaFacebookMessenger size={20}/>
                            </div>
                        </div>
                        <div className="column is-centered">
                            <h3 className="title">Company Links</h3>
                            <ul className="company-links">
                                <li><Link class="is-size-5" to='/about'>About Us</Link></li>
                                <li><Link class="is-size-5" to='/services'>Services</Link></li>
                                <li><Link class="is-size-5" to='/contact'>Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3 className="title">Contact Info</h3>
                            <ul className="contact-info">
                                <li>
                                    <span className="descriptor">Address: </span>
                                    <span>98A Gracehill Road Ballymoney BT53 8JD United Kingdom</span>
                                </li>
                                <li>
                                    <span className="descriptor">Phone: </span>
                                    <span>07473 906365</span>
                                </li>
                                <li>
                                    <span className="descriptor">Email: </span>
                                    <span>email@email.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3 className="title">Business Hours</h3>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Monday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Tuesday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Wednesday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Thursday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Friday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Saturday</th>
                                    <td>10am - 6pm</td>
                                </tr>
                                <tr>
                                    <th>Sunday</th>
                                    <td>Closed</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column">
                            <div className="fb-page" data-href="https://www.facebook.com/Jacksbigshed/"
                                 data-tabs="timeline" data-width="" data-height="350" data-small-header="true"
                                 data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
                                <blockquote cite="https://www.facebook.com/Jacksbigshed/"
                                            className="fb-xfbml-parse-ignore"><a
                                    href="https://www.facebook.com/Jacksbigshed/">Jack&#039;s Motorcycle Services</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

export default Footer;
