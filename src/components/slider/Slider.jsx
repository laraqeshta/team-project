import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import Vector from "../../assets/Vector.png";
import Ellipse175 from "../../assets/Ellipse175.png";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import "./Slider.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 2,
      className: "slides",
    };

    const card = [1, 2, 3, 4, 5];
    return (
      <div className="container">
        <Slider {...settings}>
          {card.map((index) => {
            return (
              <div>
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
            );
          })}
        </Slider>
        <div className="line">
        <hr></hr>
        </div>
      </div>
    );
  }
}
