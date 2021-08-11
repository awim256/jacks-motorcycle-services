import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = props => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section className="section">
            <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/home" className="navbar-item">
                            <h1 className="title brand-title is-size-6-touch">Jack's Motorcycle Services</h1>
                        </Link>

                        <a role="button"
                           className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                           aria-label="menu"
                           aria-expanded="false"
                           data-target="navbarBasicExample"
                           onClick={() => {
                               setIsActive(!isActive)
                           }}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}
                         style={{marginRight: '-.75rem'}}>
                        <div className="navbar-end">
                            <HashLink smooth to="/#home" className="navbar-item">Home</HashLink>
                            <HashLink smooth to="/#about" className="navbar-item">About</HashLink>
                            <HashLink smooth to="/#services" className="navbar-item">Services</HashLink>
                            <HashLink smooth to="/#contact" className="navbar-item">Contact</HashLink>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};


export default Navigation;
