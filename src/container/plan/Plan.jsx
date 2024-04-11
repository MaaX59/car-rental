import React from "react";
import "./plan.css";
import SelectCar from "../../images/SelectCar.png";
import Operator from "../../images/operator.png";
import Drive from "../../images/drive.png";

const Plan = () => {
  return (
    <div className="app__plan">
      <div className="app__plan_title">
        <h2>Plan your trip now</h2>
        <h1>Quick & easy car rental</h1>
      </div>
      <div className="app__plan_content">
        <div className="app__plan_content_section">
          <img src={SelectCar} alt="select car" />
          <h2>Select Car</h2>
          <span>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </span>
        </div>
        <div className="app__plan_content_section">
          <img src={Operator} alt="contact operator" />
          <h2>Contact Operator</h2>
          <span>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </span>
        </div>
        <div className="app__plan_content_section">
          <img src={Drive} alt="lets drive" />
          <h2>Let's Drive</h2>
          <span>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </span>
        </div>
      </div>
    </div>
  );
};

export default Plan;
