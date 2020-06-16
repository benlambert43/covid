import React from "react";
import "../App.css";
import { Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";

const Analysis = () => {
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <Jumbotron>
          <h1 className="display-5"> Data Point Analysis </h1>
          <p className="lead"></p>
          <hr className="my-2" />
          <br />

          <div className="my-2"></div>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default Analysis;
