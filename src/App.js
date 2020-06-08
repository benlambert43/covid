import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem,
  NavbarText,
} from "reactstrap";
import About from "./components/About";
import PerState from "./components/PerState";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <Navbar color="light" light expand="md">
        <Link to="/covid/" className="navbar-brand">
          Covid-19
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
              <NavLink to="/covid/about">About</NavLink>
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
          <NavbarText>Information</NavbarText>
        </Collapse>
      </Navbar>
      <Route path="/covid/perstate" component={PerState} />
      <Route path="/covid/about" component={About} />
      <Route path="/covid/" component={Home} />
    </Router>
  );
}

export default App;
