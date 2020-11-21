import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const style = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    color: '#0070f3',
    paddingTop: '2vh',
  };
  return (
    <nav>
      <ul style={style}>
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
          <li>Bibligrapic Content</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
