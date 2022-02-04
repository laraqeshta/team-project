import React from "react";
import iconVectors from "../../assets/iconsVectors.png";
import Insta from "../../assets/Insta.png";
import twitter from "../../assets/twitter.png";
import facbook from "../../assets/facbook.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="fisrt-div">
          <div className="imag-logo">
            <img src={iconVectors} className="logo" alt="icon" />
            <h4 className="header">LaslesVPN</h4>
          </div>
          <span className="lasles">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </span>
          <div className="social-media">
            <img src={Insta} alt="Insta" />
            <img src={twitter} alt="twitter" />
            <img src={facbook} alt="facbook" />
          </div>
          <span className="copy-write">©2020LaslesVPN</span>
        </div>

        <div className="list-div">
          <div className="first-list">
            <h3>Product</h3>
          </div>
          <div className="list">
            <li>Download </li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </div>

          <div className="first-list">
            <h3>Engage</h3>
          </div>
          <div className="list">
            <li>LaslesVPN ?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </div>

          <div className="first-list">
            <h3>Engage</h3>
          </div>
          <div className="list">
            <li>Affiliate</li>
            <li>Become Partner</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
