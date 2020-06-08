import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Fade from "react-reveal/Fade";
import { Jumbotron, Button } from "reactstrap";

import "../../App.css";

function App() {
  const [historicalPositive, sethistoricalPositive] = useState([]);
  const [historicalDate, setHistoricalDate] = useState([]);
  // eslint-disable-next-line
  const [historical, setHistorical] = useState([]);
  const [positiveIncrease, setPositiveIncrease] = useState([]);
  const [death, setDeath] = useState([]);
  const [currentHospitalization, setCurrentHospitalization] = useState([]);
  const [inIcuCurrently, setInIcuCurrently] = useState([]);
  const [recovered, setRecovered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultHistorical = await axios(
        "https://covidtracking.com/api/v1/us/daily.json"
      );
      sethistoricalPositive(
        resultHistorical.data.map(({ positive }) => positive).reverse()
      );
      setDeath(resultHistorical.data.map(({ death }) => death).reverse());
      setHistoricalDate(
        resultHistorical.data
          .map(({ date }) => customDateFormatter(date))
          .reverse()
      );
      setPositiveIncrease(
        resultHistorical.data
          .map(({ positiveIncrease }) => positiveIncrease)
          .reverse()
      );
      setHistorical(
        resultHistorical.data.map(({ date, positive, positiveIncrease }) => {
          return { date, positive, positiveIncrease };
        })
      );
      setCurrentHospitalization(
        resultHistorical.data
          .map(({ hospitalizedCurrently }) => hospitalizedCurrently)
          .reverse()
      );
      setInIcuCurrently(
        resultHistorical.data
          .map(({ inIcuCurrently }) => inIcuCurrently)
          .reverse()
      );
      setRecovered(
        resultHistorical.data.map(({ recovered }) => recovered).reverse()
      );
    };
    fetchData();
  }, []);

  const totalPositiveData = {
    labels: historicalDate,
    datasets: [
      {
        label: "Total Positive Cases",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: historicalPositive,
      },
      {
        label: "Total Deaths",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#808080",
        borderColor: "#808080",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#f5f5f5",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f5f5f5",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: death,
      },
      {
        label: "Recovered",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#73ffb3",
        borderColor: "#73ffb3",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#73ffb3",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: recovered,
      },
    ],
  };

  const positiveIncreaseData = {
    labels: historicalDate,
    datasets: [
      {
        label: "Daily Positive Increase",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(100,180,180,0.4)",
        borderColor: "rgba(200,100,100,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#fffff",
        pointBackgroundColor: "#ffff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fffff",
        pointHoverBorderColor: "#fffff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: positiveIncrease,
      },
    ],
  };

  const currentHealthCareData = {
    labels: historicalDate,
    datasets: [
      {
        label: "Current Hospitalizations",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: currentHospitalization,
      },
      {
        label: "Current ICU Patients",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#808080",
        borderColor: "#808080",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#f5f5f5",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f5f5f5",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: inIcuCurrently,
      },
    ],
  };

  const customDateFormatter = (date) => {
    const dateString = date.toString();
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${month}/${day}/${year}`;
  };

  //console.log(historicalPositive);
  //console.log(historicalDate);
  //console.log(historical);
  //console.log(positiveIncrease);

  return (
    <div>
      <Fade>
        <Jumbotron>
          <h1 className="display-5">Covid-19 Data Visualization</h1>
          <p className="lead">
            On this page you will find data pertaining to cases of COVID-19
            across the US
          </p>
          <hr className="my-2" />
          <p>Individual US state data is also available</p>
          <p className="lead">
            <Button href="/covid/perstate" color="primary">
              Data by US State
            </Button>
          </p>
        </Jumbotron>
      </Fade>
      <div className="App">
        <Fade bottom cascade>
          <div>
            <div>
              <h3>Positive Cases</h3>
              <Line data={totalPositiveData} />
              <hr></hr>
              <br />
              <br />
            </div>

            <div>
              <h3>Daily Increase in Positive Cases</h3>
              <Line data={positiveIncreaseData} />
              <hr></hr>
              <br />
              <br />
            </div>

            <div>
              <h3>Current Health Care Statistics</h3>
              <Line data={currentHealthCareData} />
              <hr></hr>
              <br />
              <br />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
