import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/allCharacters'>All Characters</Link>
        </li>
        <li>
          <Link to='/allLocations'>All Locations</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
