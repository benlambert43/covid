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

          <p className="my-2">
            Open Source Repository:{" "}
            <a
              href="https://github.com/benlambert43/covid"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/benlambert43/covid
            </a>
          </p>
          <p className="my-2">
            API Provided by{" "}
            <a
              href="https://covidtracking.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://covidtracking.com/api
            </a>
          </p>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default About;
