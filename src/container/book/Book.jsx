import React from "react";
import "./book.css";

const Book = () => {
  return (
    <div className="app__book">
      <div className="app__book_content">
        <h4>Book a car</h4>
        <form>
          <div className="form-input">
            <lable for="carType">Select Your Car</lable>
            <select id="carType">
              <option>Car 1</option>
              <option>Car 2</option>
              <option>Car 3</option>
              <option>Car 4</option>
            </select>
          </div>
          <div className="form-input">
            <lable for="pickUpLocation">Pick-up</lable>
            <input id="pickUpLocation"></input>
          </div>
          <div className="form-input">
            <lable for="dropOfLocation">Drop-off</lable>
            <input id="dropOfLocation"></input>
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
