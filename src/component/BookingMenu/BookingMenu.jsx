import React from "react";
import "./BookingMenu.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";

const BookingMenu = (props) => {
  // console.log(" booking menu info", props.data);
  return (
    <>
      <div
        className="app__bookingMenu"
        onClick={() => props.setToggleMenu(false)}
      ></div>
      <div className="app__bookingMenu_content">
        <div className="app__bookingMenu_content_topbar">
          <span>Complete Reservation</span>
          <div onClick={() => props.setToggleMenu(false)}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="app__bookingMenu_content_carInfo">
          <div className="app__bookingMenu_content_carInfo_details">
            <div className="app__bookingMenu_content_carInfo_details_title">
              <h2>Location & Date</h2>
            </div>
            <div className="app__bookingMenu_content_carInfo_details_info">
              <div className="app__bookingMenu_content_carInfo_details_locationStart">
                <h4>
                  <FaLocationDot /> Pick Up Location
                </h4>
                <span>{props.data.locationStart}</span>
              </div>

              <div className="app__bookingMenu_content_carInfo_details_locationEnd">
                <h4>
                  <FaLocationDot /> Drop Off Location
                </h4>
                <span>{props.data.locationEnd}</span>
              </div>
              <div className="app__bookingMenu_content_carInfo_details_dateStart">
                <h4>
                  <BsCalendarDate /> Pick Up Date
                </h4>{" "}
                <span>{props.data.dateStart}</span>
              </div>

              <div className="app__bookingMenu_content_carInfo_details_dateEnd">
                {" "}
                <h4>
                  <BsCalendarDate /> Drop Off Date
                </h4>
                <span>{props.data.dateEnd}</span>
              </div>
            </div>
          </div>
          <div className="app__bookingMenu_content_carInfo_carImage">
            <div className="app__bookingMenu_content_carInfo_carImage_title">
              <h2>
                {" "}
                <FaCar /> Car -
              </h2>
              <span> {props.data.car}</span>
            </div>

            <img src={props.data.img} alt={props.data.car} />
          </div>
        </div>
        <div className="app__bookingMenu_content_carInfo_userInfo">
          <div className="app__bookingMenu_content_carInfo_userInfo_title">
            {" "}
            <h2>Personal Information</h2>
          </div>
          <form>
            <div className="form-input-bookingmenu">
              <lable for="fName" type="text">
                First Name
              </lable>
              <input
                id="fName"
                placeholder="  Enter your first name"
                className="book-input"
              ></input>
            </div>
            <div className="form-input-bookingmenu">
              <lable for="lName" type="text">
                Last Name
              </lable>
              <input
                id="lName"
                placeholder="  Enter your last name"
                className="book-input"
              ></input>
            </div>
            <div className="form-input-bookingmenu">
              <lable for="pNum">Phone Number</lable>
              <input
                className="book-input"
                id="pNum"
                type="tel"
                placeholder="  Enter your phonenumber"
              ></input>
            </div>
            <div className="form-input-bookingmenu">
              <lable for="email">Email</lable>
              <input
                className="book-input"
                id="email"
                type="email"
                placeholder="  Enter your email address"
              ></input>
            </div>
          </form>
        </div>
        <div className="app__bookingMenu_content_carInfo_submit">
          <button
            onClick={() =>
              props.setConfirmation(true) & props.setToggleMenu(false)
            }
          >
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingMenu;
