import React from "react";
import "./book.css";
import { FaCar } from "react-icons/fa";

const Book = () => {
  return (
    <div className="app__book">
      <div className="app__book_content">
        <h4>Book a car</h4>
        <form>
          <div className="form-input">
            <lable for="carType">
              {" "}
              <FaCar size={20} />
              Select Your Car
            </lable>
            <select id="carType">
              <option>Choose you car</option>
              <option>Car 1</option>
              <option>Car 2</option>
              <option>Car 3</option>
              <option>Car 4</option>
            </select>
          </div>
          <div className="form-input">
            <lable for="pickUpLocation">Pick-up</lable>
            <select id="pickUpLocation">
              <option>Select Pick-Up Location</option>
              <option>London</option>
              <option>Berlin</option>
              <option>Rotterdam</option>
              <option>Paris</option>
              <option>Lyon</option>
              <option>Brussels</option>
            </select>
          </div>
          <div className="form-input">
            <lable for="dropOfLocation">Drop-off</lable>
            <select id="dropOfLocation">
              <option>Select Drop-Off Location</option>
              <option>London</option>
              <option>Berlin</option>
              <option>Rotterdam</option>
              <option>Paris</option>
              <option>Lyon</option>
              <option>Brussels</option>
            </select>
          </div>
          <div className="form-input">
            <lable for="pickUpDate">Pick-up</lable>
            <input id="pickUpDate" type="Date"></input>
          </div>
          <div className="form-input">
            <lable for="dropOfDate">Drop-off</lable>
            <input id="dropOfDate" type="Date"></input>
          </div>
          <span>Search</span>
        </form>
      </div>
    </div>
  );
};

export default Book;
