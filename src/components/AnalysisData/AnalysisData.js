import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { Spinner, Row } from "reactstrap";
import { Card, CardText, Col } from "reactstrap";
import "../../App.css";

const AnalysisData = () => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://covidtracking.com/api/v1/us/daily.json"
      );
      setAll(result.data);
    };
    fetchData();
  }, []);

  const customDateFormatter = (date) => {
    const dateString = date.toString();
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${month}/${day}/${year}`;
  };

  const inFlight = () => {
    console.log(all, " in flight.");
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  };

  const notInFlight = () => {
    //console.log(all, " returned.");
    all.sort((a, b) => (a.positiveIncrease < b.positiveIncrease ? 1 : -1));

    return (
      <Fade bottom>
        {all.map((item) => (
          <Col xs="auto" key={item.date}>
            <div style={{ marginTop: "3%" }}>
              <Card body>
                <h2>
                  <b>{customDateFormatter(item.date)}</b>
                </h2>
                <br />
                Statistics for {customDateFormatter(item.date)}:
                <hr />
                <Row>
                  <Col xs="6">
                    <b>Increase in positive cases from yesterday: </b>
                  </Col>
                  <Col>
                    <b>{item.positiveIncrease}</b>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">
                    <CardText>Death: </CardText>
                  </Col>
                  <Col>{item.death}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Increase in deaths from yesterday:</Col>
                  <Col>{item.deathIncrease}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Hospitalized: </Col>
                  <Col>{item.hospitalized}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Currently Hospitalized:</Col>
                  <Col>{item.hospitalizedCurrently}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">
                    Increase in hospitalizations from yesterday:{" "}
                  </Col>
                  <Col>{item.hospitalizedIncrease}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Currently in ICU: </Col>
                  <Col>{item.inIcuCurrently}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">On ventilator currently: </Col>
                  <Col>{item.onVentilatorCurrently}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Positive Cases: </Col>
                  <Col>{item.positive}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Recovered: </Col>
                  <Col>{item.recovered}</Col>
                </Row>
                <hr />
                <Row>
                  <Col xs="6">Total: </Col>
                  <Col>{item.total}</Col>
                </Row>
                <hr />
              </Card>
            </div>
          </Col>
        ))}
      </Fade>
    );
  };

  return <div>{all[0] ? notInFlight() : inFlight()}</div>;
};

export default AnalysisData;
