 import './App.css';
 

import Card from "./components/card/Card";
import Footer from "./components/Footer/Footer";
import PreFooter from "./components/Prefotter/PreFooter";
import TrustedText from "./components/trusted-text/TrustedText";
import Slider from './components/slider/Slider'
import Ellipse175 from "./assets/Ellipse175.png";
import Vector from "./assets/Vector.png";

function App() {
  return (
    <div className="app">
      {/* <TrustedText />
      <AllCard />
      <Arrow />
     <PreFooter />
    <Footer />

    <div className="slider-flex">
      <Card
        src={Ellipse175}
        header={"Viezh Robert"}
        title={"Warsaw, Poland"}
        number={4.5}
        src={Vector}
        description={
          "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        }
      />

      <Card
        src={Ellipse175}
        header={"Viezh Robert"}
        title={"Warsaw, Poland"}
        number={4.5}
        src={Vector}
        description={
          "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        }
      />

      <Card
        src={Ellipse175}
        header={"Viezh Robert"}
        title={"Warsaw, Poland"}
        number={4.5}
        src={Vector}
        description={
          "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        }
      />
      </div>
      */}
      <Slider />
    </div>
  );
}

export default App;
