import React from "react";
import box from '../assets/box.png';
import vector from '../assets/Vector.png';

//style 
import './ChooseYourPlan.css';

const ChooseYourPlan = () => {

    return(
        <div className="container">
            <h1>Choose Your Plan</h1>
            <p>
                Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>

            <div className="rectangle">
                <div className="plan">
                    <img src={box} className="box"/>
                    <h3>Free Plan</h3>

                    <ul>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Unlimited Bandwitch</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Encrypted Connection</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">No Traffic Logs</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Works on All Devices</span> 
                        </li>
                    </ul>

                    <div className="plan-name">

                        <h2>Free</h2>
                        <button className="button">Select</button>
                        
                    </div>

                    
                </div>

                <div className="plan">
                    <img src={box} className="box"/>
                    <h3>Standard Plan</h3>

                    <ul>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Unlimited Bandwitch</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Encrypted Connection</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Yes Traffic Logs</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Works on All Devices</span> 
                        </li>

                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Connect Anyware</span> 
                        </li>
                        
                    </ul>
                    
                    <div className="plan-name">

                        <h2>$9 / mo</h2>
                        <button className="button">Select</button>

                    </div>
                   
                </div>

                <div className="plan">
                    <img src={box} className="box"/>
                    <h3>Premium Plan</h3>

                    <ul>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Unlimited Bandwitch</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Encrypted Connection</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Yes Traffic Logs</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Works on All Devices</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Connect Anyware</span> 
                        </li>
                        <li>
                            <img src={vector} className="vector"/>
                           <span className="list">Get New Features</span> 
                        </li>
                    </ul>
                    
                    <div className="plan-name">

                    <h2>$12 / mo</h2>
                    <button className="button">Select</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseYourPlan;