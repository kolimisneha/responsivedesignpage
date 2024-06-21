import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import Home from './Components/Home.js';
import ServicesPage from './Components/ServicesPage.js';
import './App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';


function App() {
  const handleToggle = () => {
    document.getElementById('navbarNav').classList.toggle('active');
  };

  return (
    <Router>
      <div className="App">

        <Header handleToggle={handleToggle} />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
function Header({ handleToggle }) {
  const handleToggle = () => {
    document.getElementById('navbarNav').classList.toggle('active');
  };

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


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Ecommerce. All rights reserved.</p>
    </footer>
  );
}

export default App;
