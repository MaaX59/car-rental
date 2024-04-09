import { React, useState } from "react";
import "./book.css";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import BookingMenu from "../../component/BookingMenu/BookingMenu";

const Book = () => {
  const [car, setCar] = useState("");
  const [locationStart, setLocationStart] = useState("");
  const [locationEnd, setLocationEnd] = useState("");
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [carData, setCarData] = useState(null);

  const [toggleMenu, setToggleMenu] = useState(false);

  const book = (e) => {
    e.preventDefault();
    const data = {
      car: car,
      locationStart: locationStart,
      locationEnd: locationEnd,
      dateStart: dateStart,
      dateEnd: dateEnd,
    };
    setCarData(data);
    setToggleMenu(true);
  };

  return (
    <div className="app__book">
      {toggleMenu && (
        <BookingMenu data={carData} setToggleMenu={setToggleMenu} />
      )}

      <div className="app__book_content">
        <h4>Book a car</h4>
        <form onSubmit={book}>
          <div className="form-input">
            <lable for="carType">
              {" "}
              <FaCar size={20} />
              Select Your Car
            </lable>
            <select
              id="carType"
              name="carType"
              value={car}
              onChange={(event) => {
                setCar(event.target.value);
              }}
            >
              <option>Choose you car</option>
              <option>Car 3131</option>
              <option>Ford Mustang</option>
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
            <select
              id="pickUpLocation"
              name="pickUpLocation"
              value={locationStart}
              onChange={(event) => {
                setLocationStart(event.target.value);
              }}
            >
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
            <select
              id="dropOfLocation"
              name="dropOfLocation"
              value={locationEnd}
              onChange={(event) => {
                setLocationEnd(event.target.value);
              }}
            >
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
            <input
              id="pickUpDate"
              name="pickUpDate"
              type="Date"
              value={dateStart}
              onChange={(event) => {
                setDateStart(event.target.value);
              }}
            ></input>
          </div>
          <div className="form-input">
            <lable for="dropOffDate">
              <BsCalendarDate />
              Drop-off
            </lable>
            <input
              id="dropOffDate"
              name="dropOffDate"
              type="Date"
              value={dateEnd}
              onChange={(event) => {
                setDateEnd(event.target.value);
              }}
            ></input>
          </div>
          <input className="submit-book" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Book;
