import React from "react";
import "./Header.css";
import bg from "../../images/city-bg.png";
import car from "../../images/car1.png";

const Header = () => {
  return (
    <div className="app__header">
      <img src={bg} alt="background" />
      <div className="app__header_navbar"></div>
      <div className="app__header_content">
        <div className="app__header_content_text">
          <h5>For your next trip</h5>
          <h1>
            Don´t choose a car <br />
            Choose the car
          </h1>
          <span>
            Rent the car of your dreams. Unbeatable prices, flexible pick-up
            options and much more.
          </span>
        </div>
        <div className="app__header_content_image">
          <img src={car} alt="red car" />
        </div>
      </div>
    </div>
  );
};

export default Header;
