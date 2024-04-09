import { React, useState } from "react";
import "./book.css";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";

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
            <select id="carType" name="carType">
              <option>Choose you car</option>
              <option>Car 1</option>
              <option>Car 2</option>
              <option>Car 3</option>
              <option>Car 4</option>
            </select>
          </div>
          <div className="form-input">
            <lable for="pickUpLocation">
              {" "}
              <FaLocationDot />
              Pick-up
            </lable>
            <select id="pickUpLocation" name="pickUpLocation">
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
            <lable for="dropOfLocation">
              <FaLocationDot />
              Drop-off
            </lable>
            <select id="dropOfLocation" name="dropOfLocation">
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
            <lable for="pickUpDate">
              <BsCalendarDate />
              Pick-up
            </lable>
            <input id="pickUpDate" name="pickUpDate" type="Date"></input>
          </div>
          <div className="form-input">
            <lable for="dropOfDate">
              <BsCalendarDate />
              Drop-off
            </lable>
            <input id="dropOfDate" name="dropOfDate" type="Date"></input>
          </div>
          <input className="submit-book" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Book;
