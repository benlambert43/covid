import React from "react";
import "../App.css";
import { Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";
import AnalysisData from "./AnalysisData/AnalysisData";

const Analysis = () => {
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <Jumbotron>
          <h1 className="display-5"> Data Point Analysis </h1>
          <p className="lead">
            In development. This page will display news headlines for the
            current date as well as the headlines from 3 weeks ago (pertaining
            to Covid-19 policy actions)
          </p>
          <hr className="my-2" />
          <br />

          <div className="my-2"></div>
        </Jumbotron>
        <div>
          <AnalysisData />
        </div>
      </Fade>
    </div>
  );
};

export default Analysis;
