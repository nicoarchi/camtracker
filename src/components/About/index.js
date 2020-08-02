import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="container">
      <div className="textAbout1">Created by N. Architector</div>
      <div className="textAbout2">For any information contact me.</div>

      <div className="botones">
        <a
          href="https://www.linkedin.com/in/nicoarchi"
          className="botonAzul"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/nicoarchi"
          className="botonAzul"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <Link to="/" className="botonAmarillo">
          Back to App
        </Link>
      </div>
    </div>
  );
};

export default About;
