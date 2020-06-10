import React from "react";
import "../App.css";
import { Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";
const Upcoming = () => {
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <Jumbotron>
          <h1 className="display-5">Upcoming Features</h1>
          <p className="lead">Planned additions to the site.</p>
          <hr className="my-2" />
          <br />

          <div className="my-2">
            <ol>
              <li>
                Creating a matrix of COVID-19 related headlines for public
                policy, compared against the rate of increasing cases (for the
                current week as well as the next week), with the goal of
                estimating how certain public policies affect the spread of
                COVID-19
              </li>
            </ol>
          </div>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default Upcoming;
