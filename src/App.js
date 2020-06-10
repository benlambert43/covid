import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import About from "./components/About";
import PerState from "./components/PerState";
import Home from "./components/Home";
import "./App.css";
import Upcoming from "./components/Upcoming";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className="navbar-brand">
            COVID-19 US Data
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/covid/perstate" className="nav-link">
                  Per State Data
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/covid/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/covid/upcoming" className="nav-link">
                  Upcoming Features
                </Link>
              </NavItem>
              {/*
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More Information
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
             */}
            </Nav>

            {/*
            <NavbarText>Information</NavbarText>
            */}
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/covid/perstate" exact component={PerState} />
          <Route path="/covid/about" exact component={About} />
          <Route path="/covid/upcoming" exact component={Upcoming} />

          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
