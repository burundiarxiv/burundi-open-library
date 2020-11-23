import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Nav() {
  return (
    <nav>
      <ul className="style">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/about">
          <li>A Propos</li>
        </Link>
        <Link to="/ourwork">
          <li>Notre Travail</li>
        </Link>
        <Link to="/how-to-use-the-platform">
          <li>Comment Utiliser La Platforme</li>
        </Link>
        <Link to="/bibligrapic-content">
          <li>Contenu Bibliographique</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
