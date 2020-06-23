import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import {
  Spinner,
  Row,
  Button,
  CardTitle,
  CardGroup,
  CardImg,
  CardBody,
  CardDeck,
  CardColumns,
  Container,
} from "reactstrap";
import { Card, CardText, Col } from "reactstrap";
import "../../App.css";
import NewsHeadline from "./NewsHeadline";
import "./img.css";

const AnalysisData = () => {
  const [all, setAll] = useState([]);
  const [renderStory, setRenderStory] = useState();
  const [articleInFlight, setArticleInFlight] = useState(false);
  const [fetchStory, setFetchStory] = useState();

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

  const dateClickHandle = async (date, index) => {
    setArticleInFlight(true);
    setRenderStory(index);
    console.log(date);
    console.log(index);
    dateClickHandleHelper(date);
  };

  const dateClickHandleHelper = async (date) => {
    const result = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Coronavirus (2019-nCoV)&q=United States Politics and Government&facet_field=day_of_week&facet=true&begin_date=${date}&end_date=${date}&api-key=AAvZ65RQie8WTe3U2W097GZ6bAlelvN4`
    );
    setFetchStory(result.data);
    setArticleInFlight(false);
  };

  const inFlight = () => {
    //console.log(all, " in flight.");
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  };

  const notInFlight = () => {
    all.sort((a, b) => (a.positiveIncrease < b.positiveIncrease ? 1 : -1));

    //console.log(all, " returned.");

    return (
      <div>
        {all.map((item, index) => (
          <Col xs="auto" key={item.date}>
            <div style={{ marginTop: "3%" }}>
              <Card body>
                <div>
                  <h2>
                    <b>
                      {index + 1}) {customDateFormatter(item.date)}
                    </b>
                  </h2>
                  <br />
                  {
                    //<NewsHeadline date={item.date} />
                  }
                  <Button
                    color="primary"
                    onClick={() => {
                      dateClickHandle(item.date, index + 1);
                    }}
                  >
                    See Covid-19 News for this Date
                  </Button>
                  {renderStory === index + 1 &&
                  fetchStory &&
                  !articleInFlight ? (
                    <div>
                      <br />
                      <br />
                      <div>
                        News Headlines for {customDateFormatter(item.date)}:
                        <hr></hr>
                        <br />
                        <br />
                        <Card body>
                          <Container fluid>
                            <Row>
                              {fetchStory.response.docs.map((article) => (
                                <Card
                                  key={article.headline.main}
                                  style={{
                                    maxHeight: "30rem",
                                    maxWidth: "20rem",
                                    margin: "1%",
                                  }}
                                >
                                  {article.multimedia[0] ? (
                                    <CardImg
                                      alt="Card image cap"
                                      top
                                      width="100%"
                                      src={`https://nyt.com/${article.multimedia[0].url}`}
                                      style={{
                                        maxHeight: "12rem",
                                        maxWidth: "20rem",
                                      }}
                                    />
                                  ) : (
                                    <div className="App">
                                      <br></br>
                                      <p>no image found.</p>
                                      <br />
                                    </div>
                                  )}

                                  <CardBody>
                                    <CardTitle>
                                      <a
                                        href={article.web_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {article.headline.main}
                                      </a>
                                    </CardTitle>
                                  </CardBody>
                                </Card>
                              ))}
                            </Row>
                          </Container>
                        </Card>
                      </div>
                      <br />
                      <br />
                      <br />
                    </div>
                  ) : renderStory === index + 1 && articleInFlight ? (
                    <div>
                      <br />
                      <br />
                      <Spinner />
                      <br />
                      <br />
                    </div>
                  ) : (
                    <div></div>
                  )}{" "}
                </div>
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
      </div>
    );
  };

  return <div>{all[0] ? notInFlight() : inFlight()}</div>;
};

export default AnalysisData;
