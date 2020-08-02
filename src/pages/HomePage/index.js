import React from "react";
import "./styles.css";
import Heading from "../../components/Heading";
import MainComponent from "../../components/MainComponent";

const HomePage = (props) => {
  return (
    <div className="container">
      <Heading />
      <MainComponent />
    </div>
  );
};

export default HomePage;
