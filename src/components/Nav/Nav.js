import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Nav() {
  /* const style = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    fontFamily: 'Inter, sans-serif',
    paddingTop: '2vh',
    fontWeight: 'bold',
  }; */
  return (
    <nav>
      <ul className="style">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/ourwork">
          <li>Our Work</li>
        </Link>
        <Link to="/how-to-use-the-platform">
          <li>How To Use The Platform</li>
        </Link>
        <Link to="/bibligrapic-content">
          <li>Bibliographic Content</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
