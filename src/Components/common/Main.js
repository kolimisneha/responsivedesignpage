import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


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
                <h5 className="card-title">Oppo</h5>
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
                <h5 className="card-title">Android</h5>
                <p className="card-text">25,000</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  export default Main;