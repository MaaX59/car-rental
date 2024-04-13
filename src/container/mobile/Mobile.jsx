import React from "react";
import "./Mobile.css";
import mobile from "../../images/mobile-bg.png";
import google from "../../images/google.png";
import appstore from "../../images/appstore.png";

const Mobile = () => {
  return (
    <div className="app__mobile">
      <img className="app__mobile_bg" src={mobile} alt="mobile bg" />
      <div className="app__mobile_content">
        <h2>Download our app to stay up to date!</h2>
        <span>
          Looking to choose your own vehicle upon arrival? How about skip the
          counter at pickup? Do all of this and more right from your phone using
          the Drean Rental App! Renting a car has never been easier.
        </span>
        <div className="app__mobile_content_buttons">
          <img
            className="app__mobile_content_buttons_first"
            src={google}
            alt="google play button"
          />{" "}
          <img src={appstore} alt="app store button" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
