import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import About from "./components/About";
import PerState from "./components/PerState";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <MyNav />
      <Route path="/covid-19/perstate" component={PerState} />
      <Route path="/covid-19/about" component={About} />
      <Route path="/covid-19/" component={Home} />
    </Router>
  );
}

export default App;
