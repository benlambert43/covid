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

  return <div></div>;
};

export default MyNav;
