import { React, useState } from "react";
import "./fleet.css";
import mustang from "../../images/mustang.png";

const Fleet = () => {
  const [carType, setCarType] = useState(1);
  return (
    <div className="app__fleet">
      <div className="app__fleet_title">
        <h4>Vehicle Models</h4>
        <h2>Our rental fleet</h2>
        <span>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </span>
      </div>

      <div className="app__fleet_content">
        <div className="app__fleet_content_models">
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(1)}
          >
            <span>Ford Mustang</span>
          </div>
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(2)}
          ></div>
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(3)}
          ></div>
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(4)}
          ></div>
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(5)}
          ></div>
          <div
            className="app__fleet_content_models_single"
            onClick={() => setCarType(6)}
          ></div>
        </div>
        <div className="app__fleet_content_img">
          <img src={mustang} alt="car" />
        </div>
        <div className="app__fleet_content_info"></div>
      </div>
    </div>
  );
};

export default Fleet;
