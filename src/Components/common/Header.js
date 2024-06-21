
import React from 'react';
import { Link } from 'react-router-dom';
import App from '../../App';

function Header({ handleToggle }) {
    return (
      <header className="header">
        <nav className="navbar">
          <Link className="brand" to="/">Ecommerce</Link>
          <button className="toggler" type="button" onClick={handleToggle}>
            <span className="icon"></span>
          </button>
          <div className="colla" id="navbarNav">
            <ul className="navbarauto">
              <li className="navitem">
                <Link className="navlink" to="/">Home</Link>
              </li>
              <li className="navitem">
                <Link className="navlink" to="/about">About</Link>
              </li>
              <li className="navitem">
                <Link className="navlink" to="/services">Services</Link>
              </li>
              <li className="navitem">
                <Link className="navlink" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  export default Header;