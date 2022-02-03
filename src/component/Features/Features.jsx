import react from "react";
import feature from '../assets/features.png';
import vector from '../assets/Vector.png';

//style
import './Features.css';

const Features = () =>{
    return(
        <div className="features">
           <img src={feature} className="image-features" />

           <div className="side">
               <h1>We Provide Many Features You Can Use</h1>
               <p>
               You can explore the features that we provide with fun and have their own functions each feature.
               </p>

               <ul >
                   <li>
                     <img src={vector} className="vector"/>
                      <span>Powerfull online protection.</span>
                    </li>

                    <li>
                     <img src={vector} className="vector"/>
                      <span>Internet without borders.</span>
                    </li>

                    <li>
                     <img src={vector} className="vector"/>
                      <span>Supercharged VPN</span>
                    </li>

                    <li>
                     <img src={vector} className="vector"/>
                      <span>No specific time limits.</span>
                    </li>


               </ul>
           </div>

        </div>
    );
}

export default Features;