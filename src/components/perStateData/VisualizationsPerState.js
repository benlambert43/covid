import React from "react";
import Fade from "react-reveal/Fade";
import Graphs from "./Graphs";

const VisualizationsPerState = (props) => {
  console.log(props);
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <h1>{props.state}</h1>
        <Graphs state={props.state} />
      </Fade>
    </div>
  );
};

export default VisualizationsPerState;
