import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Nav() {
  return (
    <nav>
      {/*  <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label> */}
      <ul>
        <li>
          <Link to="/" className="#true">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="#true">
            Qui sommes-nous
          </Link>
        </li>
        <li>
          <Link to="/our-work" className="#true">
            Notre Travail
          </Link>
        </li>
        <li>
          <Link to="/how-to-use-the-platform">
            Comment Utiliser La Platforme
          </Link>
        </li>
        <li>
          <Link to="/bibliographic-content">Contenu Bibliographique</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
