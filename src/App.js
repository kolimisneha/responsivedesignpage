import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import Home from './Components/Home.js';
import ServicesPage from './Components/ServicesPage.js';
import Footer from './Components/Footer.js';
import Header from './Components/common/Header';


function App() {
  const handleToggle = () => {
    document.getElementById('navbarNav').classList.toggle('active');
  };

  return (
    <Router>
      <div className="App">
          <Header/>
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
export default App;