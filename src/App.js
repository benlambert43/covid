import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,

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
    <BrowserRouter>
      <div>
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
                <Link to="/covid/about" className="nav-link">
                  About
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

            <NavbarText>Information</NavbarText>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/covid/perstate" exact component={PerState} />
          <Route path="/covid/about" exact component={About} />
          <Route path="/covid/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
