import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const NavButton = ({ buttonText, route }) => {
  return (
    <Link to={route}>
      <button>{buttonText}</button>
    </Link>
  );
};

export default NavButton;
