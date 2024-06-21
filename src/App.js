import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import './styles/App.css';
import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import Home from './Components/Home.js';
import ServicesPage from './Components/ServicesPage.js';
=======
import './App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
>>>>>>> ad170b158d1c33c8fbad924216caeada74121565

function App() {
  const handleToggle = () => {
    document.getElementById('navbarNav').classList.toggle('active');
  };

  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Header handleToggle={handleToggle} />
=======
        <Header />
>>>>>>> ad170b158d1c33c8fbad924216caeada74121565
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

<<<<<<< HEAD
function Header({ handleToggle }) {
=======
function Header() {
  const handleToggle = () => {
    document.getElementById('navbarNav').classList.toggle('active');
  };

>>>>>>> ad170b158d1c33c8fbad924216caeada74121565
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
<<<<<<< HEAD
              <Link className="navlink" to="/" onClick={handleToggle}>Home</Link>
            </li>
            <li className="navitem">
              <Link className="navlink" to="/about" onClick={handleToggle}>About</Link>
            </li>
            <li className="navitem">
              <Link className="navlink" to="/services" onClick={handleToggle}>Services</Link>
            </li>
            <li className="navitem">
              <Link className="navlink" to="/contact" onClick={handleToggle}>Contact</Link>
=======
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
>>>>>>> ad170b158d1c33c8fbad924216caeada74121565
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


<<<<<<< HEAD


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Ecommerce. All rights reserved.</p>
    </footer>
=======
function Home() {
  return (
    <Main />
  );
}



function ServicesPage() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <p>
      1. Free Shipping
Enjoy free shipping on all orders within the country. We ensure timely and safe delivery of your smartphones right to your doorstep.</p>

<p>
2. Secure Payment Options
We offer a variety of secure payment methods</p>
<p>
3. Warranty & Returns
All our smartphones come with a manufacturer's warranty. If you're not satisfied with your purchase, our easy return policy allows you to return or exchange your phone within 30 days.
</p>
<p>
4. Customer Support
Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues. Whether you need help choosing the right phone or tracking your order, we're here to help.
      </p>
      <p>
      5. Trade-In Program
Upgrade to a new phone easily with our trade-in program. Trade in your old device for credit towards a new purchase and save on your next phone.
</p><p>
6. Exclusive Deals & Discounts
Sign up for our newsletter to receive exclusive deals, discounts, and updates on the latest smartphone releases and special promotions.
</p>
<article>
<p>
7. Expert Reviews & Buying Guides
Access detailed expert reviews and comprehensive buying guides to help you make an informed decision on your next smartphone purchase.
</p>
</article>
    </div>
>>>>>>> ad170b158d1c33c8fbad924216caeada74121565
  );
}


function Main() {
  return (
    <main className="container">
      <div className="row">
        <h6>Welcome to our Ecommerce site! We specialize in offering top-quality 
          smartphones at unbeatable prices. Our mission is to provide our customers with the latest 
          models and best deals on popular brands like Apple, Samsung, Oppo, and more. With a focus on customer 
          satisfaction, we ensure a seamless shopping experience from browsing to delivery. Explore our wide selection 
          and find the perfect phone that suits your needs. Thank you for choosing us for your mobile needs!</h6>
        <div className="col">
          <div className="card">
            <img src="https://image.oppo.com/content/dam/oppo/product-asset-library/a/a54/a54-overview-5/v1/assets/phone-type-img-1920.png" alt="Product 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">oppo</h5>
              <p className="card-text">30,000</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg" alt="Product 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Apple</h5>
              <p className="card-text">1,50,000</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://i1.wp.com/thequill.in/wp-content/uploads/2018/05/PR-NEwswire-image.png?fit=3000%2C3000&ssl=1" alt="Product 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Anroid</h5>
              <p className="card-text">25,000</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
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
