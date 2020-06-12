import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Graphs from "./Graphs";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const VisualizationsPerState = (props) => {
  const [stateMetaData, setStateMetaData] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const currentState = props.state.toLowerCase();
      const stateAPI = await axios(
        `https://covidtracking.com/api/v1/states/${currentState}/info.json`
      );
      const currentAPI = await axios(
        `https://covidtracking.com/api/v1/states/${currentState}/current.json`
      );
      setStateMetaData(stateAPI);
      setCurrent(currentAPI);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <div style={{ marginTop: "5%", marginRight: "5%", marginLeft: "5%" }}>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                <b>{stateMetaData.data ? stateMetaData.data.name : <b></b>}</b>
              </ListGroupItemHeading>
              <ListGroupItemText>
                Last updated:{" "}
                {current.data ? current.data.lastUpdateEt : <b></b>}
                <br />
                Data quality grade:{" "}
                {current.data ? current.data.dataQualityGrade : <b></b>}
                <br />
                Twitter handle:{" "}
                {stateMetaData.data ? stateMetaData.data.twitter : <b></b>}
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Overview</ListGroupItemHeading>
              {current.data ? (
                <ListGroupItemText>
                  Total Positive Cases: {current.data.positive} <br />
                  Total Hospitalized: {current.data.hospitalizedCumulative}{" "}
                  <br />
                  Total Deaths: {current.data.death} <br />
                  Currently Hospitalized: {
                    current.data.hospitalizedCurrently
                  }{" "}
                  <br />
                  New cases from yesterday: {current.data.positiveIncrease}
                  <br />
                </ListGroupItemText>
              ) : (
                <b></b>
              )}
            </ListGroupItem>

            {stateMetaData.data ? (
              stateMetaData.data.notes ? (
                <ListGroupItem>
                  <ListGroupItemHeading>Additional Notes</ListGroupItemHeading>
                  <ListGroupItemText>
                    {stateMetaData.data.notes}{" "}
                  </ListGroupItemText>
                </ListGroupItem>
              ) : (
                ""
              )
            ) : (
              <b></b>
            )}

            <ListGroupItem>
              <ListGroupItemText>
                {stateMetaData.data ? (
                  <a
                    href={stateMetaData.data.covid19Site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Data Source for {stateMetaData.data.name}
                  </a>
                ) : (
                  <b></b>
                )}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Graphs state={props.state} />
        </div>
      </Fade>
    </div>
  );
};

export default VisualizationsPerState;
