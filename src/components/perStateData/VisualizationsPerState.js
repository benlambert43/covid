import React from "react";
import Fade from "react-reveal/Fade";
import Graphs from "./Graphs";

const VisualizationsPerState = (props) => {
  console.log(props);
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <div
          className="App"
          style={{ marginTop: "5%", marginRight: "5%", marginLeft: "5%" }}
        >
          <h1>
            Data By State: <b>{props.state}</b>
          </h1>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Graphs state={props.state} />
        </div>
      </Fade>
    </div>
  );
};

export default VisualizationsPerState;
