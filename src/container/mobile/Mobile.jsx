import React from "react";
import "./Mobile.css";
import mobile from "../../images/mobile-bg.png";

const Mobile = () => {
  return (
    <div className="app__mobile">
      <img src={mobile} alt="mobile bg" />
      <div className="app__mobile_content"></div>
    </div>
  );
};

export default Mobile;
