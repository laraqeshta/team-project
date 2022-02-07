import React from 'react';
import img from '../Assets/images/Illustration 2.png';
import './features.css';

const Features = () => {
    return (
        <div className='container'>
            <div className='features'>
                <div className='image'>
                    <img src={img} alt='' draggable='false' />
                </div>
                <div className='description'>
                    <h2>
                        We Provide Many Features You Can Use
                    </h2>
                    <p>
                        You can explore the features that we provide with fun and have their own functions each feature.
                    </p>
                    <ul className='list-items'>
                        <li><i className="fa feature-icon fa-check-circle"></i>Powerfull online protection.</li>
                        <li><i className="fa feature-icon fa-check-circle"></i>Internet without borders.</li>
                        <li><i className="fa feature-icon fa-check-circle"></i>Supercharged VPN</li>
                        <li><i className="fa feature-icon fa-check-circle"></i>No specific time limits.</li>
                    </ul>
                
                </div>
            </div>
        </div>
    )
};

export default Features;