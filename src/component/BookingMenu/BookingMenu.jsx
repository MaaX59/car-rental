import React from "react";
import "./BookingMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const BookingMenu = (props) => {
  console.log(" booking menu info", props.data);
  return (
    <>
      {/* <span>{props.data.car}</span>
        <span>{props.data.locationStart}</span>
        <span>{props.data.locationEnd}</span>
        <span>{props.data.dateStart}</span>
        <span>{props.data.dateEnd}</span> */}
      <div
        className="app__bookingMenu"
        onClick={() => props.setToggleMenu(false)}
      ></div>
      <div
        className="app__bookingMenu_content"
        onClick={() => props.setToggleMenu(true)}
      >
        <div className="app__bookingMenu_content_topbar">
          <span>Complete Reservation</span>
          <button onClick={() => props.setToggleMenu(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="app__bookingMenu_content_carInfo"></div>
      </div>
    </>
  );
};

export default BookingMenu;
