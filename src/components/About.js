import React from "react";
import "../App.css";
import { Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <Jumbotron>
          <h1 className="display-5">About</h1>
          <p className="lead">
            Open Source Project dedicated to graphing Covid-19
          </p>
          <hr className="my-2" />
          <br />
          github: https://github.com/benlambert43/covid
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default About;
