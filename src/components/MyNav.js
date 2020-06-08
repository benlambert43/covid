import React, { useState } from "react";
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

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/covid-19/">Covid-19 US Data</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/covid-19/perstate">Per State Data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/covid-19/about">About</NavLink>
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
    </div>
  );
};

export default MyNav;
