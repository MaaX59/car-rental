import React from "react";
import "./footer.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_section">
        <h2>Dream Rental</h2>
        <span>
          {" "}
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </span>
        <h5>
          <FaPhoneVolume /> +33 19-212-452{" "}
        </h5>
        <h5>
          <GoMail /> contact@dreamrental.com
        </h5>
      </div>
      <div className="app__footer_section">
        <h2>Company</h2>
        <span>Paris</span>
        <span>London</span>
        <span>Lyon</span>
        <span>Brussels</span>
        <span>Rotterdam</span>
        <span>Berlin</span>
      </div>
      <div className="app__footer_section">
        <h2>Working hours</h2>
        <span>Mon - Fri: 09:00 - 21:00</span>
        <span>Sat: 10:00 - 20:00</span>
        <span>sun: 11:00 - 16:00</span>
      </div>
      <div className="app__footer_section">
        <h2>Subscription</h2>
        <span>Subscribe your Email address for latest news & updates.</span>
        <input
          className="app__footer_input"
          placeholder="Enter your email..."
        ></input>
        <h3>Subscribe</h3>
      </div>
    </div>
  );
};

export default Footer;
