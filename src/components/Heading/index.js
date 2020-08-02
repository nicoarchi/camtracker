import React from "react";
import "./styles.css";
import Banner from "../../assets/images/logo.png";

const Heading = (props) => {
  return (
    <div className="head">
      <img src={Banner} className="bannerLogo" alt="Camtracker"></img>
    </div>
  );
};

export default Heading;
