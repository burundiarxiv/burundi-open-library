import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Nav() {
  return (
    <div className="navbar">
      <div id="myLinks">
        <Link to="/">Accueil</Link>
        <Link to="/about-us">Qui sommes-nous</Link>
        <Link to="/our-work">Notre Travail</Link>
        <Link to="/how-to-use-the-platform">Comment Utiliser La Platforme</Link>
        <Link to="/bibliographic-content">Contenu Bibliographique</Link>
      </div>
      <button>
        <i className="fa fa-bars icon"></i>
      </button>
    </div>
  );
}

export default Nav;
