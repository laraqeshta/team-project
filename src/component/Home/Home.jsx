import React from 'react';
import img from '../Assets/images/Illustration 1.png';
import './home.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-content'>
                <div className='description'>
                    <h2>
                        Want anything to be easy with
                        <h1>LaslesVPN</h1>
                    </h2>
                    <p>
                        Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className='image'>
                    <img className='img' src={img} alt="" draggable="false" />
                </div>
            </div>
            <div className='rating'>
                <div>
                    <div className='icon-container'>
                        <i className="fa icon fa-user" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>90+</h2>
                        <p>Users</p>
                    </div>
                </div>
                <div>
                    <div className='icon-container'>
                        <i className="fa icon fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>30+</h2>
                        <p>Locations</p>
                    </div>
                </div>
                <div>
                    <div className='icon-container'>
                        <i className="fa icon fa-server" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2>50+</h2>
                        <p>Servers</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
