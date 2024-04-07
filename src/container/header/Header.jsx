import React from "react";
import "./Header.css";
import bg from "../../images/city-bg.png";
import car from "../../images/car1.png";
import { FaCheck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="app__header">
      <img src={bg} alt="background" />
      <div className="app__header_navbar"></div>
      <div className="app__header_content">
        <div className="app__header_content_text">
          <h5>For your next trip</h5>
          <h1>
            Don´t choose a car, <br />
            Choose <span>the</span> car
          </h1>
          <h6>
            {/* Rent the car of your dreams.*/} Unbeatable prices, flexible
            pick-up options and much more.
          </h6>
          <div className="app__header_content_text_buttons">
            <a href="#awdd" className="button-book">
              Book Now <FaCheck />
            </a>
            <a className="button-learn" href="#awdd">
              Learn More <FaChevronRight />
            </a>
          </div>
        </div>
        <div className="app__header_content_image">
          <img className="header_img" src={car} alt="red car" />
        </div>
      </div>
    </div>
  );
};

export default Header;
