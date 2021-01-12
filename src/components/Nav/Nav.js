import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Nav() {
  const [toggle, setToggle] = useState(false);
  const [toggleType, setToggleType] = useState('fas fa-bars');
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    if (width < 600) {
      setToggle(true);
    }
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [width]);
  const changeToggle = () => {
    if (!toggle) {
      document.getElementById('ul').style.display = 'inline-block';
      setToggle(true);
      setToggleType('fas fa-times');
    } else {
      document.getElementById('ul').style.display = 'none';
      setToggle(false);
      setToggleType('fas fa-bars');
    }
  };
  return (
    <>
      <button className="icon" onClick={changeToggle}>
        <i className={toggleType}></i>
      </button>
      <nav id="ul">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about-us">Qui sommes-nous</Link>
          </li>
          <li>
            <Link to="/our-work">Notre Travail</Link>
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
    </>
  );
}

export default Nav;
