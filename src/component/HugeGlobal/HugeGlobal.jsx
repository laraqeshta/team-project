import react from "react";
import huge from '../assets/HugeGlobal.png';
import sponsored from '../assets/Sponsored.png';

//style
import './HugeGlobal.css';

const HugeGlobal = () =>{
    return(
        <div>
            <h1>Huge Global Network of Fast VPN</h1>
            <p>
            See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>

            <img src={huge} className="image-map"/>

            <img src={sponsored} className="brand" />
        </div>
    );
}

export default HugeGlobal;