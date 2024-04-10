import { React, useState } from "react";
import "./fleet.css";
import mustang from "../../images/mustang.png";
import tesla from "../../images/tesla.png";
import audi from "../../images/audi.png";
import camaro from "../../images/camaro.png";
import madmax from "../../images/madmax.png";
import mercedes from "../../images/mercedes.png";

const Fleet = () => {
  const [carType, setCarType] = useState(0);

  const carArr = [
    {
      model: "Mustang",
      mark: "Ford",
      year: "2017",
      ac: "Yes",
      transmission: "Manual",
      fuel: " Gasoline",
      price: "175",
      img: mustang,
    },
    {
      model: "3",
      mark: "Tesla",
      year: "2021",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Electric",
      price: "98",
      img: tesla,
    },
    {
      model: "S3",
      mark: "Audi",
      year: "2019",
      ac: "Yes",
      transmission: "Manual",
      fuel: " Gasoline",
      price: "145",
      img: audi,
    },
    {
      model: "Camaro",
      mark: "Chevrolet",
      year: "2023",
      ac: "Yes",
      transmission: "Manual",
      fuel: "Disel",
      price: "87",
      img: camaro,
    },
    {
      model: "Interceptor",
      mark: "Pursuit Special",
      year: "1987",
      ac: "No",
      transmission: "Manual",
      fuel: "Gasoline",
      price: "280",
      img: madmax,
    },
    {
      model: "GLA",
      mark: "Mercedes",
      year: "2020",
      ac: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
      price: "94",
      img: mercedes,
    },
  ];
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
            style={
              carType === 0
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            onClick={() => setCarType(0)}
          >
            Ford Mustang
          </div>
          <div
            style={
              carType === 1
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            className="app__fleet_content_models_single"
            onClick={() => setCarType(1)}
          >
            Tesla Model 3
          </div>
          <div
            style={
              carType === 2
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            className="app__fleet_content_models_single"
            onClick={() => setCarType(2)}
          >
            Ford Mustang
          </div>
          <div
            style={
              carType === 3
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            className="app__fleet_content_models_single"
            onClick={() => setCarType(3)}
          >
            Ford Mustang
          </div>
          <div
            style={
              carType === 4
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            className="app__fleet_content_models_single"
            onClick={() => setCarType(4)}
          >
            Ford Mustang
          </div>
          <div
            style={
              carType === 5
                ? { background: "rgb(221, 3, 3)", color: "white" }
                : null
            }
            className="app__fleet_content_models_single"
            onClick={() => setCarType(5)}
          >
            Ford Mustang
          </div>
        </div>

        <div className="app__fleet_content_img">
          <img src={carArr[carType].img} alt="car" />
        </div>

        <div className="app__fleet_content_info">
          <div className="app__fleet_content_info_price">
            ${carArr[carType].price} rent per day
          </div>
          <div className="app__fleet_content_info_grid">
            <div className="app__fleet_content_info_first">Model</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].model}
            </div>
            <div className="app__fleet_content_info_first">Brand</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].mark}
            </div>
            <div className="app__fleet_content_info_first">Year</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].year}
            </div>
            <div className="app__fleet_content_info_first">AC</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].ac}
            </div>
            <div className="app__fleet_content_info_first">Transmission</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].transmission}
            </div>
            <div className="app__fleet_content_info_first">Fuel</div>
            <div className="app__fleet_content_info_second">
              {carArr[carType].fuel}
            </div>
          </div>
          <div className="app__fleet_content_info_button">
            <a href="#book">RESERVE NOW</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
