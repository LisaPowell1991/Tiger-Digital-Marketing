import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const HomePage = ({ shoes }) => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="jumbotron text-center bg-dark text-white">


      </div>
      <h1 className="text-center">Welcome to The Shoe Spot</h1>
      <p className="text-center">Your one-stop shop for the best Shoes.</p>
      <a className="btn shop-now-btn btn-primary btn-large" href="/products" role="button">
        Shop Now
      </a>

      {/* Featured Products Section */}
      <div className="container mt-5">
        <h2 className="featured-product text-center mb-4">Featured Products</h2>
        <div className="row">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={shoe.photoUrl}
                  className="card-img-top"
                  alt={shoe.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{shoe.name}</h5>
                  <p className="card-text">${shoe.price.toFixed(2)}</p>
                  <a
                    href={`/product/${shoe.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default HomePage;