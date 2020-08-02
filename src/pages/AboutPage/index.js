import React from "react";
import "./styles.css";
import Heading from "../../components/Heading";
import About from "../../components/About";

const AboutPage = (props) => {
  return (
    <div className="container">
      <Heading />
      <About />
    </div>
  );
};

export default AboutPage;
