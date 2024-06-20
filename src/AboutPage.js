import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">About Ecommerce</h2>

          <p>Welcome to Ecommerce, your one-stop shop for the latest mobile phones and accessories. We specialize in providing high-quality products at competitive prices, backed by exceptional customer service.</p>

          <h4 className="mt-5">Our Mission</h4>
          <p> our mission is to satify comtomers support.</p>

          <h4 className="mt-5">Our Products</h4>
          <p>We offer a wide range of mobile phones from leading brands,Whether you're looking for cutting-edge technology or budget-friendly options, we have something to suit every need.</p>

          <h4 className="mt-5">Customer Satisfaction Guaranteed</h4>
          <p>We are committed to ensuring your satisfaction with every purchase. Our friendly support team is available to assist you with any questions or concerns you may have.</p>


          <p className="text-center mt-5">Thank you for choosing Us,for all your mobile phone needs.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
