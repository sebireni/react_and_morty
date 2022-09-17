import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const NavButton = ({ buttonText, route }) => {
  return (
    <Link to={route}>
      <button>{buttonText}</button>
    </Link>
  );
};

export default NavButton;
